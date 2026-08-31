"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowsIcon,
  ChartIcon,
  ClockIcon,
  EyeIcon,
  FileIcon,
  LayersIcon,
  LeafIcon,
  MapIcon,
  ShieldIcon,
  UploadIcon,
  UsersIcon,
} from "@/components/icons";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Why />
      <Compare />
      <Evidence />
      <Features />
      <Impact />
      <Pipeline />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display text-xl font-semibold">
          <span className="w-8 h-8 rounded-lg gradient-leaf shadow-glow flex items-center justify-center text-primary-foreground">
            <LeafIcon />
          </span>
          TerraSight
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#why" className="hover:text-foreground transition">
            Why it matters
          </a>
          <a href="#evidence" className="hover:text-foreground transition">
            Explainability
          </a>
          <a href="#features" className="hover:text-foreground transition">
            Platform
          </a>
          <a href="#pipeline" className="hover:text-foreground transition">
            How it works
          </a>
          <a href="#impact" className="hover:text-foreground transition">
            Impact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/try"
            className="hidden sm:inline-flex rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-secondary/60 transition"
          >
            Try it
          </Link>
          <Link
            href="/auth"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden isolate">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-satellite.jpg"
          alt="Satellite view of a river delta half green and half flooded"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-primary-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" /> Explainable AI · Earth
          Observation
        </span>
        <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold max-w-4xl leading-[1.05]">
          See the damage. <span className="italic text-accent">Save what matters.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/85">
          TerraSight turns pre- and post-disaster satellite imagery into transparent, auditable damage
          intelligence — so response teams reach the right people, in the right places, hours sooner.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/try"
            className="rounded-full bg-accent text-accent-foreground px-6 py-3 font-medium hover:opacity-90 transition shadow-glow"
          >
            Try it — run a demo
          </Link>
          <a
            href="#why"
            className="rounded-full border border-white/30 px-6 py-3 font-medium hover:bg-white/10 transition"
          >
            Why it&apos;s urgent
          </a>
        </div>
        <dl className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {[
            ["45k+", "lives lost yearly to natural disasters"],
            ["3–7 days", "typical damage-survey delay"],
            ["< 2 hrs", "with automated satellite analysis"],
            ["100%", "of decisions backed by heatmaps"],
          ].map(([k, v]) => (
            <div key={v} className="border-l border-white/25 pl-4">
              <dt className="font-display text-3xl font-semibold text-accent">{k}</dt>
              <dd className="text-xs uppercase tracking-wider text-white/70 mt-1">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Why() {
  const items = [
    {
      icon: <ClockIcon />,
      title: "Every hour costs lives",
      body: "After a flood or earthquake, the first 72 hours decide survival. Manual ground surveys can take days — TerraSight delivers a damage picture while the water is still receding.",
    },
    {
      icon: <EyeIcon />,
      title: "Responders fly blind",
      body: "Without a unified view, aid convoys arrive at half-safe roads, medics are sent to intact villages, and cut-off communities wait unheard. Satellite AI gives one shared, ground-truth map.",
    },
    {
      icon: <ShieldIcon />,
      title: "Black-box AI won't do",
      body: "Governments and NGOs cannot act on a number they cannot audit. Grad-CAM heatmaps show exactly why the model flagged a building — so decisions are defensible, not blind trust.",
    },
  ];
  return (
    <section id="why" className="py-28 bg-grain">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-[color:var(--leaf)]">
            The problem
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            Nature moves fast. Response systems don&apos;t.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Climate change is compounding floods, cyclones and wildfires. The bottleneck is no longer
            imagery — it&apos;s turning imagery into decisions.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative rounded-2xl bg-card p-8 shadow-soft border border-border/60 hover:-translate-y-1 transition"
            >
              <div className="w-12 h-12 rounded-xl gradient-leaf text-primary-foreground flex items-center justify-center shadow-glow">
                {it.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold">{it.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compare() {
  const [pos, setPos] = useState(50);
  return (
    <section className="py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <span className="text-sm font-medium uppercase tracking-widest text-[color:var(--leaf)]">
            Before / After
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            One slider. The whole story.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Drag through pre- and post-disaster satellite pairs. TerraSight aligns, segments and grades
            severity down to individual rooftops — so analysts see exactly where the forest, the road and
            the village used to be.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Pixel-level damage masks (U-Net)",
              "Severity grading none → destroyed (ResNet-50)",
              "Change-detection fused into one report",
            ].map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[color:var(--leaf)]" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <div className="relative aspect-[3/2] rounded-3xl overflow-hidden shadow-soft select-none">
            <Image
              src="/images/after.jpg"
              alt="After disaster"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <Image
                src="/images/before.jpg"
                alt="Before disaster"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
            <div className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-lg" style={{ left: `${pos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center shadow-glow">
                <ArrowsIcon />
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              aria-label="Before / after slider"
            />
            <span className="absolute top-4 left-4 rounded-full bg-black/50 text-white text-xs px-3 py-1 backdrop-blur">
              BEFORE
            </span>
            <span className="absolute top-4 right-4 rounded-full bg-destructive/80 text-white text-xs px-3 py-1 backdrop-blur">
              AFTER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const feats = [
    {
      icon: <ChartIcon />,
      title: "Live command dashboard",
      body: "Total disasters, affected areas, damaged buildings and recent uploads — always at a glance.",
    },
    {
      icon: <UploadIcon />,
      title: "Pre / post image workflow",
      body: "Upload paired imagery, preview, replace and version with a clean, auditable trail.",
    },
    {
      icon: <LayersIcon />,
      title: "Toggleable overlays",
      body: "Switch heatmaps, segmentation masks and originals. Adjust transparency for briefings.",
    },
    {
      icon: <MapIcon />,
      title: "Interactive disaster map",
      body: "Colour-coded pins from low to severe. Click any point for images, stats and reports.",
    },
    {
      icon: <FileIcon />,
      title: "One-click reports",
      body: "Export PDF or Excel dossiers with imagery, damage summary and evidence heatmaps.",
    },
    {
      icon: <UsersIcon />,
      title: "Role-based access",
      body: "Admin, Response Officer and Analyst roles — with activity history and secure profiles.",
    },
  ];
  return (
    <section id="features" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-[color:var(--leaf)]">
            The platform
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            Everything a response team needs, in one calm workspace.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {feats.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl p-7 bg-card border border-border/60 hover:border-[color:var(--accent)] transition"
            >
              <div className="w-11 h-11 rounded-xl bg-secondary text-[color:var(--moss)] flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Evidence() {
  const rows = [
    {
      t: "Model attention, made visible",
      d: "Grad-CAM heatmaps highlight the exact rooftops, roads and riverbanks that drove the severity score — no unexplained verdicts.",
    },
    {
      t: "Every assessment is auditable",
      d: "Inputs, model versions, confidence and reviewer notes are stored together, so a report written today still stands up to scrutiny next year.",
    },
    {
      t: "Humans stay in the loop",
      d: "Analysts confirm, downgrade or escalate each zone. The model proposes; the response officer decides.",
    },
  ];
  return (
    <section id="evidence" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-70" />
      <div className="max-w-7xl mx-auto px-6 relative grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm font-medium uppercase tracking-widest text-[color:var(--leaf)]">
            Evidence, not guesswork
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            A score you can defend in a briefing room.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aid budgets and evacuation orders cannot rest on an opaque number. TerraSight pairs every
            prediction with the visual reasoning behind it.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/try"
              className="rounded-full gradient-leaf text-primary-foreground px-6 py-3 font-medium shadow-glow hover:opacity-90 transition"
            >
              Try it — upload an image pair
            </Link>
            <Link
              href="/auth"
              className="rounded-full border border-border px-6 py-3 font-medium hover:bg-secondary/60 transition"
            >
              Create an account
            </Link>
          </div>
        </div>
        <ol className="space-y-4">
          {rows.map((r, i) => (
            <li key={r.t} className="rounded-2xl border border-border/60 bg-card p-7 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="shrink-0 w-9 h-9 rounded-xl bg-secondary text-[color:var(--moss)] font-display flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-lg">{r.t}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{r.d}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section id="impact" className="py-28 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-40" />
      <div className="max-w-7xl mx-auto px-6 relative grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-sm font-medium uppercase tracking-widest text-accent">The stakes</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            What happens if we keep doing this by hand?
          </h2>
          <p className="mt-5 text-white/80 text-lg leading-relaxed">
            Without an explainable, satellite-first workflow, damage assessment stays slow, uneven, and
            contestable. The cost is not abstract — it is measured in delayed medicine, mis-routed
            convoys, and communities the map forgot.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ["+72 hrs", "Response delay for hard-to-reach zones"],
            ["30–40%", "Aid mis-allocated to less-affected areas"],
            ["$1.4T", "Global disaster losses 2000-2019 (UNDRR)"],
            ["1 in 3", "Damage reports disputed without evidence"],
          ].map(([k, v]) => (
            <div key={v} className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div className="font-display text-4xl text-accent">{k}</div>
              <div className="mt-2 text-sm text-white/75">{v}</div>
            </div>
          ))}
          <div className="sm:col-span-2 rounded-2xl gradient-warn p-6 text-white">
            <div className="text-sm uppercase tracking-widest opacity-80">Without TerraSight</div>
            <p className="mt-2 font-display text-2xl leading-snug">
              Every hour of unclear damage data is an hour the wrong door gets knocked on first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pipeline() {
  const steps = [
    {
      n: "01",
      t: "Input",
      d: "Upload pre / post satellite pairs. Validate, pair, resize, normalize, augment.",
    },
    {
      n: "02",
      t: "CNN Models",
      d: "ResNet-50 grades severity. U-Net segments damage pixels.",
    },
    { n: "03", t: "Fusion", d: "Aggregator merges classification + mask into one damage report." },
    { n: "04", t: "Explainability", d: "Grad-CAM heatmaps reveal — and audit — model attention." },
    { n: "05", t: "Decision Support", d: "Evidence-based damage maps for response agencies." },
  ];
  return (
    <section id="pipeline" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-[color:var(--leaf)]">
            The framework
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            A pipeline built for scrutiny.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Modular, multi-tier and explainable at every step — because trust is the real deliverable.
          </p>
        </div>
        <ol className="mt-14 grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <li key={s.n} className="relative rounded-2xl border border-border/60 bg-card p-6">
              <div className="font-display text-3xl text-[color:var(--accent)]">{s.n}</div>
              <div className="mt-2 font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-1/2 -right-3 text-[color:var(--leaf)]">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl gradient-leaf p-12 md:p-16 shadow-soft text-primary-foreground">
          <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <span className="text-sm font-medium uppercase tracking-widest">
            Ready when the next storm isn&apos;t
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold max-w-2xl">
            Give your responders a map they can trust.
          </h2>
          <p className="mt-4 max-w-xl text-white/85">
            TerraSight is built with response agencies, environmental scientists and civic technologists.
            Join the pilot programme and put explainable AI in the field.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/auth"
              className="rounded-full bg-white text-primary px-6 py-3 font-medium hover:bg-white/90 transition"
            >
              Login or sign up
            </Link>
            <Link
              href="/try"
              className="rounded-full border border-white/30 px-6 py-3 font-medium hover:bg-white/10 transition"
            >
              Try it now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-display text-base text-foreground">
          <span className="w-6 h-6 rounded-md gradient-leaf" /> TerraSight
        </div>
        <div>Explainable AI for a more resilient planet.</div>
        <div>© {new Date().getFullYear()} TerraSight Research</div>
      </div>
    </footer>
  );
}
