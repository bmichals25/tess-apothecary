import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Return Policy",
  description: "Return and refund policy for Tess's Apothecary.",
};

export default function ReturnsPage() {
  return (
    <LegalPage title="Return & Refund Policy" lastUpdated="March 28, 2026">
      <div className="space-y-8 text-[var(--apothecary-black)]/80 text-sm leading-relaxed">
        <p>
          At Tess&apos;s Apothecary, we want you to love your purchase. Because
          our products are consumable herbal blends, we have specific policies to
          ensure both customer satisfaction and food safety.
        </p>

        <section>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            Satisfaction Guarantee
          </h2>
          <p>
            We offer a one-time satisfaction guarantee for first-time customers.
            If you are dissatisfied with any product for any reason, contact us
            within 14 days of delivery. We will issue a full refund or
            replacement for up to one product per order. You do not need to
            return the product.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            Damaged or Defective Products
          </h2>
          <p>
            Contact us within 14 days of delivery with your order number, a
            photo of the damage, and a brief description. We will send a free
            replacement or issue a full refund. No return required.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            Unopened Products
          </h2>
          <p>
            Unopened, sealed products in original packaging may be returned
            within 30 days of delivery. Contact us for return authorization.
            Return shipping costs are the customer&apos;s responsibility. Full
            product refund (excluding original shipping) will be issued within
            5-7 business days of receipt.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            Non-Returnable Items
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Opened or partially consumed products (beyond satisfaction guarantee)</li>
            <li>Products past 30 days from delivery</li>
            <li>Products purchased at pop-up events</li>
            <li>Gift cards</li>
            <li>Products damaged due to customer mishandling</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            Refund Timing
          </h2>
          <p>
            Credit card refunds are processed within 5-7 business days via
            Stripe. Store credits are issued within 1 business day. Please allow
            an additional 5-10 business days for the refund to appear on your
            statement.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
            How to Request a Return
          </h2>
          <p>
            Email support@tessapothecary.com with subject line &ldquo;Return/Refund
            Request&rdquo; and include your order number, product(s) in question,
            reason, photos if applicable, and your preference (refund,
            replacement, or store credit). We respond within 1-2 business days.
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
