import { notFound } from "next/navigation";
import { articleSlugs, getArticle } from "@/content";
import { ArticlePage } from "@/components/notes/article-page";
import { articleMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/pt/notes/[slug]">) {
  const { slug } = await params;
  return articleMetadata("pt", slug);
}

export default async function Page({ params }: PageProps<"/pt/notes/[slug]">) {
  const { slug } = await params;
  const article = getArticle("pt", slug);
  if (!article) notFound();
  return <ArticlePage locale="pt" article={article} />;
}
