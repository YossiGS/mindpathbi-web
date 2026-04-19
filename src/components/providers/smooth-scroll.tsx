"use client";

import * as React from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { cancelFrame, frame } from "motion/react";

/**
 * SmoothScroll — wraps children in Lenis for site-wide smooth scrolling.
 *
 * - Composes with Motion via the `frame.update` pattern (Lenis docs)
 *   so Lenis's RAF does not fight Motion's scheduler.
 * - Skips mounting on touch devices (`pointer: coarse`) — momentum scroll
 *   is already native, Lenis adds cost for no benefit.
 * - `ReducedMotionGuard` inside calls `lenis.stop()` when the user
 *   prefers reduced motion and `lenis.start()` when they change their mind.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(!coarse);
  }, []);

  if (!enabled) return <>{children}</>;

  return (
    <ReactLenis root options={{ anchors: true, duration: 1.1, smoothWheel: true }}>
      <MotionLenisBridge />
      <ReducedMotionGuard />
      {children}
    </ReactLenis>
  );
}

function MotionLenisBridge() {
  const lenis = useLenis();
  React.useEffect(() => {
    if (!lenis) return;
    const update = (data: { timestamp: number }) => {
      lenis.raf(data.timestamp);
    };
    frame.update(update, true);
    return () => cancelFrame(update);
  }, [lenis]);
  return null;
}

function ReducedMotionGuard() {
  const lenis = useLenis();
  React.useEffect(() => {
    if (!lenis || typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      if (mq.matches) lenis.stop();
      else lenis.start();
    };
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, [lenis]);
  return null;
}
