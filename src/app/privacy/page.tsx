import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Tess's Apothecary LLC.",
};

export default function PrivacyPage() {
  const headingStyle = {
    fontFamily: "'Cormorant Garamond', Georgia, serif" as const,
    fontWeight: 600 as const,
  };

  return (
    <LegalPage title="Privacy Policy" lastUpdated="March 28, 2026">
      <div className="space-y-8 text-[#1A1A1A]/80 text-sm leading-relaxed">
        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            Introduction
          </h2>
          <p>
            Tess&apos;s Apothecary LLC respects your privacy and is committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when
            you visit tessapothecary.com or purchase our products. This policy
            is designed to comply with the CCPA, CPRA, GDPR, and other
            applicable privacy laws.
          </p>
        </section>

        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            Information We Collect
          </h2>
          <p className="mb-3">
            <strong>Information you provide:</strong> Name, email, shipping/billing
            address, phone number when creating an account, placing orders,
            subscribing to newsletters, or contacting us.
          </p>
          <p className="mb-3">
            <strong>Automatically collected:</strong> IP address, browser type,
            device info, pages visited, usage patterns, and cookies.
          </p>
          <p>
            <strong>Third parties:</strong> Transaction data from Stripe (we
            never receive or store full credit card numbers), analytics data, and
            social media interactions.
          </p>
        </section>

        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            How We Use Your Information
          </h2>
          <p>
            We use your information to process orders, send shipping updates,
            communicate about your account, send marketing emails (with
            consent), improve our website, prevent fraud, and comply with legal
            obligations.
          </p>
        </section>

        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            How We Share Your Information
          </h2>
          <p>
            We do not sell your personal information. We share data with payment
            processors (Stripe), shipping carriers, email marketing providers,
            analytics services, and advertising platforms as needed to operate
            our business. We may also disclose information as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            Your Privacy Rights
          </h2>
          <p className="mb-3">
            <strong>California residents (CCPA/CPRA):</strong> Right to know,
            delete, correct, and opt out of sale/sharing of personal
            information.
          </p>
          <p>
            <strong>EU/UK residents (GDPR):</strong> Right of access,
            rectification, erasure, data portability, and the right to object.
            Contact support@tessapothecary.com to exercise your rights.
          </p>
        </section>

        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            Cookies
          </h2>
          <p>
            We use essential cookies for shopping cart functionality,
            performance cookies for analytics, and advertising cookies for
            measuring ad effectiveness. You can manage cookies through your
            browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            Security
          </h2>
          <p>
            We use SSL/TLS encryption, PCI DSS compliant payment processing, and
            access controls to protect your data. No method of transmission is
            100% secure, but we take reasonable measures.
          </p>
        </section>

        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            Contact
          </h2>
          <p>
            For privacy inquiries, contact us at support@tessapothecary.com. We
            respond within 45 days for CCPA requests and 30 days for GDPR
            requests.
          </p>
        </section>

        <p className="text-[#A89F91] text-xs italic mt-12">
          This document should be reviewed by a licensed attorney before
          publication.
        </p>
      </div>
    </LegalPage>
  );
}
