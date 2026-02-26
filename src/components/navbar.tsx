"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-bright">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            MindPath <span className="text-muted">BI</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#integrations"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Integrations
          </a>
          <a
            href="#demo"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Demo
          </a>
          <Link
            href="/privacy"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
        </div>

        <a
          href="#early-access"
          className="rounded-full bg-gradient-to-r from-accent to-accent-bright px-5 py-2 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-accent/25"
        >
          Request Access
        </a>
      </div>
    </nav>
  );
}
