import type { CSSProperties } from "react";
import { profile, type Dictionary, type Locale } from "@/content";
import { LocalClock } from "@/components/ui/local-time";
import { ArrowDown, ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import { SystemDiagram } from "./system-diagram";

export function Hero({ t, locale }: { t: Dictionary; locale: Locale }) {
  const { hero } = t;
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
      <div className="shell pt-10 pb-16 md:pt-16 md:pb-24">
        <p className="eyebrow">
          <span>
            <span className="text-ink">{profile.name}</span> · {hero.eyebrow}
          </span>
        </p>

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
            <dl className="mt-10 grid gap-2.5 border-t border-line pt-6 text-[0.9375rem]">
              {[hero.facts.now, hero.facts.before].map((fact) => (
                <div key={fact.label} className="grid grid-cols-[4.5rem_1fr] items-baseline gap-3">
                  <dt className="mono-label text-muted">{fact.label}</dt>
                  <dd className="text-ink-2">{fact.value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[4.5rem_1fr] items-baseline gap-3">
                <dt className="mono-label text-muted">{hero.facts.based.label}</dt>
                <dd className="text-ink-2">
                  {hero.facts.based.value}
                  <LocalClock locale={locale} timeZone={profile.timeZone} prefix=" · " />
                  <span className="text-muted"> (UTC−3)</span>
                </dd>
              </div>
            </dl>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-[0.9375rem]">
              <li>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-arrow link-draw hit-area inline-flex items-center gap-1.5">
                  LinkedIn
                  <ArrowUpRight size={15} />
                  <span className="sr-only">({t.a11y.newTab})</span>
                </a>
              </li>
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-arrow link-draw hit-area inline-flex items-center gap-1.5">
                  GitHub
                  <ArrowUpRight size={15} />
                  <span className="sr-only">({t.a11y.newTab})</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${profile.email}`} className="link-draw hit-area">
                  {profile.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="rise lg:col-span-7" style={{ "--i": 4 } as CSSProperties}>
            <SystemDiagram figure={hero.figure} hint={hero.figureHint} layers={hero.layers} />
          </div>
        </div>
      </div>
    </section>
  );
}
