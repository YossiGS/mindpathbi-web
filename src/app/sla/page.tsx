import type { Metadata } from "next";
import Link from "next/link";
import {
  LegalPage,
  LegalSection,
  LegalSealedBlock,
} from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Service Level Agreement — MindPath BI",
  description:
    "The structure of our availability commitment, maintenance policy, and incident communication practices. Specific availability targets are committed contractually.",
};

export default function SLAPage() {
  return (
    <LegalPage
      fieldReport="SLA-01"
      docSlug="SLA"
      title="Service level agreement."
      subtitle="The structure of our availability, maintenance, and incident-communication commitments. Specific availability targets are committed contractually to each customer."
      version="1.0"
      lastUpdated="April 2026"
    >
      <p>
        This Service Level Agreement (&ldquo;SLA&rdquo;) describes the{" "}
        <em>shape</em> of the availability commitments and operational practices
        for the MindPath BI platform. It forms part of and is subject to the{" "}
        <Link href="/terms">Terms of Service</Link>. The specific
        quantitative commitments — availability target, credit schedule, and
        measurement window — are defined contractually in the order form or
        master services agreement signed with each customer.
      </p>
      <p>
        Publishing an availability percentage publicly before we are ready to
        back it contractually does nothing for customers and a lot for a
        competitor&rsquo;s deck. We&rsquo;re not willing to do that. Everything
        below is true of the operational posture of the platform; the numbers
        are written down only where we can stand behind them with service
        credits.
      </p>

      <LegalSection
        num="01"
        tag="[COMMITMENT]"
        title="Availability commitment"
      >
        <p>
          MindPath BI operates the production service against a monthly
          availability target measured across the core user-facing surface:
        </p>
        <ul>
          <li>Web application (dashboard, inbox, Client 360)</li>
          <li>API endpoints</li>
          <li>Message delivery pipeline (sending and receiving)</li>
        </ul>
        <LegalSealedBlock label="COMMITTED CONTRACTUALLY">
          <p>
            The specific availability target, the measurement definition, and
            the service-credit schedule that applies when we miss it are
            committed in the order form. Prospects under mutual NDA can review
            the current reference schedule on the access call.
          </p>
        </LegalSealedBlock>
      </LegalSection>

      <LegalSection num="02" tag="[DOWNTIME]" title="Downtime — definition">
        <p>
          &ldquo;Downtime&rdquo; means a period during which the core service is
          unreachable or materially non-functional, as measured by our synthetic
          monitoring systems. Downtime is{" "}
          <strong>counted in whole minutes</strong> using the contractual
          definition agreed with each customer.
        </p>
        <p>Downtime <strong>excludes</strong>:</p>
        <ul>
          <li>Scheduled maintenance (see Section 03)</li>
          <li>
            Third-party service outages outside our control (upstream messaging
            providers, AI providers, etc.)
          </li>
          <li>
            Issues caused by Customer&rsquo;s equipment, software, or network
          </li>
          <li>Force majeure events</li>
          <li>Alpha or beta features</li>
          <li>
            Slowness of individual features that does not constitute total
            unavailability
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        num="03"
        tag="[MAINTENANCE]"
        title="Scheduled maintenance"
      >
        <ul>
          <li>
            Scheduled maintenance windows are announced in advance on our
            status page.
          </li>
          <li>
            We aim for scheduled maintenance to occur during low-traffic hours
            for the primary customer region.
          </li>
          <li>
            The maximum annual budget for scheduled maintenance is defined in
            the customer contract and re-confirmed on request.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="04" tag="[CREDITS]" title="Service credits">
        <p>
          When we miss the contractual availability target in a given
          measurement window, affected customers on paid plans are eligible for
          service credits. The credit schedule, cap, and claim window are
          defined in the customer contract.
        </p>
        <LegalSealedBlock label="CREDIT SCHEDULE · DISCLOSED UNDER CONTRACT">
          <p>
            The tiered credit schedule and annual cap are part of the order-form
            package. Service credits are the sole and exclusive remedy for
            missing the availability target.
          </p>
        </LegalSealedBlock>
      </LegalSection>

      <LegalSection
        num="05"
        tag="[INCIDENTS]"
        title="Incident communication"
      >
        <p>
          During an incident affecting the service, we follow a priority-based
          communication discipline:
        </p>
        <ul>
          <li>
            <strong>P1 — Critical</strong> (total outage or confirmed data
            incident): status page entry and direct email to affected customers
            as quickly as operationally possible; a technical owner is assigned
            before status is posted.
          </li>
          <li>
            <strong>P2 — Major</strong> (degraded service, regional impact, or
            suspected data exposure): status page update, followed by a
            written summary once the scope is confirmed.
          </li>
          <li>
            <strong>P3 — Minor</strong> (partial feature impairment): status
            page update within the same business day.
          </li>
          <li>
            Post-incident reports for P1 and P2 incidents are published once the
            incident is resolved and root-cause analysis is complete.
          </li>
        </ul>
        <p>
          The specific response-time targets for each priority are defined in
          the customer contract.
        </p>
      </LegalSection>

      <LegalSection num="06" tag="[EXCLUSIONS]" title="Exclusions">
        <p>This SLA does not apply to:</p>
        <ul>
          <li>
            Free or trial accounts — service credits are available on paid plans
            only.
          </li>
          <li>
            Downtime caused by third-party AI providers — AI feature
            availability follows provider uptime.
          </li>
          <li>Features explicitly designated as alpha, beta, or preview.</li>
          <li>
            Downtime resulting from Customer actions that violate the Terms of
            Service.
          </li>
        </ul>
      </LegalSection>

      <LegalSection num="07" tag="[CHANGES]" title="Changes">
        <p>
          We may update this SLA from time to time. Any reduction to the
          contractual availability target in force for a customer requires at
          least 30 days&rsquo; advance written notice. The &ldquo;Last
          updated&rdquo; date at the top changes when modifications are made to
          this page.
        </p>
      </LegalSection>

      <LegalSection num="08" tag="[CONTACT]" title="Contact">
        <p>
          For SLA-related inquiries, to review the contractual reference
          schedule under NDA, or to request service credits under an existing
          contract, email{" "}
          <a href="mailto:josef@mindpathbi.com">josef@mindpathbi.com</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
