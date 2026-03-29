import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import NewsletterSignup from "@/components/NewsletterSignup";
import { products } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Product Showcase */}
      <section className="bg-[#F5F0E8] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[#C4873B] text-lg mb-2"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              From the Apothecary
            </p>
            <h2
              className="text-[#1A1A1A] text-3xl sm:text-4xl mb-4"
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontWeight: 600,
              }}
            >
              The Collection
            </h2>
            <p
              className="text-[#A89F91] text-base max-w-xl mx-auto"
              style={{
                fontFamily: "var(--font-karla), sans-serif",
                lineHeight: 1.65,
              }}
            >
              Five intention-crafted blends and one ritual kit. Each designed for
              a specific moment in your day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block px-8 py-4 border border-[#2D4A3E] text-[#2D4A3E] text-sm tracking-[0.08em] uppercase hover:bg-[#2D4A3E] hover:text-[#F5F0E8] transition-colors"
              style={{
                fontFamily: "var(--font-karla), sans-serif",
                fontWeight: 700,
              }}
            >
              View All Blends
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-[#1A1A1A] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-[#C4873B] text-xl mb-6"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Our Story
          </p>
          <blockquote
            className="text-[#F5F0E8] text-xl sm:text-2xl leading-relaxed mb-8"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.5,
            }}
          >
            There&apos;s a kind of knowing that lives in your hands before it
            reaches your head. The way you instinctively reach for chamomile when
            the world gets loud. The way your grandmother brewed something bitter
            and strange when you couldn&apos;t sleep, and it worked, and she
            never told you why &mdash; just smiled and said{" "}
            <em>&ldquo;drink.&rdquo;</em>
          </blockquote>
          <p
            className="text-[#A89F91] text-base max-w-2xl mx-auto mb-8"
            style={{
              fontFamily: "var(--font-karla), sans-serif",
              lineHeight: 1.65,
            }}
          >
            Tess&apos;s Apothecary was born from that lineage of quiet knowing.
            Our blends are formulated at the intersection of herbalism and ritual
            &mdash; each one designed for a specific moment in your day.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-4 border border-[#A89F91]/40 text-[#F5F0E8] text-sm tracking-[0.08em] uppercase hover:border-[#C4873B] hover:text-[#C4873B] transition-colors"
            style={{
              fontFamily: "var(--font-karla), sans-serif",
              fontWeight: 700,
            }}
          >
            Read Our Story
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter Signup */}
      <NewsletterSignup />

      {/* Instagram Feed Placeholder */}
      <section className="bg-[#F5F0E8] py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="text-[#C4873B] text-lg mb-2"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            @tessapothecary
          </p>
          <h2
            className="text-[#1A1A1A] text-3xl sm:text-4xl mb-8"
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontWeight: 600,
            }}
          >
            Follow the Ritual
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { from: "#2D4A3E", to: "#1A1A1A" },
              { from: "#C4873B", to: "#4A3428" },
              { from: "#8B7B9E", to: "#1A1A1A" },
              { from: "#B5706E", to: "#2D4A3E" },
            ].map((colors, i) => (
              <div
                key={i}
                className="aspect-square relative overflow-hidden group cursor-pointer"
              >
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#1A1A1A]/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#F5F0E8"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
