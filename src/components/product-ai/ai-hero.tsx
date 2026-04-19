"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ClassifiedTag } from "@/components/brand/classified-tag";

const STAGES = ["Classify", "Retrieve", "Suggest", "Act", "Learn", "Score"];

export function AIHero() {
  const prefersReduced = useReducedMotion() ?? false;

  return (
    <header className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-overlay opacity-60"
      />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          <span>[FIELD REPORT · 006]</span>
          <span className="hidden md:inline">MINDPATH/BI · AI LAYER</span>
        </div>
        <div className="mt-3 h-px w-full bg-[var(--color-rule)]" />
      </div>

      <div className="relative mx-auto mt-10 grid max-w-7xl gap-10 px-6 md:mt-14 md:grid-cols-12 md:gap-12 md:px-10">
        <div className="md:col-span-6">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            animate={prefersReduced ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ClassifiedTag />

            <h1 className="mt-6 text-[36px] font-semibold leading-[1.05] tracking-[-0.02em] text-[var(--color-ink)] md:text-[52px]">
              An AI layer that turns your team&rsquo;s knowledge{" "}
              <span className="text-[var(--color-muted)]">
                &mdash; into every rep&rsquo;s answer.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              Not a copilot you summon. A substrate that sits under every reply
              your team writes, cites the page it pulled from, and learns from
              the edit your senior rep just made.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/#waitlist"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-85"
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
          </motion.div>
        </div>

        <div className="md:col-span-6">
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.98 }}
            animate={prefersReduced ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-md border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-5 md:p-8"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
              [EXHIBIT D] · MESSAGE → PIPELINE → SENT
            </div>

            <div className="mt-4 font-mono">
              <svg
                viewBox="0 0 600 100"
                className="w-full"
                aria-label="Six-stage pipeline: message in, six processing stages, message sent"
              >
                <text
                  x="5"
                  y="48"
                  fill="var(--color-muted)"
                  fontSize="10"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  MSG
                </text>
                <line
                  x1="32"
                  y1="44"
                  x2="50"
                  y2="44"
                  stroke="var(--color-rule)"
                  strokeWidth="1"
                />

                {STAGES.map((s, i) => {
                  const x = 50 + i * 80;
                  return (
                    <g key={s}>
                      <rect
                        x={x}
                        y="30"
                        width="70"
                        height="28"
                        rx="2"
                        fill="none"
                        stroke={
                          i === 0
                            ? "var(--color-accent)"
                            : "var(--color-rule)"
                        }
                        strokeWidth="1"
                      />
                      <text
                        x={x + 35}
                        y="48"
                        fill={
                          i === 0
                            ? "var(--color-accent)"
                            : "var(--color-muted)"
                        }
                        fontSize="8"
                        textAnchor="middle"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {s.toUpperCase()}
                      </text>
                      <text
                        x={x + 35}
                        y="74"
                        fill="var(--color-muted-2)"
                        fontSize="7"
                        textAnchor="middle"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        [{String(i + 1).padStart(2, "0")}]
                      </text>
                      {i < 5 && (
                        <line
                          x1={x + 70}
                          y1="44"
                          x2={x + 80}
                          y2="44"
                          stroke="var(--color-rule)"
                          strokeWidth="1"
                        />
                      )}
                    </g>
                  );
                })}

                <line
                  x1={50 + 5 * 80 + 70}
                  y1="44"
                  x2={50 + 5 * 80 + 80}
                  y2="44"
                  stroke="var(--color-rule)"
                  strokeWidth="1"
                />
                <text
                  x={50 + 5 * 80 + 85}
                  y="48"
                  fill="var(--color-muted)"
                  fontSize="10"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  SENT
                </text>

                <circle
                  cx={50 + 35}
                  cy="22"
                  r="2"
                  fill="var(--color-accent)"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
