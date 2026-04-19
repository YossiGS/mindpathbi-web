"use client";

import * as React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

type ModuleStatus = { name: string; active: boolean; label?: string };

type DayConfig = {
  num: string;
  tag: string;
  headline: string;
  body: string;
  modules: ModuleStatus[];
  exhibit: string;
  exhibitLabel: string;
};

const DAYS: DayConfig[] = [
  {
    num: "01",
    tag: "DAY OF CONNECTION",
    headline: "A quiet first day.",
    body: "We connect your first three channels and drop your knowledge base into the tenant. Classify and Retrieve come online immediately\u2009\u2014\u2009your inbound is tagged, and the system starts citing the pages your senior reps already rely on. Suggest runs in shadow mode, drafting replies nobody ships yet, so you can watch its voice. By end of day, your team has one inbox instead of five.",
    modules: [
      { name: "Classify", active: true },
      { name: "Retrieve", active: true, label: "BASIC" },
      { name: "Suggest", active: false, label: "SHADOW" },
      { name: "Act", active: false, label: "SOON" },
      { name: "Learn", active: false, label: "SOON" },
      { name: "Score", active: true, label: "PARTIAL" },
    ],
    exhibit: "A",
    exhibitLabel: "CHANNEL CONVERGENCE",
  },
  {
    num: "30",
    tag: "FIRST MONTH",
    headline: "The drafting surface, live.",
    body: "Your corpus has grown. Suggest moves from shadow to default\u2009\u2014\u2009every thread lands with a grounded first draft. Act is wired: quotes, refunds, and scheduling flow through your ERP and billing systems without tab-switching. The model has watched a month of your senior reps\u2019 edits\u2009\u2014\u2009it sharpens on those signals. Score shows early patterns: which intents get clean first drafts, which still need the room.",
    modules: [
      { name: "Classify", active: true },
      { name: "Retrieve", active: true, label: "FULL CORPUS" },
      { name: "Suggest", active: true },
      { name: "Act", active: true },
      { name: "Learn", active: true },
      { name: "Score", active: true },
    ],
    exhibit: "B",
    exhibitLabel: "GROUNDED DRAFT LOOP",
  },
  {
    num: "90",
    tag: "CRUISING",
    headline: "The room hears one voice.",
    body: "The team has shipped thousands of drafts. Autonomous send rules, scoped by intent and account, handle the clean cases\u2009\u2014\u2009order confirmations, standard quotes, thank-you replies. Your senior reps are where they should be: the ten threads a week that actually need them. Executive dashboards land in the drafting surface itself, not a separate BI tool.",
    modules: [
      { name: "Classify", active: true },
      { name: "Retrieve", active: true },
      { name: "Suggest", active: true },
      { name: "Act", active: true, label: "AUTO" },
      { name: "Learn", active: true },
      { name: "Score", active: true, label: "EXEC" },
    ],
    exhibit: "C",
    exhibitLabel: "FULL MODULE RING",
  },
];

/* ------------------------------------------------------------------ */
/*  Module chip                                                       */
/* ------------------------------------------------------------------ */

function ModuleChip({ name, active, label }: ModuleStatus) {
  if (active) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-sm border border-[var(--color-accent)] bg-[var(--color-accent-tint)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent-ink)]">
        <span
          className="h-1 w-1 rounded-full bg-[var(--color-accent)]"
          aria-hidden
        />
        {name}
        {label && (
          <span className="text-[9px] opacity-70">{"\u00b7"} {label}</span>
        )}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-sm border border-[var(--color-rule)] bg-[var(--color-paper-2)] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted-2)]">
      {name}
      {label && (
        <span className="ml-0.5 text-[9px]">[{label}]</span>
      )}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  SVG diagrams                                                      */
/* ------------------------------------------------------------------ */

const MONO = "var(--font-geist-mono, monospace)";
const LS = "0.08em";

function ChannelFanDiagram() {
  const channels = ["EMAIL", "CHAT", "WHATSAPP", "PORTAL"];
  const ys = [28, 60, 92, 124];
  const ex = 230;
  const ey = 76;

  return (
    <svg
      viewBox="0 0 320 152"
      className="mt-2 w-full"
      role="img"
      aria-label="Four channels converging into one endpoint"
    >
      {channels.map((ch, i) => (
        <React.Fragment key={ch}>
          <line
            x1={16}
            y1={ys[i]}
            x2={ex}
            y2={ey}
            stroke="var(--color-rule)"
            strokeWidth={0.5}
          />
          <circle
            cx={16}
            cy={ys[i]}
            r={3}
            fill="none"
            stroke="var(--color-muted-2)"
            strokeWidth={1}
          />
          <text
            x={28}
            y={ys[i] + 3.5}
            fill="var(--color-muted)"
            fontSize={9}
            fontFamily={MONO}
            style={{ letterSpacing: LS }}
          >
            {ch}
          </text>
        </React.Fragment>
      ))}
      <circle cx={ex} cy={ey} r={5} fill="var(--color-accent)" />
      <text
        x={ex + 12}
        y={ey + 3.5}
        fill="var(--color-accent-ink)"
        fontSize={9}
        fontFamily={MONO}
        fontWeight={600}
        style={{ letterSpacing: LS }}
      >
        MINDPATH BI
      </text>
    </svg>
  );
}

