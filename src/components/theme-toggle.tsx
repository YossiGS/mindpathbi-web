"use client";

import { useState, useEffect, useCallback } from "react";

type Theme = "dark" | "light" | "system";

function getSystemTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(resolved: "dark" | "light") {
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(resolved);
}

export function ThemeToggle() {
  const [preference, setPreference] = useState<Theme>("system");
  const [resolved, setResolved] = useState<"dark" | "light">("dark");

  const resolve = useCallback((pref: Theme) => {
    const r = pref === "system" ? getSystemTheme() : pref;
    setResolved(r);
    applyTheme(r);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const pref = saved === "light" || saved === "dark" ? saved : "system";
    setPreference(pref);
    resolve(pref);

    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const handler = () => {
      if ((localStorage.getItem("theme") ?? "system") === "system") {
        resolve("system");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [resolve]);

  const cycle = () => {
    const order: Theme[] = ["system", "dark", "light"];
    const next = order[(order.indexOf(preference) + 1) % order.length];
    setPreference(next);
    resolve(next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={cycle}
      aria-label={`Theme: ${preference}`}
      title={`Theme: ${preference === "system" ? `System (${resolved})` : preference}`}
      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-foreground/10"
    >
      {preference === "system" ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ) : resolved === "dark" ? (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}
