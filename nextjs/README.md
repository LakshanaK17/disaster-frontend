# TerraSight — Next.js

This is a Next.js port of the TerraSight landing site. The original TanStack Start app in the project root is unchanged.

## Routes

- `/` — Landing page
- `/auth` — Login and sign up (Supabase + Google OAuth)
- `/try` — Demo damage assessment upload

## Development

```sh
cd nextjs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.local` or set:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
```

These mirror the root project's Supabase credentials with Next.js `NEXT_PUBLIC_` prefixes.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS v4
- Radix UI (Label, Slot via shadcn-style components)
- Supabase Auth
- Lovable Cloud Auth (Google OAuth)
