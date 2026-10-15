import { profile, type Dictionary } from "@/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowUpRight, GitHubMark } from "@/components/ui/icons";

export function AiWorkflowSection({ t }: { t: Dictionary }) {
  const { aiWorkflow, a11y } = t;
  return (
    <section aria-labelledby="ai-workflow-title" className="on-night relative isolate overflow-hidden bg-night py-24 text-snow md:py-32">
      <div aria-hidden="true" className="night-grid absolute inset-0 -z-10" />
      <div className="shell">
        <SectionHeading id="ai-workflow-title" label={aiWorkflow.label} title={aiWorkflow.title} intro={aiWorkflow.intro} />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[1.25rem] border border-night-line bg-night-line md:mt-20 lg:grid-cols-3">
          {aiWorkflow.items.map((item, index) => (
            <li key={item.title} className="reveal flex flex-col bg-night-2 p-6 sm:p-8">
              <span className="mono-label text-signal" aria-hidden="true">
                0{index + 1}
              </span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em]">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-fog">{item.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.9375rem] text-fog">
          <span>{aiWorkflow.proof}</span>
          <a
            href={profile.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow inline-flex items-center gap-1.5 text-snow underline decoration-night-line underline-offset-4 transition-colors hover:decoration-signal"
          >
            <GitHubMark size={15} />
            {aiWorkflow.proofLink}
            <ArrowUpRight size={15} />
            <span className="sr-only">({a11y.newTab})</span>
          </a>
        </p>
      </div>
    </section>
  );
}
