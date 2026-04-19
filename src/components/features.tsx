import * as React from "react";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";

type Capability = {
  code: string;
  title: string;
  verb: string;
  body: string;
};

const CAPABILITIES: Capability[] = [
  {
    code: "01",
    title: "Classify",
    verb: "triage",
    body:
      "Every inbound is tagged the moment it lands — intent, urgency, account. No fixed taxonomy; the system learns your categories from the threads your team already handles well.",
  },
  {
    code: "02",
    title: "Retrieve",
    verb: "cite",
    body:
      "Catalog pages, pricing terms, engagement clauses, return windows — pulled beside the thread, with the source document cited line by line.",
  },
  {
    code: "03",
    title: "Suggest",
    verb: "draft",
    body:
      "A grounded first draft, matched to the customer's tone and the account's history — so your rep edits a reply rather than writing one from a blank page.",
  },
  {
    code: "04",
    title: "Act",
    verb: "execute",
    body:
      "Quote, ship, refund, schedule. Actions flow through your ERP, commerce, and billing systems — never a copy-paste between tabs.",
  },
  {
    code: "05",
    title: "Learn",
    verb: "adapt",
    body:
      "The model sharpens on your actual sent messages — the edits your senior reps make are the signal. What shipped yesterday tunes what's suggested tomorrow.",
  },
  {
    code: "06",
    title: "Score",
    verb: "surface",
    body:
      "Account health, response quality, drift from brand voice — summarized in a single pane so managers see the room, not just the row.",
  },
];

export function Features() {
  return (
    <Section id="capabilities" rule="top" size="md" tone="paper">
      <Eyebrow num="SPEC" tag="CAPABILITY MATRIX">
        Six movements, one drafting surface
      </Eyebrow>

      <div className="mt-6 flex items-baseline justify-between gap-6 border-t border-[var(--color-rule)] pt-8">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-[var(--color-ink)] md:text-[44px] md:leading-[1.04]">
          The pattern under every reply your team sends.
        </h2>
        <p className="hidden max-w-sm text-sm leading-relaxed text-[var(--color-muted)] md:block">
          Same six moves, whether the channel is WhatsApp, a quote request, or a renewal email. Your reps don&apos;t switch modes — the surface does.
        </p>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden border border-[var(--color-rule)] bg-[var(--color-rule)] md:grid-cols-3">
        {CAPABILITIES.map((c) => (
          <article
            key={c.code}
            className="group relative flex min-h-[220px] flex-col justify-between bg-[var(--color-paper)] p-6 transition-colors hover:bg-[var(--color-paper-2)]"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                <span className="text-[var(--color-accent)]">[{c.code}]</span>
                <span className="text-[var(--color-accent)]">·{c.verb}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                {c.title}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              {c.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
