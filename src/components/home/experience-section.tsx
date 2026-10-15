import type { Dictionary, Role } from "@/content";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection({ t }: { t: Dictionary }) {
  const { experience } = t;
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-24 md:py-32">
      <div className="shell">
        <SectionHeading id="experience-title" label={experience.label} title={experience.title} intro={experience.intro} />

        <ol className="mt-16 border-t border-line-strong md:mt-20">
          {experience.roles.map((role, index) => (
            <li key={role.company} className="reveal border-b border-line">
              <RoleRow role={role} current={index === 0 ? experience.current : undefined} stackLabel={t.caseStudy.stack} />
            </li>
          ))}
        </ol>

        <h3 className="mono-label mt-16 text-muted">{experience.earlierTitle}</h3>
        <ol className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {experience.earlier.map((role) => (
            <li key={role.company} className="flex flex-col bg-paper p-6">
              <p className="mono-label text-muted">
                <time dateTime={role.start}>{role.period}</time>
              </p>
              <p className="mt-4 font-display text-xl font-semibold tracking-tight">{role.company}</p>
              <p className="mt-1 text-sm text-ink-2">
                {role.role} · {role.domain}
              </p>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">{role.highlights[0]}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function RoleRow({ role, current, stackLabel }: { role: Role; current?: string; stackLabel: string }) {
  return (
    <article className="grid gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-12">
      <div className="md:col-span-3">
        <p className="mono-label flex items-center gap-2.5 text-ink-2">
          <span
            aria-hidden="true"
            className={`size-2 rounded-full ${current ? "bg-accent shadow-[0_0_0_4px_var(--color-accent-soft)]" : "border border-line-strong"}`}
          />
          <time dateTime={role.start}>{role.period}</time>
        </p>
        {current && (
          <p className="mt-3 inline-flex rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent-deep">{current}</p>
        )}
      </div>
      <div className="md:col-span-9">
        <h3 className="display-md">{role.company}</h3>
        <p className="mt-2 text-ink-2">
          <span className="font-semibold">{role.role}</span>
          <span className="text-muted"> · {role.domain}</span>
        </p>
        <ul className="mt-6 grid gap-3 lg:grid-cols-2 lg:gap-x-10">
          {role.highlights.map((highlight) => (
            <li key={highlight} className="relative pl-5 leading-relaxed text-ink-2">
              <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-accent" />
              {highlight}
            </li>
          ))}
        </ul>
        {role.stack && (
          <ul className="mt-6 flex flex-wrap gap-2" aria-label={stackLabel}>
            {role.stack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
