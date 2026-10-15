import { getDictionary, homePath, type Locale } from "@/content";
import { ContactSection, SiteFooter } from "@/components/layout/contact-section";
import { SiteHeader } from "@/components/layout/site-header";
import { ApproachSection } from "./approach-section";
import { BackgroundSection, ToolkitSection } from "./background-section";
import { ExperienceSection } from "./experience-section";
import { Hero } from "./hero";
import { NotesSection } from "./notes-section";
import { ProofStrip } from "./proof-strip";
import { WorkSection } from "./work-section";

export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const other: Locale = locale === "en" ? "pt" : "en";
  return (
    <>
      <SiteHeader
        locale={locale}
        homeHref={homePath(locale)}
        alternateHref={homePath(other)}
        nav={t.nav}
        a11y={t.a11y}
        trackSections
      />
      <main id="main">
        <Hero t={t} />
        <ProofStrip proof={t.proof} />
        <WorkSection t={t} locale={locale} />
        <ExperienceSection t={t} />
        <ApproachSection t={t} />
        <NotesSection t={t} />
        <ToolkitSection t={t} />
        <BackgroundSection t={t} />
        <ContactSection t={t} />
      </main>
      <SiteFooter t={t} />
    </>
  );
}
