import { articleSlugs, getDictionary } from "@/content";
import { ogSize, renderArticleOgImage } from "@/lib/og-image";

export const alt = getDictionary("en").meta.ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return renderArticleOgImage("en", slug);
}
