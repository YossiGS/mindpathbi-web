import * as React from "react";
import { Section } from "@/components/brand/section";
import { Eyebrow } from "@/components/brand/eyebrow";
import { TechnicalSellingMock } from "@/components/mocks/technical-selling";
import { Visible } from "@/components/lazy/visible";

export function TechnicalSeller() {
  return (
    <Section id="technical-seller" rule="top" tone="paper" size="md">
      <Eyebrow num="FIELD REPORT · 002" tag="SEVEN INDUSTRIES · ONE PATTERN">
        The answer your expert knows — in every rep&apos;s voice
      </Eyebrow>

      <div className="mt-6 border-t border-[var(--color-rule)] pt-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-start lg:gap-10">
          <div className="md:col-span-7">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--color-ink)] md:text-[40px] md:leading-[1.06]">
              Seven industries, one pattern:
              <br />
              <span className="text-[var(--color-muted)]">expert selling.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
              One or two people in every company carry the answer — the senior rep, the founding partner, the owner on the bench. MindPath BI captures what&apos;s in their head once, and drafts every reply from it. Cited, grounded, in the expert&apos;s voice.
            </p>
          </div>

          <dl className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-muted)] md:col-span-5">
            <div className="flex items-start gap-3 border-t border-[var(--color-rule)] pt-3">
              <dt className="normal-case tracking-normal text-[var(--color-accent)]">[α]</dt>
              <dd className="normal-case tracking-normal text-[var(--color-ink)]">
                Each draft cites the source — filename, section, line.
              </dd>
            </div>
            <div className="flex items-start gap-3 border-t border-[var(--color-rule)] pt-3">
              <dt className="normal-case tracking-normal text-[var(--color-accent)]">[β]</dt>
              <dd className="normal-case tracking-normal text-[var(--color-ink)]">
                Your catalog, policy, or engagement letter — never generic text.
              </dd>
            </div>
            <div className="flex items-start gap-3 border-t border-[var(--color-rule)] pt-3">
              <dt className="normal-case tracking-normal text-[var(--color-accent)]">[γ]</dt>
              <dd className="normal-case tracking-normal text-[var(--color-ink)]">
                The rep edits the last 10% — never drafts from blank.
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-10">
          <Visible
            minHeight={560}
            fallback={
              <div
                aria-hidden
                className="h-[560px] w-full rounded-md border border-[var(--color-rule)] bg-[var(--color-paper-2)]"
              />
            }
          >
            <TechnicalSellingMock />
          </Visible>
        </div>
      </div>
    </Section>
  );
}
