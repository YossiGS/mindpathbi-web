import * as React from "react";
import { cn } from "@/lib/utils";

type HeadlineProps = {
  ink?: React.ReactNode;
  accent?: React.ReactNode;
  tail?: React.ReactNode;
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children?: React.ReactNode;
};

const sizeMap = {
  sm: "text-[28px] md:text-[36px] leading-[1.05]",
  md: "text-[36px] md:text-[48px] leading-[1.04]",
  lg: "text-[44px] md:text-[64px] leading-[1.02]",
  xl: "text-[52px] md:text-[72px] leading-[1.01]",
};

export function Headline({
  ink,
  accent,
  tail,
  as: Tag = "h2",
  size = "lg",
  className,
  children,
}: HeadlineProps) {
  return (
    <Tag
      className={cn(
        "font-sans font-semibold tracking-[-0.02em] text-[var(--color-ink)]",
        sizeMap[size],
        className,
      )}
    >
      {children ?? (
        <>
          {ink}
          {accent !== undefined && (
            <>
              {" "}
              <span className="text-[var(--color-accent)]">{accent}</span>
            </>
          )}
          {tail}
        </>
      )}
    </Tag>
  );
}
