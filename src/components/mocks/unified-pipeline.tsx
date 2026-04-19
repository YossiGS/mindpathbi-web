"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ALL_PIPELINE_NODES,
  CHANNEL_NODES,
  KNOWLEDGE_NODES,
  OUTPUT_THREADS,
  PIPELINE_LAYOUT,
  SYSTEM_NODES,
  type PipelineNode,
} from "./unified-pipeline.data";
import { ChannelLogo } from "./logos";

/**
 * UnifiedPipelineDiagram — homepage hero centerpiece.
 *
 * Radial convergence visual: channels, knowledge sources, and business
 * systems sit on a ring. Animated hair-lines pulse inward to the MindPath
 * node in the center. Three "unified thread" outputs exit to the right.
 *
 * Pure SVG + Motion — no canvas, no Rive, lazy-mount-friendly.
 * Reduced motion: paths are drawn once at rest, no pulses.
 * Mobile (<768px): consumer flips to <VerticalPipelineStream />.
 */

const { viewBox, center, radius } = PIPELINE_LAYOUT;

function polar(angleDeg: number, r: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: center.x + r * Math.cos(a), y: center.y - r * Math.sin(a) };
}

/**
 * Compute the angular extent of a lane on the ring. Handles clusters that
 * wrap through 0° (e.g. systems spans 330°→75° through east) by converting
 * angles > 180° to negatives when the raw span exceeds a semicircle. Returns
 * min / mid / max in a continuous range that `polar()` can interpolate over.
 */
function laneAngularExtent(nodes: PipelineNode[]) {
  const raw = nodes.map((n) => n.angle);
  let min = Math.min(...raw);
  let max = Math.max(...raw);
  if (max - min > 180) {
    const normalized = raw.map((a) => (a > 180 ? a - 360 : a));
    min = Math.min(...normalized);
    max = Math.max(...normalized);
  }
  return { min, max, mid: (min + max) / 2, span: max - min };
}

const CHANNELS_ARC = laneAngularExtent(CHANNEL_NODES);
const KNOWLEDGE_ARC = laneAngularExtent(KNOWLEDGE_NODES);
const SYSTEMS_ARC = laneAngularExtent(SYSTEM_NODES);

function seededJitter(seed: number): number {
  const s = Math.sin(seed * 9301 + 49297) * 233280;
  return (s - Math.floor(s) - 0.5) * 12;
}

function PipelineEdge({
  from,
  index,
  active,
}: {
  from: PipelineNode;
  index: number;
  active: boolean;
}) {
  const p = polar(from.angle, radius);
  const mid = {
    x: (p.x + center.x) / 2 + seededJitter(from.angle + 1),
    y: (p.y + center.y) / 2 + seededJitter(from.angle + 2),
  };
  const d = `M${p.x.toFixed(1)} ${p.y.toFixed(1)} Q ${mid.x.toFixed(1)} ${mid.y.toFixed(
    1,
  )} ${center.x} ${center.y}`;
  return (
    <g>
      <path
        d={d}
        stroke="var(--color-rule)"
        strokeWidth={1}
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      {active && (
        <motion.circle
          r={3.5}
          fill="var(--color-accent)"
          initial={{ offsetDistance: "0%", opacity: 0 }}
          animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2.6,
            delay: index * 0.13,
            repeat: Infinity,
            repeatDelay: 1.4,
            ease: "easeInOut",
          }}
          style={{ offsetPath: `path('${d}')`, offsetRotate: "0deg" }}
        />
      )}
    </g>
  );
}

function PipelineNodeBadge({ node }: { node: PipelineNode }) {
  const p = polar(node.angle, radius);
  const size = 36;
  return (
    <g transform={`translate(${p.x - size / 2} ${p.y - size / 2})`}>
      <rect
        width={size}
        height={size}
        fill="var(--color-paper)"
        stroke="var(--color-rule)"
        strokeWidth={1}
        rx={2}
      />
      <foreignObject x={0} y={0} width={size} height={size}>
        <div
          className="flex h-full w-full items-center justify-center"
          style={{ padding: 6 }}
        >
          <ChannelLogo
            name={node.logo}
            title={node.label}
            brand
            style={{ width: 20, height: 20 }}
          />
        </div>
      </foreignObject>
    </g>
  );
}

