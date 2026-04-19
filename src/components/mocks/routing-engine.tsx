"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  INBOUND_THREADS,
  PICKED_MEMBER_ID,
  ROUTING_CYCLE_SECONDS as CYCLE,
  ROUTING_LAYOUT,
  ROUTING_SIGNALS,
  SOURCE_THREAD_ID,
  TEAM_MEMBERS,
  type InboundThread,
  type RoutingSignal,
  type TeamMember,
} from "./routing-engine.data";

/**
 * RoutingEngineDiagram — homepage [EXHIBIT B] centerpiece.
 *
 * Left-to-right schematic: inbound threads on the left, the routing engine
 * in the middle (scoring across a handful of signals), team specialists on
 * the right. A pellet travels from a live thread through the engine and
 * lands on the rep whose skill + language + workload best match.
 *
 * Pure SVG + Motion. Reduced motion: pellets + signal pulses disabled,
 * "ASSIGNED" stamp remains visible so the outcome still reads.
 * Mobile (<768px): consumer flips to <VerticalRoutingStream />.
 */

const { viewBox, inbound, engine, team } = ROUTING_LAYOUT;

const INBOUND_TOTAL_H =
  INBOUND_THREADS.length * inbound.cardH +
  (INBOUND_THREADS.length - 1) * inbound.cardGap;
const INBOUND_TOP_Y = (viewBox.h - INBOUND_TOTAL_H) / 2;

const TEAM_TOTAL_H =
  TEAM_MEMBERS.length * team.cardH +
  (TEAM_MEMBERS.length - 1) * team.cardGap;
const TEAM_TOP_Y = (viewBox.h - TEAM_TOTAL_H) / 2;

const PICKED_IDX = Math.max(
  0,
  TEAM_MEMBERS.findIndex((m) => m.id === PICKED_MEMBER_ID),
);
const SOURCE_IDX = Math.max(
  0,
  INBOUND_THREADS.findIndex((t) => t.id === SOURCE_THREAD_ID),
);

// Engine interior geometry
const ENGINE_LABEL_Y = engine.y + 22;
const ENGINE_HEADER_RULE_Y = engine.y + 34;
const ENGINE_FOOTER_RULE_Y = engine.y + engine.h - 52;
const ENGINE_FOOTER_Y = engine.y + engine.h - 28;
const ENGINE_ROW_TOP = engine.y + 58;
const ENGINE_ROW_STEP =
  (ENGINE_FOOTER_RULE_Y - ENGINE_ROW_TOP) / ROUTING_SIGNALS.length;

const BAR_LABEL_X = engine.x + 18;
const BAR_X = engine.x + 148;
const BAR_MAX_W = engine.w - 168;

type Reduced = boolean;

function InboundCard({
  y,
  thread,
  active,
}: {
  y: number;
  thread: InboundThread;
  active: boolean;
}) {
  return (
    <g>
      <rect
        x={inbound.x}
        y={y}
        width={inbound.w}
        height={inbound.cardH}
        fill="var(--color-paper)"
        stroke={active ? "var(--color-accent)" : "var(--color-rule)"}
        strokeWidth={active ? 1.25 : 1}
        vectorEffect="non-scaling-stroke"
      />
      {/* Channel stamp */}
      <rect
        x={inbound.x + 12}
        y={y + 12}
        width={32}
        height={20}
        fill="var(--color-paper-2)"
        stroke="var(--color-rule)"
        strokeWidth={1}
      />
      <text
        x={inbound.x + 28}
        y={y + 26}
        textAnchor="middle"
        fontSize={10}
        className="font-mono"
        fontWeight={600}
        letterSpacing={1.2}
        fill="var(--color-ink)"
      >
        {thread.code}
      </text>
      {/* Thread code */}
      <text
        x={inbound.x + 54}
        y={y + 26}
        fontSize={10}
        className="font-mono"
        letterSpacing={1.4}
        fill="var(--color-muted-2)"
      >
        THREAD/{thread.id.toUpperCase()}
      </text>

      {/* Preview line */}
      <text
        x={inbound.x + 14}
        y={y + 52}
        fontSize={12}
        fill="var(--color-ink)"
      >
        {thread.preview.length > 28
          ? thread.preview.slice(0, 27) + "…"
          : thread.preview}
      </text>
      {/* Redacted meta line */}
      <rect
        x={inbound.x + 14}
        y={y + 64}
        width={inbound.w - 28}
        height={6}
        fill="var(--color-rule)"
      />
      <rect
        x={inbound.x + 14}
        y={y + 76}
        width={(inbound.w - 28) * 0.62}
        height={6}
        fill="var(--color-rule)"
      />

      {/* Outgoing port dot (right edge, vertically centered) */}
      <circle
        cx={inbound.x + inbound.w}
        cy={y + inbound.cardH / 2}
        r={3}
        fill={active ? "var(--color-accent)" : "var(--color-rule)"}
      />
    </g>
  );
}

