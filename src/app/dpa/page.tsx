import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Processing Addendum — MindPath BI",
  description: "Data Processing Addendum governing the processing of personal data by MindPath BI on behalf of customers.",
};

export default function DPAPage() {
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
        <h1 className="text-4xl font-bold tracking-tight">Data Processing Addendum</h1>
        <p className="mt-2 text-sm text-muted">Last updated: April 2026</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
          <p>
            This Data Processing Addendum (&ldquo;DPA&rdquo;) forms part of and is subject to the Terms of Service
            (&ldquo;Agreement&rdquo;) between MindPath BI (&ldquo;Processor&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;)
            and the entity agreeing to these terms (&ldquo;Controller&rdquo;, &ldquo;Customer&rdquo;, &ldquo;you&rdquo;).
            This DPA applies to the extent that MindPath BI processes Personal Data on behalf of Customer
            in the course of providing the Service.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">1. Definitions</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">&ldquo;Personal Data&rdquo;</strong> means any information relating to an identified or identifiable natural person, as defined in applicable Data Protection Laws.</li>
              <li><strong className="text-foreground">&ldquo;Processing&rdquo;</strong> means any operation or set of operations performed on Personal Data, including collection, storage, use, disclosure, and deletion.</li>
              <li><strong className="text-foreground">&ldquo;Controller&rdquo;</strong> means the entity that determines the purposes and means of Processing Personal Data.</li>
              <li><strong className="text-foreground">&ldquo;Processor&rdquo;</strong> means the entity that processes Personal Data on behalf of the Controller.</li>
              <li><strong className="text-foreground">&ldquo;Sub-processor&rdquo;</strong> means a third party engaged by the Processor to process Personal Data on behalf of the Controller.</li>
              <li><strong className="text-foreground">&ldquo;Data Subject&rdquo;</strong> means the identified or identifiable natural person to whom Personal Data relates.</li>
              <li><strong className="text-foreground">&ldquo;Customer Content&rdquo;</strong> means all Personal Data that Customer or its end users submit to the Service, including messages, contacts, attachments, and AI interaction data.</li>
              <li><strong className="text-foreground">&ldquo;Data Protection Laws&rdquo;</strong> means all applicable laws relating to data protection and privacy, including GDPR (EU 2016/679), UK GDPR, CCPA/CPRA, and any other applicable legislation.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">2. Roles of the Parties</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Customer Content:</strong> Customer is the Controller and MindPath BI is the Processor. We process Customer Content solely on your instructions as described in the Agreement and this DPA.</li>
              <li><strong className="text-foreground">Account Data:</strong> MindPath BI is an independent Controller for account registration data, billing information, and usage analytics needed to operate, secure, and improve the Service. This does not create a joint-controller relationship.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">3. Scope of Processing</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-2 pr-4 font-semibold text-foreground">Category</th>
                    <th className="pb-2 pr-4 font-semibold text-foreground">Data Types</th>
                    <th className="pb-2 font-semibold text-foreground">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr><td className="py-2 pr-4">Conversation data</td><td className="py-2 pr-4">Messages, subjects, channels, timestamps, metadata</td><td className="py-2">Service delivery (inbox, routing, workflows)</td></tr>
                  <tr><td className="py-2 pr-4">Contact information</td><td className="py-2 pr-4">Names, emails, phone numbers, channel identifiers, tags</td><td className="py-2">Client 360, contact management</td></tr>
                  <tr><td className="py-2 pr-4">AI interaction data</td><td className="py-2 pr-4">Content submitted to AI features, technical metadata</td><td className="py-2">AI-assisted customer service</td></tr>
                  <tr><td className="py-2 pr-4">Integration credentials</td><td className="py-2 pr-4">OAuth tokens, API keys (encrypted at rest)</td><td className="py-2">Third-party integrations</td></tr>
                  <tr><td className="py-2 pr-4">Knowledge Base documents</td><td className="py-2 pr-4">Uploaded documents, extracted text, AI embeddings</td><td className="py-2">Knowledge retrieval, AI context</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3"><strong className="text-foreground">Data Subjects:</strong> Customer&rsquo;s end users, customers, contacts, and any individuals whose data is submitted to the Service.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">4. Sub-processors</h2>
            <p>
              A current list of Sub-processors is maintained on our{" "}
              <Link href="/subprocessors" className="text-foreground underline underline-offset-2 hover:opacity-80">Subprocessors</Link> page.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Advance notice:</strong> We will provide at least <strong className="text-foreground">10 calendar days&rsquo;</strong> notice before engaging a new Sub-processor by updating the Subprocessors page and notifying customers who have subscribed to updates.</li>
              <li><strong className="text-foreground">Objection right:</strong> You may object in writing within <strong className="text-foreground">5 calendar days</strong> of notification. If we cannot reasonably accommodate the objection, your sole remedy is to terminate the affected Service for convenience.</li>
              <li><strong className="text-foreground">Liability:</strong> We remain liable for our Sub-processors&rsquo; compliance with this DPA to the same extent as if we performed the processing ourselves.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">5. Security Measures</h2>
            <p>We implement and maintain appropriate technical and organizational measures to protect Personal Data, including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Encryption at rest</strong> — Fernet symmetric encryption for sensitive credentials; database-level encryption for all stored data.</li>
              <li><strong className="text-foreground">Encryption in transit</strong> — TLS/HTTPS for all data in transit.</li>
              <li><strong className="text-foreground">Access control</strong> — Role-based access control (RBAC) with defense-in-depth multi-tenant isolation (application-level + PostgreSQL Row-Level Security).</li>
              <li><strong className="text-foreground">Webhook integrity</strong> — HMAC-SHA256 signature verification for all inbound webhook payloads.</li>
              <li><strong className="text-foreground">Malware scanning</strong> — ClamAV INSTREAM scanning of inbound attachments with configurable fail-open/fail-closed policy.</li>
              <li><strong className="text-foreground">Input sanitization</strong> — HTML escaping and content sanitization on write endpoints.</li>
              <li><strong className="text-foreground">Audit logging</strong> — Security-relevant events are logged and retained per our data retention schedule.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">6. Data Breach Notification</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>We will notify you of a confirmed Personal Data breach <strong className="text-foreground">without undue delay and no later than 72 hours</strong> after becoming aware of it, consistent with GDPR Article 33.</li>
              <li>Notification will include, to the extent available: the nature of the breach, categories and approximate number of Data Subjects affected, likely consequences, and measures taken or proposed to address the breach.</li>
              <li>You are responsible for notifying supervisory authorities and affected Data Subjects as required by applicable law.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">7. Data Subject Rights</h2>
            <p>We will assist you in fulfilling your obligations to respond to Data Subject requests (access, rectification, erasure, portability, restriction, and objection) within the following service levels:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Acknowledgment:</strong> Within 3 business days of receiving your request for assistance.</li>
              <li><strong className="text-foreground">Completion:</strong> Within 30 calendar days for standard requests.</li>
              <li>If an extension is needed, we will communicate before day 30 where legally permitted.</li>
            </ul>
            <p className="mt-3">Where technically feasible, we provide self-service tools within the product for Customer administrators to respond to Data Subject requests directly.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">8. International Data Transfers</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Primary processing:</strong> Application data is hosted in the <strong className="text-foreground">European Union (OVH, France)</strong>.</li>
              <li><strong className="text-foreground">US Sub-processors:</strong> Certain Sub-processors (Sentry, GitHub) are located in the United States. Transfers to US Sub-processors are governed by the <strong className="text-foreground">EU Standard Contractual Clauses (SCCs)</strong> as approved by the European Commission.</li>
              <li><strong className="text-foreground">UK transfers:</strong> For transfers from the UK, we rely on the UK International Data Transfer Addendum to the EU SCCs.</li>
              <li><strong className="text-foreground">AI processing:</strong> AI inference via Google Gemini may be processed in the US/EU. Google&rsquo;s data processing terms apply as disclosed on our Subprocessors page.</li>
              <li>We do not currently participate in the EU-US Data Privacy Framework (DPF). This will be updated if certification is obtained.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">9. Data Return and Deletion</h2>
            <p>Upon termination of the Agreement:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Days 0–30 (Export Window):</strong> You may request a full export of your Customer Content in JSON or CSV format. We will provide reasonable assistance for data migration.</li>
              <li><strong className="text-foreground">Days 31–60 (Staged Deletion):</strong> Customer Content enters a staged deletion queue. Access is revoked and data is prepared for irreversible purge.</li>
              <li><strong className="text-foreground">Days 61–90 (Final Purge):</strong> All Customer Content is irreversibly deleted from production systems, backups, and derived data (including AI embeddings and knowledge graph entries).</li>
              <li><strong className="text-foreground">Certificate of Destruction:</strong> Upon request, we will issue a certificate of destruction within 10 business days of validated completion of the purge.</li>
            </ul>
            <p className="mt-3">Retention beyond 90 days occurs only where required by applicable law or regulatory obligation, and we will inform you of such requirements.</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">10. Audit Rights</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Upon written request (no more than once per calendar year), we will provide a summary of our security practices, including any third-party audit reports or certifications available at that time.</li>
              <li>We will respond to reasonable due-diligence questionnaires related to our processing of Personal Data.</li>
              <li>If a more detailed audit is required by Data Protection Laws, we will cooperate in good faith, subject to reasonable scope, timing, and confidentiality requirements.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">11. Liability</h2>
            <p>
              Each party&rsquo;s liability under this DPA is subject to the limitations of liability set forth
              in the Agreement (Terms of Service). This DPA does not create any separate or additional liability
              beyond the Agreement.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">12. Term and Termination</h2>
            <p>
              This DPA takes effect on the date Customer accepts the Agreement and remains in effect for the
              duration of the Agreement. Our obligations under this DPA survive termination to the extent we
              continue to process Personal Data (including during the deletion lifecycle described in Section 9).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">13. California-Specific Provisions (CCPA/CPRA)</h2>
            <p>To the extent that the California Consumer Privacy Act applies:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>MindPath BI acts as a <strong className="text-foreground">Service Provider</strong> with respect to Customer Content.</li>
              <li>We process Customer Content only for the business purposes specified in the Agreement.</li>
              <li>We do not sell or share (as defined by the CCPA/CPRA) Customer Content.</li>
              <li>We do not combine Customer Content with personal information received from other sources, except as permitted by law.</li>
              <li>We certify that we understand and will comply with these restrictions.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">14. Contact</h2>
            <p>
              For questions about this DPA or to exercise any rights described herein, contact us at{" "}
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
