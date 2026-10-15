import type { Dictionary } from "@/content";

export function ApproachSection({ t }: { t: Dictionary }) {
  const { approach } = t;
  return (
    <section id="approach" aria-labelledby="approach-title" className="border-t border-line bg-paper-2/70 py-24 md:py-32">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">{approach.label}</p>
            <h2 id="approach-title" className="display-lg mt-5">
              {approach.title}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-2">{approach.intro}</p>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {approach.principles.map((principle, index) => (
            <li key={principle.title} className="reveal grid grid-cols-[3rem_1fr] gap-x-4 border-t border-line-strong py-8 first:border-t-0 first:pt-0 sm:grid-cols-[4rem_1fr] md:py-10">
              <span className="mono-label pt-2 text-accent" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-[1.75rem]">{principle.title}</h3>
                <p className="mt-3 max-w-[38rem] leading-relaxed text-ink-2">{principle.body}</p>
                <p className="mono-label mt-5 text-muted">→ {principle.evidence}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