function SignalRow({
  signal,
  index,
  rowY,
  prefersReduced,
}: {
  signal: RoutingSignal;
  index: number;
  rowY: number;
  prefersReduced: Reduced;
}) {
  const barW = BAR_MAX_W * signal.weight;
  return (
    <g>
      <text
        x={BAR_LABEL_X}
        y={rowY + 4}
        fontSize={10}
        className="font-mono"
        letterSpacing={1.4}
        fill="var(--color-muted)"
      >
        {signal.label}
      </text>
      {/* Track */}
      <rect
        x={BAR_X}
        y={rowY - 6}
        width={BAR_MAX_W}
        height={8}
        fill="var(--color-rule-soft)"
      />
      {/* Static score bar (rule color) */}
      <rect
        x={BAR_X}
        y={rowY - 6}
        width={barW}
        height={8}
        fill="var(--color-rule)"
      />
      {/* Animated accent overlay — pulses during routing phase */}
      {prefersReduced ? (
        <rect
          x={BAR_X}
          y={rowY - 6}
          width={barW}
          height={8}
          fill="var(--color-accent)"
          opacity={0.7}
        />
      ) : (
        <motion.rect
          x={BAR_X}
          y={rowY - 6}
          width={barW}
          height={8}
          fill="var(--color-accent)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2.0,
            times: [0, 0.15, 0.8, 1],
            delay: 1.2 + index * 0.12,
            repeat: Infinity,
            repeatDelay: CYCLE - 2.0,
            ease: "easeInOut",
          }}
        />
      )}
      {/* Value — small mono, end of bar */}
      <text
        x={BAR_X + BAR_MAX_W + 6}
        y={rowY + 4}
        fontSize={9}
        className="font-mono"
        letterSpacing={1.2}
        fill="var(--color-muted-2)"
      >
        {signal.weight.toFixed(2)}
      </text>
    </g>
  );
}

function Engine({ prefersReduced }: { prefersReduced: Reduced }) {
  return (
    <g>
      {/* Engine rect */}
      <rect
        x={engine.x}
        y={engine.y}
        width={engine.w}
        height={engine.h}
        fill="var(--color-paper-2)"
        stroke="var(--color-rule)"
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />
      {/* Corner ticks — classified look */}
      {[
        [engine.x, engine.y],
        [engine.x + engine.w, engine.y],
        [engine.x, engine.y + engine.h],
        [engine.x + engine.w, engine.y + engine.h],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <line
            x1={cx - 6}
            y1={cy}
            x2={cx + 6}
            y2={cy}
            stroke="var(--color-ink)"
            strokeWidth={1}
          />
          <line
            x1={cx}
            y1={cy - 6}
            x2={cx}
            y2={cy + 6}
            stroke="var(--color-ink)"
            strokeWidth={1}
          />
        </g>
      ))}

      {/* Title */}
      <text
        x={engine.x + 16}
        y={ENGINE_LABEL_Y}
        fontSize={11}
        className="font-mono"
        letterSpacing={1.8}
        fill="var(--color-ink)"
        fontWeight={600}
      >
        ROUTING ENGINE · v1.0
      </text>
      <text
        x={engine.x + engine.w - 16}
        y={ENGINE_LABEL_Y}
        textAnchor="end"
        fontSize={10}
        className="font-mono"
        letterSpacing={1.4}
        fill="var(--color-muted)"
      >
        [LIVE]
      </text>
      {/* Header hairline */}
      <line
        x1={engine.x}
        y1={ENGINE_HEADER_RULE_Y}
        x2={engine.x + engine.w}
        y2={ENGINE_HEADER_RULE_Y}
        stroke="var(--color-rule)"
        strokeWidth={1}
      />

      {/* Signal rows */}
      {ROUTING_SIGNALS.map((s, i) => {
        const rowY = ENGINE_ROW_TOP + ENGINE_ROW_STEP * i + ENGINE_ROW_STEP / 2;
        return (
          <SignalRow
            key={s.id}
            signal={s}
            index={i}
            rowY={rowY}
            prefersReduced={prefersReduced}
          />
        );
      })}

      {/* Footer hairline */}
      <line
        x1={engine.x}
        y1={ENGINE_FOOTER_RULE_Y}
        x2={engine.x + engine.w}
        y2={ENGINE_FOOTER_RULE_Y}
        stroke="var(--color-rule)"
        strokeWidth={1}
      />

      {/* Footer — score + assignment */}
      <text
        x={engine.x + 16}
        y={ENGINE_FOOTER_Y}
        fontSize={10}
        className="font-mono"
        letterSpacing={1.6}
        fill="var(--color-muted)"
      >
        [SCORE · 0.87]
      </text>
      <text
        x={engine.x + engine.w - 16}
        y={ENGINE_FOOTER_Y}
        textAnchor="end"
        fontSize={10}
        className="font-mono"
        letterSpacing={1.6}
        fill="var(--color-accent-ink)"
        fontWeight={600}
      >
        [ASSIGN · {TEAM_MEMBERS[PICKED_IDX].initials}]
      </text>
    </g>
  );
}

