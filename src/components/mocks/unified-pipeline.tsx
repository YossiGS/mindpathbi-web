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

const { viewBox, center, radius, outputX, outputSpacing } = PIPELINE_LAYOUT;

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
}: {
  startAngle: number;
  endAngle: number;
  label: string;
  labelOffset?: number;
  labelAnchor: "start" | "middle" | "end";
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
        y={labelPos.y}
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

function OutputThreads({ prefersReduced }: { prefersReduced: boolean }) {
  return (
    <g>
      {OUTPUT_THREADS.map((t, i) => {
        const y = center.y + (i - 1) * outputSpacing;
        const d = `M${center.x + 44} ${center.y} C ${center.x + 140} ${center.y}, ${
          outputX - 120
        } ${y}, ${outputX} ${y}`;
        return (
          <g key={t.id}>
            <path
              d={d}
              stroke="var(--color-rule)"
              strokeWidth={1}
              fill="none"
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
                  delay: 0.6 + i * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                style={{ offsetPath: `path('${d}')`, offsetRotate: "0deg" }}
              />
            )}
            <g transform={`translate(${outputX} ${y})`}>
              <rect
                x={0}
                y={-18}
                width={140}
                height={36}
                fill="var(--color-paper-2)"
                stroke="var(--color-rule)"
                strokeWidth={1}
              />
              <text
                x={12}
                y={-2}
                fontSize={12}
                fontWeight={600}
                fill="var(--color-ink)"
              >
                {t.title}
              </text>
              <text
                x={12}
                y={13}
                fontSize={10}
                className="font-mono"
                fill="var(--color-muted)"
              >
                {t.caption}
              </text>
            </g>
          </g>
        );
      })}
    </g>
  );
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
        <OutputThreads prefersReduced={prefersReduced} />

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
        <CategoryCluster
          startAngle={KNOWLEDGE_ARC.min}
          endAngle={KNOWLEDGE_ARC.max}
          label="[KNOWLEDGE]"
          labelAnchor="middle"
        />
        <CategoryCluster
          startAngle={SYSTEMS_ARC.min}
          endAngle={SYSTEMS_ARC.max}
          label="[SYSTEMS]"
          labelAnchor="start"
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
