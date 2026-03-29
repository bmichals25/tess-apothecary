"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
import type { Metadata } from "next";

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20 sm:pt-24">
      {/* Header */}
      <section className="bg-[#1A1A1A] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-[#C4873B] text-lg mb-2"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            The Apothecary
          </p>
          <h1
            className="text-[#F5F0E8] text-4xl sm:text-5xl mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Shop All Blends
          </h1>
          <p
            className="text-[#A89F91] text-base max-w-xl mx-auto"
            style={{ fontFamily: "'Karla', sans-serif", lineHeight: 1.65 }}
          >
            Each blend is crafted with organic herbs and a specific intention.
            Find the one that&apos;s calling to you.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="bg-[#F5F0E8] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs tracking-[0.08em] uppercase transition-colors ${
                  activeCategory === cat
                    ? "bg-[#2D4A3E] text-[#F5F0E8]"
                    : "bg-transparent text-[#1A1A1A] border border-[#A89F91]/40 hover:border-[#2D4A3E]"
                }`}
                style={{
                  fontFamily: "'Karla', sans-serif",
                  fontWeight: 700,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {/* FDA Disclaimer */}
          <p
            className="text-[#A89F91] text-xs text-center mt-12 max-w-2xl mx-auto"
            style={{ fontFamily: "'Karla', sans-serif", lineHeight: 1.6 }}
          >
            *These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure, or prevent any disease.
          </p>
        </div>
      </section>
    </div>
  );
}
