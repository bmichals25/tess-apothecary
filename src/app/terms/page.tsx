import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Tess's Apothecary LLC.",
};

export default function TermsPage() {
  const sectionStyle = "mb-8";

  return (
    <LegalPage title="Terms of Service" lastUpdated="March 28, 2026">
      <div className="space-y-8 text-[var(--apothecary-black)]/80 text-sm leading-relaxed">
        <section className={sectionStyle}>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            1. Agreement to Terms
          </h2>
          <p>
            Welcome to Tess&apos;s Apothecary. These Terms of Service govern
            your access to and use of tessapothecary.com and the purchase of
            products from Tess&apos;s Apothecary LLC. By accessing the Site or
            placing an order, you agree to be bound by these Terms. These Terms
            constitute a legally binding agreement between you and Tess&apos;s
            Apothecary LLC, a Wyoming limited liability company.
          </p>
        </section>

        <section className={sectionStyle}>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            2. Eligibility
          </h2>
          <p>
            You must be at least 18 years old to use this Site and purchase
            products. By using this Site, you represent and warrant that you are
            at least 18 years of age and have the legal capacity to enter into a
            binding agreement.
          </p>
        </section>

        <section className={sectionStyle}>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            3. Products and Descriptions
          </h2>
          <p className="mb-3">
            We strive to display product descriptions, images, and pricing as
            accurately as possible. All products are subject to availability. We
            reserve the right to discontinue any product at any time.
          </p>
          <p className="mb-3">
            <strong>Herbal Products Disclaimer:</strong> Our products are herbal
            tea blends and/or herbal dietary supplements. They are NOT intended
            to diagnose, treat, cure, or prevent any disease. Always consult your
            physician before using any herbal product.
          </p>
          <p>
            <strong>The statements made about our products have not been
            evaluated by the Food and Drug Administration (FDA).</strong>
          </p>
        </section>

        <section className={sectionStyle}>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            4. Orders and Payment
          </h2>
          <p className="mb-3">
            Your placement of an order constitutes an offer to purchase. We
            reserve the right to accept or reject any order. All prices are in
            USD and do not include applicable sales tax or shipping charges.
          </p>
          <p>
            We accept payment through Stripe. Payment is processed at the time
            of order placement. We do not store your full credit card information
            on our servers.
          </p>
        </section>

        <section className={sectionStyle}>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            5. Shipping
          </h2>
          <p>
            We ship to addresses within the United States. Orders are typically
            processed within 2-5 business days. We are not responsible for delays
            caused by carriers, weather, or other events outside our control.
            Title and risk of loss pass to you upon delivery to the carrier.
          </p>
        </section>

        <section className={sectionStyle}>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            6. Returns and Refunds
          </h2>
          <p>
            Due to the consumable nature of our products, returns are limited.
            Please see our Return Policy page for full details.
          </p>
        </section>

        <section className={sectionStyle}>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            7. Intellectual Property
          </h2>
          <p>
            All content on the Site is the property of Tess&apos;s Apothecary
            LLC and is protected by copyright, trademark, and other intellectual
            property laws. &ldquo;Tess&apos;s Apothecary,&rdquo; our logo, and
            our product names are trademarks of Tess&apos;s Apothecary LLC.
          </p>
        </section>

        <section className={sectionStyle}>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            8. Limitation of Liability
          </h2>
          <p>
            TO THE FULLEST EXTENT PERMITTED BY LAW, TESS&apos;S APOTHECARY LLC
            SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
            CONSEQUENTIAL, OR PUNITIVE DAMAGES. OUR TOTAL LIABILITY SHALL NOT
            EXCEED THE AMOUNT YOU PAID IN THE TWELVE MONTHS PRECEDING THE EVENT.
          </p>
        </section>

        <section className={sectionStyle}>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            9. Dispute Resolution
          </h2>
          <p>
            These Terms are governed by the laws of the State of Wyoming. Before
            initiating formal proceedings, you agree to attempt informal
            resolution for at least 30 days. Unresolved disputes will be settled
            by binding arbitration under AAA Consumer Arbitration Rules.
          </p>
        </section>

        <section className={sectionStyle}>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            10. Contact
          </h2>
          <p>
            Questions about these Terms? Contact us at
            support@tessapothecary.com.
          </p>
        </section>

        <p className="text-[var(--warm-stone)] text-xs italic mt-12">
          This document should be reviewed by a licensed attorney before
          publication.
        </p>
      </div>
    </LegalPage>
  );
}
