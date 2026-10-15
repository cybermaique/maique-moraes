import Link from "next/link";
import type { ReactNode } from "react";
import { casePath, getDictionary, homePath, type CaseStudy, type Locale } from "@/content";
import { ContactSection, SiteFooter } from "@/components/layout/contact-section";
import { SiteHeader } from "@/components/layout/site-header";
import { ArrowLeft, ArrowRight } from "@/components/ui/icons";
import { CaseDiagram } from "./case-diagram";

export function CaseStudyPage({ locale, study }: { locale: Locale; study: CaseStudy }) {
  const t = getDictionary(locale);
  const labels = t.caseStudy;
  const other: Locale = locale === "en" ? "pt" : "en";
  const index = t.cases.findIndex((item) => item.slug === study.slug);
  const next = t.cases[(index + 1) % t.cases.length];

  return (
    <>
      <SiteHeader
        locale={locale}
        homeHref={homePath(locale)}
        alternateHref={casePath(other, study.slug)}
        nav={t.nav}
        a11y={t.a11y}
      />
      <main id="main">
        <article aria-labelledby="case-title">
          <header className="relative isolate overflow-hidden border-b border-line">
            <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
            <div className="shell pt-10 pb-14 md:pt-14 md:pb-20">
              <Link
                href={`${homePath(locale)}#work`}
                className="inline-flex items-center gap-2 text-[0.9375rem] text-ink-2 transition-colors hover:text-ink"
              >
                <ArrowLeft size={16} />
                {labels.back}
              </Link>
              <p className="eyebrow mt-12 flex w-fit">
                {study.index} · {study.domain}
              </p>
              <h1 id="case-title" className="rise mt-6 max-w-[20ch] font-display text-[clamp(2.4rem,5.6vw,5rem)] leading-[1] font-semibold tracking-[-0.03em]">
                {study.title}
              </h1>
              <p className="rise mt-8 max-w-3xl text-lg leading-relaxed text-ink-2 md:text-xl" style={{ animationDelay: "120ms" }}>
                {study.summary}
              </p>

              <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line-strong pt-6 md:grid-cols-4">
                <Meta label={labels.company}>{study.company}</Meta>
                <Meta label={labels.role}>{study.role}</Meta>
                <Meta label={labels.period}>{study.period}</Meta>
                <Meta label={labels.stack} className="col-span-2 md:col-span-1">
                  <ul className="flex flex-wrap gap-1.5">
                    {study.stack.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Meta>
              </dl>
            </div>
          </header>

          <div className="shell py-20 md:py-28">
            <CaseBlock number="01" label={labels.context}>
              <p className="text-xl leading-relaxed text-ink md:text-[1.375rem] md:leading-[1.6]">{study.context}</p>
            </CaseBlock>

            <CaseBlock number="02" label={labels.contribution}>
              <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line">
                {study.contribution.map((item, itemIndex) => (
                  <li key={item} className="grid grid-cols-[2.5rem_1fr] gap-2 bg-paper p-5 leading-relaxed text-ink-2 sm:p-6">
                    <span className="mono-label pt-1 text-accent" aria-hidden="true">
                      {String(itemIndex + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </CaseBlock>
          </div>

          <section aria-labelledby="decision-title" className="on-night bg-night py-20 text-snow md:py-28">
            <div className="shell grid gap-8 lg:grid-cols-12 lg:gap-16">
              <p className="eyebrow lg:col-span-3">03 · {labels.decision}</p>
              <div className="lg:col-span-9">
                <h2 id="decision-title" className="display-lg max-w-[22ch]">
                  {study.decision.title}
                </h2>
                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-fog md:text-xl">{study.decision.body}</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="figure-title" className="border-b border-line bg-paper-2 py-20 md:py-28">
            <div className="shell">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 id="figure-title" className="eyebrow">
                  04 · {labels.figure}
                </h2>
                <p className="text-sm text-muted">{labels.figureNote}</p>
              </div>
              <figure className="crop-marks mt-8 rounded-[1.25rem] border border-line bg-paper-2 p-4 sm:p-8 md:p-10">
                <CaseDiagram copy={study.diagram} />
              </figure>
            </div>
          </section>

          <div className="shell py-20 md:py-28">
            <CaseBlock number="05" label={labels.outcome}>
              <p className="text-xl leading-relaxed text-ink md:text-[1.375rem] md:leading-[1.6]">{study.outcome}</p>
            </CaseBlock>
            <CaseBlock number="06" label={labels.scope}>
              <p className="rounded-2xl border border-dashed border-line-strong p-6 leading-relaxed text-ink-2">{study.scope}</p>
            </CaseBlock>

            <nav aria-label={labels.next} className="mt-20 md:mt-28">
              <Link
                href={casePath(locale, next.slug)}
                className="group block rounded-[1.25rem] border border-line-strong p-6 transition-colors duration-500 hover:border-ink hover:bg-paper-2 sm:p-10"
              >
                <span className="mono-label text-muted">
                  {labels.next} · {next.index}
                </span>
                <span className="mt-4 flex items-end justify-between gap-6">
                  <span className="display-md max-w-[24ch]">{next.title}</span>
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-colors duration-500 group-hover:bg-accent">
                    <ArrowRight size={20} />
                  </span>
                </span>
              </Link>
            </nav>
          </div>
        </article>
        <ContactSection t={t} />
      </main>
      <SiteFooter t={t} />
    </>
  );
}

function Meta({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <dt className="mono-label text-muted">{label}</dt>
      <dd className="mt-2 text-[0.9375rem] font-semibold">{children}</dd>
    </div>
  );
}

function CaseBlock({ number, label, children }: { number: string; label: string; children: ReactNode }) {
  const id = `case-section-${number}`;
  return (
    <section aria-labelledby={id} className="reveal grid gap-6 border-t border-line py-12 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-16 md:py-16">
      <h2 id={id} className="eyebrow self-start lg:sticky lg:top-28 lg:col-span-3">
        {number} · {label}
      </h2>
      <div className="max-w-3xl lg:col-span-9">{children}</div>
    </section>
  );
}
