import type { ReactNode } from "react";
import { fontVariables } from "@/app/fonts";
import { getDictionary, languageTags, type Locale } from "@/content";
import { introInitScript } from "@/lib/intro";
import { defaultTheme, themeInitScript } from "@/lib/theme";

/** Shared `<html>` shell for each locale's root layout. */
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getDictionary(locale);
  return (
    // The init script may change data-theme before hydration, hence suppressHydrationWarning.
    <html lang={languageTags[locale]} className={fontVariables} data-theme={defaultTheme} suppressHydrationWarning>
      {/* eslint-disable-next-line @next/next/no-head-element -- App Router root layout markup, not a Pages Router document. */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript + introInitScript }} />
      </head>
      <body id="top">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-ink px-5 py-3 font-semibold text-paper focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          {t.a11y.skip}
        </a>
        {children}
      </body>
    </html>
  );
}
