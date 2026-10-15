import { getDictionary, homePath, type Locale } from "@/content";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "./hero";
import { ProofStrip } from "./proof-strip";

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
      </main>
    </>
  );
}
