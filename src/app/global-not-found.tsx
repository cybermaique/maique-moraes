import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { fontVariables } from "./fonts";
import { en } from "@/content/en";
import { pt } from "@/content/pt";
import { Monogram } from "@/components/ui/icons";
import { defaultTheme, themeInitScript } from "@/lib/theme";

export const metadata: Metadata = {
  title: "404 — Maique Moraes",
  description: en.notFound.body,
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontVariables} data-theme={defaultTheme} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <main className="shell flex min-h-dvh flex-col justify-center py-16">
          <Link href="/" className="mb-16 inline-flex w-fit items-center gap-3" aria-label={en.a11y.home}>
            <Monogram className="text-ink" />
            <span className="font-display font-semibold">Maique Moraes</span>
          </Link>
          <p className="mono-label text-muted">Error 404</p>
          <h1 className="display-lg mt-4 max-w-[18ch]">{en.notFound.title}</h1>
          <p className="mt-6 max-w-xl text-lg text-ink-2">{en.notFound.body}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-ink">
              {en.notFound.cta}
            </Link>
            <Link href="/pt" lang="pt-BR" className="btn btn-line">
              {pt.notFound.cta}
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
