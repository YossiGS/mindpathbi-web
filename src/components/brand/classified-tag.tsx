import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  tone?: "default" | "accent" | "muted";
};

const toneMap = {
  default:
    "border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-ink)]",
  accent:
    "border-[var(--color-accent)] bg-[var(--color-accent-tint)] text-[var(--color-accent-ink)]",
  muted:
    "border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--color-muted)]",
};

export function ClassifiedTag({
  label = "CLASSIFIED · PRE-LAUNCH · BY INVITATION",
  tone = "default",
  className,
  ...rest
}: Props) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em]",
        toneMap[tone],
        className,
      )}
      {...rest}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden />
      {label}
    </div>
  );
}
