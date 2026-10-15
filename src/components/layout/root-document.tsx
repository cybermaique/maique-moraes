import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { fontVariables } from "@/app/fonts";
import { getDictionary, languageTags, profile, type Locale } from "@/content";
import { entranceInitScript } from "@/lib/intro";
import { defaultTheme, themeInitScript } from "@/lib/theme";
import { EntranceScreen } from "./entrance-screen";

/** Shared `<html>` shell for each locale's root layout. */
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getDictionary(locale);
  return (
    // The init script may change data-theme before hydration, hence suppressHydrationWarning.
    // data-scroll-behavior lets Next.js turn off the CSS smooth scroll during route changes,
    // so a new page opens at the top instead of stopping partway through the animation.
    <html
      lang={languageTags[locale]}
      className={fontVariables}
      data-theme={defaultTheme}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router root layout markup, not a Pages Router document. */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript + entranceInitScript }} />
      </head>
      <body id="top">
        <EntranceScreen name={profile.name} {...t.entrance} />
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-ink px-5 py-3 font-semibold text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          {t.a11y.skip}
        </a>
        {children}
        {/* Cookieless, aggregated page views (Vercel Web Analytics); see docs/content-review.md. */}
        <Analytics />
      </body>
    </html>
  );
}
