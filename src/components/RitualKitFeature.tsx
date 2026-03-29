"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { useReveal } from "@/hooks/useReveal";
import WaxSeal from "./WaxSeal";

export default function RitualKitFeature() {
  const { addItem } = useCart();
  const revealRef = useReveal();

  return (
    <section className="bg-aged-paper parchment-texture py-24 sm:py-32 px-5">
      <div ref={revealRef} className="max-w-7xl mx-auto relative z-[2] reveal-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-16 items-center">
          {/* Image area — larger, asymmetric */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="aspect-[4/3] lg:aspect-[16/10] overflow-hidden">
                <img
                  src="/images/products/mockup-full-collection.jpg"
                  alt="The Ritual Kit - All 5 Blends + Intention Guide"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              {/* Overlapping price badge */}
              <div className="absolute -bottom-4 right-2 sm:-right-4 lg:-right-8 bg-[var(--forest-veil)] text-[var(--parchment)] px-6 py-4 shadow-lg">
                <span className="font-heading text-2xl font-bold">$58</span>
                <span className="font-body text-[10px] tracking-[0.08em] uppercase block text-[var(--parchment)]/60">
                  Save $32
                </span>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-3">
              <p className="font-accent text-[var(--amber-elixir)] text-xl">
                The Hero Product
              </p>
              <WaxSeal size={28} className="opacity-40" />
            </div>

            <h2 className="font-heading text-[var(--apothecary-black)] text-fluid-display font-semibold mb-6">
              Begin Your
              <br />
              <span className="italic">Ritual</span>
            </h2>

            <p className="font-body text-[var(--apothecary-black)]/70 text-base leading-relaxed mb-4">
              The complete Tess&apos;s Apothecary experience in one beautiful box.
              All five blends, an intention-setting guide, wrapped in branded
              tissue paper with a dried flower sprig and wax seal.
            </p>

            <p className="font-body text-[var(--warm-stone)] text-sm leading-relaxed mb-8">
              Our most-gifted item. Perfect for anyone who loves wellness, ritual,
              beautiful things, or simply deserves a reminder to slow down.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => addItem("the-ritual-kit", "The Ritual Kit", 58, "/images/products/mockup-ritual-kit-closed.jpg")}
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
          </div>
        </div>
      </div>
    </section>
  );
}
