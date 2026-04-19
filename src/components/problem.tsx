import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";

const PAIN_POINTS = [
  {
    num: "A",
    title: "Every rep answers differently.",
    body:
      "Your best seller knows the catalog like a mechanic. Your new hire guesses. The customer notices the difference on the first reply.",
  },
  {
    num: "B",
    title: "The answer exists — just not in the thread.",
    body:
      "Spec sheets, pricing terms, return windows, engagement clauses — buried in drives, wikis, and the head of one senior person.",
  },
  {
    num: "C",
    title: "Context dies between channels.",
    body:
      "The customer starts on chat, moves to email, and asks again on WhatsApp. Each handoff costs trust and resets the case.",
  },
];

export function Problem() {
  return (
    <Section rule="top" tone="paper-2" size="sm" id="situation">
      <Eyebrow num="SITUATION" tag="THE SHAPE OF THE PROBLEM">
        What technical sales teams deal with every day
      </Eyebrow>
      <div className="mt-8 grid gap-6 border-t border-[var(--color-rule)] pt-8 md:grid-cols-3">
        {PAIN_POINTS.map((p) => (
          <div key={p.num} className="flex flex-col gap-3">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                [{p.num}]
              </span>
              <div className="h-px flex-1 bg-[var(--color-rule)]" />
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-[var(--color-ink)]">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--color-muted)]">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
