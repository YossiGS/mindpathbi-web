import * as React from "react";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QUESTIONS = [
  {
    q: "How is this different from a CRM?",
    a: "A CRM records what already happened. MindPath BI sits on the drafting surface itself — it reads the thread, pulls the right page of your playbook, and drafts the reply your rep ships. The record-keeping is a by-product, not the job.",
  },
  {
    q: "Does the AI ever answer without your team's review?",
    a: "By default, no. Every draft lands in the rep's surface with a cite-your-source trail; a human clicks send. Autonomous send can be enabled per-intent, per-account, once you've watched the draft quality for a while.",
  },
  {
    q: "Do you train on our data?",
    a: "No. Your conversations, documents, and corrections are used to serve your team and to refine the model in your tenant only. We do not pool tenant data to train shared models.",
  },
  {
    q: "Which channels are live today?",
    a: "The list in the [CHANNELS] section is current. We add new surfaces when a design-partner needs one, not on a marketing cadence — so if the one you need is marked SOON, mention it in your access request.",
  },
  {
    q: "How long does it take to feel the difference?",
    a: "Most teams see the AI suggesting meaningful first drafts within the first week of connecting their knowledge base. Real behavioural shift — junior reps handling threads that used to escalate — shows up in the second month, not the first.",
  },
  {
    q: "Can my customer tell I'm using this?",
    a: "No. Replies go out natively on whatever channel the customer started on — Gmail looks like Gmail, WhatsApp looks like WhatsApp. The system sits behind your team, not between your team and the customer.",
  },
  {
    q: "What does pricing look like?",
    a: "Closed until public launch. Design-partner cohorts get a fixed, capped arrangement — we'll walk through the numbers on the access call.",
  },
];

export function FAQ() {
  return (
    <Section id="faq" rule="top" size="md" tone="paper">
      <Eyebrow num="ARCHIVE" tag="STRAIGHT ANSWERS">
        The questions that come up twice a week
      </Eyebrow>

      <div className="mt-8 grid gap-10 border-t border-[var(--color-rule)] pt-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4">
          <h2 className="text-2xl font-semibold tracking-[-0.01em] text-[var(--color-ink)] md:text-[32px] md:leading-[1.08]">
            Before you ask on the access call.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
            If your question isn&apos;t here, add it to the note field in the access form — we&apos;ll answer by email before we schedule.
          </p>
        </div>

        <div className="md:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {QUESTIONS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`q-${i}`}
                className="border-b border-[var(--color-rule)] first:border-t"
              >
                <AccordionTrigger className="py-5 text-left text-[15px] font-medium text-[var(--color-ink)] hover:no-underline">
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
                      [Q{String(i + 1).padStart(2, "0")}]
                    </span>
                    <span>{item.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[14px] leading-relaxed text-[var(--color-muted)]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}
