import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  size?: number;
  label?: string;
  tone?: "default" | "accent";
};

export function LogoStamp({
  size = 44,
  label,
  tone = "default",
  className,
  children,
  ...rest
}: Props) {
  return (
    <div
      title={label}
      aria-label={label}
      className={cn(
        "inline-flex items-center justify-center border text-[var(--color-ink)]",
        tone === "accent"
          ? "border-[var(--color-accent)] bg-[var(--color-accent-tint)] text-[var(--color-accent-ink)]"
          : "border-[var(--color-rule)] bg-[var(--color-paper)]",
        className,
      )}
      style={{ width: size, height: size }}
      {...rest}
    >
      {children}
    </div>
  );
}
