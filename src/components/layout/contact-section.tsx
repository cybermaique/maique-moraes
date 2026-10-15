import { profile, type Dictionary, type Locale } from "@/content";
import { TimeDifference } from "@/components/ui/local-time";
import { ArrowDown, ArrowUp, ArrowUpRight, GitHubMark } from "@/components/ui/icons";
import { CopyEmail } from "./copy-email";

/** Closing call to action, shared by every page. */
export function ContactSection({ t, locale }: { t: Dictionary; locale: Locale }) {
  const { contact, a11y } = t;
  const external = [
    { label: "LinkedIn", href: profile.linkedin, meta: "/in/maique-moraes" },
    { label: "GitHub", href: profile.github, meta: "@cybermaique" },
  ];
  return (
    <section id="contact" aria-labelledby="contact-title" className="on-night relative isolate overflow-hidden bg-night text-snow">
      <div aria-hidden="true" className="night-grid absolute inset-0 -z-10" />
      <div className="shell pt-24 pb-24 md:pt-32 md:pb-32">
        <p className="eyebrow">{contact.label}</p>
        <h2 id="contact-title" className="display-xl mt-6 max-w-[16ch]">
          {contact.title}
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="max-w-xl text-lg leading-relaxed text-fog md:text-xl">{contact.body}</p>
            <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-fog/80">{contact.hours}</p>
            <TimeDifference
              locale={locale}
              timeZone={profile.timeZone}
              utcOffsetMinutes={profile.utcOffsetMinutes}
              templates={contact.timeDiff}
              className="mt-8 flex items-start gap-2.5 font-mono text-[0.8125rem] leading-relaxed text-fog"
            />
          </div>

          <div className="lg:col-span-6">
            <a
              href={`mailto:${profile.email}`}
              className="link-arrow group block border-b border-night-line pb-5 font-display text-[clamp(1.35rem,3.4vw,2.5rem)] font-semibold tracking-[-0.02em] break-all transition-colors hover:text-signal"
            >
              {profile.email}
              <ArrowUpRight size={28} className="ml-2 inline align-[-0.1em]" />
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-snow">
                {contact.emailCta}
                <ArrowUpRight size={16} />
              </a>
              <CopyEmail email={profile.email} label={contact.copy} copied={contact.copied} failed={contact.copyFailed} />
            </div>

            <ul className="mt-10 grid border-t border-night-line">
              {external.map((link) => (
                <li key={link.label} className="border-b border-night-line">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow flex items-center justify-between gap-4 py-5 transition-colors hover:text-signal"
                  >
                    <span className="text-lg font-semibold">{link.label}</span>
                    <span className="flex items-center gap-3 font-mono text-sm text-fog">
                      {link.meta}
                      <ArrowUpRight size={18} />
                    </span>
                    <span className="sr-only">({a11y.newTab})</span>
                  </a>
                </li>
              ))}
              <li className="border-b border-night-line">
                <a
                  href={profile.resume}
                  download="Maique-Moraes-Resume.pdf"
                  className="flex items-center justify-between gap-4 py-5 transition-colors hover:text-signal"
                >
                  <span className="text-lg font-semibold">{contact.resume}</span>
                  <ArrowDown size={18} className="text-fog" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter({ t }: { t: Dictionary }) {
  return (
    <footer className="on-night bg-night text-snow">
      <div className="shell pb-10">
        <div className="flex flex-col gap-4 border-t border-night-line pt-8 text-sm text-fog sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. {t.contact.footer}
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={profile.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className="hit-area inline-flex items-center gap-2 transition-colors hover:text-snow"
            >
              <GitHubMark size={15} />
              {t.contact.viewSource}
              <span className="sr-only">({t.a11y.newTab})</span>
            </a>
            <a href="#top" className="hit-area inline-flex items-center gap-2 transition-colors hover:text-snow">
              {t.contact.backToTop}
              <ArrowUp size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
