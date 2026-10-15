import type { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    title: "Maique Moraes — Senior Full Stack Software Engineer",
    description:
      "Senior full stack engineer with 6+ years building TypeScript products with React, Next.js, Node.js, and NestJS — and integrating LLMs, RAG, and MCP into real business workflows. Based in João Pessoa, Brazil (UTC−3).",
    ogAlt: "Maique Moraes, Senior Full Stack Software Engineer",
  },
  a11y: {
    skip: "Skip to content",
    primaryNav: "Primary",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "Ler em português",
    home: "Maique Moraes — home",
    newTab: "opens in a new tab",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
  },
  nav: {
    work: "Work",
    experience: "Experience",
    approach: "Approach",
    contact: "Contact",
    resume: "Resume",
  },
  hero: {
    eyebrow: "Senior Full Stack Software Engineer",
    headline: ["Clear interfaces.", "Reliable services.", "AI that respects the rules."],
    intro:
      "I’m Maique Moraes, a full stack engineer with 6+ years building TypeScript products for enterprise procurement, logistics, financial services, and healthcare. I work end to end with React, Next.js, Node.js, and NestJS — and integrate LLMs, retrieval, and MCP tools into real business workflows.",
    ctaWork: "See selected work",
    ctaResume: "Download resume",
    facts: {
      now: { label: "Now", value: "Senior Full Stack Developer at Stratesys" },
      before: { label: "Before", value: "Grupo Inlog · Unicred · uFLY" },
      based: { label: "Based", value: "João Pessoa, Brazil" },
    },
    figure: "Fig. 01 — Where I work in a product",
    figureHint: "Select a layer",
    layers: [
      {
        id: "interface",
        name: "Interface",
        stack: "React · Next.js · TypeScript",
        nodes: ["Workflows", "Components", "States"],
        body: "Typed workflows and reusable components, with honest loading, error, and retry states.",
      },
      {
        id: "services",
        name: "Services",
        stack: "Node.js · NestJS · REST",
        nodes: ["BFF", "Access", "APIs"],
        body: "Backends-for-frontend that compose data, check access, and fail clearly when essential data is missing.",
      },
      {
        id: "intelligence",
        name: "Intelligence",
        stack: "LLMs · RAG · MCP",
        nodes: ["Retrieval", "Model", "Tools"],
        body: "Retrieval for documents, tools for live data — with permissions enforced by the services, not the model.",
      },
    ],
  },
  proof: {
    label: "At a glance",
    items: [
      { value: "6+", label: "years shipping production software" },
      { value: "6", label: "industries: procurement, logistics, finance, healthcare, public sector, telemetry" },
      { value: "2", label: "AI assistants integrated into business platforms" },
      { value: "15+", label: "people mentored or trained across teams" },
    ],
  },
  work: {
    label: "Selected work",
    title: "Three problems, and the decisions behind them.",
    intro:
      "Professional work, described at a high level. The diagrams are original illustrations of the engineering ideas — not product screenshots or internal architecture.",
    cta: "Read the case study",
    note: "Client names, internal systems, and proprietary details are intentionally left out.",
  },
  cases: [
    {
      slug: "bid-comparison",
      index: "01",
      company: "Stratesys",
      domain: "Enterprise procurement",
      period: "2026 — present",
      role: "Senior Full Stack Developer",
      title: "A bid comparison you can trust",
      summary:
        "A NestJS backend-for-frontend that turns supplier and proposal data from several services into one reliable view — and refuses to present an incomplete comparison as valid.",
      stack: ["NestJS", "Next.js", "TypeScript", "Server Actions", "Jest"],
      context:
        "In enterprise procurement, buyers compare supplier proposals side by side before awarding a contract. The data behind that view lives in separate services: proposals in one place, supplier information in another, process rules and permissions in a third. A comparison that silently drops a supplier — or shows proposals without the right supplier attached — isn’t just a bug. It can lead to the wrong commercial decision.",
      contribution: [
        "Built the backend-for-frontend endpoint, controller, and service layer in NestJS. It checks that the purchasing process exists and that the user can access it, fetches proposals and their suppliers, and returns a contract shaped for the interface.",
        "Handled incomplete proposals and different negotiation states in the transformation layer, so React components don’t need to know how each upstream service behaves.",
        "Treated failures and timeouts of essential dependencies as controlled errors, with structured logs and correlation IDs for troubleshooting, and a clear error state with a retry option in the interface.",
        "Implemented award-confirmation flows in React and Next.js, mapping typed form data to API contracts for standard and approval-routing scenarios, with Server Actions centralizing service calls and error handling.",
        "Wrote unit tests for the transformations and for upstream errors and timeouts — including a check that an inconsistent comparison is never presented as valid.",
      ],
      decision: {
        title: "Fail clearly instead of comparing partial data.",
        body: "Proposals and suppliers only make sense together. When an essential dependency fails, the BFF returns a controlled error instead of rendering whatever arrived. That trades the temporary unavailability of one view for the integrity of the decision it supports — the right trade for this workflow, not a rule for every API.",
      },
      outcome:
        "Data composition now lives in one place on the backend. The interface stays focused on presentation and interaction, contracts are easier to evolve, and failure states keep their meaning: if a comparison is on screen, its essential data is complete.",
      scope:
        "My contribution: the BFF endpoint, its service integrations, transformations, error handling, and tests; the award-confirmation interface and its API mapping. The award API and the wider platform are team efforts. No SLA or incident-rate metric is claimed.",
      diagram: {
        kind: "bid",
        title: "How the comparison is composed",
        simulate: "Simulate a supplier-service timeout",
        restore: "Restore the supplier service",
        proposals: "Proposals service",
        suppliers: "Suppliers service",
        access: "Process & access",
        bff: "Comparison BFF",
        ready: "Comparison ready",
        failed: "Controlled error",
        retry: "Retry",
        okCaption:
          "All essential data arrived. The BFF validates access, joins each proposal with its supplier, and returns one typed contract to the interface.",
        failCaption:
          "The supplier lookup timed out. Instead of rendering proposals without their suppliers, the BFF returns a controlled error — logged with a correlation ID — and the interface offers a retry.",
      },
    },
    {
      slug: "ai-in-business-workflows",
      index: "02",
      company: "Grupo Inlog · Stratesys",
      domain: "Applied AI in logistics and procurement",
      period: "2024 — present",
      role: "Senior Full Stack Developer",
      title: "AI assistants that work inside the rules",
      summary:
        "Two assistants, in logistics and in procurement, that answer from documents, read live operational data, and take actions — while the application keeps control of identity, permissions, and business rules.",
      stack: ["LLMs", "RAG", "MCP", "NestJS", "pgvector", "Azure AI Search", "Zod", "SSE"],
      context:
        "People who run operations spend a lot of time moving between screens to find a status, check a document, or make a small change. A conversational assistant can shorten that path — but only if it never invents operational data and never acts beyond what the user is allowed to do. I worked on this problem twice: first on a waste-collection logistics platform, then on an enterprise procurement platform.",
      contribution: [
        "Logistics: connected a Next.js chat interface to NestJS services, with GPT-4o and responses streamed over Server-Sent Events.",
        "Worked directly on the retrieval pipeline — LangChain.js for document processing and chunking, OpenAI embeddings, and PostgreSQL with pgvector — storing source and organization metadata for traceability and filtering.",
        "Implemented MCP tools with the official TypeScript SDK, such as a route-status lookup. Arguments are validated with Zod; the user and organization come from the authenticated session, never from the model.",
        "Procurement: integrated Azure OpenAI and Azure AI Search into the NestJS backend, using hybrid keyword and vector retrieval — supplier names and codes need exact matches as much as questions need meaning — filtered by purchasing process and user permissions.",
        "Built an MCP write tool that updates the justification on a purchasing draft. Arguments are validated, the service checks edit permission and process state, and the assistant reports success only after the backend confirms it.",
      ],
      decision: {
        title: "Separate knowledge from live state — and keep authority in the services.",
        body: "Documents go through retrieval. Current status and actions go through tools backed by the same APIs the product already uses. The vector index is never the source of truth for operational data, and the model never decides who the user is or what they may change. It interprets the request; the application authorizes and executes.",
      },
      outcome:
        "Users can ask questions and complete supported tasks in conversation instead of navigating several screens. Retrieval was validated with known questions, expected source documents, and answers grounded in the retrieved passages. Adoption and time saved weren’t formally measured — a metric I’d now define on day one.",
      scope:
        "My contributions are listed above. On the procurement side, document extraction and the initial indexing setup were shared with the team. Both assistants are part of larger products built by many people.",
      diagram: {
        kind: "ai",
        title: "One request, three possible paths",
        prompt: "Try an illustrative request",
        model: "Model interprets the request",
        guard: "Services enforce identity, permissions, and business rules",
        routes: [
          {
            id: "knowledge",
            lane: "Knowledge",
            request: "What does the policy say about emergency purchases?",
            steps: [
              "Hybrid search over indexed documents",
              "Filtered by process and user permissions",
              "Answer grounded in the retrieved passages",
            ],
          },
          {
            id: "live",
            lane: "Live data",
            request: "What’s the current status of this route?",
            steps: [
              "Read tool with schema-validated arguments",
              "Service checks the user’s organization",
              "Current status comes from the API, not the index",
            ],
          },
          {
            id: "action",
            lane: "Action",
            request: "Update the justification on this draft.",
            steps: [
              "Write tool with schema-validated arguments",
              "Edit permission and process state are checked",
              "Success is reported only after the backend confirms",
            ],
          },
        ],
      },
    },
    {
      slug: "financial-platform",
      index: "03",
      company: "Unicred",
      domain: "Financial services · Frontend architecture",
      period: "2022 — 2024",
      role: "Senior Full Stack Developer",
      title: "Evolving a financial platform without breaking trust",
      summary:
        "Migrating React features to single-spa microfrontends with clearer component boundaries, a shared design system, and tests that protect existing behavior.",
      stack: ["React", "single-spa", "Next.js", "NestJS", "Jest", "Testing Library"],
      context:
        "A financial cooperative’s digital applications needed to evolve without changing what people relied on. Architecture changes, shared UI, and regression protection were parts of the same problem — in a project where CI blocked merges below 95% line coverage in the tested scope.",
      contribution: [
        "Migrated React pages and components to single-spa microfrontends, configuring routing and application loading while preserving existing behavior.",
        "Moved state, integrations, loading, and error handling into container components, leaving presentational components to render from props — easier to test, and easier for colleagues to follow.",
        "Co-developed the internal design system with Material UI and Tailwind CSS.",
        "Wrote Jest and React Testing Library tests for loading, error, and interaction states, using TDD where it fit.",
        "Ran internal training on Figma-to-code, NestJS backends-for-frontend, and container/presentational patterns, and supported roughly six to eight developers through guidance and pull request reviews.",
      ],
      decision: {
        title: "Make responsibilities visible.",
        body: "When integration logic leaves the presentational layer, there’s one obvious place to change behavior and one obvious place to test it. Coverage was the gate; tests of what users actually do were the point.",
      },
      outcome:
        "Migrated features became easier to understand, test, and maintain. Teammates applied the shared patterns with less one-on-one guidance, and pull requests became more consistent. This was collaborative work on a shared platform, not a solo redesign.",
      scope:
        "The 95% figure is a CI requirement for the tested scope, not a personal metric. Improvements are qualitative; no performance or defect-rate numbers are claimed.",
      diagram: {
        kind: "platform",
        title: "Boundaries that make change safer",
        shell: "single-spa root",
        apps: ["Microfrontend", "Microfrontend", "Microfrontend"],
        container: "Container",
        containerItems: ["State", "Integrations", "Loading & errors"],
        presentational: "Presentational",
        presentationalItems: ["Renders from props", "Design-system parts", "Easy to test"],
        props: "props",
        gate: "CI gate · ≥ 95% line coverage in tested scope",
        caption:
          "Each microfrontend keeps behavior in containers and rendering in presentational components — so every change has an obvious home and an obvious test.",
      },
    },
  ],
  experience: {
    label: "Experience",
    title: "Six years of real products, real constraints.",
    intro:
      "From vehicle telemetry to enterprise procurement — with responsibility growing from individual features to backend integrations, architecture, quality, and helping other developers.",
    current: "Current",
    earlierTitle: "Earlier",
    roles: [
      {
        company: "Stratesys",
        role: "Senior Full Stack Developer",
        period: "Jan 2026 — Present",
        start: "2026-01",
        domain: "Enterprise procurement and strategic sourcing for large companies · IntelligentBuy",
        highlights: [
          "Build procurement workflows in React and Next.js: purchasing processes, supplier negotiations, bid comparison, and award scenarios.",
          "Own a NestJS backend-for-frontend for bid comparison, with access validation, controlled failures, structured logs, and correlation IDs.",
          "Integrate the product’s AI assistant with Azure OpenAI, hybrid retrieval on Azure AI Search, and MCP tools that respect Keycloak authentication and user permissions.",
          "Helped design and ship a multi-product setup where independently deployed Next.js apps share one persistent shell — so an AI conversation continues as users move between products.",
        ],
        stack: ["TypeScript", "Next.js", "NestJS", "Azure OpenAI", "Azure AI Search", "MCP", "Keycloak"],
      },
      {
        company: "Grupo Inlog",
        role: "Senior Full Stack Developer",
        period: "Dec 2024 — Jan 2026",
        start: "2024-12",
        end: "2026-01",
        domain: "Waste-collection management used by companies and public services in several Brazilian states · drivers, fleet, and routes",
        highlights: [
          "Built an AI assistant with GPT-4o, LangChain.js, PostgreSQL/pgvector, and MCP tools, streaming responses over SSE.",
          "Delivered full stack features and REST APIs for drivers, fleet, collection sectors, and routes, including Leaflet map interfaces.",
          "Co-developed a design system with Material UI, Tailwind CSS, and Radix UI, and refactored components to reduce coupling.",
          "Shipped features and fixes during a period when active business customers grew about 15% — a shared engineering, product, and commercial outcome.",
        ],
        stack: ["React", "Next.js", "NestJS", "Redux", "LangChain.js", "pgvector", "Leaflet"],
      },
      {
        company: "Unicred",
        role: "Senior Full Stack Developer",
        period: "Nov 2022 — Dec 2024",
        start: "2022-11",
        end: "2024-12",
        domain: "Digital applications for a nationwide financial cooperative",
        highlights: [
          "Built web features and NestJS backends-for-frontend connected to financial-services APIs.",
          "Migrated React features to single-spa microfrontends under a CI-enforced 95% line-coverage minimum.",
          "Supported six to eight developers and ran internal training on component architecture, Figma-to-code, and BFFs.",
        ],
        stack: ["React", "Next.js", "NestJS", "single-spa", "Jest", "Testing Library"],
      },
    ],
    earlier: [
      {
        company: "uFLY",
        role: "Full Stack Developer",
        period: "Jun 2022 — Nov 2022",
        start: "2022-06",
        end: "2022-11",
        domain: "Healthcare allocation software built for one of Brazil’s largest hospitals",
        highlights: [
          "Built responsive interfaces for hospital workflows, integrated APIs, investigated production defects, and presented delivery progress to clients.",
        ],
      },
      {
        company: "Autonomo Technologies",
        role: "Full Stack Developer",
        period: "Jan 2021 — Jun 2022",
        start: "2021-01",
        end: "2022-06",
        domain: "Issuance and validation of official documents — driver’s licenses and international driving permits — used by state transit departments",
        highlights: [
          "Developed features with React, Vue.js, TypeScript, Node.js, and NestJS; refactored for maintainability, with unit tests, SonarQube, and code reviews.",
        ],
      },
      {
        company: "Creare Sistemas",
        role: "Backend Developer · from intern",
        period: "Aug 2020 — Jan 2021",
        start: "2020-08",
        end: "2021-01",
        domain: "Vehicle telemetry for multinational agribusiness companies",
        highlights: [
          "Where it started: investigated telemetry issues with Oracle SQL, JavaScript, and JSON, wrote training documentation, and trained new interns and a team of about ten non-developer colleagues.",
        ],
      },
    ],
  },
  approach: {
    label: "Approach",
    title: "How I make engineering decisions.",
    intro: "Principles I’ve earned on real projects — each one tied to work described on this page.",
    principles: [
      {
        title: "Fail clearly, not quietly.",
        body: "When missing data could mislead a decision, an explicit, recoverable error beats a plausible-looking screen.",
        evidence: "Bid comparison BFF",
      },
      {
        title: "Knowledge isn’t state.",
        body: "Retrieval answers from documents. Current status and actions come from the services that own them — with their permissions intact.",
        evidence: "AI assistants",
      },
      {
        title: "Make responsibilities visible.",
        body: "Clear boundaries between data, logic, and presentation give every change an obvious home — and an obvious test.",
        evidence: "Financial platform migration",
      },
      {
        title: "Simple until proven otherwise.",
        body: "I used to over-design shared components for needs that hadn’t arrived. Now I timebox reversible decisions, ship the simple version, and save deep analysis for choices that are hard to undo.",
        evidence: "A lesson from design-system work",
      },
      {
        title: "Leave the team stronger.",
        body: "Reviews, pairing, and training are how good decisions outlast the person who made them.",
        evidence: "Mentoring and internal training",
      },
    ],
  },
  notes: {
    label: "Field notes",
    title: "Small stories from production.",
    intro: "Not every lesson comes from a big project. A few debugging stories that shaped how I work.",
    lessonLabel: "Takeaway",
    items: [
      {
        tag: "React · Performance",
        title: "The filter that fired too often",
        body: "A vehicle list sent several identical requests on load and on every filter change. The effect depended on a filters object recreated on each render. I stabilized the dependencies so requests fire only when values actually change, and cancelled stale requests with AbortController so slow responses can’t overwrite newer searches.",
        lesson: "Check reference equality before blaming the API — and rule out Strict Mode’s extra effect runs before calling it a bug.",
      },
      {
        tag: "Backend · Database",
        title: "An N+1 hiding in a list endpoint",
        body: "A routes-and-vehicles API slowed down as data grew. Backend logs showed one query for the list, then one per row for related data. I batched the related lookups, read the query plan with EXPLAIN ANALYZE, adjusted an index used by the filters, and verified that results, pagination, and ordering stayed identical.",
        lesson: "An optimization needs an equivalence check, not just a faster number.",
      },
      {
        tag: "Delivery · Containers",
        title: "A green pipeline, an unhealthy app",
        body: "Build passed, tests passed, image published — yet the new Azure Container Apps revision never became ready. Logs and revision events showed NestJS listening on port 3000 while ingress expected 8080. I aligned the configuration, verified health checks and endpoints, and reviewed other environments for the same drift.",
        lesson: "A successful pipeline proves the build, not the running service.",
      },
      {
        tag: "Architecture · Collaboration",
        title: "Sync or async? Let the data decide.",
        body: "A teammate preferred running report exports inside the HTTP request; I was worried about large volumes. Instead of arguing, we tested different sizes. Larger exports were prone to timeouts, so they moved to background jobs with status tracking — and small exports stayed synchronous.",
        lesson: "A shared test settles a disagreement faster than a longer debate.",
      },
    ],
  },
  aiWorkflow: {
    label: "AI-assisted engineering",
    title: "AI is part of how I build software, not just what I build.",
    intro: "I work with AI agents every day to move faster — and I stay accountable for every line that ships.",
    items: [
      {
        title: "Explore & build",
        body: "I use Claude Code, Codex, and GitHub Copilot to explore codebases, investigate bugs, compare technical approaches, and speed up implementation, while keeping changes focused and maintainable.",
      },
      {
        title: "Test & validate",
        body: "AI helps me find edge cases, expand automated tests, and drive browser-level checks with Playwright MCP. Generated code and tests are run, reviewed, and validated against expected behavior.",
      },
      {
        title: "Review & ship",
        body: "AI-assisted pull request reviews in Azure DevOps sit alongside CI checks, static analysis, and human review. AI surfaces issues earlier; correctness, security, and maintainability stay my responsibility.",
      },
    ],
    proof: "See it in practice: this website was built with AI agents under my direction.",
    proofLink: "The code, tests, agent instructions, and commit history are public.",
  },
  toolkit: {
    label: "Toolkit",
    title: "Tools I use in production.",
    groups: [
      {
        name: "Frontend",
        items: ["TypeScript", "React", "Next.js", "Server Actions", "Redux", "Zustand", "Tailwind CSS", "Material UI", "Radix UI", "single-spa", "Leaflet"],
      },
      {
        name: "Backend",
        items: ["Node.js", "NestJS", "REST APIs", "Backends-for-frontend", "PostgreSQL", "SQL", "Zod", "Keycloak", "NextAuth"],
      },
      {
        name: "AI integration",
        items: ["Azure OpenAI", "GPT-4o", "LangChain.js", "RAG", "Hybrid search", "Azure AI Search", "pgvector", "MCP", "SSE streaming"],
      },
      {
        name: "AI-assisted development",
        items: ["Claude Code", "OpenAI Codex", "GitHub Copilot", "Playwright MCP", "AI code review"],
      },
      {
        name: "Quality & delivery",
        items: ["Jest", "React Testing Library", "TDD", "Azure DevOps", "Docker", "Kubernetes deployments", "Vercel", "ESLint", "SonarQube"],
      },
    ],
    also: "Also: JavaScript, Vue.js, Oracle SQL, Git, Scrum.",
  },
  background: {
    label: "Background",
    title: "Beyond the code.",
    education: { label: "Education", value: "Systems Analysis and Development — SENAI/RS, 2020–2022" },
    languages: { label: "Languages", value: "Portuguese (native) · Spanish (advanced) · English (intermediate)" },
    community: {
      label: "Community",
      value: "Volunteer front-end tech lead at Instituto Mancala, and technology mentor for public-school students through Atados (2022–2023).",
    },
    quote: {
      text: "Maique is one of the most qualified professionals I have worked with. What stood out most: he learns fast, has strong technical knowledge, understands business rules, and is deeply committed — often putting in extra hours to solve problems that weren’t his responsibility.",
      author: "Ricardo Oliveira",
      context: "Managed Maique directly",
    },
  },
  contact: {
    label: "Contact",
    title: "Building something that has to be right?",
    body: "I do my best work with teams that care about the details — clear interfaces, dependable services, and AI that fits real business rules. If that sounds like your team, email is the fastest way to reach me.",
    hours: "Based in Brazil (UTC−3), with flexible hours for overlap with teams in the Americas and Europe.",
    emailCta: "Send an email",
    copy: "Copy address",
    copied: "Copied to clipboard",
    copyFailed: "Couldn’t copy — please select the address instead",
    resume: "Resume · PDF",
    backToTop: "Back to top",
    footer: "Designed and built with Next.js.",
    viewSource: "View source",
    codeNote: {
      text: "Most of my production code lives in private company repositories.",
      link: "This site’s source is public.",
    },
    timeDiff: {
      ahead: "It’s {time} in João Pessoa — {diff} ahead of you.",
      behind: "It’s {time} in João Pessoa — {diff} behind you.",
      same: "It’s {time} in João Pessoa — the same time as you.",
    },
  },
  caseStudy: {
    back: "All work",
    company: "Company",
    role: "Role",
    period: "Period",
    stack: "Stack",
    context: "The problem",
    contribution: "What I did",
    decision: "The key decision",
    figure: "Interactive diagram",
    figureNote: "Original illustration of the engineering idea — not a product screenshot.",
    outcome: "What changed",
    scope: "Scope, honestly",
    next: "Next case study",
  },
  notFound: {
    title: "This page doesn’t exist.",
    body: "The link may be outdated, or the address may have a typo.",
    cta: "Back to the homepage",
  },
  entrance: {
    role: "Senior full stack engineer",
    place: "based in Brazil",
    enter: "Enter",
    enterLabel: "Enter site",
  },
};
