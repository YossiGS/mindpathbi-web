"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import { Gauge } from "@/components/brand/gauge";
import { TechnicalSellingMock } from "@/components/mocks/technical-selling";

export function CapabilityDeepDive() {
  const prefersReduced = useReducedMotion() ?? false;

  return (
    <Section rule="top" tone="paper" size="md">
      <Eyebrow num="01" tag="CAPABILITY MATRIX · DEEP">
        Six movements, one drafting surface
      </Eyebrow>

      <div className="mt-10">
        {/* 01 · Classify */}
        <CapabilityBlock num="01" title="Classify" prefersReduced={prefersReduced}>
          <CapabilityText>
            Every inbound thread is tagged the moment it lands &mdash; intent,
            urgency, account tier, channel. The taxonomy isn&rsquo;t static and
            it isn&rsquo;t ours. It&rsquo;s learned from the patterns your
            senior reps already mark. No ontology to maintain, no rules engine
            to configure. The model watches what your best people flag, and it
            mirrors the shape of their judgment in real time.
          </CapabilityText>
          <TagLadderSVG />
        </CapabilityBlock>

        {/* 02 · Retrieve */}
        <CapabilityBlock
          num="02"
          title="Retrieve"
          stacked
          prefersReduced={prefersReduced}
        >
          <CapabilityText>
            The model doesn&rsquo;t guess &mdash; it searches your corpus
            first. Pricing sheets, engineering specs, return policies,
            engagement letters. Every sentence in the draft carries a citation
            back to the page it pulled from. If the source is stale or the
            confidence is low, the system says so instead of confabulating an
            answer.
          </CapabilityText>
          <TechnicalSellingMock
            lockedIndex={0}
            compact
            className="w-full"
          />
        </CapabilityBlock>

        {/* 03 · Suggest */}
        <CapabilityBlock
          num="03"
          title="Suggest"
          stacked
          prefersReduced={prefersReduced}
        >
          <CapabilityText>
            The first draft appears beside the thread, not in a separate
            window. It reads like your senior rep wrote it because it was
            grounded in what your senior rep has approved before. The junior
            edits a paragraph, not a blank page &mdash; and the delta between
            the draft and what they actually send becomes the next training
            signal.
          </CapabilityText>
          <TechnicalSellingMock
            lockedIndex={1}
            compact
            className="w-full"
          />
        </CapabilityBlock>

        {/* 04 · Act */}
        <CapabilityBlock num="04" title="Act" prefersReduced={prefersReduced}>
          <CapabilityText>
            A reply is rarely just a reply. The drafting surface can push a
            quote to your ERP, update an order status in your commerce layer,
            or flag a billing adjustment. Write-backs are gated by rep
            approval &mdash; never autonomous. The rep confirms; the system
            executes the downstream call.
          </CapabilityText>
          <ActFanoutSVG />
        </CapabilityBlock>

        {/* 05 · Learn */}
        <CapabilityBlock num="05" title="Learn" prefersReduced={prefersReduced}>
          <CapabilityText>
            Every edit a senior rep makes to a draft is a training signal
            &mdash; scoped to your tenant, not shared with anyone else. Over
            weeks, the drafts converge toward the voice and judgment your team
            already has. No prompt engineering. No fine-tuning console. The
            feedback loop is the product itself.
          </CapabilityText>
          <LearnCurveVisual />
        </CapabilityBlock>

        {/* 06 · Score */}
        <CapabilityBlock num="06" title="Score" prefersReduced={prefersReduced}>
          <CapabilityText>
            The system watches its own output. Account health, draft quality,
            topic drift, escalation rate &mdash; surfaced as dials your ops
            lead can read without switching tools. When a score moves, you
            know before the customer does. These aren&rsquo;t vanity metrics;
            they&rsquo;re the early-warning system your team never built
            because nobody had the time.
          </CapabilityText>
          <div className="flex flex-col items-center">
            <Gauge value={76} size={140} label="QUALITY" sub="illustrative" />
            <div className="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
              [ILLUSTRATIVE]
            </div>
          </div>
        </CapabilityBlock>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared layout primitives                                          */
/* ------------------------------------------------------------------ */

function CapabilityBlock({
  num,
  title,
  stacked = false,
  prefersReduced,
  children,
}: {
  num: string;
  title: string;
  stacked?: boolean;
  prefersReduced: boolean;
  children: React.ReactNode;
}) {
  const [text, visual] = React.Children.toArray(children);

  const motionProps = {
    initial: prefersReduced ? {} : { opacity: 0, y: 12 },
    whileInView: prefersReduced ? {} : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.45 },
  };

  const header = (
    <>
      <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
        [{num}] · {title}
      </div>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-[var(--color-ink)] md:text-xl">
        {title}
      </h3>
      <div className="mt-3">{text}</div>
    </>
  );

  if (stacked) {
    return (
      <motion.div
        {...motionProps}
        className="border-t border-[var(--color-rule)] pt-8 pb-10"
      >
        <div className="max-w-2xl">{header}</div>
        <div className="mt-8 w-full">{visual}</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      {...motionProps}
      className="grid gap-6 border-t border-[var(--color-rule)] pt-8 pb-10 md:grid-cols-12"
    >
      <div className="md:col-span-7">{header}</div>
      <div className="md:col-span-5 flex items-start justify-center">
        {visual}
      </div>
    </motion.div>
  );
}

function CapabilityText({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-lg text-sm leading-relaxed text-[var(--color-muted)] md:text-[15px]">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/*  Inline SVG visuals                                                */
/* ------------------------------------------------------------------ */

function TagLadderSVG() {
  return (
    <div className="w-full max-w-[260px] rounded border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-4">
      <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--color-muted-2)]">
        INBOUND · TAGGED
      </div>
      <svg
        viewBox="0 0 220 80"
        className="mt-3 w-full"
        aria-label="Inbound message receiving three classification tags"
      >
        <rect
          x="0"
          y="24"
          width="70"
          height="28"
          rx="2"
          fill="none"
          stroke="var(--color-rule)"
          strokeWidth="1"
        />
        <text
          x="35"
          y="42"
          fill="var(--color-muted)"
          fontSize="8"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          INBOUND
        </text>

        <line
          x1="70"
          y1="38"
          x2="94"
          y2="38"
          stroke="var(--color-rule)"
          strokeWidth="1"
        />
        <line
          x1="70"
          y1="38"
          x2="94"
          y2="14"
          stroke="var(--color-rule)"
          strokeWidth="1"
        />
        <line
          x1="70"
          y1="38"
          x2="94"
          y2="62"
          stroke="var(--color-rule)"
          strokeWidth="1"
        />

        <rect
          x="96"
          y="4"
          width="120"
          height="18"
          rx="2"
          fill="var(--color-accent-tint)"
          stroke="var(--color-accent)"
          strokeWidth="0.5"
        />
        <text
          x="156"
          y="16"
          fill="var(--color-accent)"
          fontSize="7"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          INTENT: ORDER
        </text>

        <rect
          x="96"
          y="28"
          width="120"
          height="18"
          rx="2"
          fill="none"
          stroke="var(--color-rule)"
          strokeWidth="0.5"
        />
        <text
          x="156"
          y="40"
          fill="var(--color-muted)"
          fontSize="7"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          URGENCY: HIGH
        </text>

        <rect
          x="96"
          y="52"
          width="120"
          height="18"
          rx="2"
          fill="none"
          stroke="var(--color-rule)"
          strokeWidth="0.5"
        />
        <text
          x="156"
          y="64"
          fill="var(--color-muted)"
          fontSize="7"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          TIER: ENTERPRISE
        </text>
      </svg>
    </div>
  );
}

function ActFanoutSVG() {
  return (
    <div className="w-full max-w-[260px] rounded border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-4">
      <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--color-muted-2)]">
        WRITE-BACK · GATED
      </div>
      <svg
        viewBox="0 0 240 90"
        className="mt-3 w-full"
        aria-label="Draft flows through approval gate then fans out to ERP, commerce, and billing"
      >
        <rect
          x="0"
          y="32"
          width="52"
          height="24"
          rx="2"
          fill="none"
          stroke="var(--color-rule)"
          strokeWidth="1"
        />
        <text
          x="26"
          y="48"
          fill="var(--color-muted)"
          fontSize="8"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          DRAFT
        </text>

        <line
          x1="52"
          y1="44"
          x2="68"
          y2="44"
          stroke="var(--color-rule)"
          strokeWidth="1"
        />

        <rect
          x="68"
          y="32"
          width="58"
          height="24"
          rx="2"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1"
        />
        <text
          x="97"
          y="48"
          fill="var(--color-accent)"
          fontSize="8"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          APPROVE
        </text>

        <line
          x1="126"
          y1="38"
          x2="156"
          y2="16"
          stroke="var(--color-rule)"
          strokeWidth="1"
        />
        <line
          x1="126"
          y1="44"
          x2="156"
          y2="44"
          stroke="var(--color-rule)"
          strokeWidth="1"
        />
        <line
          x1="126"
          y1="50"
          x2="156"
          y2="72"
          stroke="var(--color-rule)"
          strokeWidth="1"
        />

        <rect
          x="156"
          y="6"
          width="78"
          height="18"
          rx="2"
          fill="none"
          stroke="var(--color-rule)"
          strokeWidth="0.5"
        />
        <text
          x="195"
          y="18"
          fill="var(--color-muted)"
          fontSize="7"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          ERP
        </text>

        <rect
          x="156"
          y="34"
          width="78"
          height="18"
          rx="2"
          fill="none"
          stroke="var(--color-rule)"
          strokeWidth="0.5"
        />
        <text
          x="195"
          y="46"
          fill="var(--color-muted)"
          fontSize="7"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          COMMERCE
        </text>

        <rect
          x="156"
          y="62"
          width="78"
          height="18"
          rx="2"
          fill="none"
          stroke="var(--color-rule)"
          strokeWidth="0.5"
        />
        <text
          x="195"
          y="74"
          fill="var(--color-muted)"
          fontSize="7"
          textAnchor="middle"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          BILLING
        </text>
      </svg>
    </div>
  );
}

