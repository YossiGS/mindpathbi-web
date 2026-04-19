import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalPage,
  LegalSection,
  LegalTable,
} from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Data Processing Addendum — MindPath BI",
  description:
    "Data Processing Addendum governing the processing of personal data by MindPath BI on behalf of customers.",
};

export default function DPAPage() {
  return (
    <LegalPage
      fieldReport="DPA-01"
      docSlug="DPA"
      title="Data processing addendum."
      subtitle="The controller-to-processor contract that governs every piece of personal data that passes through the platform."
      version="1.0"
      lastUpdated="April 2026"
    >
      <p>
        This Data Processing Addendum (&ldquo;DPA&rdquo;) forms part of and is
        subject to the Terms of Service (&ldquo;Agreement&rdquo;) between
        MindPath BI (&ldquo;Processor&rdquo;, &ldquo;we&rdquo;,
        &ldquo;us&rdquo;) and the entity agreeing to these terms
        (&ldquo;Controller&rdquo;, &ldquo;Customer&rdquo;, &ldquo;you&rdquo;).
        It applies to the extent that MindPath BI processes Personal Data on
        behalf of Customer in the course of providing the Service.
      </p>

      <LegalSection num="01" tag="[DEFINITIONS]" title="Definitions">
        <ul>
          <li>
            <strong>&ldquo;Personal Data&rdquo;</strong> means any information
            relating to an identified or identifiable natural person, as defined
            in applicable Data Protection Laws.
          </li>
          <li>
            <strong>&ldquo;Processing&rdquo;</strong> means any operation or set
            of operations performed on Personal Data, including collection,
            storage, use, disclosure, and deletion.
          </li>
          <li>
            <strong>&ldquo;Controller&rdquo;</strong> means the entity that
            determines the purposes and means of Processing Personal Data.
          </li>
          <li>
            <strong>&ldquo;Processor&rdquo;</strong> means the entity that
            processes Personal Data on behalf of the Controller.
          </li>
          <li>
            <strong>&ldquo;Sub-processor&rdquo;</strong> means a third party
            engaged by the Processor to process Personal Data on behalf of the
            Controller.
          </li>
          <li>
            <strong>&ldquo;Data Subject&rdquo;</strong> means the identified or
            identifiable natural person to whom Personal Data relates.
          </li>
          <li>
            <strong>&ldquo;Customer Content&rdquo;</strong> means all Personal
            Data that Customer or its end users submit to the Service, including
            messages, contacts, attachments, and AI interaction data.
          </li>
          <li>
            <strong>&ldquo;Data Protection Laws&rdquo;</strong> means all
            applicable laws relating to data protection and privacy, including
            GDPR (EU 2016/679), UK GDPR, CCPA/CPRA, and any other applicable
            legislation.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="02" tag="[ROLES]" title="Roles of the parties">
        <ul>
          <li>
            <strong>Customer Content:</strong> Customer is the Controller and
            MindPath BI is the Processor. We process Customer Content solely on
            your instructions as described in the Agreement and this DPA.
          </li>
          <li>
            <strong>Account Data:</strong> MindPath BI is an independent
            Controller for account registration data, billing information, and
            usage analytics needed to operate, secure, and improve the Service.
            This does not create a joint-controller relationship.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="03" tag="[SCOPE]" title="Scope of processing">
        <LegalTable
          headers={["Category", "Data types", "Purpose"]}
          rows={[
            [
              "Conversation data",
              "Messages, subjects, channels, timestamps, metadata",
              "Service delivery (inbox, routing, workflows)",
            ],
            [
              "Contact information",
              "Names, emails, phone numbers, channel identifiers, tags",
              "Client 360, contact management",
            ],
            [
              "AI interaction data",
              "Content submitted to AI features, technical metadata",
              "AI-assisted customer service",
            ],
            [
              "Integration credentials",
              "OAuth tokens, API keys (encrypted at rest)",
              "Third-party integrations",
            ],
            [
              "Knowledge Base documents",
              "Uploaded documents, extracted text, AI embeddings",
              "Knowledge retrieval, AI context",
            ],
          ]}
        />
        <p>
          <strong>Data Subjects:</strong> Customer&rsquo;s end users, customers,
          contacts, and any individuals whose data is submitted to the Service.
        </p>
      </LegalSection>

      <LegalSection num="04" tag="[SUBPROCESSORS]" title="Sub-processors">
        <p>
          The current list of sub-processor <em>categories</em> is published on
          our <Link href="/subprocessors">Subprocessors</Link> page; the
          identities of individual sub-processors are disclosed to customers
          under contract on a need-to-know basis.
        </p>
        <ul>
          <li>
            <strong>Advance notice:</strong> we provide at least{" "}
            <strong>10 calendar days&rsquo;</strong> notice before engaging a
            new sub-processor by notifying customers on the change-notification
            list.
          </li>
          <li>
            <strong>Objection right:</strong> you may object in writing within{" "}
            <strong>5 calendar days</strong> of notification. If we cannot
            reasonably accommodate the objection, your sole remedy is to
            terminate the affected Service for convenience.
          </li>
          <li>
            <strong>Liability:</strong> we remain liable for our
            sub-processors&rsquo; compliance with this DPA to the same extent as
            if we performed the processing ourselves.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="05" tag="[SECURITY]" title="Security measures">
        <p>
          We implement and maintain appropriate technical and organizational
          measures to protect Personal Data, including:
        </p>
        <ul>
          <li>
            <strong>Encryption at rest</strong> — symmetric encryption for
            sensitive credentials; database-level encryption for all stored
            data.
          </li>
          <li>
            <strong>Encryption in transit</strong> — TLS/HTTPS for all data in
            transit.
          </li>
          <li>
            <strong>Access control</strong> — role-based access control (RBAC)
            with defense-in-depth multi-tenant isolation (application-level +
            row-level security).
          </li>
          <li>
            <strong>Webhook integrity</strong> — signature verification for all
            inbound webhook payloads.
          </li>
          <li>
            <strong>Malware scanning</strong> — streaming scanning of inbound
            attachments with configurable fail-open / fail-closed policy.
          </li>
          <li>
            <strong>Input sanitization</strong> — HTML escaping and content
            sanitization on write endpoints.
          </li>
          <li>
            <strong>Audit logging</strong> — security-relevant events are logged
            and retained per our data retention schedule.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="06" tag="[BREACH]" title="Data breach notification">
        <ul>
          <li>
            We will notify you of a confirmed Personal Data breach{" "}
            <strong>
              without undue delay and no later than 72 hours
            </strong>{" "}
            after becoming aware of it, consistent with GDPR Article 33.
          </li>
          <li>
            Notification will include, to the extent available: the nature of
            the breach, categories and approximate number of Data Subjects
            affected, likely consequences, and measures taken or proposed to
            address the breach.
          </li>
          <li>
            You are responsible for notifying supervisory authorities and
            affected Data Subjects as required by applicable law.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="07" tag="[RIGHTS]" title="Data subject rights">
        <p>
          We will assist you in fulfilling your obligations to respond to Data
          Subject requests (access, rectification, erasure, portability,
          restriction, and objection) within the following service levels:
        </p>
        <ul>
          <li>
            <strong>Acknowledgment:</strong> within 3 business days of receiving
            your request for assistance.
          </li>
          <li>
            <strong>Completion:</strong> within 30 calendar days for standard
            requests.
          </li>
          <li>
            If an extension is needed, we will communicate before day 30 where
            legally permitted.
          </li>
        </ul>
        <p>
          Where technically feasible, we provide self-service tools within the
          product for Customer administrators to respond to Data Subject
          requests directly.
        </p>
      </LegalSection>

      <LegalSection
        num="08"
        tag="[TRANSFERS]"
        title="International data transfers"
      >
        <ul>
          <li>
            <strong>Primary processing:</strong> application data is hosted in
            the <strong>European Union</strong>.
          </li>
          <li>
            <strong>US sub-processors:</strong> where a sub-processor is located
            in the United States, transfers are governed by the{" "}
            <strong>EU Standard Contractual Clauses</strong> as approved by the
            European Commission.
          </li>
          <li>
            <strong>UK transfers:</strong> for transfers from the UK, we rely on
            the UK International Data Transfer Addendum to the EU SCCs.
          </li>
          <li>
            <strong>AI processing:</strong> AI inference may be processed in the
            US or EU. The provider&rsquo;s data-processing terms apply.
          </li>
          <li>
            We do not currently participate in the EU-US Data Privacy Framework
            (DPF). This will be updated if certification is obtained.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        num="09"
        tag="[LIFECYCLE]"
        title="Data return and deletion"
      >
        <p>Upon termination of the Agreement:</p>
        <ul>
          <li>
            <strong>Days 0–30 (Export Window):</strong> you may request a full
            export of your Customer Content in JSON or CSV format. We will
            provide reasonable assistance for data migration.
          </li>
          <li>
            <strong>Days 31–60 (Staged Deletion):</strong> Customer Content
            enters a staged deletion queue. Access is revoked and data is
            prepared for irreversible purge.
          </li>
          <li>
            <strong>Days 61–90 (Final Purge):</strong> all Customer Content is
            irreversibly deleted from production systems, backups, and derived
            data (including AI embeddings and knowledge graph entries).
          </li>
          <li>
            <strong>Certificate of Destruction:</strong> upon request, we will
            issue a certificate of destruction within 10 business days of
            validated completion of the purge.
          </li>
        </ul>
        <p>
          Retention beyond 90 days occurs only where required by applicable law
          or regulatory obligation, and we will inform you of such requirements.
        </p>
      </LegalSection>

      <LegalSection num="10" tag="[AUDIT]" title="Audit rights">
        <ul>
          <li>
            Upon written request (no more than once per calendar year), we will
            provide a summary of our security practices, including any
            third-party audit reports or certifications available at that time.
          </li>
          <li>
            We will respond to reasonable due-diligence questionnaires related
            to our processing of Personal Data.
          </li>
          <li>
            If a more detailed audit is required by Data Protection Laws, we
            will cooperate in good faith, subject to reasonable scope, timing,
            and confidentiality requirements.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="11" tag="[LIABILITY]" title="Liability">
        <p>
          Each party&rsquo;s liability under this DPA is subject to the
          limitations of liability set forth in the Agreement (Terms of
          Service). This DPA does not create any separate or additional
          liability beyond the Agreement.
        </p>
      </LegalSection>

      <LegalSection num="12" tag="[TERM]" title="Term and termination">
        <p>
          This DPA takes effect on the date Customer accepts the Agreement and
          remains in effect for the duration of the Agreement. Our obligations
          under this DPA survive termination to the extent we continue to
          process Personal Data (including during the deletion lifecycle
          described in Section 09).
        </p>
      </LegalSection>

      <LegalSection
        num="13"
        tag="[CCPA]"
        title="California-specific provisions"
      >
        <p>To the extent that the California Consumer Privacy Act applies:</p>
        <ul>
          <li>
            MindPath BI acts as a <strong>Service Provider</strong> with respect
            to Customer Content.
          </li>
          <li>
            We process Customer Content only for the business purposes
            specified in the Agreement.
          </li>
          <li>
            We do not sell or share (as defined by the CCPA/CPRA) Customer
            Content.
          </li>
          <li>
            We do not combine Customer Content with personal information
            received from other sources, except as permitted by law.
          </li>
          <li>
            We certify that we understand and will comply with these
            restrictions.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="14" tag="[CONTACT]" title="Contact">
        <p>
          For questions about this DPA or to exercise any rights described
          herein, contact{" "}
          <a href="mailto:josef@mindpathbi.com">josef@mindpathbi.com</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
