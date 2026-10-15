"use client";

import { useSyncExternalStore } from "react";
import { languageTags, type Locale } from "@/content/types";

// A minute-resolution clock as an external store: the snapshot only changes once per minute,
// and the server snapshot is `null`, so nothing time-dependent is rendered before hydration.
function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 15_000);
  return () => window.clearInterval(id);
}
const getMinute = () => Math.floor(Date.now() / 60_000);
const getServerMinute = () => null;

function useMinute(): number | null {
  return useSyncExternalStore(subscribe, getMinute, getServerMinute);
}

function formatTime(minute: number, locale: Locale, timeZone: string) {
  return new Intl.DateTimeFormat(languageTags[locale], { hour: "numeric", minute: "2-digit", timeZone }).format(
    new Date(minute * 60_000),
  );
}

function formatDuration(totalMinutes: number) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  // Non-breaking spaces keep "3 h" and "30 min" together when the sentence wraps.
  return minutes ? `${hours}\u00a0h ${minutes}\u00a0min` : `${hours}\u00a0h`;
}

interface ClockProps {
  locale: Locale;
  timeZone: string;
}

/** Current time in the given zone, e.g. " · 2:32 PM". Renders nothing until hydrated. */
export function LocalClock({ locale, timeZone, prefix = "" }: ClockProps & { prefix?: string }) {
  const minute = useMinute();
  if (minute === null) return null;
  return (
    <>
      {prefix}
      <time className="tabular-nums" dateTime={new Date(minute * 60_000).toISOString()}>
        {formatTime(minute, locale, timeZone)}
      </time>
    </>
  );
}

interface TimeDifferenceProps extends ClockProps {
  /** Fixed UTC offset of the target zone, in minutes. */
  utcOffsetMinutes: number;
  templates: { ahead: string; behind: string; same: string };
  className?: string;
}

/** "It’s 2:32 PM in João Pessoa — 3 h ahead of you", relative to the visitor's own zone. */
export function TimeDifference({ locale, timeZone, utcOffsetMinutes, templates, className }: TimeDifferenceProps) {
  const minute = useMinute();
  if (minute === null) return null;

  const visitorOffset = -new Date(minute * 60_000).getTimezoneOffset();
  const difference = utcOffsetMinutes - visitorOffset;
  const template = difference === 0 ? templates.same : difference > 0 ? templates.ahead : templates.behind;
  const text = template
    .replace("{time}", formatTime(minute, locale, timeZone))
    .replace("{diff}", formatDuration(Math.abs(difference)));

  return (
    <p className={className}>
      <span aria-hidden="true" className="live-dot mt-[0.45em] shrink-0" />
      <span>{text}</span>
    </p>
  );
}
