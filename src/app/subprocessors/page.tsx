import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subprocessors — MindPath BI",
  description: "Third-party subprocessors used by MindPath BI to deliver the service.",
};

export default function SubprocessorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border">
        <div className="mx-auto flex h-12 max-w-3xl items-center px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-background">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-tight">MindPath BI</span>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Subprocessors</h1>
        <p className="mt-2 text-sm text-muted">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
          <p>
            MindPath BI uses the following third-party subprocessors to deliver the service. This page is
            maintained as part of our commitment to transparency under GDPR and applicable data protection regulations.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-2 pr-4 font-semibold text-foreground">Subprocessor</th>
                  <th className="pb-2 pr-4 font-semibold text-foreground">Purpose</th>
                  <th className="pb-2 pr-4 font-semibold text-foreground">Data Categories</th>
                  <th className="pb-2 font-semibold text-foreground">Region</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Vercel</td>
                  <td className="py-3 pr-4">Frontend hosting, edge CDN</td>
                  <td className="py-3 pr-4">App metadata, request metadata</td>
                  <td className="py-3">Multi-region</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">OVH</td>
                  <td className="py-3 pr-4">Backend infrastructure, database, object storage</td>
                  <td className="py-3 pr-4">All application data</td>
                  <td className="py-3">EU (France)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Google (Gemini)</td>
                  <td className="py-3 pr-4">Primary AI provider</td>
                  <td className="py-3 pr-4">Thread content, KB documents (processed, not stored)</td>
                  <td className="py-3">US/EU</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Brevo</td>
                  <td className="py-3 pr-4">Transactional email delivery</td>
                  <td className="py-3 pr-4">Email addresses, notification content</td>
                  <td className="py-3">EU</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Sentry</td>
                  <td className="py-3 pr-4">Error tracking</td>
                  <td className="py-3 pr-4">Stack traces, request metadata (no PII)</td>
                  <td className="py-3">US</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">GitHub</td>
                  <td className="py-3 pr-4">Source code hosting, CI/CD</td>
                  <td className="py-3 pr-4">Source code, CI logs (no customer data)</td>
                  <td className="py-3">US</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">ClamAV (self-hosted)</td>
                  <td className="py-3 pr-4">Malware scanning</td>
                  <td className="py-3 pr-4">File content (scanned in-memory, not stored)</td>
                  <td className="py-3">Self-hosted</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Docker Hub</td>
                  <td className="py-3 pr-4">Container image registry</td>
                  <td className="py-3 pr-4">Container images (no customer data)</td>
                  <td className="py-3">US</td>
                </tr>
              </tbody>
            </table>
          </div>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">Change Management</h2>
            <p>
              Material changes to our subprocessor list are reviewed by our Security and Legal teams before
              activation. Customer notification follows contractual notice terms as outlined in your Data
              Processing Agreement (DPA).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">Questions</h2>
            <p>
              If you have questions about our subprocessors, please contact us at{" "}
              <a href="mailto:josef@mindpathbi.com" className="text-foreground underline underline-offset-2 hover:opacity-80">josef@mindpathbi.com</a>.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-xs text-muted">
          &copy; 2026 MindPath BI. All rights reserved.
        </div>
      </main>
    </div>
  );
}
