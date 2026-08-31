# TerraSight — Next.js Migration

This folder contains the Next.js migration of the TerraSight landing site, built with **Next.js App Router**, **Tailwind CSS v4**, and **Radix UI** (via shadcn/ui components).

The original TanStack Start project remains at the repository root. A full backup is in `../tanstack-backup/`.

## Getting started

```sh
cd nextjs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## What's included

- Same TerraSight landing page content, sections, and interactivity
- Nature-friendly forest/bio theme (Fraunces + Inter fonts, oklch palette)
- Before/after image slider comparison
- Demo upload workflow with mock damage assessment results
- Full shadcn/ui component library with Radix UI primitives (ready for future dashboard pages)

## Project structure

```
nextjs/
├── src/
│   ├── app/           # Next.js App Router (layout, page, globals.css)
│   ├── assets/        # Satellite imagery
│   ├── components/
│   │   ├── landing/   # Landing page
│   │   └── ui/        # Radix UI / shadcn components
│   ├── hooks/
│   └── lib/
└── public/
```

## Scripts

| Command       | Description          |
|---------------|----------------------|
| `npm run dev` | Start dev server     |
| `npm run build` | Production build   |
| `npm run start` | Start production   |
| `npm run lint`  | Run ESLint         |
