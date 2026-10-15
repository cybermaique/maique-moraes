import Link from "next/link";
import { articlePath, type Dictionary, type Locale } from "@/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight } from "@/components/ui/icons";

export function NotesSection({ t, locale }: { t: Dictionary; locale: Locale }) {
  const { notes } = t;
  return (
    <section id="notes" aria-labelledby="notes-title" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading id="notes-title" label={notes.label} title={notes.title} intro={notes.intro} />

        <ul className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2">
          {notes.items.map((note, index) => (
            <li key={note.title} className="reveal">
              <article className="flex h-full flex-col rounded-[1.25rem] border border-line bg-paper p-6 transition-colors duration-500 hover:border-line-strong sm:p-8">
                <p className="mono-label flex items-center justify-between gap-4 text-muted">
                  <span>{note.tag}</span>
                  <span aria-hidden="true">N° 0{index + 1}</span>
                </p>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em]">{note.title}</h3>
                <p className="mt-4 leading-relaxed text-ink-2">{note.body}</p>
                <div className="mt-auto pt-8">
                  <p className="border-l-2 border-accent bg-accent-soft/50 py-3 pr-4 pl-4 text-[0.9375rem] leading-relaxed">
                    <span className="mono-label mb-1 block text-accent-deep">{notes.lessonLabel}</span>
                    {note.lesson}
                  </p>
                  {note.article && (
                    <Link
                      href={articlePath(locale, note.article)}
                      className="group mt-6 inline-flex items-center gap-2 rounded font-semibold text-accent-deep"
                    >
                      {notes.readArticle}
                      <span className="sr-only">: {note.title}</span>
                      <ArrowRight size={17} className="transition-transform duration-500 group-hover:translate-x-1" />
                    </Link>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
