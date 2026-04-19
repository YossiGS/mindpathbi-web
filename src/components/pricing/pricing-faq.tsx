"use client";

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
    q: "Why is pricing closed?",
    a: "We publish numbers when we\u2019re confident they will hold. Pre-launch, we\u2019d rather show them to you in the context of your channels.",
  },
  {
    q: "Is there a free trial?",
    a: "No. Design-partners are onboarded on a fixed, capped arrangement. Free time is spent on the walkthrough, not the dashboard.",
  },
  {
    q: "Do you charge per message?",
    a: "No. One seat rate, all inbound, all channels.",
  },
  {
    q: "Do seat prices scale down with volume?",
    a: "Yes. We cap the total spend for the cohort, then scale the per-seat rate as you grow.",
  },
  {
    q: "Can we renegotiate after the design-partner period?",
    a: "Yes. Every design-partner contract has a fixed re-rate window when public pricing opens.",
  },
];

export function PricingFaq() {
  return (
    <Section rule="top" tone="dossier" size="md">
      <Eyebrow num="03" tag="ARCHIVE · PRICING QUESTIONS">
        What partners ask before the access call
      </Eyebrow>

      <div className="mt-8 border-t border-[var(--color-rule)] pt-8">
        <Accordion type="single" collapsible className="w-full">
          {QUESTIONS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`pq-${i}`}
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
    </Section>
  );
}
