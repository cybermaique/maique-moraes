import Link from "next/link";
import { getDictionary, homePath, type Locale } from "@/content";
import { ArrowLeft, Monogram } from "@/components/ui/icons";

/** Branded 404 rendered inside each locale's root layout. */
export function NotFoundPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <main id="main" className="relative isolate flex min-h-dvh flex-col justify-center overflow-hidden">
      <div aria-hidden="true" className="blueprint absolute inset-0 -z-10" />
      <div className="shell py-16">
        <Link href={homePath(locale)} className="mb-16 inline-flex w-fit items-center gap-3" aria-label={t.a11y.home}>
          <Monogram className="text-ink" />
          <span className="font-display font-semibold">Maique Moraes</span>
        </Link>
        <p className="mono-label text-muted">404</p>
        <h1 className="display-lg mt-4 max-w-[18ch]">{t.notFound.title}</h1>
        <p className="mt-6 max-w-xl text-lg text-ink-2">{t.notFound.body}</p>
        <Link href={homePath(locale)} className="btn btn-ink mt-10 w-fit">
          <ArrowLeft size={17} />
          {t.notFound.cta}
        </Link>
      </div>
    </main>
  );
}
