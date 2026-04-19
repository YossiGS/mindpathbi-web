"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import { Visible } from "@/components/lazy/visible";
import {
  RoutingEngineDiagram,
  VerticalRoutingStream,
} from "@/components/mocks/routing-engine";

/**
 * [EXHIBIT B] — THE ROUTING ENGINE · SCHEMATIC
 *
 * Paired with [EXHIBIT A] in the hero. Where A shows channels converging
 * into one inbox, B shows the same inbox fanning out to the right rep.
 */
export function RoutingExhibit() {
  const prefersReduced = useReducedMotion() ?? false;
  return (
    <Section
      id="routing-engine"
      rule="top"
      tone="paper-2"
      size="md"
      aria-labelledby="routing-engine-title"
    >
      <Eyebrow num="FIELD REPORT · 003" tag="ROUTING · SCORE · ASSIGN">
        Every thread, on the right desk
      </Eyebrow>

      <div className="mt-6 grid gap-8 border-t border-[var(--color-rule)] pt-8 md:grid-cols-12">
        {/* Diagram on the left — mirrors the hero flipping */}
        <div className="md:col-span-8 md:order-1">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.985 }}
            whileInView={prefersReduced ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="relative rounded-md border border-[var(--color-rule)] bg-[var(--color-paper)] p-4 md:p-6"
          >
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              <span>[EXHIBIT B]</span>
              <span>THE ROUTING ENGINE · SCHEMATIC</span>
            </div>
            <div className="mt-3 hidden md:block">
              <Visible
                minHeight={460}
                fallback={
                  <div
                    aria-hidden
                    className="h-[460px] w-full bg-[var(--color-paper-2)]"
                  />
                }
              >
                <RoutingEngineDiagram />
              </Visible>
            </div>
            <div className="mt-3 md:hidden">
              <VerticalRoutingStream />
            </div>
          </motion.div>
        </div>

        {/* Copy on the right */}
        <div className="md:col-span-4 md:order-2">
          <h2
            id="routing-engine-title"
            className="text-3xl font-semibold tracking-[-0.02em] text-[var(--color-ink)] md:text-[40px] md:leading-[1.06]"
          >
            It lands on
            <br />
            the right desk.
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
            One inbox is only the start. Every thread is scored across
            intent, priority, skill, SLA, language, and workload — then
            assigned to the rep whose desk it belongs on. Your rotation, your
            rules, your audit trail.
          </p>
          <dl className="mt-8 flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
            <div className="flex items-start gap-3 border-t border-[var(--color-rule)] pt-3">
              <dt className="text-[var(--color-accent)]">[01]</dt>
              <dd className="normal-case tracking-normal text-[var(--color-ink)]">
                Scored on signals you can read — not a black box.
              </dd>
            </div>
            <div className="flex items-start gap-3 border-t border-[var(--color-rule)] pt-3">
              <dt className="text-[var(--color-accent)]">[02]</dt>
              <dd className="normal-case tracking-normal text-[var(--color-ink)]">
                Respects skill match, language, and live workload.
              </dd>
            </div>
            <div className="flex items-start gap-3 border-t border-[var(--color-rule)] pt-3">
              <dt className="text-[var(--color-accent)]">[03]</dt>
              <dd className="normal-case tracking-normal text-[var(--color-ink)]">
                Every assignment is logged — re-route in one click.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
