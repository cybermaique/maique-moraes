import type { MetadataRoute } from "next";
import { casePath, caseSlugs, homePath, languageTags, type Locale } from "@/content";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  const absolute = (path: string) => `${site}${path === "/" ? "" : path}`;
  const entry = (pathFor: (locale: Locale) => string, priority: number): MetadataRoute.Sitemap =>
    (["en", "pt"] as const).map((locale) => ({
      url: absolute(pathFor(locale)),
      changeFrequency: "monthly",
      priority: locale === "en" ? priority : priority - 0.1,
      alternates: {
        languages: {
          [languageTags.en]: absolute(pathFor("en")),
          [languageTags.pt]: absolute(pathFor("pt")),
        },
      },
    }));

  return [
    ...entry(homePath, 1),
    ...caseSlugs.flatMap((slug) => entry((locale) => casePath(locale, slug), 0.8)),
  ];
}
