import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-bright">
            <svg
              width="14"
              height="14"
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
          <span className="text-sm font-semibold">
            MindPath <span className="text-muted">BI</span>
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">
            Terms
          </Link>
          <Link href="/cookies" className="transition-colors hover:text-foreground">
            Cookies
          </Link>
          <a
            href="mailto:mindpathbi@proton.me"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </a>
          <a
            href="https://app.mindpathbi.com"
            className="transition-colors hover:text-foreground"
          >
            Sign In
          </a>
        </div>

        <p className="text-xs text-muted/60">
          &copy; {new Date().getFullYear()} MindPath BI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
