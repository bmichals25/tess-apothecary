"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group flex flex-col">
      {/* Product Image Placeholder */}
      <Link href={`/shop/${product.slug}`} className="block relative overflow-hidden aspect-[4/5]">
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
          style={{
            background: `linear-gradient(135deg, ${product.gradientFrom} 0%, ${product.accentColor} 50%, ${product.gradientTo} 100%)`,
          }}
        />
        {/* Decorative botanical pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 200 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <circle cx="100" cy="80" r="40" fill="none" stroke="#F5F0E8" strokeWidth="0.5" />
            <circle cx="100" cy="80" r="60" fill="none" stroke="#F5F0E8" strokeWidth="0.3" />
            <line x1="100" y1="120" x2="100" y2="200" stroke="#F5F0E8" strokeWidth="0.5" />
            <ellipse cx="80" cy="160" rx="20" ry="8" fill="none" stroke="#F5F0E8" strokeWidth="0.5" transform="rotate(-30, 80, 160)" />
            <ellipse cx="120" cy="150" rx="18" ry="7" fill="none" stroke="#F5F0E8" strokeWidth="0.5" transform="rotate(25, 120, 150)" />
          </svg>
        </div>
        {/* Product name overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <span
            className="text-[#F5F0E8]/80 text-3xl mb-2"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            {product.iconEmoji}
          </span>
          <span
            className="text-[#F5F0E8] text-2xl"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
            }}
          >
            {product.name}
          </span>
          <span
            className="text-[#F5F0E8]/70 text-xs tracking-[0.08em] uppercase mt-2"
            style={{ fontFamily: "'Karla', sans-serif", fontWeight: 500 }}
          >
            {product.tagline}
          </span>
        </div>
      </Link>

      {/* Info */}
      <div className="pt-4 flex flex-col flex-1">
        <Link href={`/shop/${product.slug}`}>
          <h3
            className="text-[#1A1A1A] text-lg hover:text-[#2D4A3E] transition-colors"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
            }}
          >
            {product.name}
          </h3>
        </Link>
        <p
          className="text-[#A89F91] text-xs tracking-[0.05em] uppercase mt-1"
          style={{ fontFamily: "'Karla', sans-serif", fontWeight: 500 }}
        >
          {product.category}
        </p>
        <div className="flex items-center justify-between mt-3">
          <span
            className="text-[#1A1A1A] text-lg"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 700,
            }}
          >
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product.slug, product.name, product.price)}
            className="px-4 py-2 bg-[#2D4A3E] text-[#F5F0E8] text-xs tracking-[0.08em] uppercase hover:bg-[#1A1A1A] transition-colors"
            style={{ fontFamily: "'Karla', sans-serif", fontWeight: 700 }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
