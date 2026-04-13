import Link from "next/link";
import { APP_URL, isAppLive } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto flex max-w-[980px] flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
        <p className="text-xs text-muted">
          &copy; 2026 MindPath BI. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted sm:justify-end">
          <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">Terms</Link>
          <Link href="/dpa" className="transition-colors hover:text-foreground">DPA</Link>
          <Link href="/sla" className="transition-colors hover:text-foreground">SLA</Link>
          <Link href="/ai-terms" className="transition-colors hover:text-foreground">AI Terms</Link>
          <Link href="/subprocessors" className="transition-colors hover:text-foreground">Subprocessors</Link>
          <a href="mailto:josef@mindpathbi.com" className="transition-colors hover:text-foreground">Contact</a>
          {isAppLive ? (
            <a href={APP_URL} className="transition-colors hover:text-foreground">Sign In</a>
          ) : (
            <Link href="/app" className="transition-colors hover:text-foreground">Sign In</Link>
          )}
        </div>
      </div>
    </footer>
  );
}
