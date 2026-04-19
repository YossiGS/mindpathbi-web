import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  as?: React.ElementType;
  rule?: "top" | "bottom" | "both" | "none";
  tone?: "paper" | "paper-2" | "dossier";
  size?: "sm" | "md" | "lg";
};

const toneMap: Record<NonNullable<SectionProps["tone"]>, string> = {
  paper: "bg-[var(--color-paper)]",
  "paper-2": "bg-[var(--color-paper-2)]",
  dossier: "bg-[var(--color-dossier)]",
};

const sizeMap: Record<NonNullable<SectionProps["size"]>, string> = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
};

export function Section({
  as: Tag = "section",
  rule = "none",
  tone = "paper",
  size = "md",
  className,
  children,
  ...rest
}: SectionProps) {
  const hairline = "border-[var(--color-rule)]";
  return (
    <Tag
      className={cn(
        "relative w-full",
        toneMap[tone],
        sizeMap[size],
        (rule === "top" || rule === "both") && `border-t ${hairline}`,
        (rule === "bottom" || rule === "both") && `border-b ${hairline}`,
        className,
      )}
      {...rest}
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">{children}</div>
    </Tag>
  );
}
