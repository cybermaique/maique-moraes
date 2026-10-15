import Link from "next/link";
import { casePath, type Dictionary, type Locale } from "@/content";
import { CaseArt } from "@/components/work/case-art";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight } from "@/components/ui/icons";

export function WorkSection({ t, locale }: { t: Dictionary; locale: Locale }) {
  return (
    <section id="work" aria-labelledby="work-title" className="on-night bg-night py-24 text-snow md:py-32">
      <div className="shell">
        <SectionHeading id="work-title" label={t.work.label} title={t.work.title} intro={t.work.intro} />

        <ol className="mt-16 grid gap-6 md:mt-20">
          {t.cases.map((study) => (
            <li key={study.slug} className="reveal">
              <article className="work-card group relative grid overflow-hidden rounded-[1.25rem] border border-night-line bg-night-2 lg:grid-cols-12">
                <div className="work-card-art relative border-b border-night-line text-snow lg:col-span-5 lg:border-r lg:border-b-0">
                  <span className="mono-label absolute top-5 left-5 text-fog">{study.index}</span>
                  <CaseArt kind={study.diagram.kind} />
                </div>
                <div className="flex flex-col p-6 sm:p-8 lg:col-span-7 lg:p-10">
                  <p className="mono-label text-fog">
                    {study.company} <span aria-hidden="true">·</span> {study.domain}
                  </p>
                  <h3 className="display-md mt-4 max-w-[22ch]">
                    <Link href={casePath(locale, study.slug)} className="after:absolute after:inset-0 after:content-['']">
                      {study.title}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-[46rem] leading-relaxed text-fog">{study.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.caseStudy.stack}>
                    {study.stack.slice(0, 6).map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span aria-hidden="true" className="mt-8 inline-flex items-center gap-2 pt-2 font-semibold text-signal lg:mt-auto">
                    {t.work.cta}
                    <ArrowRight size={17} className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ol>

        <p className="mono-label mt-10 text-fog">{t.work.note}</p>
      </div>
    </section>
  );
}
