import type { Metadata, Viewport } from "next";
import { getDictionary, type Locale } from "@/content";
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
