import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import { faqData } from "@/lib/faq-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Tess's Apothecary herbal tea blends, shipping, returns, and more.",
  openGraph: {
    title: "FAQ | Tess's Apothecary",
    description: "Frequently asked questions about Tess's Apothecary.",
  },
};

export default function FAQPage() {
  return (
    <div className="pt-20 sm:pt-24">
      <section className="bg-[#1A1A1A] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-[#C4873B] text-lg mb-2"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Help Center
          </p>
          <h1
            className="text-[#F5F0E8] text-4xl sm:text-5xl mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="text-[#A89F91] text-base max-w-xl mx-auto"
            style={{ fontFamily: "'Karla', sans-serif", lineHeight: 1.65 }}
          >
            Everything you need to know about our blends, orders, and rituals.
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-[#C4873B] hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#F5F0E8] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion categories={faqData} />
        </div>
      </section>
    </div>
  );
}
