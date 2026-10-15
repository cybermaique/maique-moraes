import type { Dictionary } from "@/content";

export function ToolkitSection({ t }: { t: Dictionary }) {
  const { toolkit } = t;
  return (
    <section aria-labelledby="toolkit-title" className="border-t border-line pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="shell">
        <p className="eyebrow">{toolkit.label}</p>
        <h2 id="toolkit-title" className="display-lg mt-5">
          {toolkit.title}
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {toolkit.groups.map((group) => (
            <div key={group.name} className="reveal border-t border-ink pt-5">
              <h3 className="mono-label text-ink">{group.name}</h3>
              <ul className="mt-5 space-y-2 text-[0.9375rem] text-ink-2">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted">{toolkit.also}</p>
      </div>
    </section>
  );
}

export function BackgroundSection({ t }: { t: Dictionary }) {
  const { background } = t;
  const facts = [background.education, background.languages, background.community];
  return (
    <section aria-labelledby="background-title" className="pb-24 md:pb-32">
      <div className="shell">
        <div className="grid gap-14 border-t border-line pt-16 md:pt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">{background.label}</p>
            <h2 id="background-title" className="display-lg mt-5">
              {background.title}
            </h2>
            <dl className="mt-10 space-y-6">
              {facts.map((fact) => (
                <div key={fact.label} className="grid gap-1 border-t border-line pt-4 sm:grid-cols-[8rem_1fr] sm:gap-4">
                  <dt className="mono-label pt-0.5 text-muted">{fact.label}</dt>
                  <dd className="leading-relaxed text-ink-2">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="reveal crop-marks self-start rounded-[1.25rem] bg-paper-2 p-8 sm:p-10 lg:col-span-7 lg:mt-16">
            <span aria-hidden="true" className="block font-display text-7xl leading-[0.6] font-semibold text-accent">
              “
            </span>
            <blockquote className="mt-4 text-[1.375rem] leading-[1.45] font-medium tracking-[-0.01em] md:text-[1.625rem]">
              <p>{background.quote.text}</p>
            </blockquote>
            <figcaption className="mt-8 border-t border-line-strong pt-5">
              <p className="font-semibold">{background.quote.author}</p>
              <p className="mt-1 text-sm text-muted">{background.quote.context}</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