function StatusPill({
  status,
  x,
  y,
}: {
  status: TeamMember["status"];
  x: number;
  y: number;
}) {
  const label =
    status === "avail" ? "AVAIL" : status === "busy" ? "BUSY" : "OFF";
  const dotColor =
    status === "avail"
      ? "var(--color-status-ok)"
      : status === "busy"
        ? "var(--color-status-warn)"
        : "var(--color-muted-2)";
  return (
    <g>
      <circle cx={x} cy={y - 3} r={3} fill={dotColor} />
      <text
        x={x + 7}
        y={y}
        fontSize={9}
        className="font-mono"
        letterSpacing={1.4}
        fill="var(--color-muted)"
      >
        {label}
      </text>
    </g>
  );
}

function TeamCard({
  y,
  member,
  picked,
  prefersReduced,
}: {
  y: number;
  member: TeamMember;
  picked: boolean;
  prefersReduced: Reduced;
}) {
  return (
    <g>
      {/* Card background */}
      <rect
        x={team.x}
        y={y}
        width={team.w}
        height={team.cardH}
        fill="var(--color-paper)"
        stroke="var(--color-rule)"
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />
      {/* Accent border overlay for picked — pulses in during assign phase */}
      {picked &&
        (prefersReduced ? (
          <rect
            x={team.x}
            y={y}
            width={team.w}
            height={team.cardH}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={1.5}
            vectorEffect="non-scaling-stroke"
          />
        ) : (
          <motion.rect
            x={team.x}
            y={y}
            width={team.w}
            height={team.cardH}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={1.5}
            vectorEffect="non-scaling-stroke"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{
              duration: 2.8,
              times: [0, 0.6, 0.66, 0.95, 1],
              delay: 3.0,
              repeat: Infinity,
              repeatDelay: CYCLE - 2.8,
              ease: "easeOut",
            }}
          />
        ))}

      {/* Initials stamp */}
      <rect
        x={team.x + 10}
        y={y + (team.cardH - 40) / 2}
        width={40}
        height={40}
        fill={picked ? "var(--color-ink)" : "var(--color-paper-2)"}
        stroke={picked ? "var(--color-ink)" : "var(--color-rule)"}
        strokeWidth={1}
      />
      <text
        x={team.x + 30}
        y={y + team.cardH / 2 + 4}
        textAnchor="middle"
        fontSize={14}
        fontWeight={600}
        fill={picked ? "var(--color-paper)" : "var(--color-ink)"}
        className="font-mono"
        letterSpacing={1}
      >
        {member.initials}
      </text>

      {/* Name / role */}
      <text
        x={team.x + 60}
        y={y + 26}
        fontSize={13}
        fontWeight={600}
        fill="var(--color-ink)"
      >
        {member.role}
      </text>
      <text
        x={team.x + 60}
        y={y + 42}
        fontSize={10}
        className="font-mono"
        letterSpacing={1.4}
        fill="var(--color-muted)"
      >
        {member.tag}
      </text>

      {/* Status pill */}
      <StatusPill status={member.status} x={team.x + 60} y={y + 56} />

      {/* ASSIGNED stamp — only on picked, animates in during phase 3/4.
          Positioned bottom-right so it clears the long "Technical sales" role. */}
      {picked && (
        <g
          transform={`translate(${team.x + team.w - 10} ${y + team.cardH - 10})`}
        >
          {prefersReduced ? (
            <g>
              <rect
                x={-72}
                y={-14}
                width={72}
                height={16}
                fill="var(--color-accent-tint)"
                stroke="var(--color-accent)"
                strokeWidth={1}
              />
              <text
                x={-36}
                y={-2}
                textAnchor="middle"
                fontSize={9}
                className="font-mono"
                letterSpacing={1.6}
                fill="var(--color-accent-ink)"
                fontWeight={600}
              >
                [ASSIGNED]
              </text>
            </g>
          ) : (
            <motion.g
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{
                opacity: [0, 0, 1, 1, 0],
                scale: [0.88, 0.88, 1, 1, 0.88],
              }}
              transition={{
                duration: 2.8,
                times: [0, 0.6, 0.72, 0.95, 1],
                delay: 3.0,
                repeat: Infinity,
                repeatDelay: CYCLE - 2.8,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "right bottom" }}
            >
              <rect
                x={-72}
                y={-14}
                width={72}
                height={16}
                fill="var(--color-accent-tint)"
                stroke="var(--color-accent)"
                strokeWidth={1}
              />
              <text
                x={-36}
                y={-2}
                textAnchor="middle"
                fontSize={9}
                className="font-mono"
                letterSpacing={1.6}
                fill="var(--color-accent-ink)"
                fontWeight={600}
              >
                [ASSIGNED]
              </text>
            </motion.g>
          )}
        </g>
      )}
    </g>
  );
}

