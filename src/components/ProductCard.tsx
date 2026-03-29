"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";
import SteamWisps from "./SteamWisps";

const botanicalSVGs: Record<string, React.ReactNode> = {
  "eventide-elixir": (
    <svg viewBox="0 0 120 150" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <g stroke="currentColor" fill="none" strokeWidth="0.6" opacity="0.15">
        {/* Lavender sprig */}
        <line x1="60" y1="140" x2="60" y2="40" />
        <ellipse cx="55" cy="55" rx="6" ry="3" transform="rotate(-25, 55, 55)" />
        <ellipse cx="65" cy="48" rx="6" ry="3" transform="rotate(25, 65, 48)" />
        <ellipse cx="55" cy="42" rx="5" ry="3" transform="rotate(-30, 55, 42)" />
        <ellipse cx="65" cy="35" rx="5" ry="3" transform="rotate(30, 65, 35)" />
        <circle cx="60" cy="28" r="4" />
      </g>
    </svg>
  ),
  "sun-tonic": (
    <svg viewBox="0 0 120 150" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <g stroke="currentColor" fill="none" strokeWidth="0.6" opacity="0.15">
        {/* Sun rays + leaf */}
        <circle cx="60" cy="50" r="15" />
        <circle cx="60" cy="50" r="25" />
        <line x1="60" y1="75" x2="60" y2="130" />
        <path d="M60 90 Q45 80 35 85" />
        <path d="M60 105 Q75 95 85 100" />
      </g>
    </svg>
  ),
  "shadow-work": (
    <svg viewBox="0 0 120 150" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <g stroke="currentColor" fill="none" strokeWidth="0.6" opacity="0.15">
        {/* Mushroom */}
        <path d="M40 70 Q40 35 60 30 Q80 35 80 70" />
        <line x1="60" y1="70" x2="60" y2="130" />
        <path d="M50 130 Q60 125 70 130" />
        <circle cx="50" cy="50" r="3" />
        <circle cx="68" cy="55" r="2" />
      </g>
    </svg>
  ),
  "inner-sight": (
    <svg viewBox="0 0 120 150" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <g stroke="currentColor" fill="none" strokeWidth="0.6" opacity="0.15">
        {/* Eye / third eye */}
        <ellipse cx="60" cy="60" rx="30" ry="18" />
        <circle cx="60" cy="60" r="10" />
        <circle cx="60" cy="60" r="4" />
        <line x1="60" y1="78" x2="60" y2="130" />
        <path d="M50 100 Q40 90 30 95" />
        <path d="M70 110 Q80 100 90 105" />
      </g>
    </svg>
  ),
  "heart-opener": (
    <svg viewBox="0 0 120 150" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <g stroke="currentColor" fill="none" strokeWidth="0.6" opacity="0.15">
        {/* Rose */}
        <path d="M60 45 Q55 35 60 28 Q65 35 60 45" />
        <path d="M60 45 Q48 38 45 48 Q55 45 60 45" />
        <path d="M60 45 Q72 38 75 48 Q65 45 60 45" />
        <path d="M60 50 Q42 45 40 58 Q52 52 60 50" />
        <path d="M60 50 Q78 45 80 58 Q68 52 60 50" />
        <line x1="60" y1="58" x2="60" y2="130" />
        <path d="M60 80 Q45 70 38 78" />
        <path d="M60 100 Q75 90 82 98" />
      </g>
    </svg>
  ),
  "the-ritual-kit": (
    <svg viewBox="0 0 120 150" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <g stroke="currentColor" fill="none" strokeWidth="0.6" opacity="0.15">
        {/* Collection of small botanicals */}
        <circle cx="40" cy="40" r="12" />
        <circle cx="80" cy="45" r="10" />
        <circle cx="60" cy="30" r="8" />
        <line x1="40" y1="52" x2="40" y2="90" />
        <line x1="80" y1="55" x2="80" y2="95" />
        <line x1="60" y1="38" x2="60" y2="130" />
        <path d="M60 70 Q48 62 42 68" />
        <path d="M60 90 Q72 82 78 88" />
      </g>
    </svg>
  ),
};

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
}: {
  product: Product;
  featured?: boolean;
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
        className={`block relative overflow-hidden ken-burns ${
          featured ? "aspect-[4/3] lg:aspect-auto" : "aspect-[3/4]"
        }`}
      >
        <div
          className="absolute inset-0 transition-all duration-700 group-hover:scale-105"
          style={{
            background: `linear-gradient(145deg, ${product.gradientFrom} 0%, ${product.accentColor} 60%, ${product.gradientTo} 100%)`,
          }}
        />

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 40%, rgba(245,240,232,0.3) 0%, transparent 50%),
                             radial-gradient(circle at 70% 60%, rgba(245,240,232,0.2) 0%, transparent 40%)`,
          }}
        />

        {/* Botanical illustration */}
        <div className="absolute inset-0 flex items-center justify-center text-[var(--parchment)]">
          {botanicalSVGs[product.slug]}
        </div>

        {/* Steam wisps on hover */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <SteamWisps className="top-2" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span className="font-accent text-[var(--parchment)]/60 text-4xl mb-3">
            {product.iconEmoji}
          </span>
          <span className="font-heading text-[var(--parchment)] text-2xl sm:text-3xl font-semibold">
            {product.name}
          </span>
          <span className="font-body text-[var(--parchment)]/60 text-[11px] tracking-[0.12em] uppercase mt-3">
            {product.tagline}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--apothecary-black)]/0 group-hover:bg-[var(--apothecary-black)]/10 transition-all duration-500" />
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
            onClick={() => addItem(product.slug, product.name, product.price)}
            className="px-5 py-2.5 bg-[var(--forest-veil)] text-[var(--parchment)] font-body text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-[var(--apothecary-black)] transition-all duration-400 opacity-80 group-hover:opacity-100"
            aria-label={`Add ${product.name} to cart - $${product.price.toFixed(2)}`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
