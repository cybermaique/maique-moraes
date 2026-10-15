"use client";

import { useEffect, useRef } from "react";
import { introDurationMs } from "@/lib/intro";

interface EntranceScreenProps {
  name: string;
  role: string;
  place: string;
  enter: string;
  enterLabel: string;
}

/** Matches the longest exit animation in globals.css (the curtain lift). */
const exitDurationMs = 750;

/**
 * Full-screen entrance shown when a visitor arrives or reloads (decided before first paint
 * by lib/intro.ts, which sets `html[data-splash="show"]`). It enters by itself when the
 * button's progress bar fills (≈2 s), or immediately on any click or key press, then
 * lifts like a curtain while the page's opening sequence starts.
 */
export function EntranceScreen({ name, role, place, enter, enterLabel }: EntranceScreenProps) {
  const progressRef = useRef<HTMLSpanElement>(null);
  const enterRef = useRef<() => void>(() => {});

  useEffect(() => {
    const root = document.documentElement;
    if (root.dataset.splash !== "show") return;

    const listeners = new AbortController();
    let entered = false;

    const enterSite = () => {
      if (entered) return;
      entered = true;
      listeners.abort();
      root.dataset.splash = "leaving";
      root.dataset.intro = "play";
      window.setTimeout(() => delete root.dataset.intro, introDurationMs);
      window.setTimeout(() => delete root.dataset.splash, exitDurationMs);
    };
    enterRef.current = enterSite;

    // Enter by itself once the progress bar has filled — or right away if it already has.
    const progress = progressRef.current?.getAnimations()[0];
    if (!progress) {
      window.setTimeout(enterSite, 2200);
    } else if (progress.playState === "finished") {
      enterSite();
    } else {
      progress.finished.then(enterSite, enterSite);
    }

    // Any key enters (scrolling is locked in CSS while the screen is up).
    const onKey = (event: KeyboardEvent) => {
      if (!event.metaKey && !event.ctrlKey && !event.altKey) enterSite();
    };
    document.addEventListener("keydown", onKey, { signal: listeners.signal });

    return () => listeners.abort();
  }, []);

  return (
    <div className="entrance" onClick={() => enterRef.current()}>
      <div aria-hidden="true" className="entrance-grid" />
      <div className="entrance-inner">
        <div className="entrance-glow" aria-hidden="true" />
        <svg className="entrance-emblem" viewBox="0 0 120 120" fill="none" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="entrance-tile" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#272d29" />
              <stop offset="1" stopColor="#0a0c0b" />
            </linearGradient>
            <radialGradient id="entrance-gloss" cx="0.28" cy="0.2" r="0.8">
              <stop offset="0" stopColor="#ffffff" stopOpacity="0.24" />
              <stop offset="0.45" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="4" y="4" width="112" height="112" rx="30" fill="url(#entrance-tile)" />
          <rect x="4" y="4" width="112" height="112" rx="30" fill="url(#entrance-gloss)" />
          <rect x="4.5" y="4.5" width="111" height="111" rx="29.5" stroke="rgb(238 236 229 / 0.16)" />
          <path
            className="entrance-stroke"
            d="M30 82.5V37.5l30 28.1L90 37.5v45"
            pathLength={1}
            stroke="#eeece5"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle className="entrance-ring" cx="60" cy="65.6" r="7.5" stroke="#9aa6ff" strokeWidth="2" />
          <circle className="entrance-dot" cx="60" cy="65.6" r="7.5" fill="#9aa6ff" />
        </svg>

        <p className="entrance-name">{name}</p>
        <p className="entrance-role">
          {role}
          <br />
          <span className="text-fog">{place}</span>
        </p>

        <button type="button" className="entrance-enter" aria-label={enterLabel}>
          <span ref={progressRef} className="entrance-progress" aria-hidden="true" />
          <span className="relative">{enter}</span>
          <span className="entrance-enter-dot" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
