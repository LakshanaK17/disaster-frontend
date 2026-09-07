"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Spinner, UploadIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function TryPageContent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-display text-xl font-semibold">
            <span className="w-8 h-8 rounded-lg gradient-leaf shadow-glow" /> TerraSight
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition">
              Back to site
            </Link>
            <Link
              href="/auth"
              className="rounded-full bg-primary text-primary-foreground px-4 py-2 font-medium hover:opacity-90 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
      <Upload />
    </div>
  );
}

function Upload() {
  // State for preview URLs (to show the images immediately in the UI)
  const [pre, setPre] = useState<string | null>(null);
  const [post, setPost] = useState<string | null>(null);
  
  // State for actual File objects (to send to the FastAPI backend)
  const [preFile, setPreFile] = useState<File | null>(null);
  const [postFile, setPostFile] = useState<File | null>(null);
  
  // Status states
  const [analyzing, setAnalyzing] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // API Result state
  const [result, setResult] = useState<any>(null);

  const onFile = (setPreview: (v: string) => void, setFile: (f: File) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      setPreview(URL.createObjectURL(f));
      setFile(f);
      setDone(false);
      setError(null);
    }
  };

  const analyze = async () => {
    if (!preFile || !postFile) return;
    
    setAnalyzing(true);
    setDone(false);
    setError(null);

    // Build the multipart form data for FastAPI
    const formData = new FormData();
    formData.append("pre_image", preFile);
    formData.append("post_image", postFile);

    try {
      // Connect to the local FastAPI backend
      const res = await fetch("http://localhost:8000/assess", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.detail || `Server error: ${res.status}`);
      }

      const data = await res.json();
      setResult(data);
      setDone(true);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to analyze images.");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-70" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-[color:var(--leaf)]">Try it</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold">Upload a pair. See the damage.</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Drop in a pre- and post-disaster satellite image. TerraSight validates, pairs and normalises them, then
            runs classification, segmentation and Grad-CAM in one pass.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Dropzone 
            label="Pre-disaster image" 
            hint="Clear sky, same region" 
            preview={pre} 
            onChange={onFile(setPre, setPreFile)} 
            tone="leaf" 
          />
          <Dropzone 
            label="Post-disaster image" 
            hint="Same coordinates, after event" 
            preview={post} 
            onChange={onFile(setPost, setPostFile)} 
            tone="earth" 
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            onClick={analyze}
            disabled={!preFile || !postFile || analyzing}
            className="inline-flex items-center gap-2 rounded-full gradient-leaf text-primary-foreground px-6 py-3 h-auto font-medium shadow-glow disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition"
          >
            {analyzing ? (
              <>
                <Spinner /> Analysing imagery…
              </>
            ) : (
              "Run damage assessment"
            )}
          </Button>
          <button
            type="button"
            onClick={() => {
              setPre(null);
              setPreFile(null);
              setPost(null);
              setPostFile(null);
              setDone(false);
              setResult(null);
              setError(null);
            }}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="mt-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium">
            Error: {error}
          </div>
        )}

{done && result && (
          <div className="mt-10 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 w-full max-w-4xl mx-auto">
            
            {/* Header Section */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className={`px-3 py-1.5 rounded-full text-sm font-medium tracking-wide ${
                result.severity?.toLowerCase() === 'severe' || result.severity?.toLowerCase() === 'destroyed'
                  ? 'bg-red-50 text-red-600'
                  : 'bg-orange-50 text-orange-600'
              }`}>
                {result.severity || "Unknown"} damage detected
              </span>
              <span className="text-gray-600 text-sm">
                Confidence {result.confidence !== undefined ? (result.confidence * 100).toFixed(1) : "—"}% &middot; 4 layers fused
              </span>
            </div>

            {/* 2x2 Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              
              {/* Card 1: Area Damaged */}
              <div className="bg-[#F4F7F4] rounded-2xl p-6">
                <div className="text-5xl font-serif text-slate-900 mb-2">
                  {result.damaged_ratio !== undefined ? `${(result.damaged_ratio * 100).toFixed(0)}%` : "—"}
                </div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Area Damaged
                </div>
              </div>

              {/* Card 2: Affected Buildings */}
              <div className="bg-[#F4F7F4] rounded-2xl p-6">
                <div className="text-5xl font-serif text-emerald-700 mb-2">
                  {result.affected_buildings ?? "—"}
                </div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Affected Buildings
                </div>
              </div>

              {/* Card 3: Flooded Roads */}
              <div className="bg-[#F4F7F4] rounded-2xl p-6">
                <div className="text-5xl font-serif text-slate-900 mb-2">
                  {result.flooded_roads ?? "—"}
                </div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Flooded Roads
                </div>
              </div>

              {/* Card 4: Safe Zones */}
              <div className="bg-[#F4F7F4] rounded-2xl p-6">
                <div className="text-5xl font-serif text-emerald-700 mb-2">
                  {result.safe_zones ?? "—"}
                </div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                  Safe Zones
                </div>
              </div>

            </div>

            {/* Image Overlays */}
            {(result.mask_url || result.gradcam_url) && (
              <div className="mt-6 grid sm:grid-cols-2 gap-4 mb-8">
                {result.mask_url && (
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/50">
                    <Image src={result.mask_url} alt="Damage Mask" fill className="object-cover" unoptimized />
                    <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-md">Damage Mask</span>
                  </div>
                )}
                {result.gradcam_url && (
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border/50">
                    <Image src={result.gradcam_url} alt="Grad-CAM" fill className="object-cover" unoptimized />
                    <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-md">AI Attention (Grad-CAM)</span>
                  </div>
                )}
              </div>
            )}

            {/* Footer Section */}
            <div className="text-gray-700 text-sm">
              Want full reports, heatmap overlays and assessment history?{" "}
              <Link 
                href="/auth" 
                className="text-gray-900 font-medium underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 transition-colors"
              >
                Create an account
              </Link>
              .
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Dropzone({
  label,
  hint,
  preview,
  onChange,
  tone,
}: {
  label: string;
  hint: string;
  preview: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tone: "leaf" | "earth";
}) {
  const ring = tone === "leaf" ? "hover:border-[color:var(--leaf)]" : "hover:border-[color:var(--earth)]";
  return (
    <label
      className={`group relative flex flex-col items-center justify-center aspect-[4/3] rounded-3xl border-2 border-dashed border-border bg-card overflow-hidden cursor-pointer transition ${ring}`}
    >
      {preview ? (
        <>
          <Image src={preview} alt={label} fill className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <span className="absolute bottom-4 left-4 text-white text-sm font-medium">{label} · uploaded</span>
        </>
      ) : (
        <div className="flex flex-col items-center text-center px-6">
          <div
            className={`w-14 h-14 rounded-2xl ${tone === "leaf" ? "gradient-leaf" : "gradient-warn"} text-primary-foreground flex items-center justify-center shadow-glow`}
          >
            <UploadIcon />
          </div>
          <div className="mt-4 font-semibold">{label}</div>
          <div className="mt-1 text-sm text-muted-foreground">Click or drop a satellite image · {hint}</div>
        </div>
      )}
      <input type="file" accept="image/*" onChange={onChange} className="absolute inset-0 opacity-0 cursor-pointer" />
    </label>
  );
}