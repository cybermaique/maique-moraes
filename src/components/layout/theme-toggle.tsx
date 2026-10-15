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

export function ThemeToggle({ toLight, toDark }: { toLight: string; toDark: string }) {
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

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={next === "light" ? toLight : toDark}
      title={next === "light" ? toLight : toDark}
      className="flex size-10 items-center justify-center rounded-full text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
    >
      {theme === "dark" ? <SunIcon size={18} /> : <MoonIcon size={18} />}
    </button>
  );
}
