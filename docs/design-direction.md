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
- **Motion**: short entrance on the headline; scroll-driven reveals as progressive enhancement (content is never hidden without support); diagrams animate state changes. Everything respects `prefers-reduced-motion`.
- **Avoided on purpose**: fake terminals, code-window cards, glowing gradients, 3D globes, loading gates, chatbots, scroll hijacking, client logos.

## Research (14 October 2026)

- [paulomartins.dev](https://www.paulomartins.dev/) — rendered and reviewed. Strengths: name-first typography, scannable proof numbers, numbered navigation. Avoided: code-editor card, commercial services/pricing funnel, unverified-looking metrics.
- [maicon-kevyn-portifolio.vercel.app](https://maicon-kevyn-portifolio.vercel.app/) — rendered and reviewed. A dark sci-fi theme with a "system initializing" loader, a wireframe globe, a terminal bio, and a chat bubble. Useful as a list of patterns to avoid for this audience.
- Awwwards, Godly, and CSS Design Awards galleries were not reviewed in this session; the direction relies on established editorial and product-design practice instead. No findings are attributed to them.
