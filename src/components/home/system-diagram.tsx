"use client";

import { useState, type CSSProperties } from "react";
import type { Layer, LayerId } from "@/content/types";

interface SystemDiagramProps {
  figure: string;
  hint: string;
  layers: [Layer, Layer, Layer];
}

/**
 * Fig. 01 — three product layers. Each band is a toggle button; the selected
 * layer's description is announced politely. The travelling "request" and
 * "response" pulses are decorative and disabled for reduced motion.
 */
export function SystemDiagram({ figure, hint, layers }: SystemDiagramProps) {
  const [activeId, setActiveId] = useState<LayerId>("services");
  // Restart the pulse animation whenever the selection changes.
  const [cycle, setCycle] = useState(0);
  const active = layers.find((layer) => layer.id === activeId) ?? layers[0];

  function select(id: LayerId) {
    if (id === activeId) return;
    setActiveId(id);
    setCycle((value) => value + 1);
  }

  return (
    <figure className="system crop-marks rounded-[1.25rem] border border-line bg-paper/85 p-4 shadow-[0_1px_0_rgb(18_21_18/0.04),0_24px_60px_-32px_rgb(18_21_18/0.25)] backdrop-blur-sm sm:p-6">
      <figcaption className="mb-5 flex items-center justify-between gap-4">
        <span className="mono-label text-ink-2">{figure}</span>
        <span className="mono-label hidden text-muted sm:inline" aria-hidden="true">
          {hint} ↓
        </span>
      </figcaption>

      <div role="group" aria-label={`${figure}. ${hint}`}>
        {layers.map((layer, index) => (
          // --layer staggers the opening sequence (see globals.css, data-intro).
          <div key={layer.id} className="system-layer" style={{ "--layer": index } as CSSProperties}>
            <button
              type="button"
              className="system-band"
              aria-pressed={layer.id === activeId}
              onClick={() => select(layer.id)}
              onMouseEnter={() => select(layer.id)}
            >
              <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="flex items-baseline gap-3">
                  <span className="mono-label system-index">0{index + 1}</span>
                  <span className="font-display text-xl font-semibold tracking-tight sm:text-[1.375rem]">{layer.name}</span>
                </span>
                <span className="mono-label text-[0.6875rem] text-muted">{layer.stack}</span>
              </span>
              <span className="mt-4 grid grid-cols-3 gap-2" aria-hidden="true">
                {layer.nodes.map((node) => (
                  <span key={node} className="system-node">
                    {node}
                  </span>
                ))}
              </span>
            </button>
            {index < layers.length - 1 && (
              <span key={`${cycle}-${index}`} className="system-link" aria-hidden="true" style={{ "--d": `${index * 0.6}s` } as CSSProperties}>
                <span />
                <span className="system-link-down">{index === 0 && <em>request</em>}</span>
                <span className="system-link-up">{index === 0 && <em>response</em>}</span>
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="mt-5 flex gap-3 border-t border-line pt-5 text-[0.9375rem] leading-relaxed text-ink-2" aria-live="polite">
        <span className="mono-label mt-[0.2rem] shrink-0 text-accent">→ {active.name}</span>
        <span>{active.body}</span>
      </p>
    </figure>
  );
}
