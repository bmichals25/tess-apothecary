"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
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
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-accent text-[var(--amber-elixir)] text-xl mb-3">
              The Apothecary
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-[var(--parchment)] text-fluid-display font-semibold mb-5">
              Shop All Blends
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-[var(--warm-stone)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Each blend is crafted with organic herbs and a specific intention.
              Find the one that&apos;s calling to you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="bg-[var(--parchment)] py-16 px-5">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-14" delay={0.1}>
            <div role="group" aria-label="Filter by category" className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className={`px-5 py-2.5 font-body text-[11px] font-bold tracking-[0.1em] uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[var(--forest-veil)] text-[var(--parchment)]"
                      : "bg-transparent text-[var(--apothecary-black)] border border-[var(--warm-stone)]/30 hover:border-[var(--forest-veil)] hover:text-[var(--forest-veil)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Product Grid */}
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            staggerDelay={0.1}
          >
            {filtered.map((product) => (
              <StaggerItem key={product.slug}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* FDA Disclaimer */}
          <ScrollReveal className="text-center mt-14" delay={0.3}>
            <p className="font-body text-[var(--warm-stone)] text-xs max-w-2xl mx-auto leading-relaxed">
              *These statements have not been evaluated by the Food and Drug
              Administration. These products are not intended to diagnose, treat,
              cure, or prevent any disease.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
