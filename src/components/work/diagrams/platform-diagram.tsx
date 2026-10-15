import type { PlatformDiagramCopy } from "@/content/types";
import { CheckIcon } from "@/components/ui/icons";

/** Static diagram: container/presentational boundaries inside each microfrontend, behind a CI gate. */
export function PlatformDiagram({ copy }: { copy: PlatformDiagramCopy }) {
  return (
    <div className="dg">
      <p className="mono-label text-muted">{copy.title}</p>

      <div className="mt-6 rounded-2xl border border-line-strong bg-paper/60 p-3 sm:p-4">
        <p className="mono-label flex items-center gap-2 px-1 pb-3 text-ink-2">
          <span aria-hidden="true" className="flex gap-1">
            <span className="size-1.5 rounded-full bg-ink/30" />
            <span className="size-1.5 rounded-full bg-ink/30" />
          </span>
          {copy.shell}
        </p>
        <ul className="grid gap-3 md:grid-cols-3">
          {copy.apps.map((app, index) => (
            <li key={index} className={`rounded-xl border border-line bg-paper p-3 ${index > 0 ? "max-md:hidden" : ""}`}>
              <p className="mono-label px-1 text-[0.625rem] text-muted">
                {app} 0{index + 1}
              </p>
              <div className="mt-3 rounded-lg border border-accent bg-accent-soft p-3">
                <p className="text-sm font-semibold text-accent-deep">{copy.container}</p>
                <ul className="mt-2 space-y-1 text-[0.8125rem] text-ink-2">
                  {copy.containerItems.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
              <p className="mono-label py-2 text-center text-[0.625rem] text-accent" aria-hidden="true">
                ↓ {copy.props}
              </p>
              <div className="rounded-lg border border-line-strong p-3">
                <p className="text-sm font-semibold">{copy.presentational}</p>
                <ul className="mt-2 space-y-1 text-[0.8125rem] text-ink-2">
                  {copy.presentationalItems.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="dg-guard mt-3">
        <CheckIcon size={16} />
        {copy.gate}
      </p>

      <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-ink-2">{copy.caption}</p>
    </div>
  );
}
