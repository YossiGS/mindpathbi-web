import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service — MindPath BI",
  description:
    "Terms and conditions for using the MindPath BI platform.",
};

export default function TermsPage() {
  return (
    <LegalPage
      fieldReport="TR-01"
      docSlug="TERMS"
      title="Terms of service."
      subtitle="The baseline agreement between MindPath BI and the organizations that operate on the platform."
      version="1.0"
      lastUpdated="April 2026"
    >
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of the MindPath BI platform (&ldquo;Service&rdquo;) operated by
        MindPath BI. By accessing or using the Service, you agree to be bound by
        these Terms and all policies incorporated by reference.
      </p>

      <LegalSection num="01" tag="[ACCEPT]" title="Acceptance of terms">
        <p>
          By creating an account or using any part of the Service, you
          acknowledge that you have read, understood, and agree to be bound by
          these Terms, our <Link href="/privacy">Privacy Policy</Link>,{" "}
          <Link href="/dpa">Data Processing Addendum</Link>,{" "}
          <Link href="/sla">Service Level Agreement</Link>, and{" "}
          <Link href="/ai-terms">AI Supplementary Terms</Link>. If you are using
          the Service on behalf of an organization, you represent that you have
          the authority to bind that organization to these Terms.
        </p>
      </LegalSection>

      <LegalSection num="02" tag="[SERVICE]" title="Description of service">
        <p>
          MindPath BI provides a unified customer-service platform that includes
          communication management (unified inbox), customer relationship tools
          (Client 360), AI-powered features (Copilot, suggested replies,
          summaries, classification, contact insights), workflow automation, and
          third-party integrations. We reserve the right to modify, suspend, or
          discontinue any feature at any time with reasonable notice.
        </p>
      </LegalSection>

      <LegalSection num="03" tag="[ACCOUNTS]" title="User accounts">
        <ul>
          <li>You must provide accurate and complete registration information.</li>
          <li>
            You are responsible for maintaining the security of your account
            credentials.
          </li>
          <li>
            You must notify us immediately of any unauthorized use of your
            account.
          </li>
          <li>
            You may not share your account or transfer it to another party
            without our consent.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="04" tag="[INACTIVITY]" title="Account inactivity">
        <p>
          If your account has no login activity for{" "}
          <strong>12 consecutive months</strong>, we may send a notice to the
          email address on file. If you do not respond within{" "}
          <strong>30 days</strong> of the notice, we may close the account and
          delete associated data in accordance with our data retention policies.
        </p>
      </LegalSection>

      <LegalSection num="05" tag="[USE]" title="Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>
            Use the Service for any unlawful purpose or in violation of any
            applicable laws.
          </li>
          <li>
            Attempt to gain unauthorized access to any part of the Service or
            its systems.
          </li>
          <li>
            Interfere with or disrupt the integrity or performance of the
            Service.
          </li>
          <li>
            Reverse engineer, decompile, or disassemble any part of the Service.
          </li>
          <li>
            Use the Service to send spam, phishing messages, or unsolicited
            communications.
          </li>
          <li>Upload malicious code, viruses, or harmful content.</li>
          <li>
            Paste customer data, thread content, or confidential data into
            external AI tools outside the MindPath BI platform.
          </li>
          <li>
            Configure any tool to use company or customer data for AI model
            training.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="06" tag="[AI]" title="AI features">
        <p>
          The Service includes AI-powered features governed by our{" "}
          <Link href="/ai-terms">AI Supplementary Terms</Link>, which are
          incorporated by reference. Key commitments:
        </p>
        <ul>
          <li>
            All AI-generated customer-facing content should be reviewed by a
            human before sending.
          </li>
          <li>
            We do <strong>not</strong> use customer data for AI model training.
          </li>
          <li>
            AI processing is performed by subprocessors disclosed on our{" "}
            <Link href="/subprocessors">Subprocessors</Link> page.
          </li>
          <li>
            AI outputs are assistive and not guaranteed to be accurate; you are
            responsible for verifying AI-generated content before acting on it.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="07" tag="[BILLING]" title="Billing and payment">
        <ul>
          <li>
            Fees for paid plans are due in accordance with the pricing and
            billing cycle selected at the time of subscription.
          </li>
          <li>
            All fees are non-refundable except as expressly stated in these
            Terms or required by applicable law.
          </li>
          <li>
            If payment is overdue, we may suspend access to the Service after
            providing at least <strong>7 days&rsquo;</strong> written notice.
          </li>
          <li>
            You are responsible for all applicable taxes. Fees are exclusive of
            taxes unless stated otherwise.
          </li>
          <li>
            Chargebacks or payment disputes initiated without prior contact with
            us may result in immediate account suspension pending resolution.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="08" tag="[OWNERSHIP]" title="Data ownership">
        <p>
          You retain all ownership rights to the data you submit through the
          Service (&ldquo;Your Data&rdquo;). You grant us a limited license to
          process Your Data solely to provide and improve the Service. We will
          not sell Your Data to third parties, use it for advertising purposes,
          or use it for AI model training. For full data processing terms, see
          our <Link href="/dpa">Data Processing Addendum</Link>.
        </p>
      </LegalSection>

      <LegalSection num="09" tag="[CONFIDENTIAL]" title="Confidentiality">
        <ul>
          <li>
            &ldquo;Confidential Information&rdquo; means non-public information
            disclosed by one party to the other that is designated as
            confidential or that a reasonable person would understand to be
            confidential given the nature of the information and circumstances
            of disclosure.
          </li>
          <li>
            Each party agrees to protect the other&rsquo;s Confidential
            Information with at least the same degree of care it uses to protect
            its own confidential information, and no less than reasonable care.
          </li>
          <li>
            Confidential Information excludes information that: (a) is or
            becomes publicly available through no fault of the receiving party;
            (b) was known to the receiving party prior to disclosure; (c) is
            independently developed without use of the disclosing party&rsquo;s
            Confidential Information; or (d) is lawfully obtained from a third
            party without restriction.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        num="10"
        tag="[THIRD-PARTY]"
        title="Third-party integrations"
      >
        <p>
          The Service connects to third-party platforms. Your use of those
          integrations is also subject to the respective third-party terms of
          service. We are not responsible for the availability or conduct of
          third-party services.
        </p>
      </LegalSection>

      <LegalSection num="11" tag="[IP]" title="Intellectual property">
        <p>
          The Service, including its design, code, features, and documentation,
          is the intellectual property of MindPath BI and is protected by
          applicable intellectual property laws. You may not copy, modify, or
          distribute any part of the Service without our written consent.
        </p>
      </LegalSection>

      <LegalSection num="12" tag="[LIABILITY]" title="Limitation of liability">
        <ul>
          <li>
            To the maximum extent permitted by law, neither party shall be
            liable to the other for any indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits, data, or
            goodwill, regardless of the cause of action or theory of liability.
          </li>
          <li>
            <strong>Aggregate liability cap:</strong> each party&rsquo;s total
            aggregate liability under these Terms shall not exceed the{" "}
            <strong>greater of</strong> (a) the total fees paid by Customer to
            MindPath BI during the 12 months immediately preceding the event
            giving rise to the claim, or (b) <strong>$500 USD</strong>.
          </li>
          <li>
            This limitation does not apply to: (a) breaches of confidentiality
            obligations; (b) either party&rsquo;s indemnification obligations;
            or (c) liability that cannot be limited by applicable law.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="13" tag="[INDEMNITY]" title="Indemnification">
        <ul>
          <li>
            <strong>By Customer:</strong> you agree to indemnify and hold
            MindPath BI harmless from any third-party claims, damages, and
            expenses (including reasonable legal fees) arising from: (a) your
            use of the Service in violation of these Terms; (b) your Customer
            Content; or (c) your violation of any applicable law or third-party
            right.
          </li>
          <li>
            <strong>By MindPath BI:</strong> we agree to indemnify and hold you
            harmless from any third-party claims that the Service, as provided
            by us, infringes a third party&rsquo;s intellectual property rights,
            provided you give us prompt notice, sole control of the defense, and
            reasonable cooperation.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="14" tag="[WARRANTY]" title="Disclaimer of warranties">
        <p>
          The Service is provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; without warranties of any kind, whether express or
          implied, including but not limited to implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
      </LegalSection>

      <LegalSection num="15" tag="[TERMINATION]" title="Termination">
        <p>
          We may terminate or suspend your access to the Service at any time,
          with or without cause, upon notice. Upon termination:
        </p>
        <ul>
          <li>Your right to use the Service ceases immediately.</li>
          <li>
            <strong>Days 0–30:</strong> you may request export of Your Data
            during this migration window.
          </li>
          <li>
            <strong>Days 31–60:</strong> Your Data enters a staged deletion
            queue.
          </li>
          <li>
            <strong>Days 61–90:</strong> final purge is completed. A deletion
            certificate may be issued upon request.
          </li>
        </ul>
        <p>
          Full data lifecycle details are described in our{" "}
          <Link href="/dpa">Data Processing Addendum</Link>.
        </p>
      </LegalSection>

      <LegalSection num="16" tag="[DISPUTES]" title="Dispute resolution">
        <ul>
          <li>
            <strong>Good-faith negotiation:</strong> before initiating formal
            proceedings, either party shall attempt to resolve the dispute
            through good-faith negotiation for <strong>30 days</strong> from
            written notice of the dispute.
          </li>
          <li>
            <strong>Arbitration:</strong> if negotiation fails, the dispute
            shall be resolved by binding arbitration administered by the Israeli
            Institute of Commercial Arbitration, seated in Tel Aviv, Israel,
            conducted in English. The arbitrator&rsquo;s award is final and
            binding.
          </li>
          <li>
            <strong>Class action waiver:</strong> to the maximum extent
            permitted by law, all disputes must be brought in an individual
            capacity and not as a class action, collective action, or
            representative proceeding.
          </li>
          <li>
            <strong>Small claims:</strong> either party may bring qualifying
            claims in small claims court in the applicable jurisdiction.
          </li>
          <li>
            <strong>Injunctive relief:</strong> nothing in this section prevents
            either party from seeking injunctive or equitable relief in any
            court of competent jurisdiction to protect intellectual property
            rights or confidential information.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="17" tag="[LAW]" title="Governing law">
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the State of Israel, without regard to its conflict-of-law
          provisions.
        </p>
      </LegalSection>

      <LegalSection num="18" tag="[INCORPORATED]" title="Incorporated documents">
        <p>
          The following documents are incorporated by reference and form part of
          this Agreement:
        </p>
        <ul>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/dpa">Data Processing Addendum</Link>
          </li>
          <li>
            <Link href="/sla">Service Level Agreement</Link>
          </li>
          <li>
            <Link href="/ai-terms">AI Supplementary Terms</Link>
          </li>
          <li>
            <Link href="/subprocessors">Subprocessors</Link>
          </li>
        </ul>
        <p>
          In the event of a conflict, the order of precedence is: (1) AI
          Supplementary Terms (for AI Features only), (2) Data Processing
          Addendum, (3) these Terms, (4) other incorporated documents.
        </p>
      </LegalSection>

      <LegalSection num="19" tag="[CHANGES]" title="Changes to terms">
        <p>
          We may update these Terms from time to time. We will notify you of
          material changes via email or through the Service at least 30 days in
          advance. Your continued use after such changes constitutes acceptance
          of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection num="20" tag="[CONTACT]" title="Contact">
        <p>
          Questions about these Terms go to{" "}
          <a href="mailto:josef@mindpathbi.com">josef@mindpathbi.com</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
