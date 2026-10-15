import type { Dictionary } from "@/content";

export function ProofStrip({ proof }: { proof: Dictionary["proof"] }) {
  return (
    <section aria-label={proof.label} className="border-y border-line bg-paper-2/60">
      <dl className="shell grid grid-cols-2 lg:grid-cols-4">
        {proof.items.map((item, index) => (
          <div
            key={item.label}
            className={`flex flex-col gap-2 py-8 md:py-10 ${index % 2 === 1 ? "pl-5 sm:pl-8" : "pr-5 sm:pr-8"} ${
              index > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""
            } ${index % 2 === 1 ? "border-l border-line" : ""} ${index < 2 ? "border-b border-line lg:border-b-0" : ""}`}
          >
            <dt className="order-2 max-w-[16rem] text-sm leading-snug text-muted">{item.label}</dt>
            <dd className="order-1 font-display text-5xl font-semibold tracking-[-0.03em] md:text-6xl">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
