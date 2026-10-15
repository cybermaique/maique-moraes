import { articlePath, getDictionary, homePath, languageTags, profile, type Article, type Locale } from "@/content";
import { getSiteUrl } from "./site-url";

/** schema.org ProfilePage + Person for the homepage. */
export function profileJsonLd(locale: Locale) {
  const t = getDictionary(locale);
  const site = getSiteUrl();
  const url = `${site}${homePath(locale) === "/" ? "" : homePath(locale)}`;
  const person = {
    "@type": "Person",
    "@id": `${site}/#person`,
    name: profile.name,
    jobTitle: profile.jobTitle,
    description: t.meta.description,
    url: site,
    email: `mailto:${profile.email}`,
    sameAs: [profile.linkedin, profile.github],
    knowsAbout: profile.knowsAbout,
    knowsLanguage: ["pt-BR", "es", "en"],
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location.city,
      addressRegion: profile.location.region,
      addressCountry: profile.location.countryCode,
    },
  };
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url,
    inLanguage: languageTags[locale],
    name: t.meta.title,
    mainEntity: person,
  };
}

/** schema.org BlogPosting for an article, authored by the homepage's Person. */
export function articleJsonLd(locale: Locale, article: Article) {
  const site = getSiteUrl();
  const url = `${site}${articlePath(locale, article.slug)}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.summary,
    datePublished: article.published,
    inLanguage: languageTags[locale],
    url,
    mainEntityOfPage: url,
    author: { "@type": "Person", "@id": `${site}/#person`, name: profile.name, url: site },
  };
}

/** Serialises JSON-LD safely for inline `<script>` tags. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
