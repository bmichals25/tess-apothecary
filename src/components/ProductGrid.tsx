"use client";

import ProductCard from "./ProductCard";
import { products } from "@/lib/products";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import { useStaggerReveal } from "@/hooks/useStaggerReveal";

export default function ProductGrid() {
  // Individual blends only (no Ritual Kit — that has its own section)
  const blends = products.filter((p) => p.slug !== "the-ritual-kit");
  const headingRef = useReveal();
  const gridRef = useStaggerReveal();

  return (
    <section className="bg-[var(--bone)] parchment-texture py-24 sm:py-32 px-5">
      <div className="max-w-7xl mx-auto relative z-[2]">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16 reveal-section">
          <p className="font-accent text-[var(--amber-elixir)] text-xl mb-3">
            From the Apothecary
          </p>
          <h2 className="font-heading text-[var(--apothecary-black)] text-fluid-section font-semibold mb-4">
            The Collection
          </h2>
          <p className="font-body text-[var(--warm-stone)] text-base max-w-xl mx-auto leading-relaxed">
            Five intention-crafted blends. Each designed for a specific moment
            in your day.
          </p>
        </div>

        {/* Bento Grid with CSS stagger animation */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {blends.map((product, i) => (
            <div
              key={product.slug}
              className={`reveal-card ${
                i === 0
                  ? "sm:col-span-2 lg:col-span-2"
                  : ""
              }`}
            >
              <ProductCard product={product} featured={i === 0} />
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-14">
          <Link
            href="/shop"
            className="inline-block px-10 py-4 border border-[var(--forest-veil)] text-[var(--forest-veil)] font-body text-sm font-bold tracking-[0.1em] uppercase hover:bg-[var(--forest-veil)] hover:text-[var(--parchment)] transition-all duration-400"
          >
            View All Blends
          </Link>
        </div>
      </div>
    </section>
  );
}
