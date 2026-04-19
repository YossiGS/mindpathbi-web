import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalPage,
  LegalSection,
  LegalTable,
} from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy — MindPath BI",
  description: "How MindPath BI collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      fieldReport="PR-01"
      docSlug="PRIVACY"
      title="Privacy."
      subtitle="How we collect, use, and safeguard personal information when partners operate on the MindPath BI platform."
      version="1.0"
      lastUpdated="April 2026"
    >
      <p>
        This notice describes how MindPath BI (&ldquo;we,&rdquo; &ldquo;us&rdquo;)
        collects, uses, and shares personal information when you use our
        customer-service platform, and explains your privacy rights.
      </p>
      <p>
        For privacy questions or to exercise your rights, email{" "}
        <a href="mailto:josef@mindpathbi.com">josef@mindpathbi.com</a>.
      </p>

      <LegalSection num="01" tag="[DATA]" title="What data we collect">
        <p>Depending on how you use the service, we may process:</p>
        <ul>
          <li>
            <strong>Conversation and thread data</strong> — messages, subjects,
            channels, timestamps, and related metadata associated with customer
            conversations (email, chat, or messaging threads).
          </li>
          <li>
            <strong>Contact and account information</strong> — names, email
            addresses, phone numbers, job titles, channel identifiers, tags, and
            similar fields used to identify and serve customers.
          </li>
          <li>
            <strong>Usage data</strong> — information about how the product is
            used (feature usage, session and audit events needed for security
            and operations), consistent with your organization&rsquo;s
            configuration.
          </li>
          <li>
            <strong>AI interaction data</strong> — content submitted to
            AI-assisted features (Copilot, summaries, suggested replies,
            classification), plus technical metadata needed to run those
            features safely and improve quality where permitted by contract and
            law.
          </li>
          <li>
            <strong>Integration credentials</strong> — OAuth tokens and API keys
            for third-party services you connect, stored encrypted at rest.
          </li>
        </ul>
        <p>
          We collect this data from you, your organization, connected
          integrations you or your admin authorize, and automated systems
          (message ingestion and AI processing pipelines).
        </p>
      </LegalSection>

      <LegalSection num="02" tag="[USE]" title="How we use your information">
        <p>We use personal information to:</p>
        <ul>
          <li>
            <strong>Deliver the service</strong> — operate accounts, routing,
            inbox, Client 360, workflows, notifications, and integrations.
          </li>
          <li>
            <strong>Provide AI-assisted customer service</strong> — generate
            summaries, drafts, routing hints, and similar assistive outputs
            grounded in your organization&rsquo;s data and settings.
          </li>
          <li>
            <strong>Analytics and improvement</strong> — understand product
            usage and reliability in aggregate or per-tenant ways as configured.
          </li>
          <li>
            <strong>Send service-related notices</strong> — deliver transactional
            emails, support messages, and security alerts.
          </li>
          <li>
            <strong>Comply with legal obligations</strong> — respond to lawful
            requests, enforce our terms, and protect rights and safety.
          </li>
        </ul>
        <p>
          We do not use your data to run third-party advertising for unrelated
          companies. We process data as described in our agreements with your
          organization and as required by applicable law.
        </p>
      </LegalSection>

      <LegalSection
        num="03"
        tag="[GDPR]"
        title="Legal basis for processing"
      >
        <p>
          For users in the European Economic Area, United Kingdom, and
          Switzerland, we process personal data on the following legal bases:
        </p>
        <LegalTable
          headers={["Activity", "Legal basis", "GDPR art."]}
          rows={[
            [
              "Service delivery (inbox, Client 360, workflows)",
              "Performance of contract",
              "Art. 6(1)(b)",
            ],
            [
              "AI-assisted features (Copilot, classification, summaries)",
              "Performance of contract",
              "Art. 6(1)(b)",
            ],
            [
              "Account and billing management",
              "Performance of contract",
              "Art. 6(1)(b)",
            ],
            [
              "Security monitoring and audit logs",
              "Legitimate interest (security)",
              "Art. 6(1)(f)",
            ],
            [
              "Product analytics (aggregate)",
              "Legitimate interest (improvement)",
              "Art. 6(1)(f)",
            ],
            [
              "Tax, legal, and regulatory compliance",
              "Legal obligation",
              "Art. 6(1)(c)",
            ],
            [
              "Marketing communications (if applicable)",
              "Consent",
              "Art. 6(1)(a)",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection num="04" tag="[SHARING]" title="Data sharing">
        <ul>
          <li>
            <strong>We do not sell your personal information.</strong>
          </li>
          <li>
            We may use <strong>subprocessors</strong> (hosting, email delivery,
            AI providers, observability tools) strictly to provide the service.
            Categories are disclosed on our{" "}
            <Link href="/subprocessors">Subprocessors</Link> page; the detailed
            list is shared under NDA with customers under contract.
          </li>
          <li>
            We do not share your data with third parties for advertising
            purposes.
          </li>
          <li>
            We may disclose information if required by law or to protect rights,
            safety, and security.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        num="05"
        tag="[TRANSFERS]"
        title="International data transfers"
      >
        <ul>
          <li>
            <strong>Primary processing:</strong> application data is hosted in
            the European Union.
          </li>
          <li>
            <strong>US subprocessors:</strong> where a subprocessor is located
            in the United States, transfers are governed by the{" "}
            <strong>EU Standard Contractual Clauses</strong>.
          </li>
          <li>
            <strong>AI processing:</strong> AI inference may be processed in the
            US or EU; the provider&rsquo;s data-processing terms apply.
          </li>
          <li>
            We do not currently participate in the EU-US Data Privacy Framework
            (DPF). This section will be updated if certification is obtained.
          </li>
          <li>
            For full transfer details, see our <Link href="/dpa">DPA</Link>.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="06" tag="[COOKIES]" title="Cookies &amp; analytics">
        <p>
          This website uses <strong>privacy-friendly, anonymous analytics</strong>
          . It does not use advertising cookies, does not collect personal
          information, and does not track you across websites.
        </p>
        <p>
          The MindPath BI application uses only{" "}
          <strong>essential session cookies</strong> required for authentication.
          We do not use advertising cookies, cross-site tracking, or
          fingerprinting on any of our properties.
        </p>
        <p>
          <strong>Do Not Track:</strong> we do not respond to &ldquo;Do Not
          Track&rdquo; browser signals because no uniform standard for processing
          these signals has been adopted. Regardless, our tracking practices are
          minimal as described above.
        </p>
      </LegalSection>

      <LegalSection num="07" tag="[RIGHTS]" title="Your rights">
        <p>Depending on where you live, you may have the following rights:</p>
        <LegalTable
          headers={["Right", "GDPR", "Description"]}
          rows={[
            [
              <strong key="access">Access</strong>,
              "Art. 15",
              "Understand what data we hold about you.",
            ],
            [
              <strong key="rect">Rectification</strong>,
              "Art. 16",
              "Request correction of inaccurate personal data.",
            ],
            [
              <strong key="eras">Erasure</strong>,
              "Art. 17",
              "Request deletion, subject to legal and contractual limits.",
            ],
            [
              <strong key="rest">Restriction</strong>,
              "Art. 18",
              "Request restriction of processing in certain circumstances.",
            ],
            [
              <strong key="port">Portability</strong>,
              "Art. 20",
              "Receive certain data in a structured, machine-readable form.",
            ],
            [
              <strong key="obj">Object</strong>,
              "Art. 21",
              "Object to processing based on legitimate interest.",
            ],
          ]}
        />
        <p>
          To exercise your rights, email{" "}
          <a href="mailto:josef@mindpathbi.com">josef@mindpathbi.com</a> or use
          the in-product privacy tools your organization enables. We may need to
          verify your identity and coordinate with your organization&rsquo;s
          administrator.
        </p>
      </LegalSection>

      <LegalSection
        num="08"
        tag="[CCPA]"
        title="California residents (CCPA/CPRA)"
      >
        <p>
          If you are a California resident, the California Consumer Privacy Act
          (as amended by the CPRA) provides additional rights.
        </p>
        <LegalTable
          headers={["Category", "Sources", "Business purpose", "Sold?"]}
          rows={[
            [
              "Identifiers (name, email, phone)",
              "You, your organization, integrations",
              "Service delivery, account management",
              <strong key="no1">No</strong>,
            ],
            [
              "Commercial information (orders, invoices via ERP sync)",
              "Connected integrations",
              "Client 360, business context for support",
              <strong key="no2">No</strong>,
            ],
            [
              "Internet / electronic activity (usage, audit logs)",
              "Automated collection",
              "Security, operations, analytics",
              <strong key="no3">No</strong>,
            ],
            [
              "Inferences (classification, sentiment, urgency)",
              "AI processing pipelines",
              "AI-assisted customer service",
              <strong key="no4">No</strong>,
            ],
          ]}
        />
        <p>Your California rights include:</p>
        <ul>
          <li>
            <strong>Right to know</strong> — request the categories and specific
            pieces of personal information we hold.
          </li>
          <li>
            <strong>Right to delete</strong> — request deletion, subject to
            legal and contractual exceptions.
          </li>
          <li>
            <strong>Right to correct</strong> — request correction of inaccurate
            personal information.
          </li>
          <li>
            <strong>Right to opt-out of sale</strong> — we do not sell personal
            information.
          </li>
          <li>
            <strong>Right to limit use of sensitive information</strong> — we
            use sensitive information only as needed to provide the service.
          </li>
          <li>
            <strong>Non-discrimination</strong> — we will not discriminate
            against you for exercising any of these rights.
          </li>
          <li>
            <strong>Authorized agent</strong> — you may designate an authorized
            agent to make requests on your behalf; we may require verification.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="09" tag="[CHILDREN]" title="Children">
        <p>
          The service is not directed to persons under the age of{" "}
          <strong>18</strong>. We do not knowingly collect personal information
          from anyone under 18. If we become aware that we have, we will take
          steps to delete it promptly.
        </p>
      </LegalSection>

      <LegalSection
        num="10"
        tag="[INTEGRATIONS]"
        title="Third-party integrations"
      >
        <p>
          Our platform integrates with third-party services (email, messaging,
          ERP, and similar). When you connect these services:
        </p>
        <ul>
          <li>We only request permissions necessary for the features you use.</li>
          <li>
            You can disconnect any integration at any time from your settings
            page.
          </li>
          <li>
            Your use of those integrations is also subject to the respective
            third-party terms of service.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="11" tag="[SECURITY]" title="Data security">
        <p>We implement industry-standard security measures including:</p>
        <ul>
          <li>Encryption of sensitive credentials at rest.</li>
          <li>HTTPS for all data in transit.</li>
          <li>Signature verification for inbound webhook payloads.</li>
          <li>Role-based access control and multi-tenant data isolation.</li>
        </ul>
      </LegalSection>

      <LegalSection num="12" tag="[RETENTION]" title="Data retention">
        <p>
          We retain your data for as long as your account is active or as needed
          to provide services. Upon termination the data enters a staged
          deletion lifecycle. Full schedules are documented in our{" "}
          <Link href="/dpa">DPA</Link>.
        </p>
      </LegalSection>

      <LegalSection num="13" tag="[DSAR]" title="Subject access requests">
        <p>
          You may submit a data subject access request (DSAR) for access,
          deletion, rectification, or portability. Our response targets:
        </p>
        <ul>
          <li>
            <strong>Acknowledgment:</strong> within 3 business days.
          </li>
          <li>
            <strong>Completion:</strong> within 30 days for standard requests.
          </li>
          <li>
            If an extension is needed, we will communicate before day 30 where
            legally allowed.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="14" tag="[CHANGES]" title="Changes">
        <p>
          We may update this notice from time to time. The &ldquo;Last
          updated&rdquo; date at the top will change when we do; material
          changes may be communicated through the product or your organization.
        </p>
      </LegalSection>

      <LegalSection num="15" tag="[CONTACT]" title="Contact">
        <p>
          Questions about this notice go to{" "}
          <a href="mailto:josef@mindpathbi.com">josef@mindpathbi.com</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
