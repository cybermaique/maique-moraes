import type { ReactNode } from "react";
import { fontVariables } from "@/app/fonts";
import { getDictionary, languageTags, type Locale } from "@/content";

/** Shared `<html>` shell for each locale's root layout. */
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getDictionary(locale);
  return (
    <html lang={languageTags[locale]} className={fontVariables}>
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
