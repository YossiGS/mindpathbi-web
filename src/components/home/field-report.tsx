"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import { InboxMock } from "@/components/mocks/inbox-mock";
import { Visible } from "@/components/lazy/visible";

const BEATS = [
  {
    code: "T-00:00",
    heading: "A Monday morning inbox.",
    body:
      "Seven threads open across five channels. A rush quote from a procurement lead. A DM about a finish spec. An MSA with a note in Section 4.2. The team has thirty-one minutes until the day starts filling up.",
  },
  {
    code: "T-00:04",
    heading: "Classify, silently.",
    body:
      "The system tags each thread the moment it lands. Intent, urgency, account, channel. No fixed taxonomy — the labels are learned from what your senior reps already mark as theirs.",
  },
  {
    code: "T-00:09",
    heading: "Draft beside the thread.",
    body:
      "For every tagged thread, a grounded reply is suggested — cited against your catalog, your pricing terms, your engagement letter. The rep edits a draft, not a blank page.",
  },
  {
    code: "T-00:14",
    heading: "The room hears one voice.",
    body:
      "Junior reps ship responses that read like the engineer wrote them. The senior rep reviews the one thread that actually needs her — not seven.",
  },
];

export function FieldReport() {
  const prefersReduced = useReducedMotion() ?? false;
  const ref = React.useRef<HTMLDivElement | null>(null);

  // Two independent scroll progressions:
  //   inboxScroll     — completes during the section's *approach* into view,
  //                     so the classifier animation is at 100% as soon as the
  //                     mock is comfortably visible (not gated on scrolling
  //                     through the whole narrative column).
  //   narrativeScroll — tracks scroll through the entire pinned section so
  //                     the active beat in the narrative list stays in sync.
  const { scrollYProgress: inboxScroll } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const { scrollYProgress: narrativeScroll } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const inboxProgress = useTransform(inboxScroll, [0.25, 0.8], [0, 1]);
  const narrativeProgress = useTransform(narrativeScroll, [0.2, 0.8], [0, 1]);

  const [p, setP] = React.useState(0);
  const [beatP, setBeatP] = React.useState(0);

  React.useEffect(() => {
    if (prefersReduced) {
      setP(1);
      setBeatP(1);
      return;
    }
    const offInbox = inboxProgress.on("change", (v) => setP(v));
    const offBeat = narrativeProgress.on("change", (v) => setBeatP(v));
    return () => {
      offInbox();
      offBeat();
    };
  }, [inboxProgress, narrativeProgress, prefersReduced]);

  const activeIdx = Math.min(
    BEATS.length - 1,
    Math.floor(beatP * BEATS.length),
  );

  return (
    <Section
      id="field-report"
      rule="top"
      size="lg"
      tone="paper-2"
      className="overflow-hidden"
    >
      <Eyebrow num="FIELD REPORT · 003" tag="THE FIRST THIRTY MINUTES">
        A Monday morning, observed
      </Eyebrow>

      <div ref={ref} className="relative mt-10 grid gap-8 md:grid-cols-12">
        {/* Narrative column */}
        <div className="md:col-span-6">
          <ol className="flex flex-col gap-10 md:gap-14">
            {BEATS.map((b, i) => (
              <motion.li
                key={b.code}
                initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
                whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className={
                  "relative border-l border-[var(--color-rule)] pl-5 transition-colors " +
                  (i === activeIdx
                    ? "border-l-2 border-[var(--color-accent)]"
                    : "")
                }
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  [{b.code}]
                </div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--color-ink)] md:text-2xl">
                  {b.heading}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--color-muted)] md:text-[15px]">
                  {b.body}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Sticky inbox mock */}
        <div className="md:col-span-6">
          <div className="md:sticky md:top-24">
            <div className="relative">
              <Visible
                minHeight={520}
                fallback={
                  <div
                    aria-hidden
                    className="h-[520px] w-full rounded-md border border-[var(--color-rule)] bg-[var(--color-paper-2)]"
                  />
                }
              >
                <InboxMock variant="redacted" progress={p} className="h-[520px]" />
              </Visible>
              <span
                aria-hidden
                className="pointer-events-none absolute -top-2 right-4 inline-flex items-center gap-1.5 border border-[var(--color-accent)] bg-[var(--color-accent-tint)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-[var(--color-accent-ink)]"
              >
                <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                FILED · CLASSIFIED
              </span>
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
              [EXHIBIT C] · INBOX · REAL COMPOSITION · NAMES & PAYLOADS REDACTED
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
