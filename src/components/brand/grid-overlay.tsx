import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  cols?: number;
  opacity?: number;
};

export function GridOverlay({ cols = 12, opacity = 0.6, className, style, ...rest }: Props) {
  const bg = `linear-gradient(to right, color-mix(in srgb, var(--color-rule) ${Math.round(
    opacity * 100,
  )}%, transparent) 1px, transparent 1px)`;
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: bg,
        backgroundSize: `calc(100% / ${cols}) 100%`,
        ...style,
      }}
      {...rest}
    />
  );
}
