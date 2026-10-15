# maique-moraes

Personal website of **Maique Moraes**, Senior Full Stack Software Engineer.
English at `/`, Portuguese at `/pt`, with case studies at `/work/<slug>` and `/pt/work/<slug>`.

Built with Next.js 16 (App Router, fully static), React 19, TypeScript, and Tailwind CSS 4.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev          # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build; every page and social image is prerendered |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint (Next.js core-web-vitals + TypeScript rules) |
| `npm run typecheck` | Generate route types and run `tsc --noEmit` |
| `npm run test:e2e` | Build, serve, and run Playwright tests on desktop and mobile viewports |

The first time you run the end-to-end tests, install the browser with `npx playwright install chromium`.

## Project structure

```
src/
  app/
    (en)/              English root layout, home, case studies, social image
    (pt)/              Portuguese root layout under /pt
    global-not-found   404 for unmatched URLs
    sitemap.ts, robots.ts, icon.svg
  components/
    home/              Hero, system diagram, and homepage sections
    work/              Case-study page, card artwork, interactive diagrams
    layout/            Header, contact, footer, shared document shell
    ui/                Icons and small primitives
  content/
    en.ts, pt.ts       All copy, typed by types.ts — edit content here
    profile.ts         Verified contact links (single source of truth)
  lib/                 Metadata, structured data, social images, site URL
tests/                 Playwright specs (content, flows, diagrams, axe, SEO)
docs/                  Design direction and content provenance notes
public/                Resume PDF
```

Each language has its own root layout, so every page ships with the correct `<html lang>`. Both dictionaries must keep the same shape; a test enforces this.

## Updating content

- Copy lives in `src/content/en.ts` and `src/content/pt.ts`. Write both languages naturally rather than translating literally.
- Contact links live in `src/content/profile.ts`.
- Replace the resume by overwriting `public/maique-moraes-resume.pdf`.
- `docs/content-review.md` explains which source supports each public claim. Keep personal contributions, team outcomes, and unmeasured benefits clearly separated.

## Deployment (Vercel)

1. Import the GitHub repository in Vercel. The defaults (framework *Next.js*, `npm run build`) work as-is.
2. Deploy. Production deployments are indexable; preview deployments send `noindex` and a disallow-all `robots.txt`.
3. Enable **Web Analytics** in the Vercel project (Analytics tab). The `<Analytics />` component is already in the layout; until it is enabled, its script request returns 404.
4. Canonical URLs, the sitemap, and social images use `VERCEL_PROJECT_PRODUCTION_URL` automatically. If you add a custom domain, set `NEXT_PUBLIC_SITE_URL` (for example `https://your-domain.com`) in the project's environment variables and redeploy.

The display font (Bricolage Grotesque) is self-hosted in `src/app/fonts` under the SIL Open Font License, included alongside it. Social images use the same family fetched from Google Fonts at build time. If the build has no network access, they fall back to the default font.

## Design

See [`docs/design-direction.md`](docs/design-direction.md) for the concept, system, and the reasoning behind the interactive diagrams.
