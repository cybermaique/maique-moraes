import { caseSlugs, getDictionary } from "@/content";
import { ogSize, renderCaseOgImage } from "@/lib/og-image";

export const alt = getDictionary("en").meta.ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return renderCaseOgImage("en", slug);
}
