import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — MindPath BI",
  description: "How MindPath BI uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-white/5">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-bright">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight">MindPath <span className="text-muted">BI</span></span>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Cookie Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: February 26, 2026</p>

        <div className="prose-invert mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
          <p>
            This Cookie Policy explains how MindPath BI (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;)
            uses cookies and similar tracking technologies when you visit our website or use our platform.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit a website. They help websites
              remember your preferences, maintain sessions, and understand how you interact with the site.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">2. Types of Cookies We Use</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-foreground">Essential Cookies:</strong> Required for the Service to
                function. These include session cookies and authentication tokens. Cannot be disabled.
              </li>
              <li>
                <strong className="text-foreground">Functional Cookies:</strong> Remember your preferences
                such as language, theme, and layout settings to provide a personalized experience.
              </li>
              <li>
                <strong className="text-foreground">Analytics Cookies:</strong> Help us understand how
                visitors interact with our website. We use privacy-respecting analytics that do not track
                you across other websites.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">3. What We Do NOT Do</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>We do not use advertising or targeting cookies.</li>
              <li>We do not sell cookie data to third parties.</li>
              <li>We do not use cross-site tracking technologies.</li>
              <li>We do not use fingerprinting or similar invasive tracking methods.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">4. Third-Party Cookies</h2>
            <p>
              When you connect third-party integrations (Google, Microsoft, Slack, Meta), those services
              may set their own cookies according to their respective cookie policies. We do not control
              these third-party cookies.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">5. Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to
              block or delete cookies. Please note that disabling essential cookies may prevent the Service
              from functioning properly.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">6. Contact</h2>
            <p>
              If you have questions about our use of cookies, contact us at{" "}
              <a href="mailto:mindpathbi@proton.me" className="text-accent hover:underline">mindpathbi@proton.me</a>.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-white/5 pt-8 text-center text-xs text-muted/60">
          &copy; 2026 MindPath BI. All rights reserved.
        </div>
      </main>
    </div>
  );
}
