import type { CSSProperties } from "react";
import { profile, type Dictionary } from "@/content";
import { ArrowDown, ArrowRight } from "@/components/ui/icons";

export function Hero({ t }: { t: Dictionary }) {
  const { hero } = t;
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
      <div className="shell pt-10 pb-16 md:pt-16 md:pb-24">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="eyebrow">
            <span>
              <span className="text-ink">{profile.name}</span> · {hero.eyebrow}
            </span>
          </p>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/70 px-3.5 py-1.5 text-sm text-ink-2">
            <span className="live-dot" aria-hidden="true" />
            {hero.availability}
          </p>
        </div>

        <h1 id="hero-title" className="display-xl mt-8 md:mt-12">
          {hero.headline.map((line, index) => (
            <span
              key={line}
              className={`rise block ${index === 2 ? "text-accent" : ""}`}
              style={{ "--i": index } as CSSProperties}
            >
              {line}
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-12 md:mt-14 lg:grid-cols-12 lg:gap-16">
          <div className="rise lg:col-span-5" style={{ "--i": 3 } as CSSProperties}>
            <p className="max-w-[38rem] text-lg leading-relaxed text-ink-2 md:text-[1.1875rem]">{hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="btn btn-ink">
                {hero.ctaWork}
                <ArrowRight size={17} />
              </a>
              <a href={profile.resume} download="Maique-Moraes-Resume.pdf" className="btn btn-line">
                {hero.ctaResume}
                <ArrowDown size={17} />
                <span className="sr-only">(PDF)</span>
              </a>
            </div>
            <p className="mono-label mt-8 text-muted">{hero.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
