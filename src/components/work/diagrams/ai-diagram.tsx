"use client";

import { useState } from "react";
import type { AiDiagramCopy, AiRoute } from "@/content/types";
import { ShieldIcon } from "@/components/ui/icons";

/**
 * Demonstrates "separate knowledge from live state": each illustrative request
 * routes to a different lane, while services keep authority over identity and rules.
 */
export function AiDiagram({ copy }: { copy: AiDiagramCopy }) {
  const [activeId, setActiveId] = useState<AiRoute["id"]>("live");
  const active = copy.routes.find((route) => route.id === activeId) ?? copy.routes[0];

  return (
    <div className="dg">
      <p className="mono-label text-muted">{copy.title}</p>

      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-semibold">{copy.prompt}</legend>
        <div className="grid gap-2 md:grid-cols-3">
          {copy.routes.map((route) => (
            <button
              key={route.id}
              type="button"
              aria-pressed={route.id === activeId}
              onClick={() => setActiveId(route.id)}
              className="dg-request"
            >
              <span className="mono-label block text-[0.6875rem] text-muted">{route.lane}</span>
              <span className="mt-1.5 block leading-snug">“{route.request}”</span>
            </button>
          ))}
        </div>
      </fieldset>

      <span className="dg-wire mx-auto" aria-hidden="true" />
      <div className="dg-node dg-node-primary mx-auto w-full max-w-sm">
        <span className="font-display text-base font-semibold tracking-tight normal-case">{copy.model}</span>
        <span className="text-[0.6875rem] text-muted">LLM</span>
      </div>

      <span className="dg-wire mx-auto" aria-hidden="true" />
      {/* Fan-out from the model to the three lanes. */}
      <div className="dg-fan hidden md:grid" aria-hidden="true">
        {copy.routes.map((route) => (
          <span key={route.id} data-active={route.id === activeId} />
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {copy.routes.map((route) => {
          const isActive = route.id === activeId;
          return (
            <div key={route.id} className="dg-lane" data-active={isActive} aria-hidden={!isActive}>
              <p className="mono-label flex items-center justify-between">
                <span>{route.lane}</span>
                <span className="dg-lane-dot" />
              </p>
              <ol className={`mt-4 grid gap-2 ${isActive ? "" : "max-md:hidden"}`}>
                {route.steps.map((step, index) => (
                  <li key={`${activeId}-${step}`} className="dg-step" style={{ animationDelay: `${index * 140}ms` }}>
                    <span className="font-mono text-[0.6875rem] text-muted">0{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>

      <p className="dg-guard mt-3">
        <ShieldIcon size={16} />
        {copy.guard}
      </p>

      <p className="sr-only" aria-live="polite">
        {active.lane}: {active.steps.join(". ")}.
      </p>
    </div>
  );
}
