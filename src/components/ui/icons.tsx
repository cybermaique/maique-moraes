import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 18, className = "", ...rest }: IconProps, extraClass: string) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    focusable: false,
    className: `${extraClass} ${className}`.trim(),
    ...rest,
  };
}

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base(props, "icon-arrow shrink-0")}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeft(props: IconProps) {
  return (
    <svg {...base(props, "shrink-0")}>
      <path d="M20 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base(props, "icon-arrow icon-arrow-diagonal shrink-0")}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown(props: IconProps) {
  return (
    <svg {...base(props, "icon-arrow icon-arrow-down shrink-0")}>
      <path d="M12 4v15M6 13l6 6 6-6" />
    </svg>
  );
}

export function ArrowUp(props: IconProps) {
  return (
    <svg {...base(props, "shrink-0")}>
      <path d="M12 20V5M6 11l6-6 6 6" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...base(props, "shrink-0")}>
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props, "shrink-0")}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base(props, "shrink-0")}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base(props, "shrink-0")}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props, "shrink-0")}>
      <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/** Monogram: two strokes meeting at a shared midpoint — an "M" read as a connection. */
export function Monogram({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false" className={className}>
      <rect x="0.5" y="0.5" width="31" height="31" rx="8" fill="currentColor" />
      <path d="M8 22V10l8 7.5L24 10v12" stroke="var(--color-paper)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="17.5" r="2.1" fill="var(--color-signal)" />
    </svg>
  );
}