function DraftLoopDiagram() {
  const steps = [
    { label: "INBOUND", x: 8, accent: false },
    { label: "RETRIEVE", x: 88, accent: false },
    { label: "DRAFT", x: 176, accent: true },
    { label: "SEND", x: 256, accent: false },
  ];

  return (
    <svg
      viewBox="0 0 320 90"
      className="mt-2 w-full"
      role="img"
      aria-label="Draft loop: inbound, retrieve, draft with citation, send"
    >
      <defs>
        <marker
          id="arr-d30"
          markerWidth={6}
          markerHeight={6}
          refX={5}
          refY={3}
          orient="auto"
        >
          <path
            d="M0,0 L6,3 L0,6"
            fill="none"
            stroke="var(--color-rule)"
            strokeWidth={0.8}
          />
        </marker>
      </defs>
      {steps.map((s, i) => (
        <React.Fragment key={s.label}>
          <rect
            x={s.x}
            y={20}
            width={64}
            height={28}
            rx={2}
            fill={s.accent ? "var(--color-accent-tint)" : "none"}
            stroke={s.accent ? "var(--color-accent)" : "var(--color-rule)"}
            strokeWidth={1}
          />
          <text
            x={s.x + 32}
            y={38}
            fill={s.accent ? "var(--color-accent-ink)" : "var(--color-muted)"}
            fontSize={8}
            fontFamily={MONO}
            textAnchor="middle"
            style={{ letterSpacing: LS }}
          >
            {s.label}
          </text>
          {i < steps.length - 1 && (
            <line
              x1={s.x + 64}
              y1={34}
              x2={steps[i + 1].x}
              y2={34}
              stroke="var(--color-rule)"
              strokeWidth={0.5}
              markerEnd="url(#arr-d30)"
            />
          )}
        </React.Fragment>
      ))}
      <line
        x1={208}
        y1={48}
        x2={208}
        y2={58}
        stroke="var(--color-accent)"
        strokeWidth={0.5}
      />
      <rect
        x={190}
        y={58}
        width={36}
        height={16}
        rx={2}
        fill="var(--color-accent-tint)"
        stroke="var(--color-accent)"
        strokeWidth={0.5}
      />
      <text
        x={208}
        y={69}
        fill="var(--color-accent-ink)"
        fontSize={7}
        fontFamily={MONO}
        textAnchor="middle"
        style={{ letterSpacing: LS }}
      >
        CITE
      </text>
    </svg>
  );
}

function ModuleRingDiagram() {
  const top = [
    { name: "CLASSIFY", x: 40 },
    { name: "RETRIEVE", x: 140 },
    { name: "SUGGEST", x: 240 },
  ];
  const bottom = [
    { name: "SCORE", x: 40 },
    { name: "LEARN", x: 140 },
    { name: "ACT", x: 240 },
  ];

  return (
    <svg
      viewBox="0 0 280 100"
      className="mt-2 w-full"
      role="img"
      aria-label="All six modules active and connected"
    >
      <line
        x1={40}
        y1={30}
        x2={240}
        y2={30}
        stroke="var(--color-accent)"
        strokeWidth={0.5}
        opacity={0.4}
      />
      <line
        x1={40}
        y1={70}
        x2={240}
        y2={70}
        stroke="var(--color-accent)"
        strokeWidth={0.5}
        opacity={0.4}
      />
      {[40, 140, 240].map((x) => (
        <line
          key={x}
          x1={x}
          y1={30}
          x2={x}
          y2={70}
          stroke="var(--color-accent)"
          strokeWidth={0.5}
          opacity={0.4}
        />
      ))}
      {top.map((n) => (
        <React.Fragment key={n.name}>
          <circle cx={n.x} cy={30} r={4} fill="var(--color-accent)" />
          <text
            x={n.x}
            y={19}
            fill="var(--color-accent-ink)"
            fontSize={8}
            fontFamily={MONO}
            textAnchor="middle"
            style={{ letterSpacing: LS }}
          >
            {n.name}
          </text>
        </React.Fragment>
      ))}
      {bottom.map((n) => (
        <React.Fragment key={n.name}>
          <circle cx={n.x} cy={70} r={4} fill="var(--color-accent)" />
          <text
            x={n.x}
            y={89}
            fill="var(--color-accent-ink)"
            fontSize={8}
            fontFamily={MONO}
            textAnchor="middle"
            style={{ letterSpacing: LS }}
          >
            {n.name}
          </text>
        </React.Fragment>
      ))}
    </svg>
  );
}

