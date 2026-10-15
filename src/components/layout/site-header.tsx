"use client";

import { useEffect, useRef, useState } from "react";
// Import leaf modules directly so the full dictionaries never reach the client bundle.
import { profile } from "@/content/profile";
import { languageTags, type Dictionary, type Locale } from "@/content/types";
import { ArrowRight, ArrowUpRight, Monogram } from "@/components/ui/icons";

export const sectionIds = ["work", "experience", "approach", "contact"] as const;
type SectionId = (typeof sectionIds)[number];

interface SiteHeaderProps {
  locale: Locale;
  homeHref: string;
  alternateHref: string;
  nav: Dictionary["nav"];
  a11y: Dictionary["a11y"];
  /** Enables scroll-spy highlighting for in-page sections. */
  trackSections?: boolean;
}

export function SiteHeader({ locale, homeHref, alternateHref, nav, a11y, trackSections = false }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);
  const [tone, setTone] = useState<"paper" | "night">("paper");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const other: Locale = locale === "en" ? "pt" : "en";
  const sectionHref = (id: SectionId) => (trackSections ? `#${id}` : `${homeHref}#${id}`);

  // Close the mobile menu with Escape or an outside click.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  // Match the header to the section underneath it, so it never sits as a pale band on dark areas.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const header = headerRef.current;
      if (!header) return;
      const probeY = header.offsetHeight + 1;
      const below = document.elementFromPoint(window.innerWidth / 2, probeY);
      setTone(below?.closest(".on-night") ? "night" : "paper");
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  // Highlight the section currently crossing the middle of the viewport.
  useEffect(() => {
    if (!trackSections) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [trackSections]);

  const links: { id: SectionId; label: string }[] = [
    { id: "work", label: nav.work },
    { id: "experience", label: nav.experience },
    { id: "approach", label: nav.approach },
    { id: "contact", label: nav.contact },
  ];

  return (
    <header ref={headerRef} className="site-header sticky top-0 z-50" data-tone={tone}>
      <div className="shell flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
        <a href={homeHref} className="flex items-center gap-3 rounded-lg" aria-label={a11y.home}>
          <Monogram className="text-ink" />
          <span className="font-display text-[1.05rem] font-semibold tracking-[-0.01em]">Maique Moraes</span>
        </a>

        <nav aria-label={a11y.primaryNav} className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={sectionHref(link.id)}
                  className="nav-link relative text-[0.9375rem] text-ink-2 transition-colors hover:text-ink"
                  data-active={active === link.id}
                  aria-current={active === link.id ? "true" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={alternateHref}
            hrefLang={languageTags[other]}
            lang={languageTags[other]}
            aria-label={a11y.switchLanguage}
            className="mono-label flex h-10 items-center gap-1.5 rounded-full px-3 text-muted transition-colors hover:bg-paper-2 hover:text-ink"
          >
            <span className={locale === "en" ? "text-ink" : undefined}>EN</span>
            <span aria-hidden="true" className="text-line-strong">/</span>
            <span className={locale === "pt" ? "text-ink" : undefined}>PT</span>
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ink hidden min-h-10 px-4 text-sm sm:inline-flex"
          >
            {nav.resume}
            <ArrowUpRight size={15} />
            <span className="sr-only">(PDF, {a11y.newTab})</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="relative flex size-10 items-center justify-center rounded-full border border-line-strong md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? a11y.closeMenu : a11y.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              aria-hidden="true"
              className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1"}`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1"}`}
            />
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label={a11y.primaryNav}
        hidden={!open}
        className="border-t border-line bg-paper md:hidden"
      >
        <ul className="shell flex flex-col py-3">
          {links.map((link, index) => (
            <li key={link.id} className="border-b border-line last:border-none">
              <a
                href={sectionHref(link.id)}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 font-display text-2xl font-semibold tracking-tight"
              >
                <span>
                  <span className="mono-label mr-3 align-middle text-muted">0{index + 1}</span>
                  {link.label}
                </span>
                <ArrowRight />
              </a>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn btn-ink w-full">
              {nav.resume} · PDF
              <ArrowUpRight size={15} />
              <span className="sr-only">({a11y.newTab})</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
