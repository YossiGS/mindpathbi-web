import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Level Agreement — MindPath BI",
  description: "Uptime commitments, service credits, and incident communication policies for the MindPath BI platform.",
};

export default function SLAPage() {
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
        <h1 className="text-4xl font-bold tracking-tight">Service Level Agreement</h1>
        <p className="mt-2 text-sm text-muted">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
          <p>
            This Service Level Agreement (&ldquo;SLA&rdquo;) describes the uptime commitments and service credit
            policies for the MindPath BI platform. This SLA forms part of and is subject to the{" "}
            <Link href="/terms" className="text-foreground underline underline-offset-2 hover:opacity-80">Terms of Service</Link>.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">1. Uptime Commitment</h2>
            <p>
              MindPath BI commits to <strong className="text-foreground">99.9% monthly uptime</strong> for
              the production Service, measured across the following components:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Web application (dashboard, inbox, Client 360)</li>
              <li>API endpoints</li>
              <li>Message delivery pipeline (sending and receiving)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">2. Downtime Definition</h2>
            <p>
              &ldquo;Downtime&rdquo; means any period of <strong className="text-foreground">5 or more consecutive minutes</strong> during
              which the core Service is unreachable or materially non-functional, as measured by our
              synthetic monitoring systems.
            </p>
            <p className="mt-3">Downtime <strong className="text-foreground">excludes</strong>:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Scheduled maintenance (see Section 3)</li>
              <li>Third-party service outages (Meta, Google, Microsoft, AI providers)</li>
              <li>Issues caused by Customer&rsquo;s equipment, software, or network</li>
              <li>Force majeure events</li>
              <li>Alpha or beta features</li>
              <li>Slowness of individual features that does not constitute total unavailability</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">3. Scheduled Maintenance</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>We will provide at least <strong className="text-foreground">48 hours&rsquo;</strong> advance notice of scheduled maintenance via our status page.</li>
              <li>Total scheduled downtime will not exceed <strong className="text-foreground">10 hours per calendar year</strong>.</li>
              <li>Whenever possible, scheduled maintenance will occur during low-traffic hours.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">4. Uptime Calculation</h2>
            <p>Monthly uptime is calculated as:</p>
            <div className="mt-3 rounded-lg border border-border bg-surface/50 p-4 text-center font-mono text-sm text-foreground">
              Uptime % = (Total Minutes in Month &minus; Downtime Minutes) / Total Minutes in Month &times; 100
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">5. Service Credits</h2>
            <p>
              If we fail to meet the uptime commitment in any calendar month, affected customers on
              paid plans are eligible for service credits as follows:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-2 pr-4 font-semibold text-foreground">Monthly Uptime</th>
                    <th className="pb-2 font-semibold text-foreground">Credit (% of Monthly Fees)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2 pr-4">&ge; 99.9%</td><td className="py-2">None</td></tr>
                  <tr><td className="py-2 pr-4">99.0% &ndash; 99.9%</td><td className="py-2 font-medium text-foreground">5%</td></tr>
                  <tr><td className="py-2 pr-4">98.0% &ndash; 99.0%</td><td className="py-2 font-medium text-foreground">10%</td></tr>
                  <tr><td className="py-2 pr-4">Below 98.0%</td><td className="py-2 font-medium text-foreground">15%</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">6. Credit Process</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Credits must be requested within <strong className="text-foreground">30 days</strong> of the end of the affected calendar month by contacting support.</li>
              <li>Credits are applied to future invoices and are not redeemable for cash.</li>
              <li>Credits are capped at <strong className="text-foreground">30 days</strong> of paid service fees.</li>
              <li>Credits expire upon termination of the Agreement.</li>
              <li>Service credits are your <strong className="text-foreground">sole and exclusive remedy</strong> for failure to meet the uptime commitment.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">7. Incident Communication</h2>
            <p>When an incident affects the Service, we commit to the following communication timelines:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-2 pr-4 font-semibold text-foreground">Severity</th>
                    <th className="pb-2 pr-4 font-semibold text-foreground">Description</th>
                    <th className="pb-2 font-semibold text-foreground">Communication Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2 pr-4 font-medium text-foreground">P1 — Critical</td><td className="py-2 pr-4">Total service outage or confirmed data breach</td><td className="py-2">Status page + customer email within <strong className="text-foreground">30 minutes</strong></td></tr>
                  <tr><td className="py-2 pr-4 font-medium text-foreground">P2 — Major</td><td className="py-2 pr-4">Degraded service or potential data exposure</td><td className="py-2">Status page within <strong className="text-foreground">1 hour</strong></td></tr>
                  <tr><td className="py-2 pr-4 font-medium text-foreground">P3 — Minor</td><td className="py-2 pr-4">Partial feature impairment</td><td className="py-2">Status page within <strong className="text-foreground">4 hours</strong></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">Post-incident reports for P1 and P2 incidents are published within 72 hours of resolution.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">8. Exclusions</h2>
            <p>This SLA does not apply to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Free or trial accounts (service credits are available on paid plans only)</li>
              <li>Downtime caused by third-party AI providers (AI feature availability is subject to provider uptime)</li>
              <li>Features explicitly designated as alpha, beta, or preview</li>
              <li>Downtime resulting from Customer actions that violate the Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">9. Changes</h2>
            <p>
              We may update this SLA from time to time. Material reductions to the uptime commitment
              will be communicated at least 30 days in advance. The &ldquo;Last updated&rdquo; date at
              the top will change when modifications are made.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">10. Contact</h2>
            <p>
              For SLA-related inquiries or to request service credits, contact us at{" "}
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
