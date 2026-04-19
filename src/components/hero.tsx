"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ClassifiedTag } from "@/components/brand/classified-tag";
import { WordRotator } from "@/components/brand/word-rotator";
import { UnifiedPipelineDiagram, VerticalPipelineStream } from "@/components/mocks/unified-pipeline";

export function Hero() {
  const prefersReduced = useReducedMotion() ?? false;
  return (
    <header className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* 12-col hairline grid — the "classified brief" page frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-overlay opacity-60"
      />
      {/* Top editorial rule */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          <span>[FIELD REPORT · 001]</span>
          <span className="hidden md:inline">
            CLASSIFIED · PRE-LAUNCH · BY INVITATION
          </span>
          <span>MINDPATH/BI</span>
        </div>
        <div className="mt-3 h-px w-full bg-[var(--color-rule)]" />
      </div>

      <div className="relative mx-auto mt-10 grid max-w-7xl gap-10 px-6 md:mt-14 md:grid-cols-12 md:gap-12 md:px-10">
        {/* Copy */}
        <div className="md:col-span-5">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ClassifiedTag />
            <h1 className="mt-6 text-[42px] font-semibold leading-[1.02] tracking-[-0.02em] text-[var(--color-ink)] md:text-[60px]">
              Every rep,
              <br />
              a technical{" "}
              <WordRotator
                words={["seller", "analyst", "closer", "operator"]}
              />
              .
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              MindPath BI folds your catalog, your contracts, and your guides
              into the answers beside every conversation — so the rep on the
              phone sounds like the engineer in the room.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-paper)] transition-opacity hover:opacity-85"
              >
                Request access
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-rule)] bg-[var(--color-paper)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
              >
                See how it works
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-[var(--color-rule)] pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              <div>
                <dt>[01] Unified</dt>
                <dd className="mt-1 normal-case tracking-normal text-[var(--color-ink)]">
                  One inbox across every channel your customers use.
                </dd>
              </div>
              <div>
                <dt>[02] Grounded</dt>
                <dd className="mt-1 normal-case tracking-normal text-[var(--color-ink)]">
                  Every draft cites the source it leaned on.
                </dd>
              </div>
              <div>
                <dt>[03] Technical</dt>
                <dd className="mt-1 normal-case tracking-normal text-[var(--color-ink)]">
                  Your expertise, answering in every rep&apos;s voice.
                </dd>
              </div>
            </dl>
          </motion.div>
        </div>

        {/* Pipeline diagram centerpiece */}
        <div className="relative md:col-span-7">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.98 }}
            animate={prefersReduced ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-md border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-4 md:p-6"
          >
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              <span>[EXHIBIT A]</span>
              <span>THE UNIFIED INBOX · SCHEMATIC</span>
            </div>
            <div className="mt-3 hidden md:block">
              <UnifiedPipelineDiagram />
            </div>
            <div className="mt-3 md:hidden">
              <VerticalPipelineStream />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
