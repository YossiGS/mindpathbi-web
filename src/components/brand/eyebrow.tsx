import * as React from "react";
import { cn } from "@/lib/utils";

type EyebrowProps = React.HTMLAttributes<HTMLDivElement> & {
  num?: string;
  tag?: string;
  rule?: boolean;
  tone?: "ink" | "accent" | "muted";
};

const toneMap = {
  ink: "text-[var(--color-ink)]",
  accent: "text-[var(--color-accent)]",
  muted: "text-[var(--color-muted)]",
};

export function Eyebrow({
  num,
  tag,
  rule = true,
  tone = "ink",
  className,
  children,
  ...rest
}: EyebrowProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]",
        toneMap[tone],
        className,
      )}
      {...rest}
    >
      {num && <span className="font-mono">[{num}]</span>}
      {tag && <span className="font-mono">{tag}</span>}
      <span>{children}</span>
      {rule && (
        <span
          aria-hidden
          className="ml-2 h-px flex-1 bg-[var(--color-rule)]"
        />
      )}
    </div>
  );
}
