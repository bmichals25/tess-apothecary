"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20 sm:pt-24">
      {/* Header */}
      <section className="bg-[var(--apothecary-black)] py-20 sm:py-24 px-5">
        <div className="max-w-4xl mx-auto text-center reveal-section">
          <p className="font-accent text-[var(--amber-elixir)] text-xl mb-3">
            The Apothecary
          </p>
          <h1 className="font-heading text-[var(--parchment)] text-fluid-display font-semibold mb-5">
            Shop All Blends
          </h1>
          <p className="font-body text-[var(--warm-stone)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Each blend is crafted with organic herbs and a specific intention.
            Find the one that&apos;s calling to you.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="bg-[var(--parchment)] py-16 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            <div role="group" aria-label="Filter by category" className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`px-4 sm:px-5 py-3 sm:py-2.5 min-h-[44px] font-body text-xs sm:text-[11px] font-bold tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[var(--forest-veil)] text-[var(--parchment)]"
                      : "bg-transparent text-[var(--apothecary-black)] border border-[var(--warm-stone)]/30 hover:border-[var(--forest-veil)] hover:text-[var(--forest-veil)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {filtered.map((product) => {
              const isRitualKit = product.slug === "the-ritual-kit";
              const badge =
                product.slug === "shadow-work"
                  ? "Best Seller"
                  : product.slug === "eventide-elixir"
                  ? "Most Popular"
                  : undefined;
              return (
                <div
                  key={product.slug}
                  className={`reveal-card ${
                    isRitualKit ? "sm:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <ProductCard
                    product={product}
                    featured={isRitualKit}
                    badge={badge}
                  />
                </div>
              );
            })}
          </div>

          {/* Editorial Callout */}
          <div className="mt-14 mb-4 text-center reveal-section">
            <div className="max-w-2xl mx-auto py-10 px-6 border-t border-b border-[var(--warm-stone)]/20">
              <p className="font-accent text-[var(--amber-elixir)] text-lg mb-2">
                Not sure where to start?
              </p>
              <p className="font-body text-[var(--apothecary-black)]/70 text-base leading-relaxed max-w-prose mx-auto">
                The Ritual Kit includes samples of all five blends plus an intention-setting guide.
                It&apos;s the most-gifted item in our collection, and the way most people begin
                their journey with the Apothecary.
              </p>
            </div>
          </div>

          {/* FDA Disclaimer */}
          <div className="text-center mt-14">
            <p className="font-body text-[var(--warm-stone)] text-xs max-w-2xl mx-auto leading-relaxed">
              *These statements have not been evaluated by the Food and Drug
              Administration. These products are not intended to diagnose, treat,
              cure, or prevent any disease.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
