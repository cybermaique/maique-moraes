"use client";

import { useState } from "react";
import type { BidDiagramCopy } from "@/content/types";

const rows = [
  { proposal: "P-1", widths: ["72%", "48%"] },
  { proposal: "P-2", widths: ["56%", "64%"] },
  { proposal: "P-3", widths: ["80%", "40%"] },
];

/**
 * Demonstrates the "fail clearly" decision: toggling a simulated supplier-service
 * timeout switches the BFF from a complete comparison to a controlled error.
 */
export function BidDiagram({ copy }: { copy: BidDiagramCopy }) {
  const [failed, setFailed] = useState(false);
  const sources = [
    { label: copy.proposals, down: false },
    { label: copy.suppliers, down: failed },
    { label: copy.access, down: false },
  ];

  return (
    <div className="dg" data-state={failed ? "failed" : "ok"}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="mono-label text-muted">{copy.title}</p>
        <button
          type="button"
          aria-pressed={failed}
          onClick={() => setFailed((value) => !value)}
          className={`btn min-h-10 px-4 text-sm ${failed ? "btn-ink" : "btn-line"}`}
        >
          <span aria-hidden="true" className={`size-2 rounded-full ${failed ? "bg-live" : "bg-alert"}`} />
          {failed ? copy.restore : copy.simulate}
        </button>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
        {sources.map((source) => (
          <div key={source.label} className="flex flex-col items-center">
            <div className="dg-node w-full" data-down={source.down}>
              <span className="dg-status" aria-hidden="true" />
              <span>{source.label}</span>
            </div>
            <span className="dg-wire" data-down={source.down} aria-hidden="true">
              {source.down && <span className="dg-cut">×</span>}
            </span>
          </div>
        ))}
      </div>

      <div className="dg-node dg-node-primary w-full">
        <span className="font-display text-lg font-semibold tracking-tight normal-case">{copy.bff}</span>
        <span className="text-[0.625rem] text-muted">NestJS</span>
      </div>
      <span className="dg-wire mx-auto" aria-hidden="true" />

      <div className="dg-result mx-auto w-full max-w-md" aria-hidden="true">
        {failed ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <span className="flex size-10 items-center justify-center rounded-full bg-alert-soft font-mono text-alert">!</span>
            <span className="font-semibold text-alert">{copy.failed}</span>
            <button type="button" tabIndex={-1} onClick={() => setFailed(false)} className="btn btn-line min-h-9 px-4 text-sm">
              ↻ {copy.retry}
            </button>
          </div>
        ) : (
          <div className="p-4">
            <p className="mono-label mb-3 flex items-center gap-2 text-live">
              <span className="size-2 rounded-full bg-live" />
              {copy.ready}
            </p>
            <div className="grid gap-2">
              {rows.map((row) => (
                <div key={row.proposal} className="grid grid-cols-[2.5rem_1fr_1fr] items-center gap-3 rounded-lg border border-line bg-paper px-3 py-2.5">
                  <span className="font-mono text-[0.6875rem] text-muted">{row.proposal}</span>
                  <span className="h-1.5 rounded-full bg-ink/25" style={{ width: row.widths[0] }} />
                  <span className="h-1.5 rounded-full bg-accent/60" style={{ width: row.widths[1] }} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <p aria-live="polite" className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-ink-2">
        {failed ? copy.failCaption : copy.okCaption}
      </p>
    </div>
  );
}
