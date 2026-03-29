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
      <section className="bg-[var(--apothecary-black)] py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-accent text-[var(--amber-elixir)] text-lg mb-2">
            Help Center
          </p>
          <h1 className="font-heading text-[var(--parchment)] text-4xl sm:text-5xl font-semibold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-body text-[var(--warm-stone)] text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our blends, orders, and rituals.
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link href="/contact" className="text-[var(--amber-elixir)] hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-[var(--parchment)] py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion categories={faqData} />
        </div>
      </section>
    </div>
  );
}
