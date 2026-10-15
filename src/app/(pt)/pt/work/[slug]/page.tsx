import { notFound } from "next/navigation";
import { caseSlugs, getCaseStudy } from "@/content";
import { CaseStudyPage } from "@/components/work/case-study-page";
import { caseMetadata } from "@/lib/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/pt/work/[slug]">) {
  const { slug } = await params;
  return caseMetadata("pt", slug);
}

export default async function Page({ params }: PageProps<"/pt/work/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudy("pt", slug);
  if (!study) notFound();
  return <CaseStudyPage locale="pt" study={study} />;
}
