import type { Metadata, Viewport } from "next";
import { getCaseStudy, getDictionary, type Locale } from "@/content";
import { getSiteUrl } from "./site-url";

export const viewport: Viewport = {
  themeColor: "#f3f1ea",
  colorScheme: "light",
};

export function rootMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  return {
    metadataBase: new URL(getSiteUrl()),
    title: t.meta.title,
    description: t.meta.description,
    authors: [{ name: "Maique Moraes" }],
    creator: "Maique Moraes",
  };
}

export function caseMetadata(locale: Locale, slug: string): Metadata {
  const study = getCaseStudy(locale, slug);
  if (!study) return {};
  return {
    title: `${study.title} — Maique Moraes`,
    description: study.summary,
  };
}
