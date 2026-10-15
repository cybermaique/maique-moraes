import type { ReactNode } from "react";

interface SectionHeadingProps {
  id: string;
  label: string;
  title: string;
  intro?: ReactNode;
}

/** Eyebrow + display heading, with an optional intro aligned to the right on wide screens. */
export function SectionHeading({ id, label, title, intro }: SectionHeadingProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
      <div className="lg:col-span-7">
        <p className="eyebrow">{label}</p>
        <h2 id={id} className="display-lg mt-5">
          {title}
        </h2>
      </div>
      {intro && <p className="max-w-xl text-lg leading-relaxed opacity-80 lg:col-span-5">{intro}</p>}
    </div>
  );
}
