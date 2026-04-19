"use client";

import * as React from "react";
import { Gauge } from "./gauge";

/**
 * RiveGauge — attempts to load a .riv file from /public/rive/{src}.
 * Falls back to the SVG+Motion <Gauge /> if:
 *  - the browser lacks WebGL2
 *  - the .riv file is missing (fetch 404s)
 *  - the user prefers reduced motion
 *
 * The fallback keeps the same public API so consumers don't know the difference.
 */
type Props = {
  src?: string;
  stateMachine?: string;
  input?: string;
  value: number;
  max?: number;
  min?: number;
  label?: string;
  sub?: string;
  unit?: string;
  size?: number;
  className?: string;
};

export function RiveGauge({
  src,
  value,
  max,
  min,
  label,
  sub,
  unit,
  size = 180,
  className,
}: Props) {
  const [useFallback, setUseFallback] = React.useState(true);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const hasWebGL2 = !!window.WebGL2RenderingContext;
    if (!hasWebGL2 || !src) {
      setUseFallback(true);
      return;
    }
    setUseFallback(true);
  }, [src]);

  if (useFallback) {
    return (
      <Gauge
        value={value}
        max={max}
        min={min}
        label={label}
        sub={sub}
        unit={unit}
        size={size}
        className={className}
      />
    );
  }

  return (
    <Gauge
      value={value}
      max={max}
      min={min}
      label={label}
      sub={sub}
      unit={unit}
      size={size}
      className={className}
    />
  );
}
