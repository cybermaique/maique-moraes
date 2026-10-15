"use client";

import { useEffect, useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/ui/icons";
import { defaultTheme, themeStorageKey, type Theme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

const readTheme = (): Theme => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

interface ThemeToggleProps {
  toLight: string;
  toDark: string;
  /** "icon" for the header; "labeled" shows the action as text (mobile menu). */
  variant?: "icon" | "labeled";
}

export function ThemeToggle({ toLight, toDark, variant = "icon" }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => defaultTheme);
  const next: Theme = theme === "dark" ? "light" : "dark";

  // Until the visitor picks a theme, keep following the operating system.
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: light)");
    const follow = (event: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem(themeStorageKey)) return;
      } catch {
        // Without storage there is no saved choice; keep following the system.
      }
      document.documentElement.dataset.theme = event.matches ? "light" : "dark";
    };
    query.addEventListener("change", follow);
    return () => query.removeEventListener("change", follow);
  }, []);

  function toggle() {
    const root = document.documentElement;
    root.classList.add("theme-transition");
    root.dataset.theme = next;
    try {
      localStorage.setItem(themeStorageKey, next);
    } catch {
      // Storage can be unavailable (private mode); the choice still applies to this page.
    }
    window.setTimeout(() => root.classList.remove("theme-transition"), 400);
  }

  const label = next === "light" ? toLight : toDark;
  // Both icons render; CSS picks one from html[data-theme], so the icon is right
  // from the first paint, before hydration knows the theme.
  const icon = (
    <>
      <SunIcon size={18} className="theme-icon-sun" />
      <MoonIcon size={18} className="theme-icon-moon" />
    </>
  );

  if (variant === "labeled") {
    return (
      <button type="button" onClick={toggle} className="btn btn-line w-full">
        {icon}
        {label}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="flex size-10 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
    >
      {icon}
    </button>
  );
}
