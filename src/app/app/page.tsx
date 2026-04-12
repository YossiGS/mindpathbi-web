import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { APP_URL, isAppLive } from "@/lib/config";

export const metadata: Metadata = {
  title: "MindPath BI — App",
  description:
    "The MindPath BI platform is launching soon. Get notified when we go live.",
};

export default function AppPage() {
  if (isAppLive) redirect(APP_URL);
  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-2xl saturate-150">
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

          <Link
            href="/"
            className="text-xs text-muted transition-colors hover:text-foreground"
          >
            ← Back to site
          </Link>
        </div>
      </nav>

      <main className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-center px-6 pt-12 text-center">
        <div className="mx-auto max-w-lg">
          {/* Status indicator */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
            </span>
            <span className="text-xs font-medium text-muted">
              Launching soon
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            We&apos;re getting
            <br />
            <span className="text-muted">everything ready.</span>
          </h1>

          <p className="mt-5 text-base leading-relaxed text-muted">
            The MindPath&nbsp;BI platform is almost here. We&apos;re putting the
            finishing touches on unified inbox, Client&nbsp;360, AI&nbsp;copilot,
            and all the integrations you&apos;ll love.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="mailto:josef@mindpathbi.com?subject=MindPath%20BI%20—%20Notify%20Me&body=Hi%2C%0A%0APlease%20let%20me%20know%20when%20the%20app%20is%20live.%0A%0AThanks!"
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              Notify me at launch
            </a>
            <Link
              href="/"
              className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
            >
              Explore the product
            </Link>
          </div>

          {/* Feature teaser grid */}
          <div className="mt-16 grid grid-cols-2 gap-4 text-left">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                ),
                title: "Unified Inbox",
                desc: "Every channel in one place",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Client 360",
                desc: "Full customer picture",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                title: "AI Copilot",
                desc: "Smart replies & insights",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
                  </svg>
                ),
                title: "Integrations",
                desc: "WhatsApp, Gmail, SAP & more",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface/50 p-4"
              >
                <div className="mb-2 text-muted">{item.icon}</div>
                <p className="text-sm font-medium text-foreground">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