function LearnCurveVisual() {
  return (
    <div className="w-full max-w-[260px] rounded border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-4">
      <div className="font-mono text-[8px] uppercase tracking-[0.14em] text-[var(--color-muted-2)]">
        ON-TENANT LEARNING CURVE
      </div>
      <svg
        viewBox="0 0 220 72"
        className="mt-3 w-full"
        aria-label="Upward curve showing draft acceptance improving over 90 days"
      >
        <line
          x1="20"
          y1="62"
          x2="210"
          y2="62"
          stroke="var(--color-rule)"
          strokeWidth="0.5"
        />
        <line
          x1="20"
          y1="8"
          x2="20"
          y2="62"
          stroke="var(--color-rule)"
          strokeWidth="0.5"
        />
        <path
          d="M 24 52 C 60 48, 100 36, 140 24 S 195 12, 206 10"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="52" r="2.5" fill="var(--color-accent)" />
        <circle cx="206" cy="10" r="2.5" fill="var(--color-accent)" />
      </svg>
      <div className="mt-2 flex items-start justify-between gap-2 font-mono text-[8px]">
        <div className="text-[var(--color-muted-2)]">
          <span className="block">DAY 1</span>
          <span className="block text-[var(--color-muted)]">
            Draft acceptance
          </span>
          <span className="redacted-shimmer mt-0.5 inline-block h-3 w-10 rounded-sm" />
        </div>
        <div className="text-right text-[var(--color-muted-2)]">
          <span className="block">DAY 90</span>
          <span className="block text-[var(--color-muted)]">
            Draft acceptance
          </span>
          <span className="redacted-shimmer mt-0.5 inline-block h-3 w-10 rounded-sm" />
        </div>
      </div>
    </div>
  );
}