const DIAGRAMS = [ChannelFanDiagram, DraftLoopDiagram, ModuleRingDiagram];

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export function OnboardingTimeline() {
  const prefersReduced = useReducedMotion() ?? false;
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const progress = useTransform(scrollYProgress, [0.18, 0.82], [0, 1]);
  const [p, setP] = React.useState(0);

  React.useEffect(() => {
    if (prefersReduced) {
      setP(1);
      return;
    }
    return progress.on("change", (v) => setP(v));
  }, [progress, prefersReduced]);

  const clamped = Math.max(0, Math.min(1, p));
  const activeIdx = Math.min(2, Math.floor(clamped * 3));

  return (
    <section className="relative border-t border-[var(--color-rule)] bg-[var(--color-paper)] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink)]">
          <span>[03]</span>
          <span>ONBOARDING SEQUENCE</span>
          <span className="text-[var(--color-muted)]">
            Day 1 {"\u2192"} Day 90
          </span>
          <span
            aria-hidden
            className="ml-2 h-px flex-1 bg-[var(--color-rule)]"
          />
        </div>

        {/* Mobile progress strip */}
        <div className="mt-8 flex items-center gap-6 md:hidden">
          {DAYS.map((d, i) => (
            <div key={d.num} className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  i <= activeIdx
                    ? "bg-[var(--color-accent)]"
                    : "bg-[var(--color-rule)]"
                }`}
              />
              <span
                className={`font-mono text-[10px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  i <= activeIdx
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-muted-2)]"
                }`}
              >
                Day {d.num}
              </span>
            </div>
          ))}
        </div>

        <div
          ref={containerRef}
          className="mt-8 grid gap-8 md:mt-10 md:grid-cols-12 md:gap-6"
        >
          {/* Desktop sticky rail */}
          <div className="hidden md:col-span-3 md:block">
            <div className="md:sticky md:top-24">
              <div className="relative h-52 pl-[3px]">
                {/* Background hairline */}
                <div className="absolute left-[3px] top-0 h-full w-px bg-[var(--color-rule)]" />
                {/* Accent fill */}
                <div
                  className="absolute left-[3px] top-0 w-px bg-[var(--color-accent)]"
                  style={{ height: `${clamped * 100}%` }}
                />
                {/* Day labels */}
                {DAYS.map((d, i) => (
                  <div
                    key={d.num}
                    className="absolute flex items-center gap-3"
                    style={{
                      top: `${i * 50}%`,
                      left: 0,
                      transform: "translateY(-50%)",
                    }}
                  >
                    <span
                      className={`relative z-10 h-[7px] w-[7px] rounded-full border transition-colors duration-300 ${
                        i <= activeIdx
                          ? "border-[var(--color-accent)] bg-[var(--color-accent)]"
                          : "border-[var(--color-rule)] bg-[var(--color-paper)]"
                      }`}
                    />
                    <div className="flex flex-col">
                      <span
                        className={`font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                          i <= activeIdx
                            ? "text-[var(--color-accent)]"
                            : "text-[var(--color-muted-2)]"
                        }`}
                      >
                        Day {d.num}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--color-muted-2)]">
                        {d.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Day sections */}
          <div className="flex flex-col gap-16 md:col-span-9 md:gap-24">
            {DAYS.map((day, i) => {
              const Diagram = DIAGRAMS[i];
              return (
                <motion.article
                  key={day.num}
                  initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
                  whileInView={prefersReduced ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Day eyebrow */}
                  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    <span>[DAY {day.num}]</span>
                    <span>{day.tag}</span>
                    <span
                      aria-hidden
                      className="ml-2 h-px flex-1 bg-[var(--color-rule)]"
                    />
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.01em] text-[var(--color-ink)] md:text-3xl">
                    {day.headline}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
                    {day.body}
                  </p>

                  {/* Module chips */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {day.modules.map((m) => (
                      <ModuleChip key={m.name} {...m} />
                    ))}
                  </div>

                  {/* Diagram card */}
                  <div className="mt-6 overflow-hidden rounded-md border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
                      [EXHIBIT {day.exhibit}] {"\u00b7"} {day.exhibitLabel}
                    </div>
                    <Diagram />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
