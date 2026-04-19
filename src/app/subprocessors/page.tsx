import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalPage,
  LegalSection,
  LegalTable,
  LegalSealedBlock,
} from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Subprocessors — MindPath BI",
  description:
    "Categories of third-party subprocessors MindPath BI engages to deliver the service. The detailed list is shared with customers under contract.",
};

export default function SubprocessorsPage() {
  return (
    <LegalPage
      fieldReport="SP-01"
      docSlug="SUBPROCESSORS"
      title="Subprocessors."
      subtitle="We engage a small set of specialist service providers to deliver the platform. This page names the categories; the individual identities are shared with customers under contract."
      version="1.0"
      lastUpdated="April 2026"
    >
      <p>
        MindPath BI engages third-party subprocessors to deliver specific
        functions of the service — hosting, AI inference, email delivery, error
        monitoring, and a handful of developer-tooling providers. We publish
        only the information required for a controller to assess a processor
        under GDPR: <strong>category, purpose, data category, and region</strong>.
        The identities of the specific providers — and their replacements — are
        confirmed to customers under contract and re-confirmed before every
        material change.
      </p>
      <p>
        This reflects a deliberate choice: our vendor surface is small and it
        shifts as the product matures. Publishing a flat list invites
        extrapolation we&rsquo;re not yet willing to defend. Signing a DPA with
        us unlocks the detailed inventory, the SCCs in effect, and the
        change-notification feed.
      </p>

      <LegalSection
        num="01"
        tag="[CATEGORIES]"
        title="Subprocessor categories"
      >
        <p>
          The following categories of subprocessor may process customer personal
          data on our behalf to provide the service:
        </p>
        <LegalTable
          headers={["Category", "Purpose", "Data category", "Region"]}
          rows={[
            [
              <strong key="inf">Infrastructure &amp; hosting</strong>,
              "Application hosting, database, object storage, edge delivery",
              "All application data",
              "EU (primary) · multi-region edge",
            ],
            [
              <strong key="ai">AI inference</strong>,
              "Language-model inference for Copilot, summaries, classification, and retrieval",
              "Thread content, KB documents (processed in-memory, not retained for training)",
              "EU or US (per provider topology)",
            ],
            [
              <strong key="em">Transactional email</strong>,
              "Outbound notification and service email delivery",
              "Email addresses, notification content",
              "EU",
            ],
            [
              <strong key="er">Error &amp; performance monitoring</strong>,
              "Application error capture, performance traces",
              "Stack traces, request metadata (PII scrubbed)",
              "US (governed by EU SCCs)",
            ],
            [
              <strong key="sec">Content safety</strong>,
              "Malware and attachment scanning",
              "File content (scanned in-memory, not stored)",
              "EU / self-hosted",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection
        num="02"
        tag="[SERVICE-PROVIDERS]"
        title="Service providers (no customer content)"
      >
        <p>
          These categories of provider support engineering, build, and product
          operations. They do not process customer personal data in the course
          of delivering the service:
        </p>
        <LegalTable
          headers={["Category", "Purpose", "Region"]}
          rows={[
            [
              <strong key="scm">Source control &amp; CI</strong>,
              "Source hosting, continuous integration, release pipelines",
              "US",
            ],
            [
              <strong key="reg">Artifact registries</strong>,
              "Container image and build artifact storage",
              "US / EU",
            ],
            [
              <strong key="an">Site analytics</strong>,
              "Privacy-friendly, anonymous web analytics for the marketing site",
              "Multi-region",
            ],
          ]}
        />
      </LegalSection>

      <LegalSection num="03" tag="[SEALED]" title="Detailed inventory">
        <LegalSealedBlock label="WITHHELD · DISCLOSED UNDER DPA">
          <p>
            The full inventory — provider identities, corporate entities,
            hosting regions, applicable certifications (ISO 27001, SOC 2, &c.),
            the specific SCCs in force, and the change-notification feed — is
            shared with every customer as part of the DPA onboarding packet.
            Prospects under mutual NDA can request it on the access call.
          </p>
        </LegalSealedBlock>
      </LegalSection>

      <LegalSection
        num="04"
        tag="[REVIEW]"
        title="Vendor review cadence"
      >
        <p>We maintain a formal vendor risk-management program:</p>
        <ul>
          <li>
            <strong>Critical categories</strong> (infrastructure, AI inference,
            database): reviewed <strong>semi-annually</strong>.
          </li>
          <li>
            <strong>Important categories</strong> (email delivery, error
            monitoring): reviewed <strong>annually</strong>.
          </li>
          <li>
            <strong>Standard service providers</strong> (CI, registries,
            developer tools): reviewed at <strong>renewal or biennially</strong>.
          </li>
        </ul>
        <p>
          Reviews assess security posture, compliance certifications, data
          handling practices, and business-continuity capabilities. Material
          findings are routed to the change-management process below.
        </p>
      </LegalSection>

      <LegalSection num="05" tag="[CHANGES]" title="Change management">
        <p>
          Material changes — additions, removals, or region changes — are
          reviewed by Security and Legal before activation. We provide at least{" "}
          <strong>10 calendar days&rsquo;</strong> advance notice before
          engaging a new subprocessor to every customer subscribed to the
          change-notification feed. Customer notification follows the
          contractual notice terms defined in your{" "}
          <Link href="/dpa">Data Processing Addendum</Link>.
        </p>
      </LegalSection>

      <LegalSection
        num="06"
        tag="[NOTIFY]"
        title="Receive change notifications"
      >
        <p>
          To receive advance email notifications when we add, remove, or
          materially change a subprocessor, email{" "}
          <a href="mailto:josef@mindpathbi.com?subject=Subprocessor%20Change%20Notifications&body=Please%20add%20me%20to%20the%20subprocessor%20change%20notification%20list.%0A%0AOrganization%3A%20%0AContact%20email%3A%20">
            josef@mindpathbi.com
          </a>{" "}
          with the subject line &ldquo;Subprocessor Change
          Notifications.&rdquo;
        </p>
      </LegalSection>

      <LegalSection num="07" tag="[CONTACT]" title="Questions">
        <p>
          For DPA requests, the detailed subprocessor inventory, or any other
          vendor-management question, contact{" "}
          <a href="mailto:josef@mindpathbi.com">josef@mindpathbi.com</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
