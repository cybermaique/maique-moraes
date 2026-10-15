export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** BCP 47 tags used for `lang`, `hreflang`, and Open Graph locales. */
export const languageTags: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR",
};

export type LayerId = "interface" | "services" | "intelligence";

export interface Layer {
  id: LayerId;
  name: string;
  stack: string;
  nodes: [string, string, string];
  body: string;
}

export interface BidDiagramCopy {
  kind: "bid";
  title: string;
  simulate: string;
  restore: string;
  proposals: string;
  suppliers: string;
  access: string;
  bff: string;
  ready: string;
  failed: string;
  retry: string;
  okCaption: string;
  failCaption: string;
}

export interface AiRoute {
  id: "knowledge" | "live" | "action";
  lane: string;
  request: string;
  steps: string[];
}

export interface AiDiagramCopy {
  kind: "ai";
  title: string;
  prompt: string;
  model: string;
  guard: string;
  routes: [AiRoute, AiRoute, AiRoute];
}

export interface PlatformDiagramCopy {
  kind: "platform";
  title: string;
  shell: string;
  apps: [string, string, string];
  container: string;
  containerItems: string[];
  presentational: string;
  presentationalItems: string[];
  props: string;
  gate: string;
  caption: string;
}

export type DiagramCopy = BidDiagramCopy | AiDiagramCopy | PlatformDiagramCopy;

export interface CaseStudy {
  slug: string;
  index: string;
  company: string;
  domain: string;
  period: string;
  role: string;
  title: string;
  summary: string;
  stack: string[];
  context: string;
  contribution: string[];
  decision: { title: string; body: string };
  outcome: string;
  scope: string;
  diagram: DiagramCopy;
}

export interface Role {
  company: string;
  role: string;
  period: string;
  /** ISO-like start used for `<time dateTime>`. */
  start: string;
  end?: string;
  domain: string;
  highlights: string[];
  stack?: string[];
}

export interface Principle {
  title: string;
  body: string;
  evidence: string;
}

export interface FieldNote {
  tag: string;
  title: string;
  body: string;
  lesson: string;
  /** Slug of the full article that expands this note, when there is one. */
  article?: string;
}

export type ArticleBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "heading"; text: string }
  | { kind: "list"; items: { term: string; text: string }[] }
  | { kind: "code"; caption: string; language: string; code: string };

export interface Article {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  /** ISO date (YYYY-MM-DD). */
  published: string;
  blocks: ArticleBlock[];
  takeaway: string;
  scope: string;
}

export interface Dictionary {
  meta: { title: string; description: string; ogAlt: string };
  a11y: {
    skip: string;
    primaryNav: string;
    openMenu: string;
    closeMenu: string;
    switchLanguage: string;
    home: string;
    newTab: string;
    themeToLight: string;
    themeToDark: string;
  };
  nav: {
    work: string;
    experience: string;
    approach: string;
    contact: string;
    resume: string;
  };
  hero: {
    eyebrow: string;
    headline: [string, string, string];
    intro: string;
    ctaWork: string;
    ctaResume: string;
    facts: {
      now: { label: string; value: string };
      before: { label: string; value: string };
      based: { label: string; value: string };
    };
    figure: string;
    figureHint: string;
    layers: [Layer, Layer, Layer];
  };
  proof: { label: string; items: { value: string; label: string }[] };
  work: { label: string; title: string; intro: string; cta: string; note: string };
  cases: CaseStudy[];
  experience: {
    label: string;
    title: string;
    intro: string;
    current: string;
    earlierTitle: string;
    roles: Role[];
    earlier: Role[];
  };
  approach: { label: string; title: string; intro: string; principles: Principle[] };
  notes: { label: string; title: string; intro: string; lessonLabel: string; readArticle: string; items: FieldNote[] };
  articles: Article[];
  article: {
    back: string;
    published: string;
    /** `{minutes}` is replaced with the estimated reading time. */
    readingTime: string;
    takeaway: string;
    scope: string;
  };
  aiWorkflow: {
    label: string;
    title: string;
    intro: string;
    items: { title: string; body: string }[];
    proof: string;
    proofLink: string;
  };
  toolkit: { label: string; title: string; groups: { name: string; items: string[] }[]; also: string };
  background: {
    label: string;
    title: string;
    education: { label: string; value: string };
    languages: { label: string; value: string };
    community: { label: string; value: string };
    quote: { text: string; author: string; context: string };
  };
  contact: {
    label: string;
    title: string;
    body: string;
    hours: string;
    emailCta: string;
    copy: string;
    copied: string;
    copyFailed: string;
    resume: string;
    backToTop: string;
    footer: string;
    viewSource: string;
    /** Context for the GitHub link: most production work is private. */
    codeNote: { text: string; link: string };
    /** `{time}` and `{diff}` are replaced at runtime with the visitor-relative values. */
    timeDiff: { ahead: string; behind: string; same: string };
  };
  caseStudy: {
    back: string;
    company: string;
    role: string;
    period: string;
    stack: string;
    context: string;
    contribution: string;
    decision: string;
    figure: string;
    figureNote: string;
    outcome: string;
    scope: string;
    next: string;
  };
  notFound: { title: string; body: string; cta: string };
  /** Entrance screen shown when a visitor arrives or reloads. */
  entrance: { role: string; place: string; enter: string; enterLabel: string };
}
