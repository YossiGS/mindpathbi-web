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
          ? "border-b border-white/[0.06] bg-black/80 backdrop-blur-2xl saturate-150"
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
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
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
            { href: "#demo", label: "Demo" },
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

        <a
          href="mailto:mindpathbi@proton.me?subject=Early%20Access%20Request&body=Hi%20MindPath%20BI%20team%2C%0A%0AI%27m%20interested%20in%20early%20access.%0A%0AThanks!"
          className="rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-black transition-opacity hover:opacity-80"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
}
