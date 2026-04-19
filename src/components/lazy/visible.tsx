"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type VisibleProps = {
  children: React.ReactNode;
  /** CSS min-height on the placeholder to avoid layout shift. */
  minHeight?: string | number;
  /** rootMargin passed to IntersectionObserver. Defaults to "200px" — start loading slightly before entering the viewport. */
  rootMargin?: string;
  /** Tailwind class for the placeholder wrapper. */
  className?: string;
  /** Element type for the wrapper. */
  as?: keyof React.JSX.IntrinsicElements;
  /** Optional placeholder rendered until the wrapper becomes visible. Defaults to a quiet dossier skeleton. */
  fallback?: React.ReactNode;
};

/**
 * `Visible` defers mounting its children until the wrapper scrolls into view.
 * Pair with a stable `minHeight` to reserve space and prevent CLS.
 *
 * Rationale: the site ships several heavy scroll-driven mocks (inbox, technical selling,
 * onboarding timeline). Gating them behind IntersectionObserver keeps the initial JS
 * evaluation cost off the LCP path and defers `framer-motion` animation wiring until
 * the viewer is close to seeing it.
 *
 * The children still reach the main bundle (chunked by route), so this is a
 * *render-time* deferral, not a code-split. Pair with `next/dynamic` if the
 * import size is also significant.
 */
export function Visible({
  children,
  minHeight,
  rootMargin = "200px",
  className,
  as: As = "div",
  fallback = null,
}: VisibleProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible, rootMargin]);

  const style: React.CSSProperties | undefined =
    minHeight !== undefined ? { minHeight } : undefined;

  const Wrapper = As as React.ElementType;

  return (
    <Wrapper ref={ref} className={cn(className)} style={style}>
      {visible ? children : fallback}
    </Wrapper>
  );
}
