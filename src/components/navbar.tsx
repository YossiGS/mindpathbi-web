"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

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
          ? "border-b border-border bg-background/80 backdrop-blur-2xl saturate-150"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-12 max-w-[980px] items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-background"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            MindPath BI
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {[
            { href: "#features", label: "Features" },
            { href: "#integrations", label: "Integrations" },
            { href: "#preview", label: "Preview" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Link href="/privacy" className="text-xs text-muted transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="text-xs text-muted transition-colors hover:text-foreground">
            Terms
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="mailto:mindpathbi@proton.me?subject=MindPath%20BI%20Inquiry&body=Hi%20MindPath%20BI%20team%2C%0A%0AI%27d%20like%20to%20learn%20more.%0A%0AThanks!"
            className="rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-80"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
