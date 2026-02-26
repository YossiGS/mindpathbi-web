import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-6 px-6">
      <div className="mx-auto flex max-w-[980px] flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted">
          &copy; 2026 MindPath BI. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-muted">
          <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">Terms</Link>
          <Link href="/cookies" className="transition-colors hover:text-foreground">Cookies</Link>
          <a href="mailto:mindpathbi@proton.me" className="transition-colors hover:text-foreground">Contact</a>
          <a href="https://app.mindpathbi.com" className="transition-colors hover:text-foreground">Sign In</a>
        </div>
      </div>
    </footer>
  );
}
