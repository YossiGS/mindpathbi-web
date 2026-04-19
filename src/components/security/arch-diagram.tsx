import * as React from "react";

const STAGES = [
  { code: "01", name: "INGEST", caption: "TLS terminated at tenant edge" },
  { code: "02", name: "CLASSIFY", caption: "Tenant-scoped classifier" },
  { code: "03", name: "RETRIEVE", caption: "Tenant-scoped retrieval index" },
  { code: "04", name: "DRAFT", caption: "Model call with redaction" },
  { code: "05", name: "SEND", caption: "Native channel post" },
  { code: "06", name: "AUDIT", caption: "Immutable log" },
] as const;

const LEGEND = [
  "Encrypted ingest via industry-standard transport security. Terminated at the tenant boundary.",
  "Classification scoped to the tenant's own taxonomy. No cross-tenant signal sharing.",
  "Retrieval from the tenant's corpus only. No shared index, no cross-tenant inference.",
  "Model invocation with field-level redaction applied before the call leaves the tenant boundary.",
  "Delivery to the native channel — the response never touches another tenant's pathway.",
  "Every action recorded in an immutable, tenant-owned audit log exportable on demand.",
] as const;

function HorizontalDiagram() {
  const boxW = 120;
  const boxH = 72;
  const gap = 36;
  const arrowLen = gap;
  const startX = 16;
  const startY = 12;
  const totalW = startX * 2 + STAGES.length * boxW + (STAGES.length - 1) * gap;
  const totalH = startY + boxH + 28;

  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      className="hidden w-full md:block"
      aria-label="Architecture diagram: Ingest, Classify, Retrieve, Draft, Send, Audit"
      role="img"
    >
      {STAGES.map((s, i) => {
        const x = startX + i * (boxW + gap);
        const y = startY;
        return (
          <g key={s.code}>
            <rect
              x={x}
              y={y}
              width={boxW}
              height={boxH}
              rx={3}
              fill="none"
              stroke="var(--color-rule)"
              strokeWidth={1}
            />
            <circle cx={x + 12} cy={y + 14} r={3} fill="var(--color-accent)" />
            <text
              x={x + 20}
              y={y + 17}
              className="fill-[var(--color-muted)]"
              style={{ fontSize: 9, fontFamily: "var(--font-mono)" }}
            >
              [{s.code}]
            </text>
            <text
              x={x + boxW / 2}
              y={y + 36}
              textAnchor="middle"
              className="fill-[var(--color-ink)]"
              style={{ fontSize: 11, fontFamily: "var(--font-mono)", fontWeight: 600 }}
            >
              {s.name}
            </text>
            <text
              x={x + boxW / 2}
              y={y + 52}
              textAnchor="middle"
              className="fill-[var(--color-muted)]"
              style={{ fontSize: 8, fontFamily: "var(--font-mono)" }}
            >
              {s.caption}
            </text>
            {i < STAGES.length - 1 && (
              <g>
                <line
                  x1={x + boxW}
                  y1={y + boxH / 2}
                  x2={x + boxW + arrowLen - 6}
                  y2={y + boxH / 2}
                  stroke="var(--color-rule)"
                  strokeWidth={1}
                />
                <polygon
                  points={`${x + boxW + arrowLen - 6},${y + boxH / 2 - 3} ${x + boxW + arrowLen},${y + boxH / 2} ${x + boxW + arrowLen - 6},${y + boxH / 2 + 3}`}
                  fill="var(--color-muted)"
                />
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

function VerticalDiagram() {
  const boxW = 260;
  const boxH = 64;
  const gap = 28;
  const startX = 16;
  const startY = 8;
  const totalW = startX * 2 + boxW;
  const totalH = startY + STAGES.length * (boxH + gap) - gap + 8;

  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      className="block w-full md:hidden"
      aria-label="Architecture diagram: Ingest, Classify, Retrieve, Draft, Send, Audit"
      role="img"
    >
      {STAGES.map((s, i) => {
        const x = startX;
        const y = startY + i * (boxH + gap);
        return (
          <g key={s.code}>
            <rect
              x={x}
              y={y}
              width={boxW}
              height={boxH}
              rx={3}
              fill="none"
              stroke="var(--color-rule)"
              strokeWidth={1}
            />
            <circle cx={x + 12} cy={y + 14} r={3} fill="var(--color-accent)" />
            <text
              x={x + 20}
              y={y + 17}
              className="fill-[var(--color-muted)]"
              style={{ fontSize: 9, fontFamily: "var(--font-mono)" }}
            >
              [{s.code}]
            </text>
            <text
              x={x + 12}
              y={y + 34}
              className="fill-[var(--color-ink)]"
              style={{ fontSize: 11, fontFamily: "var(--font-mono)", fontWeight: 600 }}
            >
              {s.name}
            </text>
            <text
              x={x + 12}
              y={y + 50}
              className="fill-[var(--color-muted)]"
              style={{ fontSize: 8, fontFamily: "var(--font-mono)" }}
            >
              {s.caption}
            </text>
            {i < STAGES.length - 1 && (
              <g>
                <line
                  x1={x + boxW / 2}
                  y1={y + boxH}
                  x2={x + boxW / 2}
                  y2={y + boxH + gap - 6}
                  stroke="var(--color-rule)"
                  strokeWidth={1}
                />
                <polygon
                  points={`${x + boxW / 2 - 3},${y + boxH + gap - 6} ${x + boxW / 2},${y + boxH + gap} ${x + boxW / 2 + 3},${y + boxH + gap - 6}`}
                  fill="var(--color-muted)"
                />
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export function ArchDiagram() {
  return (
    <div>
      <div className="rounded-md border border-[var(--color-rule)] bg-[var(--color-paper)] p-4 md:p-6">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-muted)]">
          <span>[EXHIBIT B]</span>
          <span>DATA FLOW · SCHEMATIC</span>
        </div>
        <div className="mt-4">
          <HorizontalDiagram />
          <VerticalDiagram />
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {STAGES.map((s, i) => (
          <div key={s.code} className="flex gap-3">
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--color-muted)]">
              [{s.code}]
            </span>
            <div>
              <span className="font-mono text-xs font-medium text-[var(--color-ink)]">
                {s.name}
              </span>
              <p className="mt-0.5 text-sm leading-relaxed text-[var(--color-muted)]">
                {LEGEND[i]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
