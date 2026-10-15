# Design direction

## Concept — "engineering drawing"

Maique's strongest work is about **boundaries**: separating knowledge from live state, composing data on the backend so the interface stays honest, moving logic out of presentational components. The site expresses that idea as a refined technical drawing: warm paper, deep ink, a faint drafting grid, crop marks, and annotated figures.

The signature element is a set of **original interactive diagrams** that explain real engineering decisions instead of decorating the page:

- **Hero — "Where I work in a product"**: three layers (Interface, Services, Intelligence). Selecting a layer explains what Maique does there.
- **Bid comparison**: visitors can simulate a supplier-service timeout and watch the BFF return a controlled error instead of a misleading comparison.
- **AI assistants**: three illustrative requests route to knowledge, live data, or action, with permissions enforced by services.
- **Financial platform**: container/presentational boundaries inside single-spa microfrontends, behind a CI coverage gate.

## Recruiter journey

1. *Who and what* (first screen): name, seniority, three-beat positioning, availability, resume.
2. *Proof*: four verified numbers.
3. *Depth*: three case studies, each with problem → contribution → decision → outcome → honest scope.
4. *Track record*: experience timeline.
5. *Judgment*: principles tied to real work, plus short production "field notes".
6. *Contact*: email (mailto + copy), LinkedIn, GitHub, PDF resume.

## System

- **Type**: Bricolage Grotesque (display, optical sizing), Instrument Sans (reading), IBM Plex Mono (labels and figures only). Self-hosted via `next/font`.
- **Colour**: paper `#f3f1ea`, ink `#121512`, ultramarine `#2b3cdc` as the single signal colour; night sections invert with `#9aa6ff`. All text pairs meet WCAG AA.
- **Themes**: light (paper) and dark share one token set. The initial theme follows the visitor's operating system; the header toggle overrides it and is remembered. Light carries the strongest editorial rhythm (paper with dark bands); dark keeps the same hierarchy with deeper night sections.
- **Motion**: short entrance on the headline; scroll-driven reveals as progressive enhancement (content is never hidden without support); diagrams animate state changes. Everything respects `prefers-reduced-motion`. Above-the-fold text animates with movement only, never opacity, so it paints in the first frame and LCP is not delayed.
- **Entrance screen** (owner request, 15 October 2026, inspired by pacomepertant.com): a full-screen night panel with the monogram tracing itself, name, role, and an "Enter" pill whose progress bar fills; it enters by itself after ≈2.2 s or on any click or key; the text dissolves and a portal opens from the signal dot to reveal the site. The page's own opening (headline, grid, header monogram, diagram assembly) stays frozen in its first frame until the screen has gone, then plays in full view. It shows when a visitor arrives from outside or reloads, and is skipped on navigation within the site. Without JavaScript it never shows, and a failsafe removes it after 6 s. Reduced-motion visitors get the same sequence with fades.
- **Fonts**: Bricolage Grotesque is self-hosted from `src/app/fonts` (Latin subset, weight 600, optical-size axis kept, SIL OFL 1.1), half the size of the full variable font. Instrument Sans and IBM Plex Mono come from `next/font/google`.
- **Measured quality (15 October 2026, Lighthouse mobile, local production build)**: Performance 91–92, Accessibility 100, Best Practices 100; SEO limited only by the intentional `noindex` outside production. Responsive audit: no horizontal overflow at 320, 360, 375, 390, 414, 430, 768, or 1024 px on any page.
- **Avoided on purpose**: fake terminals, code-window cards, glowing gradients, 3D globes, chatbots, scroll hijacking, client logos. (A short, skippable entrance screen was later added at the owner's request; see above.)

## Research

### 14 October 2026

- [paulomartins.dev](https://www.paulomartins.dev/) — rendered and reviewed. Strengths: name-first typography, scannable proof numbers, numbered navigation. Avoided: code-editor card, commercial services/pricing funnel, unverified-looking metrics.
- [maicon-kevyn-portifolio.vercel.app](https://maicon-kevyn-portifolio.vercel.app/) — rendered and reviewed. A dark sci-fi theme with a "system initializing" loader, a wireframe globe, a terminal bio, and a chat bubble. Useful as a list of patterns to avoid for this audience.

### 15 October 2026 — market comparison

Rendered and reviewed at 1440 × 900:

- **Engineers recruiters admire** — [Brittany Chiang](https://brittanychiang.com), [Lee Robinson](https://leerob.com), [Paco Coursey](https://paco.me), [Emil Kowalski](https://emilkowal.ski), [Rauno Freiberg](https://rauno.me). They win on clarity and proof: current employer in the first lines, recognisable companies, open-source projects, and writing. Visual restraint is the norm; Rauno is the exception with bold interaction-led typography.
- **Awwwards portfolio winners** — [Elliott Mangham](https://elliott.mangham.dev), [Pacôme Pertant](https://pacomepertant.com), [Bruno Simon](https://bruno-simon.com). Loaders, WebGL, sound, and 3D. Impressive to designers, slow for recruiters, and weak at communicating product engineering. Elliott's dense intro grid (position, local time, availability) was the most transferable idea.

Changes adopted from this review: current role and previous employers in the hero, a live local clock, a visitor-relative time-zone line in the contact section, and a link to this site's public source code. Not adopted: loaders, WebGL, sound, custom cursors, and command palettes — they would add latency or novelty without helping the hiring decision.
