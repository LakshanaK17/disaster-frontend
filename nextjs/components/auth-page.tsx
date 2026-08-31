"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GoogleIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { lovable } from "@/lib/lovable";
import { supabase } from "@/lib/supabase/client";

export function AuthPageContent() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) router.push("/try");
    });
    return () => sub.subscription.unsubscribe();
  }, [router]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setLoading(true);
    try {
      if (mode === "signup") {
        if (name.trim().length < 2) throw new Error("Please enter your full name.");
        if (password.length < 6) throw new Error("Password must be at least 6 characters.");
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            emailRedirectTo: window.location.origin,
            data: { full_name: name.trim(), phone: phone.trim() },
          },
        });
        if (error) throw error;
        if (!data.session) setNotice("Almost there — check your inbox to confirm your email address.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (error) throw error;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const google = async () => {
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      setError("Google sign-in failed. Please try again.");
      return;
    }
    if (result.redirected) return;
    router.push("/try");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold">
            <span className="w-8 h-8 rounded-lg gradient-leaf shadow-glow" /> TerraSight
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition">
            Back to site
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <h1 className="font-display text-4xl font-semibold">
            {mode === "login" ? "Welcome back." : "Create your account."}
          </h1>
          <p className="mt-3 text-muted-foreground">
            {mode === "login"
              ? "Sign in to open your damage-assessment workspace."
              : "Join response officers and analysts using explainable satellite intelligence."}
          </p>

          <div className="mt-8 rounded-3xl border border-border/60 bg-card p-7 shadow-soft">
            <form onSubmit={submit} className="space-y-4">
              {mode === "signup" && (
                <>
                  <Field label="Full name" value={name} onChange={setName} type="text" placeholder="Amara Silva" required maxLength={100} />
                  <Field label="Phone number" value={phone} onChange={setPhone} type="tel" placeholder="+94 71 234 5678" required maxLength={25} />
                </>
              )}
              <Field label="Email" value={email} onChange={setEmail} type="email" placeholder="you@agency.org" required maxLength={255} />
              <Field label="Password" value={password} onChange={setPassword} type="password" placeholder="••••••••" required maxLength={72} />

              {error && <p className="text-sm text-destructive">{error}</p>}
              {notice && <p className="text-sm text-[color:var(--leaf)]">{notice}</p>}

              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-full gradient-leaf text-primary-foreground py-6 font-medium shadow-glow hover:opacity-90 transition"
              >
                {loading ? "Please wait…" : mode === "login" ? "Log in" : "Sign up"}
              </Button>
            </form>

            <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={google}
              className="w-full rounded-full py-6 font-medium flex items-center justify-center gap-3 hover:bg-secondary/60 transition"
            >
              <GoogleIcon /> Continue with Google
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground text-center">
            {mode === "login" ? "New to TerraSight?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setMode(mode === "login" ? "signup" : "login");
                setError(null);
                setNotice(null);
              }}
              className="text-foreground font-medium underline underline-offset-4"
            >
              {mode === "login" ? "Create an account" : "Log in"}
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type,
  placeholder,
  required,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type: string;
  placeholder: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={label}>{label}</Label>
      <Input
        id={label}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className="rounded-xl border-border bg-background px-4 py-2.5 h-auto focus-visible:ring-[color:var(--leaf)]"
      />
    </div>
  );
}
