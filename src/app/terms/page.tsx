import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — MindPath BI",
  description: "Terms and conditions for using the MindPath BI platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-white/[0.06]">
        <div className="mx-auto flex h-12 max-w-3xl items-center px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-tight">MindPath BI</span>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted">Last updated: February 26, 2026</p>

        <div className="prose-invert mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the MindPath BI
            platform (&ldquo;Service&rdquo;) operated by MindPath BI (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
            By accessing or using the Service, you agree to be bound by these Terms.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p>
              By creating an account or using any part of the Service, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and our Privacy Policy. If you are using the
              Service on behalf of an organization, you represent that you have the authority to bind that
              organization to these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">2. Description of Service</h2>
            <p>
              MindPath BI provides a unified business intelligence platform that includes communication
              management, customer relationship tools, AI-powered insights, and third-party integrations.
              The Service is provided &ldquo;as is&rdquo; and we reserve the right to modify, suspend, or
              discontinue any feature at any time.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">3. User Accounts</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>You must provide accurate and complete registration information.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
              <li>You may not share your account or transfer it to another party without our consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">4. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Use the Service for any unlawful purpose or in violation of any applicable laws.</li>
              <li>Attempt to gain unauthorized access to any part of the Service or its systems.</li>
              <li>Interfere with or disrupt the integrity or performance of the Service.</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Service.</li>
              <li>Use the Service to send spam, phishing messages, or unsolicited communications.</li>
              <li>Upload malicious code, viruses, or harmful content.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">5. Data Ownership</h2>
            <p>
              You retain all ownership rights to the data you submit through the Service (&ldquo;Your Data&rdquo;).
              You grant us a limited license to process Your Data solely to provide and improve the Service.
              We will not sell Your Data to third parties or use it for advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">6. Third-Party Integrations</h2>
            <p>
              The Service connects to third-party platforms (e.g., Google, Microsoft, Meta, Slack).
              Your use of those integrations is also subject to the respective third-party terms of
              service. We are not responsible for the availability or conduct of third-party services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">7. Intellectual Property</h2>
            <p>
              The Service, including its design, code, features, and documentation, is the intellectual
              property of MindPath BI and is protected by applicable intellectual property laws. You may
              not copy, modify, or distribute any part of the Service without our written consent.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, MindPath BI shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits, data, or
              goodwill arising from your use of the Service. Our total liability shall not exceed the
              amount you paid us in the twelve (12) months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">9. Disclaimer of Warranties</h2>
            <p>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind,
              whether express or implied, including but not limited to implied warranties of merchantability,
              fitness for a particular purpose, and non-infringement. We do not warrant that the Service will
              be uninterrupted, error-free, or secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">10. Termination</h2>
            <p>
              We may terminate or suspend your access to the Service at any time, with or without cause, upon
              notice. Upon termination, your right to use the Service ceases immediately. You may request
              export of Your Data within 30 days of termination.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">11. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes via email
              or through the Service. Your continued use after such changes constitutes acceptance of the
              updated Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of
              Israel, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">13. Contact</h2>
            <p>
              For questions about these Terms, contact us at{" "}
              <a href="mailto:mindpathbi@proton.me" className="text-foreground underline underline-offset-2 hover:opacity-80">mindpathbi@proton.me</a>.
            </p>
          </section>
        </div>

        <div className="mt-16 border-t border-white/[0.06] pt-8 text-center text-xs text-muted">
          &copy; 2026 MindPath BI. All rights reserved.
        </div>
      </main>
    </div>
  );
}
