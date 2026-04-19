"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

function applyTheme(resolved: Theme) {
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(resolved);
}

const THEME_EVENT = "mpbi:theme-change";

function subscribe(onChange: () => void) {
  const onStorage = (e: StorageEvent) => {
    if (e.key === "theme") onChange();
  };
  const onCustom = () => onChange();
  window.addEventListener("storage", onStorage);
  window.addEventListener(THEME_EVENT, onCustom);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(THEME_EVENT, onCustom);
  };
}

function readPreference(): Theme {
  const saved = localStorage.getItem("theme");
  return saved === "dark" ? "dark" : "light";
}

function getSnapshot(): string {
  return readPreference();
}

function getServerSnapshot(): string {
  return "light";
}

export function ThemeToggle() {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const resolved = (snapshot === "dark" ? "dark" : "light") as Theme;

  useEffect(() => {
    applyTheme(resolved);
  }, [resolved]);

  const toggle = useCallback(() => {
    const next: Theme = resolved === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    window.dispatchEvent(new CustomEvent(THEME_EVENT));
  }, [resolved]);

  const nextLabel = resolved === "dark" ? "light" : "dark";

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${nextLabel} mode`}
      title={`Theme: ${resolved} — click for ${nextLabel}`}
      className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-foreground/10"
    >
      {resolved === "dark" ? (
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
