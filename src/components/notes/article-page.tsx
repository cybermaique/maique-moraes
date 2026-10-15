import Link from "next/link";
import type { ReactNode } from "react";
import { articlePath, getDictionary, homePath, languageTags, type Article, type ArticleBlock, type Locale } from "@/content";
import { ContactSection, SiteFooter } from "@/components/layout/contact-section";
import { SiteHeader } from "@/components/layout/site-header";
import { ArrowLeft } from "@/components/ui/icons";
import { articleJsonLd, serializeJsonLd } from "@/lib/structured-data";

const wordsPerMinute = 200;

function readingMinutes(article: Article): number {
  const text = article.blocks
    .map((block) => {
      if (block.kind === "list") return block.items.map((item) => `${item.term} ${item.text}`).join(" ");
      if (block.kind === "code") return block.caption;
      return block.text;
    })
    .join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / wordsPerMinute));
}

export function ArticlePage({ locale, article }: { locale: Locale; article: Article }) {
  const t = getDictionary(locale);
  const labels = t.article;
  const other: Locale = locale === "en" ? "pt" : "en";
  const published = new Intl.DateTimeFormat(languageTags[locale], { dateStyle: "long", timeZone: "UTC" }).format(
    new Date(`${article.published}T00:00:00Z`),
  );

  return (
    <>
      <SiteHeader
        locale={locale}
        homeHref={homePath(locale)}
        alternateHref={articlePath(other, article.slug)}
        nav={t.nav}
        a11y={t.a11y}
      />
      <main id="main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd(locale, article)) }} />
        <article aria-labelledby="article-title">
          <header className="relative isolate overflow-hidden border-b border-line">
            <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
            <div className="shell pt-10 pb-14 md:pt-14 md:pb-20">
              <Link
                href={`${homePath(locale)}#notes`}
                className="inline-flex items-center gap-2 text-[0.9375rem] text-ink-2 transition-colors hover:text-ink"
              >
                <ArrowLeft size={16} />
                {labels.back}
              </Link>
              <p className="eyebrow mt-12 flex w-fit">{article.tag}</p>
              <h1 id="article-title" className="rise mt-6 max-w-[20ch] font-display text-[clamp(2.4rem,5.6vw,5rem)] leading-[1] font-semibold tracking-[-0.03em]">
                {article.title}
              </h1>
              <p className="rise mt-8 max-w-3xl text-lg leading-relaxed text-ink-2 md:text-xl" style={{ animationDelay: "120ms" }}>
                {article.summary}
              </p>
              <p className="mono-label mt-12 flex flex-wrap gap-x-3 gap-y-1 border-t border-line-strong pt-6 text-muted">
                <span>
                  {labels.published} <time dateTime={article.published}>{published}</time>
                </span>
                <span aria-hidden="true">·</span>
                <span>{labels.readingTime.replace("{minutes}", String(readingMinutes(article)))}</span>
              </p>
            </div>
          </header>

          <div className="shell py-16 md:py-24">
            <div className="mx-auto max-w-[44rem]">
              {article.blocks.map((block, index) => (
                <Block key={index} block={block} lead={index === 0} />
              ))}

              <p className="mt-14 border-l-2 border-accent bg-accent-soft/50 py-4 pr-5 pl-5 text-lg leading-relaxed">
                <span className="mono-label mb-1 block text-accent-deep">{labels.takeaway}</span>
                {article.takeaway}
              </p>

              <aside aria-labelledby="article-scope" className="mt-8 rounded-2xl border border-dashed border-line-strong p-6">
                <h2 id="article-scope" className="mono-label text-muted">
                  {labels.scope}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-2">{article.scope}</p>
              </aside>
            </div>
          </div>
        </article>
        <ContactSection t={t} locale={locale} />
      </main>
      <SiteFooter t={t} />
    </>
  );
}

function Block({ block, lead }: { block: ArticleBlock; lead: boolean }): ReactNode {
  switch (block.kind) {
    case "heading":
      return <h2 className="mt-14 font-display text-[1.75rem] leading-tight font-semibold tracking-[-0.02em] md:text-[2rem]">{block.text}</h2>;
    case "paragraph":
      return lead ? (
        <p className="text-xl leading-relaxed text-ink md:text-[1.375rem] md:leading-[1.6]">{block.text}</p>
      ) : (
        <p className="mt-6 text-lg leading-[1.75] text-ink-2">{block.text}</p>
      );
    case "list":
      return (
        <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {block.items.map((item) => (
            <li key={item.term} className="bg-paper p-5 leading-relaxed text-ink-2 sm:p-6">
              <strong className="font-semibold text-ink">{item.term}</strong> {item.text}
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <figure className="mt-8">
          <pre
            tabIndex={0}
            aria-label={block.caption}
            className="overflow-x-auto rounded-2xl bg-night p-5 font-mono text-[0.875rem] leading-relaxed text-snow sm:p-6"
          >
            <code>{block.code}</code>
          </pre>
          <figcaption className="mono-label mt-3 text-muted">
            {block.language} · {block.caption}
          </figcaption>
        </figure>
      );
  }
}
