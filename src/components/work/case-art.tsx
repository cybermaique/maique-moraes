import type { DiagramCopy } from "@/content/types";

/**
 * Original, decorative miniatures for the work cards. They abstract the idea of
 * each case study — no product UI, client data, or internal topology.
 */
export function CaseArt({ kind }: { kind: DiagramCopy["kind"] }) {
  return (
    <svg viewBox="0 0 400 300" fill="none" aria-hidden="true" focusable="false" className="case-art h-auto w-full">
      <defs>
        <pattern id={`grid-${kind}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" stroke="currentColor" strokeOpacity="0.06" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill={`url(#grid-${kind})`} />
      {kind === "bid" && <BidArt />}
      {kind === "ai" && <AiArt />}
      {kind === "platform" && <PlatformArt />}
    </svg>
  );
}

/** Proposals joined with suppliers into one comparison; one column fully verified. */
function BidArt() {
  const columns = [88, 178, 268];
  const rows = [118, 148, 178, 208];
  return (
    <g>
      <rect x="60" y="62" width="280" height="186" rx="10" stroke="currentColor" strokeOpacity="0.28" />
      <path d="M60 98h280" stroke="currentColor" strokeOpacity="0.28" />
      {columns.map((x, column) => (
        <g key={x}>
          <rect x={x} y="74" width="44" height="12" rx="6" fill="currentColor" fillOpacity={column === 1 ? 0 : 0.22} />
          {column === 1 && <rect x={x} y="74" width="44" height="12" rx="6" className="art-signal-fill" />}
          {rows.map((y, row) => (
            <rect
              key={y}
              x={x}
              y={y - 6}
              width={[56, 40, 64, 32][(row + column) % 4]}
              height="6"
              rx="3"
              fill="currentColor"
              fillOpacity={column === 1 ? 0.55 : 0.18}
            />
          ))}
        </g>
      ))}
      <rect x="168" y="66" width="64" height="174" rx="8" className="art-signal-stroke" strokeWidth="1.5" />
      <circle cx="232" cy="66" r="11" className="art-signal-fill" />
      <path d="m226.5 66 4 4 7-8" stroke="var(--color-night)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 130h20M40 180h20M340 155h24" stroke="currentColor" strokeOpacity="0.35" strokeDasharray="3 4" />
      <circle cx="36" cy="130" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="36" cy="180" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="368" cy="155" r="3" className="art-signal-fill" />
    </g>
  );
}

/** One request branching into knowledge, live data, and action — above a guard rail. */
function AiArt() {
  // Glyphs: a document (knowledge), a pulse (live data), a pencil (action).
  const targets = [
    { y: 82, glyph: "M290 72h14l6 6v16h-20zM294 82h10M294 87h10M294 92h6" },
    { y: 150, glyph: "M282 150h8l4-9 6 18 5-14 3 5h10" },
    { y: 218, glyph: "M290 228l3-9 13-13 6 6-13 13zM302 210l6 6" },
  ];
  return (
    <g>
      <circle cx="96" cy="150" r="34" stroke="currentColor" strokeOpacity="0.3" />
      <circle cx="96" cy="150" r="20" className="art-signal-fill" />
      <circle cx="96" cy="150" r="48" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="2 5" />
      {targets.map((target, index) => (
        <g key={target.y}>
          <path
            d={`M130 150 C 190 150, 200 ${target.y}, 262 ${target.y}`}
            stroke="currentColor"
            strokeOpacity={index === 1 ? 0 : 0.35}
            strokeWidth="1.5"
          />
          {index === 1 && <path d="M130 150 H262" className="art-signal-stroke" strokeWidth="1.5" />}
          <rect x="262" y={target.y - 18} width="76" height="36" rx="18" stroke="currentColor" strokeOpacity="0.35" />
          <path
            d={target.glyph}
            stroke="currentColor"
            strokeOpacity="0.85"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={index === 1 ? "art-signal-stroke" : undefined}
          />
        </g>
      ))}
      <path d="M248 252h104" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
      {[256, 276, 296, 316, 336].map((x) => (
        <path key={x} d={`M${x} 252l8 10`} stroke="currentColor" strokeOpacity="0.35" />
      ))}
      <path d="M300 52v-14" stroke="currentColor" strokeOpacity="0.3" strokeDasharray="3 4" />
    </g>
  );
}

/** A shell with three microfrontends, each split into container and presentation, above a CI gate. */
function PlatformArt() {
  const apps = [72, 160, 248];
  return (
    <g>
      <rect x="52" y="46" width="296" height="168" rx="12" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M52 72h296" stroke="currentColor" strokeOpacity="0.3" />
      <circle cx="68" cy="59" r="3" fill="currentColor" fillOpacity="0.35" />
      <circle cx="80" cy="59" r="3" fill="currentColor" fillOpacity="0.35" />
      {apps.map((x, index) => (
        <g key={x}>
          <rect x={x} y="88" width="80" height="108" rx="8" stroke="currentColor" strokeOpacity="0.35" />
          <rect x={x + 10} y="98" width="60" height="34" rx="5" className={index === 1 ? "art-signal-fill" : undefined} fill={index === 1 ? undefined : "currentColor"} fillOpacity={index === 1 ? undefined : 0.22} />
          <path d={`M${x + 40} 132v12`} stroke="currentColor" strokeOpacity="0.45" strokeDasharray="2 3" />
          <rect x={x + 10} y="144" width="60" height="40" rx="5" stroke="currentColor" strokeOpacity="0.45" />
          <rect x={x + 18} y="154" width="30" height="5" rx="2.5" fill="currentColor" fillOpacity="0.35" />
          <rect x={x + 18} y="166" width="44" height="5" rx="2.5" fill="currentColor" fillOpacity="0.2" />
        </g>
      ))}
      <path d="M52 246h296" className="art-signal-stroke" strokeWidth="1.5" />
      {[112, 200, 288].map((x) => (
        <g key={x}>
          <path d={`M${x} 214v24`} stroke="currentColor" strokeOpacity="0.3" strokeDasharray="3 4" />
          <circle cx={x} cy="246" r="9" fill="var(--color-night-2)" className="art-signal-stroke" strokeWidth="1.5" />
          <path d={`m${x - 4} 246 3 3 5-6`} className="art-signal-stroke" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      ))}
    </g>
  );
}
