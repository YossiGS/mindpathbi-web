import * as React from "react";
import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg";
type Variant = "full" | "mark";

type Props = {
  size?: Size;
  variant?: Variant;
  withDot?: boolean;
  className?: string;
  /**
   * When true, renders just the mark without the wordmark.
   * Kept for explicit usage; prefer variant="mark".
   */
  markOnly?: boolean;
};

const sizeMap: Record<
  Size,
  {
    stamp: number;
    stampFont: number;
    word: string;
    wordMono: string;
    gap: string;
  }
> = {
  sm: {
    stamp: 22,
    stampFont: 11,
    word: "text-[12px]",
    wordMono: "text-[9px]",
    gap: "gap-1.5",
  },
  md: {
    stamp: 26,
    stampFont: 13,
    word: "text-[13.5px]",
    wordMono: "text-[10px]",
    gap: "gap-2",
  },
  lg: {
    stamp: 30,
    stampFont: 15,
    word: "text-[15px]",
    wordMono: "text-[10.5px]",
    gap: "gap-2",
  },
};

/**
 * BrandMark — the MindPath BI identity stamp.
 *
 * Dossier aesthetic: a hairline-bordered square with a single `M` monogram in
 * mono caps. A whisper-thin path arcs out of the M's upper-right and lands in
 * an accent dot near the top-right corner — the "path → destination" motif
 * that ties the mark to both the product name ("MindPath") and the site's
 * pervasive classify/route/answer metaphor. The wordmark pairs Geist Sans
 * "MindPath" with mono "BI" in muted caps.
 *
 * Works in light + dark via CSS vars. No fill on the stamp so it reads as an
 * editorial file stamp, not a product icon.
 */
export function BrandMark({
  size = "md",
  variant = "full",
  withDot = true,
  markOnly = false,
  className,
}: Props) {
  const s = sizeMap[size];
  const showWord = !markOnly && variant === "full";

  return (
    <span className={cn("inline-flex items-center", s.gap, className)}>
      <span
        aria-hidden
        className="relative inline-flex flex-none items-center justify-center overflow-hidden border border-[var(--color-rule)] bg-[var(--color-paper-2)] font-mono font-semibold uppercase text-[var(--color-ink)]"
        style={{ width: s.stamp, height: s.stamp }}
      >
        <span
          className="leading-none"
          style={{
            fontSize: s.stampFont,
            // Nudge the M slightly down-left so the path glyph has room to
            // breathe in the top-right quadrant without feeling cramped.
            transform: "translate(-1px, 1px)",
          }}
        >
          M
        </span>
        {withDot && (
          <svg
            aria-hidden
            viewBox="0 0 26 26"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
          >
            {/* Path: emerges from the M's upper-right shoulder and arcs up
                toward the destination dot. A half-strength accent tone ties
                it visually to the dot so the two read as one glyph. */}
            <path
              d="M16 9 Q 19 9 20 6"
              stroke="color-mix(in srgb, var(--color-accent) 55%, transparent)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Destination node — the "answer" the path arrives at. */}
            <circle cx="20.5" cy="4.5" r="2" fill="var(--color-accent)" />
          </svg>
        )}
      </span>
      {showWord && (
        <span className="flex items-baseline gap-1.5">
          <span
            className={cn(
              s.word,
              "font-semibold tracking-tight text-[var(--color-ink)]",
            )}
          >
            MindPath
          </span>
          <span
            className={cn(
              s.wordMono,
              "font-mono uppercase tracking-[0.2em] text-[var(--color-muted)]",
            )}
          >
            BI
          </span>
        </span>
      )}
    </span>
  );
}
