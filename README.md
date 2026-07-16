# My Blog — Al Francis Daga-ang

A full-stack blog built with Next.js 16, Drizzle ORM, and Neon Postgres, featuring a public-facing blog and a solo-admin publishing flow.

**🔗 Live demo:** [https://alfrancis-blog.vercel.app/](https://alfrancis-blog.vercel.app/)

## Stack

- **Framework:** Next.js 16 (Turbopack), Cache Components (PPR) enabled
- **Database:** Neon (Postgres) + Drizzle ORM
- **Styling:** Tailwind v4 (`@theme` tokens in `globals.css`)
- **Validation:** Zod
- **Content:** Markdown post bodies via `react-markdown` + `remark-gfm`
- **Storage:** Vercel Blob (public store) — admin-uploaded cover images
- **Lint/Format:** Biome
- **Git hooks:** Husky (pre-push runs `tsc --noEmit` + `next build`)
- **Package manager:** pnpm

## Local Setup

1. **Clone and install:**
   ```bash
   git clone <repo-url>
   cd my-blog-app
   pnpm install
   ```

   > This project uses **pnpm exclusively**. Don't run `npm install` or `yarn` — mixing package managers can corrupt `node_modules` and create a conflicting lockfile.

2. **Environment variables** — create `.env.local` in the project root:
   ```
   DATABASE_URL=...                       # Neon connection string (pooled)
   DATABASE_URL_UNPOOLED=...              # Neon connection string (unpooled, for scripts/migrations)

   # Storage (Vercel Blob)
   BLOB_READ_WRITE_TOKEN=...              # server-only — from Blob store dashboard, "Sensitive" var
   NEXT_PUBLIC_BLOB_BASE_URL=...          # e.g. https://<store-id>.public.blob.vercel-storage.com

   # Admin auth
   ADMIN_PASSWORD=...
   ADMIN_SESSION_SECRET=...               # generate: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

   Get `BLOB_READ_WRITE_TOKEN` from the Blob store's own dashboard page (Storage tab → store → Quickstart) — pulling it via `vercel env pull` can silently return an empty value since it's marked Sensitive.

3. **Run migrations:**
   ```bash
   pnpm exec drizzle-kit generate   # only if schema.ts has changed
   pnpm exec drizzle-kit migrate
   ```

4. **Seed the database:**
   ```bash
   pnpm db:seed
   ```
   Populates realistic demo posts across all six categories (AWS Guides, Projects, Learning, Certifications, Community, Career).

5. **Run the dev server:**
   ```bash
   pnpm dev
   ```

6. **Admin access:** visit `/admin`, log in with `ADMIN_PASSWORD`.

## Available Scripts

| Command | Purpose |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm start` | Run production build locally |
| `pnpm check` | Lint via Biome |
| `pnpm check:fix` | Lint via Biome, auto-fix |
| `pnpm lint` | Alias for `pnpm check` |
| `pnpm format` | Format via Biome, auto-write |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm db:seed` | Seed demo posts (`scripts/seed.ts`) — populates all six categories |
| `pnpm db:test` | Throwaway script for exercising DB queries (`scripts/test-queries.ts`) |

> `prepare` (`husky`) runs automatically on `pnpm install` — sets up the pre-push hook (`typecheck` + `build`). `lint-staged` runs `biome check --write` on staged `.js/.jsx/.ts/.tsx/.json/.css` files as part of the commit hook.

## Dev vs. Main Branch Strategy

- **Branch naming:** `feat/<short-description>` for features, `fix/<short-description>` for bug fixes, `docs/<short-description>` for documentation.
- **Workflow:** branch off `main`, PR, squash-merge.
- After merge:
  ```bash
  git checkout main
  git pull origin main
  git branch -D <branch>
  git remote prune origin
  ```
- Don't reuse a merged (or long-running unmerged) branch for new unrelated work — branch fresh from `main` each time.
- All environments (Production/Preview/Development) currently share the same env var values — acceptable for a solo-admin project with no public preview URLs.


## Scope Decisions (Deferred, Not Bugs)

- **Comment moderation** — not built. Corrections/removals go through the Neon console directly.
- **Post editing** — not built. Same as above — direct DB edits via Neon console for now.
- **Migration automation in Vercel build step** — deferred. Manual `drizzle-kit migrate` before merge is sufficient for current (solo) scope.

## Known Limitations

- All environments share one set of secrets/env values — fine for a solo-admin project with no public preview deployments; revisit if that changes.
- No automated test suite — QA is a manual checklist run before each release (public routes, admin flow, cross-browser, mobile viewport, clean build).

## License

© 2026 Al Francis Daga-ang. All rights reserved.