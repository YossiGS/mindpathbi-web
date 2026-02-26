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
        <p className="mt-2 text-sm text-muted">Last updated: February 26, 2026</p>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-muted">
          <p>
            MindPath BI (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the MindPath BI platform.
            This Privacy Policy explains how we collect, use, and protect your information when you use our services.
          </p>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li><strong className="text-foreground">Account information:</strong> name, email address, and organization details when you create an account.</li>
              <li><strong className="text-foreground">Communication data:</strong> messages, emails, and attachments processed through our platform from connected services (e.g., Gmail, Outlook, WhatsApp Business).</li>
              <li><strong className="text-foreground">Integration credentials:</strong> OAuth tokens and API keys for third-party services you connect, stored encrypted at rest.</li>
              <li><strong className="text-foreground">Usage data:</strong> log data, device information, and analytics to improve our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Provide, maintain, and improve our platform and services.</li>
              <li>Process and route communications from your connected channels.</li>
              <li>Provide AI-powered features such as suggested replies and contact insights.</li>
              <li>Send you service-related notices and support messages.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">3. Analytics &amp; Cookies</h2>
            <p>
              This website uses <strong className="text-foreground">Vercel Web Analytics</strong>, a privacy-friendly
              analytics service provided by Vercel Inc. Vercel Analytics collects anonymous, aggregated page-view
              data to help us understand how visitors use the site. It does not use cookies, does not collect
              personal information, does not track you across websites, and is fully compliant with GDPR, CCPA,
              and PECR without requiring a cookie consent banner.
            </p>
            <p className="mt-3">
              The MindPath BI application (app.mindpathbi.com) uses only essential session cookies required
              for authentication. We do not use advertising cookies, cross-site tracking, or fingerprinting
              on any of our properties.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">4. Third-Party Integrations</h2>
            <p>Our platform integrates with third-party services including Meta (WhatsApp Business), Google (Gmail), Microsoft (Outlook), and others. When you connect these services:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>We only request permissions necessary for the features you use.</li>
              <li>We do not sell or share your data with third parties for advertising purposes.</li>
              <li>You can disconnect any integration at any time from your settings page.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">5. Data Security</h2>
            <p>We implement industry-standard security measures including:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Encryption of sensitive credentials at rest using Fernet symmetric encryption.</li>
              <li>HTTPS for all data in transit.</li>
              <li>HMAC-SHA256 signature verification for webhook payloads.</li>
              <li>Role-based access control for organization data.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">6. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide you services.
              You can request deletion of your data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Access, correct, or delete your personal data.</li>
              <li>Disconnect third-party integrations and revoke access tokens.</li>
              <li>Export your data in a standard format.</li>
              <li>Opt out of non-essential data processing.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:mindpathbi@proton.me" className="text-foreground underline underline-offset-2 hover:opacity-80">mindpathbi@proton.me</a>.
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
