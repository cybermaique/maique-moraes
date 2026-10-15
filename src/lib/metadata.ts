import type { Metadata, Viewport } from "next";
import { casePath, getCaseStudy, getDictionary, homePath, languageTags, profile, type Locale } from "@/content";
import { getSiteUrl, isIndexable } from "./site-url";

export const viewport: Viewport = {
  themeColor: "#111412",
  colorScheme: "dark light",
};

const openGraphLocales: Record<Locale, string> = { en: "en_US", pt: "pt_BR" };

/** `hreflang` alternates for a page that exists in both languages. */
function alternates(locale: Locale, pathFor: (locale: Locale) => string): Metadata["alternates"] {
  return {
    canonical: pathFor(locale),
    languages: {
      [languageTags.en]: pathFor("en"),
      [languageTags.pt]: pathFor("pt"),
      "x-default": pathFor("en"),
    },
  };
}

/** Shared defaults, set once per root layout. */
export function rootMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const indexable = isIndexable();
  return {
    metadataBase: new URL(getSiteUrl()),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: profile.name,
    authors: [{ name: profile.name, url: profile.linkedin }],
    creator: profile.name,
    keywords: [
      "Senior Full Stack Engineer",
      "Senior Frontend Engineer",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "NestJS",
      "RAG",
      "MCP",
      "Remote",
    ],
    robots: indexable ? { index: true, follow: true } : { index: false, follow: false },
    formatDetection: { telephone: false, email: false, address: false },
    openGraph: {
      type: "profile",
      siteName: profile.name,
      firstName: "Maique",
      lastName: "Moraes",
      locale: openGraphLocales[locale],
      alternateLocale: openGraphLocales[locale === "en" ? "pt" : "en"],
    },
    twitter: { card: "summary_large_image" },
  };
}

export function homeMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  return {
    title: { absolute: t.meta.title },
    description: t.meta.description,
    alternates: alternates(locale, homePath),
    openGraph: {
      type: "profile",
      url: homePath(locale),
      title: t.meta.title,
      description: t.meta.description,
      siteName: profile.name,
      locale: openGraphLocales[locale],
    },
    twitter: { card: "summary_large_image", title: t.meta.title, description: t.meta.description },
  };
}

export function caseMetadata(locale: Locale, slug: string): Metadata {
  const study = getCaseStudy(locale, slug);
  if (!study) return {};
  const title = `${study.title} — ${profile.name}`;
  return {
    title: { absolute: title },
    description: study.summary,
    alternates: alternates(locale, (target) => casePath(target, slug)),
    openGraph: {
      type: "article",
      url: casePath(locale, slug),
      title,
      description: study.summary,
      siteName: profile.name,
      locale: openGraphLocales[locale],
      authors: [profile.linkedin],
    },
    twitter: { card: "summary_large_image", title, description: study.summary },
  };
}
