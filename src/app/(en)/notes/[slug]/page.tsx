import { notFound } from "next/navigation";
import { articleSlugs, getArticle } from "@/content";
import { ArticlePage } from "@/components/notes/article-page";
import { articleMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/notes/[slug]">) {
  const { slug } = await params;
  return articleMetadata("en", slug);
}

export default async function Page({ params }: PageProps<"/notes/[slug]">) {
  const { slug } = await params;
  const article = getArticle("en", slug);
  if (!article) notFound();
  return <ArticlePage locale="en" article={article} />;
}
