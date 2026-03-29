import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping information for Tess's Apothecary orders.",
};

export default function ShippingPage() {
  const headingStyle = {
    fontFamily: "'Cormorant Garamond', Georgia, serif" as const,
    fontWeight: 600 as const,
  };

  return (
    <LegalPage title="Shipping Policy" lastUpdated="March 28, 2026">
      <div className="space-y-8 text-[#1A1A1A]/80 text-sm leading-relaxed">
        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            Processing Time
          </h2>
          <p>
            Each order is prepared by hand at the Apothecary. Please allow 1-3
            business days for processing. During busy seasons (holiday gifting,
            new blend launches), processing may take up to 5 business days.
          </p>
        </section>

        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            Shipping Options
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#A89F91]/30">
                  <th className="py-3 pr-4 font-medium text-[#1A1A1A]">Method</th>
                  <th className="py-3 pr-4 font-medium text-[#1A1A1A]">Estimated Delivery</th>
                  <th className="py-3 font-medium text-[#1A1A1A]">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#A89F91]/20">
                  <td className="py-3 pr-4">Standard (USPS First Class)</td>
                  <td className="py-3 pr-4">3-7 business days</td>
                  <td className="py-3">$4.95</td>
                </tr>
                <tr className="border-b border-[#A89F91]/20">
                  <td className="py-3 pr-4">Expedited (USPS Priority)</td>
                  <td className="py-3 pr-4">2-3 business days</td>
                  <td className="py-3">$8.95</td>
                </tr>
                <tr className="border-b border-[#A89F91]/20">
                  <td className="py-3 pr-4">Free Standard Shipping</td>
                  <td className="py-3 pr-4">3-7 business days</td>
                  <td className="py-3">Orders over $45</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-[#A89F91]">
            Delivery times are estimates from the date of shipment, not the date
            of order.
          </p>
        </section>

        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            Shipping Area
          </h2>
          <p>
            We currently ship to all 50 U.S. states. International shipping is
            not yet available. Sign up for our newsletter to be notified when we
            expand.
          </p>
        </section>

        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            Order Tracking
          </h2>
          <p>
            You&apos;ll receive a shipping confirmation email with a tracking
            number once your order ships. You can also check your order status in
            your account dashboard.
          </p>
        </section>

        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            Gift Orders
          </h2>
          <p>
            Ship to a different address, add a gift message, and select gift
            wrapping at checkout. Pricing and order details are never included in
            gift shipments.
          </p>
        </section>

        <section>
          <h2 className="text-[#1A1A1A] text-xl mb-3" style={headingStyle}>
            Lost or Damaged Packages
          </h2>
          <p>
            If your package is lost or arrives damaged, contact us at
            support@tessapothecary.com within 14 days. We will work with the
            carrier and make it right.
          </p>
        </section>
      </div>
    </LegalPage>
  );
}
