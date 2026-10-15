# AGENTS.md

Instructions for AI coding agents (Codex, Claude Code, Copilot) working on this repository: the personal website of Maique Moraes, a senior full stack engineer. Humans should start with the [README](README.md).

## Commands

```bash
npm run dev         # development server on http://localhost:3000
npm run build       # production build (all pages prerendered)
npm run lint        # ESLint
npm run typecheck   # route types + tsc --noEmit
npm run test:e2e    # Playwright against the production build
```

Run `lint` and `typecheck` before proposing a change. Run the end-to-end suite when a change touches behaviour covered by `tests/`.

## Project map

- `src/content/en.ts`, `src/content/pt.ts` — every piece of copy. Both dictionaries must keep exactly the same shape.
- `src/content/profile.ts` — contact links and other single-source facts.
- `src/components/` — home sections, case studies, layout (header, entrance screen, contact), and UI primitives.
- `src/app/globals.css` — design tokens, themes, and all motion.
- `src/lib/` — metadata, structured data, social images, theme and entrance scripts.
- `docs/content-review.md` — the source behind every public claim.

## Content rules

These matter more than any code change.

- **Never invent or inflate.** Every claim must trace to `docs/content-review.md`. Add the source there when you add a claim.
- Keep personal contributions, team outcomes, and unmeasured benefits clearly separated.
- **No client names** of any employer. Describe who used a product by type ("one of Brazil's largest hospitals").
- No proprietary code, internal architecture, endpoints, or confidential data.
- Write English and Portuguese naturally; never translate literally.

## Engineering rules

- TypeScript strict; components stay server components unless they need state or browser APIs.
- Client components import leaf modules (`@/content/types`, `@/content/profile`), never the `@/content` barrel, so dictionaries stay out of the client bundle.
- Use colour tokens only; the light and dark themes must both pass WCAG AA.
- Every animation needs a `prefers-reduced-motion` variant. Above-the-fold text must never start at `opacity: 0` (it would delay LCP).
- Interactive elements must be keyboard accessible with visible focus.

## Git

- Work on `master`. Never rewrite history or force-push.
- Conventional Commits (`feat:`, `fix:`, `perf:`, `docs:`, `test:`, `chore:`), one coherent change per commit.
- Never commit secrets, `.env` files, build output, or files from `.qa/`.
