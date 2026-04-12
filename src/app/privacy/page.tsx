import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — MindPath BI",
  description: "How MindPath BI collects, uses, and protects your information.",
};

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
          <p>
            This notice describes how MindPath BI (&ldquo;we,&rdquo; &ldquo;us&rdquo;) collects, uses, and shares
            personal information when you use our customer service platform, and explains your privacy rights.
          </p>
          <p>
            For privacy questions or to exercise your rights, email{" "}
            <a href="mailto:josef@mindpathbi.com" className="text-foreground underline underline-offset-2 hover:opacity-80">josef@mindpathbi.com</a>.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">1. What Data We Collect</h2>
            <p>Depending on how you use the service, we may process:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Conversation and thread data</strong> — Messages, subjects, channels, timestamps, and related metadata associated with customer conversations (email, chat, or messaging threads).</li>
              <li><strong className="text-foreground">Contact and account information</strong> — Names, email addresses, phone numbers, job titles, channel identifiers, tags, and similar fields used to identify and serve customers.</li>
              <li><strong className="text-foreground">Usage data</strong> — Information about how the product is used (feature usage, session or audit events needed for security and operations), consistent with your organization&rsquo;s configuration.</li>
              <li><strong className="text-foreground">AI interaction data</strong> — Content submitted to AI-assisted features (Copilot, summaries, suggested replies, classification), plus technical metadata needed to run those features safely and improve quality where permitted by contract and law.</li>
              <li><strong className="text-foreground">Integration credentials</strong> — OAuth tokens and API keys for third-party services you connect, stored encrypted at rest.</li>
            </ul>
            <p className="mt-3">We collect this data from you, your organization, connected integrations you or your admin authorize, and automated systems (message ingestion and AI processing pipelines).</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p>We use personal information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Deliver the service</strong> — Operate accounts, routing, inbox, Client 360, workflows, notifications, and integrations.</li>
              <li><strong className="text-foreground">Provide AI-assisted customer service</strong> — Generate summaries, drafts, routing hints, and similar assistive outputs grounded in your organization&rsquo;s data and settings.</li>
              <li><strong className="text-foreground">Analytics and improvement</strong> — Understand product usage and reliability in aggregate or per-tenant ways as configured.</li>
              <li><strong className="text-foreground">Send service-related notices</strong> — Deliver transactional emails, support messages, and security alerts.</li>
            </ul>
            <p className="mt-3">We do not use your data to run third-party advertising for unrelated companies. We process data as described in our agreements with your organization and as required by applicable law.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">3. Data Sharing</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">We do not sell your personal information.</strong></li>
              <li>We may use <strong className="text-foreground">subprocessors</strong> (hosting, email delivery, AI providers, observability tools) strictly to provide the service. A current list is maintained on our <Link href="/subprocessors" className="text-foreground underline underline-offset-2 hover:opacity-80">Subprocessors</Link> page.</li>
              <li>We do not share your data with third parties for advertising purposes.</li>
              <li>We may disclose information if required by law or to protect rights, safety, and security.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">4. Cookies &amp; Analytics</h2>
            <p>
              This website uses <strong className="text-foreground">Vercel Web Analytics</strong>, a privacy-friendly
              analytics service. It collects anonymous, aggregated page-view data. It does not use cookies, does not
              collect personal information, does not track you across websites, and is fully compliant with GDPR, CCPA,
              and PECR without requiring a cookie consent banner.
            </p>
            <p className="mt-3">
              The MindPath BI application uses only <strong className="text-foreground">essential session cookies</strong> required
              for authentication. We do not use advertising cookies, cross-site tracking, or fingerprinting on any of our properties.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">5. Your Rights</h2>
            <p>Depending on where you live, you may have the following rights:</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-2 pr-4 font-semibold text-foreground">Right</th>
                    <th className="pb-2 pr-4 font-semibold text-foreground">GDPR</th>
                    <th className="pb-2 font-semibold text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2 pr-4 font-medium text-foreground">Access</td><td className="py-2 pr-4">Art. 15</td><td className="py-2">Understand what data we hold about you.</td></tr>
                  <tr><td className="py-2 pr-4 font-medium text-foreground">Rectification</td><td className="py-2 pr-4">Art. 16</td><td className="py-2">Request correction of inaccurate personal data.</td></tr>
                  <tr><td className="py-2 pr-4 font-medium text-foreground">Erasure</td><td className="py-2 pr-4">Art. 17</td><td className="py-2">Request deletion, subject to legal and contractual limits.</td></tr>
                  <tr><td className="py-2 pr-4 font-medium text-foreground">Portability</td><td className="py-2 pr-4">Art. 20</td><td className="py-2">Receive certain data in a structured, machine-readable form.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              To exercise your rights, email <a href="mailto:josef@mindpathbi.com" className="text-foreground underline underline-offset-2 hover:opacity-80">josef@mindpathbi.com</a> or
              use the in-product privacy tools your organization enables. We may need to verify your identity and coordinate with your organization&rsquo;s administrator.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">6. Additional Disclosures for California Residents (CCPA/CPRA)</h2>
            <p>If you are a California resident, the California Consumer Privacy Act (as amended by the CPRA) provides additional rights.</p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-2 pr-4 font-semibold text-foreground">Category</th>
                    <th className="pb-2 pr-4 font-semibold text-foreground">Sources</th>
                    <th className="pb-2 pr-4 font-semibold text-foreground">Business Purpose</th>
                    <th className="pb-2 font-semibold text-foreground">Sold?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2 pr-4">Identifiers (name, email, phone)</td><td className="py-2 pr-4">You, your organization, integrations</td><td className="py-2 pr-4">Service delivery, account management</td><td className="py-2 font-semibold text-foreground">No</td></tr>
                  <tr><td className="py-2 pr-4">Commercial information (orders, invoices via ERP sync)</td><td className="py-2 pr-4">Connected integrations</td><td className="py-2 pr-4">Client 360, business context for support</td><td className="py-2 font-semibold text-foreground">No</td></tr>
                  <tr><td className="py-2 pr-4">Internet/electronic activity (usage, audit logs)</td><td className="py-2 pr-4">Automated collection</td><td className="py-2 pr-4">Security, operations, analytics</td><td className="py-2 font-semibold text-foreground">No</td></tr>
                  <tr><td className="py-2 pr-4">Inferences (AI classification, sentiment, urgency)</td><td className="py-2 pr-4">AI processing pipelines</td><td className="py-2 pr-4">AI-assisted customer service</td><td className="py-2 font-semibold text-foreground">No</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">Your California rights include:</p>
            <ul className="mt-2 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Right to know</strong> — Request the categories and specific pieces of personal information we hold.</li>
              <li><strong className="text-foreground">Right to delete</strong> — Request deletion, subject to legal and contractual exceptions.</li>
              <li><strong className="text-foreground">Right to correct</strong> — Request correction of inaccurate personal information.</li>
              <li><strong className="text-foreground">Right to opt-out of sale</strong> — We do not sell personal information.</li>
              <li><strong className="text-foreground">Right to limit use of sensitive information</strong> — We use sensitive information only as needed to provide the service.</li>
              <li><strong className="text-foreground">Non-discrimination</strong> — We will not discriminate against you for exercising any of these rights.</li>
              <li><strong className="text-foreground">Authorized agent</strong> — You may designate an authorized agent to make requests on your behalf; we may require verification of the agent&rsquo;s authority.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">7. Third-Party Integrations</h2>
            <p>Our platform integrates with third-party services including Meta (WhatsApp Business), Google (Gmail), Microsoft (Outlook), and others. When you connect these services:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>We only request permissions necessary for the features you use.</li>
              <li>You can disconnect any integration at any time from your settings page.</li>
              <li>Your use of those integrations is also subject to the respective third-party terms of service.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">8. Data Security</h2>
            <p>We implement industry-standard security measures including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Encryption of sensitive credentials at rest using Fernet symmetric encryption.</li>
              <li>HTTPS for all data in transit.</li>
              <li>HMAC-SHA256 signature verification for webhook payloads.</li>
              <li>Role-based access control and multi-tenant data isolation.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">9. Data Retention</h2>
            <p>We retain your data for as long as your account is active or as needed to provide services. Upon termination:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Days 0–30:</strong> Export and migration window — you can request a full data export.</li>
              <li><strong className="text-foreground">Days 31–60:</strong> Staged deletion queue.</li>
              <li><strong className="text-foreground">Days 61–90:</strong> Final purge and certificate workflow.</li>
            </ul>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-2 pr-4 font-semibold text-foreground">Data Category</th>
                    <th className="pb-2 pr-4 font-semibold text-foreground">Active Retention</th>
                    <th className="pb-2 pr-4 font-semibold text-foreground">Archive Period</th>
                    <th className="pb-2 font-semibold text-foreground">Deletion Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2 pr-4">Thread messages</td><td className="py-2 pr-4">Duration of contract</td><td className="py-2 pr-4">30 days post-termination</td><td className="py-2">Pseudonymize then purge</td></tr>
                  <tr><td className="py-2 pr-4">Contact data</td><td className="py-2 pr-4">Duration of contract</td><td className="py-2 pr-4">30 days</td><td className="py-2">Hard delete + storage purge</td></tr>
                  <tr><td className="py-2 pr-4">Audit logs</td><td className="py-2 pr-4">3 years</td><td className="py-2 pr-4">1 year archive</td><td className="py-2">Automated purge</td></tr>
                  <tr><td className="py-2 pr-4">Access logs</td><td className="py-2 pr-4">1 year</td><td className="py-2 pr-4">6 months archive</td><td className="py-2">Automated purge</td></tr>
                  <tr><td className="py-2 pr-4">AI embeddings</td><td className="py-2 pr-4">Duration of contract</td><td className="py-2 pr-4">Purged with source</td><td className="py-2">Vector delete</td></tr>
                  <tr><td className="py-2 pr-4">Knowledge Base documents</td><td className="py-2 pr-4">Duration of contract</td><td className="py-2 pr-4">30 days</td><td className="py-2">Storage + vector purge</td></tr>
                  <tr><td className="py-2 pr-4">API keys (hashed)</td><td className="py-2 pr-4">Until revoked</td><td className="py-2 pr-4">90 days post-revocation</td><td className="py-2">Hard delete</td></tr>
                  <tr><td className="py-2 pr-4">Session tokens</td><td className="py-2 pr-4">Until expiry</td><td className="py-2 pr-4">None</td><td className="py-2">Auto-expire</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">10. Data Subject Access Requests</h2>
            <p>You may submit a data subject access request (DSAR) for access, deletion, rectification, or portability. Our response targets:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Acknowledgment:</strong> Within 3 business days.</li>
              <li><strong className="text-foreground">Completion:</strong> Within 30 days for standard requests.</li>
              <li>If an extension is needed, we will communicate before day 30 where legally allowed.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">11. Changes</h2>
            <p>
              We may update this notice from time to time. The &ldquo;Last updated&rdquo; date at the top will change when we do;
              material changes may be communicated through the product or your organization.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
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