/**
 * Category cluster marker drawn as a blueprint-style dimension annotation:
 * a solid arc that hugs the ring just outside the icons across the cluster's
 * angular extent, tick marks at each endpoint, and a dashed radial pointing
 * from the arc midpoint out to the [LANE] label. This reads immediately as
 * "these ring items form a group" — the natural convention for radial
 * layouts, where a curly brace would fight the geometry.
 *
 * `startAngle` and `endAngle` are in the same polar convention as the nodes
 * (degrees, 0° = east, increasing CCW) and may extend below 0 / above 360 to
 * express arcs that wrap through east; `polar()` handles that trivially.
 */
function CategoryCluster({
  startAngle,
  endAngle,
  label,
  labelOffset = 48,
  labelAnchor,
  labelDy = 0,
}: {
  startAngle: number;
  endAngle: number;
  label: string;
  labelOffset?: number;
  labelAnchor: "start" | "middle" | "end";
  /** Additional vertical offset applied only to the [LABEL] text, not the
   *  arc or leader line. Negative values move the label up on screen —
   *  used by [SYSTEMS] to lift the callout above the exploded stack. */
  labelDy?: number;
}) {
  const arcR = radius + 22;
  const tick = 6;
  const stroke = "var(--color-rule-strong, var(--color-rule))";

  const steps = 48;
  const samples = Array.from({ length: steps + 1 }, (_, i) => {
    const a = startAngle + (endAngle - startAngle) * (i / steps);
    return polar(a, arcR);
  });
  const arcD =
    `M ${samples[0].x.toFixed(2)} ${samples[0].y.toFixed(2)} ` +
    samples
      .slice(1)
      .map((p) => `L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
      .join(" ");

  const startInner = polar(startAngle, arcR - tick);
  const startOuter = polar(startAngle, arcR + tick);
  const endInner = polar(endAngle, arcR - tick);
  const endOuter = polar(endAngle, arcR + tick);

  const midAngle = (startAngle + endAngle) / 2;
  const leaderInner = polar(midAngle, arcR + 2);
  const leaderOuter = polar(midAngle, arcR + labelOffset - 14);
  const labelPos = polar(midAngle, arcR + labelOffset);

  return (
    <g>
      <path
        d={arcD}
        stroke={stroke}
        strokeWidth={1.25}
        strokeLinecap="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1={startInner.x}
        y1={startInner.y}
        x2={startOuter.x}
        y2={startOuter.y}
        stroke={stroke}
        strokeWidth={1.25}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1={endInner.x}
        y1={endInner.y}
        x2={endOuter.x}
        y2={endOuter.y}
        stroke={stroke}
        strokeWidth={1.25}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1={leaderInner.x}
        y1={leaderInner.y}
        x2={leaderOuter.x}
        y2={leaderOuter.y}
        stroke="var(--color-rule)"
        strokeWidth={1}
        strokeDasharray="2 3"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x={labelPos.x}
        y={labelPos.y + labelDy}
        fontSize={10}
        className="font-mono"
        textAnchor={labelAnchor}
        dominantBaseline="middle"
        fill="var(--color-muted)"
        letterSpacing={1.4}
      >
        {label}
      </text>
    </g>
  );
}

function CenterHub({ prefersReduced }: { prefersReduced: boolean }) {
  return (
    <g transform={`translate(${center.x} ${center.y})`}>
      {!prefersReduced &&
        [0, 1, 2].map((i) => (
          <motion.circle
            key={i}
            r={42}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={1}
            initial={{ scale: 0.6, opacity: 0.5 }}
            animate={{ scale: [0.6, 1.6, 1.9], opacity: [0.5, 0.15, 0] }}
            transition={{
              duration: 3.4,
              delay: i * 1.1,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      <circle
        r={44}
        fill="var(--color-paper)"
        stroke="var(--color-accent)"
        strokeWidth={1.5}
      />
      <text
        y={-4}
        textAnchor="middle"
        className="font-mono"
        fontSize={9}
        letterSpacing={1.2}
        fill="var(--color-muted)"
      >
        MINDPATH
      </text>
      <text
        y={9}
        textAnchor="middle"
        className="font-mono"
        fontSize={9}
        letterSpacing={1.2}
        fill="var(--color-accent)"
      >
        AI LAYER
      </text>
    </g>
  );
}

/**
 * OutputStack — exploded-isometric 3D assembly of the AI layer's stages.
 *
 * Five thick isometric slabs render as a vertical exploded assembly to
 * the right of the MindPath ring. Each slab is a true 3D volume (top +
 * front + right faces with real thickness), and its top surface carries
 * its own unique set of *mounted components* — raised mini-blocks and
 * flat surface panels — so the five layers read as distinct machined
 * parts in an engineering exploded-view, not repeated tiles.
 *
 * Layers, bottom to top:
 *   [00] INBOUND    — raw thread enters (muted)
 *   [01] CLASSIFIED — intent tagged
 *   [02] GROUNDED   — sources cited
 *   [03] DRAFTED    — reply composed
 *   [04] DELIVERED  — shipped to customer (accent)
 *
 * Thread routing: the three output threads exiting the ring (classify /
 * retrieve / act) each terminate on their *corresponding* processing
 * slab — classify → CLASSIFIED, retrieve → GROUNDED, act → DRAFTED.
 * The contextual top (DELIVERED) and bottom (INBOUND) slabs frame the
 * assembly without incoming threads.
 *
 * On mount all slabs start collapsed at midY and explode outward with
 * staggered delays proportional to distance from middle, producing the
 * classic engineering exploded-view reveal. Reduced motion renders
 * slabs at their final positions with no transition.
 */
function OutputStack({ prefersReduced }: { prefersReduced: boolean }) {
  const LAYERS = [
    { id: "inbound", num: "00", label: "Inbound", caption: "raw thread", tone: "muted" as const, kind: "inbox" as const },
    { id: "classified", num: "01", label: "Classified", caption: "0.94 conf", tone: "base" as const, kind: "tag" as const },
    { id: "grounded", num: "02", label: "Grounded", caption: "3 sources", tone: "base" as const, kind: "layers" as const },
    { id: "drafted", num: "03", label: "Drafted", caption: "12 lines", tone: "base" as const, kind: "pencil" as const },
    { id: "delivered", num: "04", label: "Delivered", caption: "08:14 utc", tone: "accent" as const, kind: "send" as const },
  ];

  /* Isometric geometry. Each slab renders with three visible faces:
   *   top:   parallelogram (back-left, back-right, front-right, front-left)
   *   front: rectangle below the front edge, height `slabT`
   *   right: parallelogram on the iso-right side, height `slabT`
   *
   * Slabs are sized to leave a 140-unit column on the right for text
   * callouts (stage name + caption), echoing the reference engineering
   * diagram where each exploded part has a mono label floating beside it.
   *
   * Stack is pushed right of the ring (ring right edge sits at x=602)
   * with a 38-unit clearance so the top slab doesn't kiss ring nodes.
   * Right edge of slab at stackX + slabW + slabDx = 826. Labels start
   * at x=842 and fit in ~118 units up to the viewBox edge at 960.
   * Top slab top at midY - 2*layerGap = 224; bottom slab bottom at
   * midY + 2*layerGap + slabDy + slabT = 502 (viewBox h is 600). */
  const stackX = 640;
  const slabW = 140;
  const slabDx = 46;
  const slabDy = 30;
  const slabT = 15;
  const layerGap = 58;
  const midY = 340;

  const n = LAYERS.length;
  const yForIndex = (i: number) => midY - (i - (n - 1) / 2) * layerGap;

  /* Per-layer thread routing. Each outbound thread from the ring lands on
   * its own processing slab: classify → [01], retrieve → [02], act → [03].
   * Entry point is mid-left of each slab's top face. */
  const THREAD_TARGETS: Array<{ id: string; slabIdx: number }> = [
    { id: OUTPUT_THREADS[0].id, slabIdx: 1 },
    { id: OUTPUT_THREADS[1].id, slabIdx: 2 },
    { id: OUTPUT_THREADS[2].id, slabIdx: 3 },
  ];

  return (
    <g>
      {/* Per-layer convergence threads — drawn before slabs so slab faces
       *  overlay the thread endpoints cleanly. */}
      {THREAD_TARGETS.map((t, i) => {
        const targetY = yForIndex(t.slabIdx) + slabDy / 2;
        const targetX = stackX + slabDx / 2;
        const startX = center.x + 48;
        const startY = center.y;
        const d = `M${startX} ${startY} C ${center.x + 170} ${startY}, ${
          targetX - 90
        } ${targetY}, ${targetX} ${targetY}`;
        return (
          <g key={t.id}>
            <path
              d={d}
              stroke="var(--color-rule-strong, var(--color-rule))"
              strokeWidth={1}
              strokeOpacity={0.55}
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
            <circle
              cx={targetX}
              cy={targetY}
              r={2}
              fill="var(--color-paper)"
              stroke="var(--color-rule-strong, var(--color-rule))"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
            {!prefersReduced && (
              <motion.circle
                r={3}
                fill="var(--color-ink)"
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 2.4,
                  delay: 0.8 + i * 0.28,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                style={{ offsetPath: `path('${d}')`, offsetRotate: "0deg" }}
              />
            )}
          </g>
        );
      })}

      {/* The exploded stack — bottom to top so higher slabs correctly
       *  overlay the right-side faces of lower slabs. Each slab animates
       *  from midY (collapsed) to its resting y with a delay proportional
       *  to distance from middle. */}
      {LAYERS.map((layer, i) => {
        const finalY = yForIndex(i);
        const distanceFromMiddle = Math.abs(i - (n - 1) / 2);
        return (
          <motion.g
            key={layer.id}
            initial={
              prefersReduced ? { y: finalY, opacity: 1 } : { y: midY, opacity: 0 }
            }
            animate={{ y: finalY, opacity: 1 }}
            transition={{
              delay: 0.9 + distanceFromMiddle * 0.14,
              duration: 0.6,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          >
            <IsoSlab
              x={stackX}
              W={slabW}
              dx={slabDx}
              dy={slabDy}
              t={slabT}
              num={layer.num}
              label={layer.label}
              caption={layer.caption}
              tone={layer.tone}
              kind={layer.kind}
            />
          </motion.g>
        );
      })}
    </g>
  );
}

/**
 * IsoSlab — one 3D volume in the exploded stack.
 *
 * Renders three visible faces of an isometric slab — top, front, right —
 * with differentiated fills so the slab reads as a solid machined part.
 * The top surface carries unique *mounted components* per kind (raised
 * sub-blocks, flat panels, indicator dots), like a circuit board or
 * engineering plate. A mono text callout sits to the right of each slab
 * with the stage name + caption — no leader lines.
 *
 * Face fills (light → dark, to mimic top-lit lighting):
 *   top:   --color-paper    (lightest, directly lit)
 *   right: --color-paper-2  (side-lit, mid tone)
 *   front: --color-paper-2 + ink overlay (shadow-side, darkest)
 *
 * All interior coordinates are drawn relative to y=0; the parent
 * <motion.g> handles the y-translate into diagram user-space.
 *
 * Tones:
 *   - "muted":  context layer (INBOUND)   — desaturated stroke/faces
 *   - "base":   standard processing layer
 *   - "accent": final delivery layer      — accent stroke, tinted faces
 */
function IsoSlab({
  x,
  W,
  dx,
  dy,
  t,
  num,
  label,
  caption,
  tone,
  kind,
}: {
  x: number;
  W: number;
  dx: number;
  dy: number;
  t: number;
  num: string;
  label: string;
  caption: string;
  tone: "muted" | "base" | "accent";
  kind: "inbox" | "tag" | "layers" | "pencil" | "send";
}) {
  const isAccent = tone === "accent";
  const isMuted = tone === "muted";

  /* Face polygon points. */
  const topPts = `${x},0 ${x + W},0 ${x + W + dx},${dy} ${x + dx},${dy}`;
  const frontPts = `${x + dx},${dy} ${x + W + dx},${dy} ${x + W + dx},${dy + t} ${x + dx},${dy + t}`;
  const rightPts = `${x + W},0 ${x + W + dx},${dy} ${x + W + dx},${dy + t} ${x + W},${t}`;

  const stroke = isAccent
    ? "var(--color-accent)"
    : "var(--color-rule-strong, var(--color-rule))";
  const strokeW = isAccent ? 1.5 : 1;
  const strokeOpacity = isMuted ? 0.7 : 1;

  const topFill = "var(--color-paper)";
  const rightFill = isAccent ? "var(--color-accent-tint)" : "var(--color-paper-2)";
  const frontFill = isAccent ? "var(--color-accent-tint)" : "var(--color-paper-2)";
  const frontShadowOpacity = isAccent ? 0.08 : isMuted ? 0.04 : 0.08;
  const rightShadowOpacity = isAccent ? 0.03 : isMuted ? 0.015 : 0.035;

  /* Top-face interior grid — parallel hairlines along the iso long axis,
   * plus a pair along the depth axis. Subtle engineered-plate texture. */
  const verticalGrid = [0.2, 0.4, 0.6, 0.8].map((k) => (
    <line
      key={`v${k}`}
      x1={x + W * k}
      y1={0}
      x2={x + W * k + dx}
      y2={dy}
      stroke="var(--color-rule)"
      strokeOpacity={isMuted ? 0.18 : 0.26}
      strokeWidth={0.5}
      vectorEffect="non-scaling-stroke"
    />
  ));
  const depthGrid = [0.33, 0.66].map((k) => (
    <line
      key={`h${k}`}
      x1={x + dx * k}
      y1={dy * k}
      x2={x + W + dx * k}
      y2={dy * k}
      stroke="var(--color-rule)"
      strokeOpacity={isMuted ? 0.12 : 0.18}
      strokeWidth={0.4}
      vectorEffect="non-scaling-stroke"
    />
  ));

  /* Edge-highlight hairlines along the back/left edges of the top face,
   * mimicking a specular catch on machined metal. */
  const highlightStroke = isAccent ? "var(--color-accent)" : "var(--color-ink)";
  const highlightOpacity = isAccent ? 0.35 : 0.12;

  /* Right-side text callout. No leader line — aligned by being next
   * to the slab, matching the exploded-view reference. */
  const labelX = x + W + dx + 16;
  const labelY = dy * 0.5 + 2;

  return (
    <g>
      {/* FRONT face — darkest, drawn first */}
      <polygon
        points={frontPts}
        fill={frontFill}
        stroke={stroke}
        strokeWidth={strokeW}
        strokeOpacity={strokeOpacity * 0.9}
        vectorEffect="non-scaling-stroke"
      />
      <polygon
        points={frontPts}
        fill="var(--color-ink)"
        fillOpacity={frontShadowOpacity}
        stroke="none"
      />

      {/* RIGHT face — mid tone */}
      <polygon
        points={rightPts}
        fill={rightFill}
        stroke={stroke}
        strokeWidth={strokeW}
        strokeOpacity={strokeOpacity * 0.8}
        vectorEffect="non-scaling-stroke"
      />
      <polygon
        points={rightPts}
        fill="var(--color-ink)"
        fillOpacity={rightShadowOpacity}
        stroke="none"
      />

      {/* TOP face — lightest */}
      <polygon
        points={topPts}
        fill={topFill}
        stroke={stroke}
        strokeWidth={strokeW}
        strokeOpacity={strokeOpacity}
        vectorEffect="non-scaling-stroke"
      />
      {verticalGrid}
      {depthGrid}

      {/* Edge highlights — specular catch on the back and left edges */}
      <line
        x1={x + 0.75}
        y1={0.75}
        x2={x + W - 0.75}
        y2={0.75}
        stroke={highlightStroke}
        strokeOpacity={highlightOpacity}
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1={x + 0.75}
        y1={0.75}
        x2={x + dx - 0.75}
        y2={dy - 0.75}
        stroke={highlightStroke}
        strokeOpacity={highlightOpacity}
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />

      {/* Mounted surface components — unique per slab kind */}
      <SlabSurface x={x} W={W} dx={dx} dy={dy} kind={kind} tone={tone} />

      {/* Right-side text callout — stage name + caption, no leader */}
      <text
        x={labelX}
        y={labelY}
        fontSize={10}
        fontWeight={600}
        className="font-mono"
        fill={isAccent ? "var(--color-accent)" : "var(--color-ink)"}
        letterSpacing={0.6}
      >
        [{num}] {label.toUpperCase()}
      </text>
      <text
        x={labelX}
        y={labelY + 12}
        fontSize={8}
        className="font-mono"
        fill="var(--color-muted-2)"
        letterSpacing={1.2}
      >
        {caption.toUpperCase()}
      </text>
    </g>
  );
}

/**
 * SlabSurface — mounted components on the top face of an IsoSlab.
 *
 * Each "kind" describes a distinct machined plate layout — raised mini
 * blocks with their own mini 3-face geometry, plus flat surface panels,
 * indicator dots, and hairline seams. Every element is projected onto
 * the slab's iso top face via the same local-to-world mapping the slab
 * uses, so the surface details share the slab's perspective.
 *
 * Local coordinate space: (u, v) ∈ [0, 1]² where u runs along slabW
 * and v runs back-to-front along slabDy. World projection:
 *   worldX = x + u * W + v * dx
 *   worldY = v * dy
 *
 * Raised blocks extrude UP (negative y) from the top face by `h`,
 * rendering their own front/right/top faces so they read as solid
 * mounted hardware.
 */
function SlabSurface({
  x,
  W,
  dx,
  dy,
  kind,
  tone,
}: {
  x: number;
  W: number;
  dx: number;
  dy: number;
  kind: "inbox" | "tag" | "layers" | "pencil" | "send";
  tone: "muted" | "base" | "accent";
}) {
  const isAccent = tone === "accent";
  const isMuted = tone === "muted";
  const ink = isAccent
    ? "var(--color-accent)"
    : "var(--color-rule-strong, var(--color-rule))";
  const inkOp = isMuted ? 0.55 : 0.85;
  const soft = isAccent ? "var(--color-accent-tint)" : "var(--color-paper-2)";
  const softOp = isMuted ? 0.45 : 0.7;

  /* Project a local (u, v) to world coords on the slab top. */
  const p = (u: number, v: number) => ({
    x: x + u * W + v * dx,
    y: v * dy,
  });
  const pStr = (u: number, v: number) => {
    const pt = p(u, v);
    return `${pt.x},${pt.y}`;
  };

  /* Flat rect drawn directly on the slab surface (following iso
   * projection — it's a parallelogram in screen space). */
  const flatRect = (
    u0: number,
    v0: number,
    u1: number,
    v1: number,
    opts: { fill?: string; opacity?: number; outline?: boolean } = {},
  ) => {
    const fill = opts.fill ?? soft;
    const opacity = opts.opacity ?? softOp;
    return (
      <polygon
        points={`${pStr(u0, v0)} ${pStr(u1, v0)} ${pStr(u1, v1)} ${pStr(u0, v1)}`}
        fill={fill}
        fillOpacity={opacity}
        stroke={opts.outline ? ink : "none"}
        strokeOpacity={inkOp * 0.7}
        strokeWidth={0.6}
        vectorEffect="non-scaling-stroke"
      />
    );
  };

  /* Flat line on the slab surface, from (u0,v0) to (u1,v1). */
  const flatLine = (
    u0: number,
    v0: number,
    u1: number,
    v1: number,
    opacity = inkOp,
  ) => {
    const a = p(u0, v0);
    const b = p(u1, v1);
    return (
      <line
        x1={a.x}
        y1={a.y}
        x2={b.x}
        y2={b.y}
        stroke={ink}
        strokeOpacity={opacity}
        strokeWidth={0.8}
        vectorEffect="non-scaling-stroke"
      />
    );
  };

  /* Raised mini-block — its bottom footprint is (u0,v0)-(u1,v1) on the
   * slab top, extruded upward by `h`. Renders the 3 visible faces of
   * the extrusion so it reads as solid mounted hardware. */
  const raised = (
    u0: number,
    v0: number,
    u1: number,
    v1: number,
    h: number,
    accent = false,
  ) => {
    const bbl = p(u0, v0);
    const bbr = p(u1, v0);
    const bfr = p(u1, v1);
    const bfl = p(u0, v1);
    const tbl = { x: bbl.x, y: bbl.y - h };
    const tbr = { x: bbr.x, y: bbr.y - h };
    const tfr = { x: bfr.x, y: bfr.y - h };
    const tfl = { x: bfl.x, y: bfl.y - h };
    const topFill = accent ? "var(--color-accent-tint)" : "var(--color-paper)";
    const sideFill = accent ? "var(--color-accent-tint)" : "var(--color-paper-2)";
    return (
      <g>
        {/* Front face */}
        <polygon
          points={`${tfl.x},${tfl.y} ${tfr.x},${tfr.y} ${bfr.x},${bfr.y} ${bfl.x},${bfl.y}`}
          fill={sideFill}
          fillOpacity={0.9}
          stroke={ink}
          strokeOpacity={inkOp * 0.9}
          strokeWidth={0.75}
          vectorEffect="non-scaling-stroke"
        />
        <polygon
          points={`${tfl.x},${tfl.y} ${tfr.x},${tfr.y} ${bfr.x},${bfr.y} ${bfl.x},${bfl.y}`}
          fill="var(--color-ink)"
          fillOpacity={0.06}
          stroke="none"
        />
        {/* Right face */}
        <polygon
          points={`${tbr.x},${tbr.y} ${tfr.x},${tfr.y} ${bfr.x},${bfr.y} ${bbr.x},${bbr.y}`}
          fill={sideFill}
          fillOpacity={0.7}
          stroke={ink}
          strokeOpacity={inkOp * 0.75}
          strokeWidth={0.75}
          vectorEffect="non-scaling-stroke"
        />
        {/* Top face */}
        <polygon
          points={`${tbl.x},${tbl.y} ${tbr.x},${tbr.y} ${tfr.x},${tfr.y} ${tfl.x},${tfl.y}`}
          fill={topFill}
          stroke={ink}
          strokeOpacity={inkOp}
          strokeWidth={0.9}
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  };

  /* Indicator dot. */
  const dot = (u: number, v: number, r = 1.2, accent = false) => {
    const c = p(u, v);
    return (
      <circle
        cx={c.x}
        cy={c.y}
        r={r}
        fill={accent ? "var(--color-accent)" : ink}
        fillOpacity={accent ? 0.95 : inkOp}
      />
    );
  };

  switch (kind) {
    case "inbox":
      /* Receiver plate: raised intake module on the left, slot lines on
       * its face, two incoming data-stream boxes, a status LED, and a
       * flat grid patch for extra texture. */
      return (
        <g>
          {raised(0.08, 0.24, 0.42, 0.78, 4)}
          {flatLine(0.14, 0.38, 0.36, 0.38, inkOp * 0.7)}
          {flatLine(0.14, 0.55, 0.36, 0.55, inkOp * 0.7)}
          {flatLine(0.14, 0.72, 0.3, 0.72, inkOp * 0.5)}
          {flatRect(0.52, 0.26, 0.62, 0.48)}
          {flatRect(0.66, 0.26, 0.76, 0.48)}
          {dot(0.85, 0.32, 1.4)}
          {flatRect(0.52, 0.6, 0.92, 0.82, { opacity: 0.3 })}
        </g>
      );
    case "tag":
      /* Classifier sorter: raised tag plate, spine seam, 3 classification
       * bins as flat panels, and a vertical row of indicator LEDs. */
      return (
        <g>
          {raised(0.08, 0.28, 0.34, 0.72, 4)}
          {dot(0.42, 0.38)}
          {dot(0.42, 0.52)}
          {dot(0.42, 0.66)}
          {flatLine(0.5, 0.22, 0.5, 0.8, inkOp * 0.6)}
          {flatRect(0.56, 0.28, 0.92, 0.4, { opacity: 0.55, outline: true })}
          {flatRect(0.56, 0.48, 0.92, 0.6, { opacity: 0.35, outline: true })}
          {flatRect(0.56, 0.68, 0.82, 0.8, { opacity: 0.35, outline: true })}
        </g>
      );
    case "layers":
      /* Source stack: three raised plates at increasing heights (like a
       * card sorter), a spine line, and a flat reference panel on the
       * right. */
      return (
        <g>
          {raised(0.08, 0.58, 0.44, 0.82, 2)}
          {raised(0.08, 0.38, 0.44, 0.58, 3)}
          {raised(0.08, 0.18, 0.44, 0.38, 4)}
          {flatLine(0.54, 0.28, 0.9, 0.28, inkOp * 0.6)}
          {flatRect(0.54, 0.36, 0.92, 0.56, { opacity: 0.4, outline: true })}
          {flatLine(0.6, 0.46, 0.86, 0.46, inkOp * 0.5)}
          {flatRect(0.54, 0.64, 0.74, 0.78, { opacity: 0.4 })}
          {dot(0.86, 0.7)}
        </g>
      );
    case "pencil":
      /* Composer desk: raised writing surface with a diagonal pen mark,
       * a row of indicator dots, and a flat preview panel. */
      return (
        <g>
          {raised(0.08, 0.24, 0.44, 0.8, 3)}
          {flatLine(0.14, 0.3, 0.38, 0.72, inkOp * 0.9)}
          {flatLine(0.14, 0.3, 0.18, 0.34, inkOp)}
          {flatRect(0.54, 0.26, 0.92, 0.44, { opacity: 0.45, outline: true })}
          {dot(0.6, 0.58)}
          {dot(0.72, 0.58)}
          {dot(0.84, 0.58)}
          {flatRect(0.54, 0.68, 0.82, 0.82, { opacity: 0.3 })}
        </g>
      );
    case "send":
      /* Transmitter: a raised accent-tinted module on the left (the
       * "send" block), a directional arrow mark mid-plate, and three
       * status LEDs on the right. */
      return (
        <g>
          {raised(0.08, 0.26, 0.4, 0.78, 5, true)}
          {flatLine(0.48, 0.52, 0.74, 0.52)}
          {flatLine(0.66, 0.42, 0.75, 0.52)}
          {flatLine(0.66, 0.62, 0.75, 0.52)}
          {dot(0.86, 0.32, 1.5, true)}
          {dot(0.86, 0.52, 1.5, true)}
          {dot(0.86, 0.72, 1.5, true)}
        </g>
      );
  }
}

export function UnifiedPipelineDiagram({
  className,
}: {
  className?: string;
}) {
  const prefersReduced = useReducedMotion() ?? false;
  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${viewBox.w} ${viewBox.h}`}
        role="img"
        aria-label="Channels, knowledge, and systems converging into the MindPath AI layer."
        className="h-auto w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Hairline column guides — anchors the classified-dossier aesthetic */}
        <g aria-hidden>
          {Array.from({ length: 13 }).map((_, i) => {
            const x = (viewBox.w / 12) * i;
            return (
              <line
                key={i}
                x1={x}
                y1={0}
                x2={x}
                y2={viewBox.h}
                stroke="var(--color-rule-soft)"
                strokeWidth={0.5}
              />
            );
          })}
        </g>

        {/* Ring outline */}
        <circle
          cx={center.x}
          cy={center.y}
          r={radius}
          fill="none"
          stroke="var(--color-rule)"
          strokeDasharray="2 5"
          strokeWidth={1}
        />

        {/* Edges (channels → hub) */}
        {ALL_PIPELINE_NODES.map((n, i) => (
          <PipelineEdge
            key={n.id}
            from={n}
            index={i}
            active={!prefersReduced}
          />
        ))}

        {/* Node stamps */}
        {ALL_PIPELINE_NODES.map((n) => (
          <PipelineNodeBadge key={n.id} node={n} />
        ))}

        {/* MindPath hub */}
        <CenterHub prefersReduced={prefersReduced} />

        {/* Exit threads */}
        <OutputStack prefersReduced={prefersReduced} />

        {/* Category clusters — each lane gets a blueprint-style dimension arc
         *  that spans its exact angular range on the ring. End ticks mark the
         *  cluster boundaries, a dashed radial points outward to the label,
         *  and the arc itself curves in sympathy with the icons it encloses.
         *  This reads as "these ring items form a group" far more clearly than
         *  a curly brace, which fights the radial geometry. */}
        <CategoryCluster
          startAngle={CHANNELS_ARC.min}
          endAngle={CHANNELS_ARC.max}
          label="[CHANNELS]"
          labelAnchor="end"
        />
        {/* [CHANGED 2026-04-19] KNOWLEDGE cluster lives on the bottom arc
            (midAngle ≈ 280°). With the default labelOffset=48 the label
            computed to roughly (467, 526) in user-space — 6px past the
            bottom of the 960×520 viewBox — so it was getting clipped and
            the lane read as "missing" next to [CHANNELS] / [SYSTEMS].
            labelOffset=28 pulls it to ~y=506, inside the viewBox with
            headroom for the fontSize=10 text. */}
        <CategoryCluster
          startAngle={KNOWLEDGE_ARC.min}
          endAngle={KNOWLEDGE_ARC.max}
          label="[KNOWLEDGE]"
          labelAnchor="middle"
          labelOffset={28}
        />
        {/* [SYSTEMS] label: labelOffset=26 pulls it close to the ring
            (default 48 would overshoot into the stack column). labelDy
            lifts the label ~32 units above its natural arc position so
            it sits clearly above the exploded stack's top slab instead
            of floating at slab-top height. The arc itself stays anchored
            to the ring. */}
        <CategoryCluster
          startAngle={SYSTEMS_ARC.min}
          endAngle={SYSTEMS_ARC.max}
          label="[SYSTEMS]"
          labelAnchor="start"
          labelOffset={26}
          labelDy={-32}
        />
      </svg>
    </div>
  );
}

/** Mobile fallback — vertical stream of the same nodes, stacked. */
export function VerticalPipelineStream({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ol className="flex flex-col gap-2">
        {ALL_PIPELINE_NODES.map((n) => (
          <li
            key={n.id}
            className="flex items-center gap-3 border border-[var(--color-rule)] bg-[var(--color-paper)] px-3 py-2"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center border border-[var(--color-rule)] bg-[var(--color-paper)]">
              <ChannelLogo
                name={n.logo}
                brand
                style={{ width: 16, height: 16 }}
              />
            </span>
            <span className="text-sm text-[var(--color-ink)]">{n.label}</span>
            <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted-2)]">
              → MINDPATH
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
