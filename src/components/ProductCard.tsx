"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

function getPoetryLine(slug: string): string {
  const lines: Record<string, string> = {
    "eventide-elixir": "For the hour that belongs to you",
    "sun-tonic": "Morning as it should be",
    "shadow-work": "For the days you need roots",
    "inner-sight": "Clear the fog, find the answer",
    "heart-opener": "When you need softness",
    "the-ritual-kit": "The complete journey begins here",
  };
  return lines[slug] || "";
}

export default function ProductCard({
  product,
  featured = false,
  badge,
}: {
  product: Product;
  featured?: boolean;
  badge?: string;
}) {
  const { addItem } = useCart();

  return (
    <div
      className={`product-card apothecary-label group flex flex-col bg-[var(--bone)] overflow-hidden ${
        featured ? "col-span-full lg:col-span-2 lg:grid lg:grid-cols-2" : ""
      }`}
    >
      {/* Product Image Area */}
      <Link
        href={`/shop/${product.slug}`}
        className={`block relative overflow-hidden product-image-container ${
          featured ? "aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto" : "aspect-[3/4]"
        }`}
      >
        {/* Badge */}
        {badge && (
          <span className="badge-best-seller">{badge}</span>
        )}

        {/* Real product image */}
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          loading="eager"
          fetchPriority="high"
        />

        {/* Subtle dark overlay for text legibility on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--apothecary-black)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      {/* Info Section */}
      <div className={`p-6 flex flex-col flex-1 ${featured ? "justify-center lg:p-10" : ""}`}>
        <div className="flex items-start justify-between mb-2">
          <Link href={`/shop/${product.slug}`} className="group/link">
            <h3 className="font-heading text-[var(--apothecary-black)] text-xl sm:text-2xl font-semibold group-hover/link:text-[var(--forest-veil)] transition-colors duration-300">
              {product.name}
            </h3>
          </Link>
          <span className="font-body text-[var(--warm-stone)] text-[11px] tracking-[0.08em] uppercase font-medium shrink-0 ml-3 mt-1">
            {product.category}
          </span>
        </div>

        <p className="font-accent text-[var(--amber-elixir)] text-base mb-4">
          {getPoetryLine(product.slug)}
        </p>

        {featured && (
          <p className="font-body text-[var(--apothecary-black)]/60 text-sm leading-relaxed mb-6 max-w-md">
            {product.description.split("\n")[0]}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--warm-stone)]/15">
          <span className="font-heading text-[var(--apothecary-black)] text-xl font-bold">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product.slug, product.name, product.price, product.image)}
            className="px-4 sm:px-5 py-3 sm:py-2.5 min-h-[44px] bg-[var(--forest-veil)] text-[var(--parchment)] font-body text-xs sm:text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-[var(--apothecary-black)] transition-all duration-400 opacity-80 group-hover:opacity-100"
            aria-label={`Add ${product.name} to cart - $${product.price.toFixed(2)}`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
