"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import ScrollReveal from "./ScrollReveal";

export default function RitualKitFeature() {
  const { addItem } = useCart();

  return (
    <section className="bg-[var(--parchment)] py-24 sm:py-32 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Image area — larger, asymmetric */}
          <ScrollReveal className="lg:col-span-7" direction="left">
            <div className="relative">
              <div
                className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, #1A1A1A 0%, #D4A843 40%, #C4873B 70%, #1A1A1A 100%)`,
                }}
              >
                {/* Decorative botanical overlay */}
                <div className="absolute inset-0 flex items-center justify-center text-[var(--parchment)]">
                  <svg viewBox="0 0 300 200" className="w-3/4 h-3/4 opacity-[0.08]" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <circle cx="80" cy="80" r="30" />
                    <circle cx="150" cy="60" r="25" />
                    <circle cx="220" cy="85" r="28" />
                    <circle cx="120" cy="120" r="22" />
                    <circle cx="190" cy="130" r="26" />
                    <line x1="80" y1="110" x2="80" y2="180" />
                    <line x1="150" y1="85" x2="150" y2="180" />
                    <line x1="220" y1="113" x2="220" y2="180" />
                    <line x1="120" y1="142" x2="120" y2="180" />
                    <line x1="190" y1="156" x2="190" y2="180" />
                  </svg>
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <span className="font-accent text-[var(--parchment)]/50 text-5xl mb-4">
                    &#10024;
                  </span>
                  <span className="font-heading text-[var(--parchment)] text-3xl sm:text-4xl font-semibold">
                    The Ritual Kit
                  </span>
                  <span className="font-body text-[var(--parchment)]/60 text-xs tracking-[0.12em] uppercase mt-3">
                    All 5 Blends + Intention Guide
                  </span>
                </div>
              </div>

              {/* Overlapping price badge */}
              <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-[var(--forest-veil)] text-[var(--parchment)] px-6 py-4 shadow-lg">
                <span className="font-heading text-2xl font-bold">$58</span>
                <span className="font-body text-[10px] tracking-[0.08em] uppercase block text-[var(--parchment)]/60">
                  Save $32
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Text content */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.2}>
              <p className="font-accent text-[var(--amber-elixir)] text-xl mb-3">
                The Hero Product
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <h2 className="font-heading text-[var(--apothecary-black)] text-fluid-display font-semibold mb-6">
                Begin Your
                <br />
                <span className="italic">Ritual</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="font-body text-[var(--apothecary-black)]/70 text-base leading-relaxed mb-4">
                The complete Tess&apos;s Apothecary experience in one beautiful box.
                All five blends, an intention-setting guide, wrapped in branded
                tissue paper with a dried flower sprig and wax seal.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <p className="font-body text-[var(--warm-stone)] text-sm leading-relaxed mb-8">
                Our most-gifted item. Perfect for anyone who loves wellness, ritual,
                beautiful things, or simply deserves a reminder to slow down.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => addItem("the-ritual-kit", "The Ritual Kit", 58)}
                  className="btn-glow px-8 py-4 bg-[var(--forest-veil)] text-[var(--parchment)] font-body text-sm font-bold tracking-[0.1em] uppercase hover:bg-[var(--apothecary-black)] transition-all duration-400"
                  aria-label="Add The Ritual Kit to cart - $58.00"
                >
                  Add to Cart &mdash; $58
                </button>
                <Link
                  href="/shop/the-ritual-kit"
                  className="px-8 py-4 border border-[var(--warm-stone)]/30 text-[var(--apothecary-black)] font-body text-sm font-bold tracking-[0.1em] uppercase hover:border-[var(--forest-veil)] hover:text-[var(--forest-veil)] transition-all duration-400 text-center"
                >
                  Learn More
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