export function RoutingEngineDiagram({ className }: { className?: string }) {
  const prefersReduced = useReducedMotion() ?? false;

  // Source pellet coords
  const inboundStartX = inbound.x + inbound.w;
  const inboundStartY =
    INBOUND_TOP_Y + inbound.cardH / 2 + SOURCE_IDX * (inbound.cardH + inbound.cardGap);
  const engineLeftX = engine.x;
  const engineRightX = engine.x + engine.w;
  const engineCenterY = engine.y + engine.h / 2;
  const teamX = team.x;
  const teamCardY =
    TEAM_TOP_Y + PICKED_IDX * (team.cardH + team.cardGap) + team.cardH / 2;

  const inboundPathD = `M${inboundStartX} ${inboundStartY} C ${
    inboundStartX + 40
  } ${inboundStartY}, ${engineLeftX - 40} ${engineCenterY}, ${engineLeftX} ${engineCenterY}`;

  const outboundPathD = `M${engineRightX} ${engineCenterY} C ${
    engineRightX + 40
  } ${engineCenterY}, ${teamX - 40} ${teamCardY}, ${teamX} ${teamCardY}`;

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${viewBox.w} ${viewBox.h}`}
        role="img"
        aria-label="A thread travels from the inbound stream through the routing engine and is assigned to the right specialist."
        className="h-auto w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Hairline column guides */}
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

        {/* Lane labels */}
        <text
          x={inbound.x}
          y={INBOUND_TOP_Y - 14}
          fontSize={10}
          className="font-mono"
          fill="var(--color-muted)"
          letterSpacing={1.4}
        >
          [INBOUND]
        </text>
        <text
          x={engine.x + engine.w / 2}
          y={engine.y - 14}
          textAnchor="middle"
          fontSize={10}
          className="font-mono"
          fill="var(--color-muted)"
          letterSpacing={1.4}
        >
          [SCORE · ASSIGN]
        </text>
        <text
          x={team.x}
          y={TEAM_TOP_Y - 14}
          fontSize={10}
          className="font-mono"
          fill="var(--color-muted)"
          letterSpacing={1.4}
        >
          [TEAM]
        </text>

        {/* Inbound cards */}
        {INBOUND_THREADS.map((t, i) => {
          const y = INBOUND_TOP_Y + i * (inbound.cardH + inbound.cardGap);
          return (
            <InboundCard
              key={t.id}
              y={y}
              thread={t}
              active={i === SOURCE_IDX}
            />
          );
        })}

        {/* Path: inbound → engine */}
        <path
          d={inboundPathD}
          stroke="var(--color-rule)"
          strokeWidth={1}
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        {!prefersReduced && (
          <motion.circle
            r={4}
            fill="var(--color-accent)"
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.4,
              delay: 0,
              repeat: Infinity,
              repeatDelay: CYCLE - 1.4,
              ease: "easeInOut",
            }}
            style={{
              offsetPath: `path('${inboundPathD}')`,
              offsetRotate: "0deg",
            }}
          />
        )}

        {/* Engine */}
        <Engine prefersReduced={prefersReduced} />

        {/* Path: engine → picked team */}
        <path
          d={outboundPathD}
          stroke="var(--color-rule)"
          strokeWidth={1}
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
        {!prefersReduced && (
          <motion.circle
            r={4}
            fill="var(--color-ink)"
            initial={{ offsetDistance: "0%", opacity: 0 }}
            animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 1.3,
              delay: 3.6,
              repeat: Infinity,
              repeatDelay: CYCLE - 1.3,
              ease: "easeInOut",
            }}
            style={{
              offsetPath: `path('${outboundPathD}')`,
              offsetRotate: "0deg",
            }}
          />
        )}

        {/* Team cards */}
        {TEAM_MEMBERS.map((m, i) => {
          const y = TEAM_TOP_Y + i * (team.cardH + team.cardGap);
          return (
            <TeamCard
              key={m.id}
              y={y}
              member={m}
              picked={i === PICKED_IDX}
              prefersReduced={prefersReduced}
            />
          );
        })}
      </svg>
    </div>
  );
}

/** Mobile fallback — stacked list showing the same flow. */
export function VerticalRoutingStream({ className }: { className?: string }) {
  const picked = TEAM_MEMBERS[PICKED_IDX];
  const source = INBOUND_THREADS[SOURCE_IDX];
  return (
    <div className={className}>
      <div className="flex flex-col gap-3">
        {/* Inbound */}
        <div className="rounded-sm border border-[var(--color-accent)] bg-[var(--color-paper)] p-3">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
            <span className="inline-flex h-5 w-8 items-center justify-center border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[var(--color-ink)]">
              {source.code}
            </span>
            <span>THREAD/{source.id.toUpperCase()}</span>
          </div>
          <p className="mt-2 text-sm text-[var(--color-ink)]">
            {source.preview}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          ↓ ROUTING ENGINE
        </div>

        {/* Engine mini */}
        <div className="rounded-sm border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-3">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em]">
            <span className="text-[var(--color-ink)]">ROUTING · v1.0</span>
            <span className="text-[var(--color-muted)]">[LIVE]</span>
          </div>
          <ul className="mt-3 flex flex-col gap-1.5">
            {ROUTING_SIGNALS.map((s) => (
              <li
                key={s.id}
                className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]"
              >
                <span className="w-24 shrink-0">{s.label}</span>
                <span className="relative h-1.5 flex-1 bg-[var(--color-rule-soft)]">
                  <span
                    className="absolute inset-y-0 left-0 bg-[var(--color-accent)]"
                    style={{ width: `${s.weight * 100}%` }}
                  />
                </span>
                <span className="text-[var(--color-muted-2)]">
                  {s.weight.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between border-t border-[var(--color-rule)] pt-2 font-mono text-[10px] uppercase tracking-[0.18em]">
            <span className="text-[var(--color-muted)]">[SCORE · 0.87]</span>
            <span className="font-semibold text-[var(--color-accent-ink)]">
              [ASSIGN · {picked.initials}]
            </span>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          ↓ ASSIGNED TO
        </div>

        {/* Picked team member */}
        <div className="relative rounded-sm border border-[var(--color-accent)] bg-[var(--color-paper)] p-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center border border-[var(--color-ink)] bg-[var(--color-ink)] font-mono text-[13px] font-semibold text-[var(--color-paper)]">
              {picked.initials}
            </span>
            <div className="flex-1">
              <div className="text-[13px] font-semibold text-[var(--color-ink)]">
                {picked.role}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {picked.tag}
              </div>
            </div>
            <span className="inline-flex items-center gap-1 border border-[var(--color-accent)] bg-[var(--color-accent-tint)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--color-accent-ink)]">
              [ASSIGNED]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
