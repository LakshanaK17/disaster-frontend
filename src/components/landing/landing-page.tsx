"use client";

import Image from "next/image";
import { useState } from "react";
import heroImg from "@/assets/hero-satellite.jpg";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Why />
      <Compare />
      <Upload />
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
          <a href="#upload" className="hover:text-foreground transition">
            Try it
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
        <a
          href="#cta"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Request access
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden isolate">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
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
          <a
            href="#cta"
            className="rounded-full bg-accent text-accent-foreground px-6 py-3 font-medium hover:opacity-90 transition shadow-glow"
          >
            Explore the platform
          </a>
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
              src={afterImg}
              alt="After disaster"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <Image src={beforeImg} alt="Before disaster" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
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

function Upload() {
  const [pre, setPre] = useState<string | null>(null);
  const [post, setPost] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [done, setDone] = useState(false);

  const onFile = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) {
      setter(URL.createObjectURL(f));
      setDone(false);
    }
  };
  const analyze = () => {
    if (!pre || !post) return;
    setAnalyzing(true);
    setDone(false);
    setTimeout(() => {
      setAnalyzing(false);
      setDone(true);
    }, 1600);
  };

  return (
    <section id="upload" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-70" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-[color:var(--leaf)]">
            Try it
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold">
            Upload a pair. See the damage.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Drop in a pre- and post-disaster satellite image. TerraSight validates, pairs and normalises
            them — then runs classification, segmentation and Grad-CAM in one pass.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Dropzone
            label="Pre-disaster image"
            hint="Clear sky, same region"
            preview={pre}
            onChange={onFile(setPre)}
            tone="leaf"
          />
          <Dropzone
            label="Post-disaster image"
            hint="Same coordinates, after event"
            preview={post}
            onChange={onFile(setPost)}
            tone="earth"
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={analyze}
            disabled={!pre || !post || analyzing}
            className="inline-flex items-center gap-2 rounded-full gradient-leaf text-primary-foreground px-6 py-3 font-medium shadow-glow disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition"
          >
            {analyzing ? (
              <>
                <Spinner /> Analysing imagery…
              </>
            ) : (
              "Run damage assessment"
            )}
          </button>
          <button
            onClick={() => {
              setPre(null);
              setPost(null);
              setDone(false);
            }}
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            Clear
          </button>
          <span className="text-xs text-muted-foreground">Demo mode — no images leave your browser.</span>
        </div>

        {done && (
          <div className="mt-10 rounded-3xl border border-border/60 bg-card p-8 shadow-soft">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="rounded-full bg-destructive/10 text-destructive text-xs font-medium px-3 py-1">
                Severe damage detected
              </span>
              <span className="text-sm text-muted-foreground">Confidence 92.4% · 4 layers fused</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                ["68%", "Area damaged", "destructive"],
                ["1,204", "Affected buildings", "leaf"],
                ["47", "Flooded roads", "water"],
                ["12", "Safe zones", "accent"],
              ].map(([k, v, c]) => (
                <div key={v} className="rounded-2xl bg-secondary/50 p-5">
                  <div className={`font-display text-3xl text-[color:var(--${c})]`}>{k}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
                </div>
              ))}
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={preview} alt={label} className="absolute inset-0 w-full h-full object-cover" />
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
          <div className="mt-1 text-sm text-muted-foreground">
            Click or drop a satellite image · {hint}
          </div>
        </div>
      )}
      <input type="file" accept="image/*" onChange={onChange} className="absolute inset-0 opacity-0 cursor-pointer" />
    </label>
  );
}

function Spinner() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className="animate-spin">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeDasharray="40 20"
        strokeLinecap="round"
      />
    </svg>
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
            contestable. The cost is not abstract — it is measured in delayed medicine, mis-routed convoys,
            and communities the map forgot.
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
    { n: "02", t: "CNN Models", d: "ResNet-50 grades severity. U-Net segments damage pixels." },
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
                <span className="hidden md:block absolute top-1/2 -right-3 text-[color:var(--leaf)]">→</span>
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
          <span className="text-sm font-medium uppercase tracking-widest">Ready when the next storm isn&apos;t</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold max-w-2xl">
            Give your responders a map they can trust.
          </h2>
          <p className="mt-4 max-w-xl text-white/85">
            TerraSight is built with response agencies, environmental scientists and civic technologists.
            Join the pilot programme and put explainable AI in the field.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
            <input
              type="email"
              required
              placeholder="you@agency.org"
              className="flex-1 rounded-full bg-white/15 border border-white/25 px-5 py-3 placeholder:text-white/60 focus:outline-none focus:bg-white/25"
            />
            <button
              type="submit"
              className="rounded-full bg-white text-primary px-6 py-3 font-medium hover:bg-white/90 transition"
            >
              Request access
            </button>
          </form>
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

/* Icons */
const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
function LeafIcon() {
  return (
    <svg {...iconProps}>
      <path d="M11 20A7 7 0 0 1 4 13V4h9a7 7 0 0 1 7 7v9Z" />
      <path d="M4 4c8 6 12 10 16 16" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function ArrowsIcon() {
  return (
    <svg {...iconProps}>
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
    </svg>
  );
}
function ChartIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 3v18h18" />
      <path d="M7 15V9M12 17V6M17 13V11" />
    </svg>
  );
}
function UploadIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 15V3m0 0-4 4m4-4 4 4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}
function LayersIcon() {
  return (
    <svg {...iconProps}>
      <path d="m12 2 10 6-10 6L2 8l10-6Z" />
      <path d="m2 16 10 6 10-6M2 12l10 6 10-6" />
    </svg>
  );
}
function MapIcon() {
  return (
    <svg {...iconProps}>
      <path d="m9 3-6 3v15l6-3 6 3 6-3V3l-6 3-6-3Z" />
      <path d="M9 3v15M15 6v15" />
    </svg>
  );
}
function FileIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" />
      <path d="M14 3v6h6M9 14h6M9 18h4" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15 20c0-2.5 2-4.5 5-4.5" />
    </svg>
  );
}
