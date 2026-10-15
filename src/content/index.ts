import { en } from "./en";
import { pt } from "./pt";
import type { CaseStudy, Dictionary, Locale } from "./types";

export * from "./types";
export { profile } from "./profile";

const dictionaries: Record<Locale, Dictionary> = { en, pt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getCaseStudy(locale: Locale, slug: string): CaseStudy | undefined {
  return dictionaries[locale].cases.find((study) => study.slug === slug);
}

/** Slugs are shared across locales, so a case study always has a translated twin. */
export const caseSlugs = en.cases.map((study) => study.slug);

export function homePath(locale: Locale): string {
  return locale === "en" ? "/" : "/pt";
}

export function casePath(locale: Locale, slug: string): string {
  return `${locale === "en" ? "" : "/pt"}/work/${slug}`;
}
