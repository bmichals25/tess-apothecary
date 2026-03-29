"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";

export default function ProductPageClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { addItem } = useCart();

  return (
    <div className="pt-20 sm:pt-24">
      {/* Breadcrumb */}
      <div className="bg-[#F5F0E8] px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <nav
            className="text-xs text-[#A89F91]"
            style={{ fontFamily: "'Karla', sans-serif" }}
          >
            <Link href="/" className="hover:text-[#2D4A3E]">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/shop" className="hover:text-[#2D4A3E]">
              Shop
            </Link>{" "}
            / <span className="text-[#1A1A1A]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="bg-[#F5F0E8] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${product.gradientFrom} 0%, ${product.accentColor} 50%, ${product.gradientTo} 100%)`,
                }}
              />
              <div className="absolute inset-0 opacity-10">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <circle
                    cx="200"
                    cy="150"
                    r="80"
                    fill="none"
                    stroke="#F5F0E8"
                    strokeWidth="0.5"
                  />
                  <circle
                    cx="200"
                    cy="150"
                    r="120"
                    fill="none"
                    stroke="#F5F0E8"
                    strokeWidth="0.3"
                  />
                  <line
                    x1="200"
                    y1="230"
                    x2="200"
                    y2="380"
                    stroke="#F5F0E8"
                    strokeWidth="0.5"
                  />
                  <ellipse
                    cx="160"
                    cy="300"
                    rx="40"
                    ry="15"
                    fill="none"
                    stroke="#F5F0E8"
                    strokeWidth="0.5"
                    transform="rotate(-30, 160, 300)"
                  />
                  <ellipse
                    cx="240"
                    cy="280"
                    rx="35"
                    ry="12"
                    fill="none"
                    stroke="#F5F0E8"
                    strokeWidth="0.5"
                    transform="rotate(25, 240, 280)"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-[#F5F0E8]/60 text-6xl mb-4">
                  {product.iconEmoji}
                </span>
                <span
                  className="text-[#F5F0E8] text-4xl"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  {product.name}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <span
                className="text-[#A89F91] text-xs tracking-[0.08em] uppercase mb-2"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  fontWeight: 500,
                }}
              >
                {product.category}
              </span>
              <h1
                className="text-[#1A1A1A] text-3xl sm:text-4xl mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 600,
                }}
              >
                {product.name}
              </h1>
              <p
                className="text-[#C4873B] text-sm mb-4"
                style={{ fontFamily: "'Caveat', cursive", fontSize: "1.1rem" }}
              >
                {product.tagline}
              </p>
              <p
                className="text-[#1A1A1A] text-2xl mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                }}
              >
                ${product.price.toFixed(2)}
              </p>

              {/* Description */}
              <div className="mb-8">
                {product.description.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-[#1A1A1A]/80 text-sm mb-3"
                    style={{
                      fontFamily: "'Karla', sans-serif",
                      lineHeight: 1.65,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Add to Cart */}
              <button
                onClick={() =>
                  addItem(product.slug, product.name, product.price)
                }
                className="w-full sm:w-auto px-8 py-4 bg-[#2D4A3E] text-[#F5F0E8] text-sm tracking-[0.08em] uppercase hover:bg-[#1A1A1A] transition-colors mb-8"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  fontWeight: 700,
                }}
              >
                Add to Cart &mdash; ${product.price.toFixed(2)}
              </button>

              {/* Details */}
              <div className="space-y-6 border-t border-[#A89F91]/30 pt-6">
                {/* Ingredients */}
                <div>
                  <h3
                    className="text-[#1A1A1A] text-lg mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 600,
                    }}
                  >
                    Ingredients
                  </h3>
                  <p
                    className="text-[#1A1A1A]/80 text-sm"
                    style={{
                      fontFamily: "'Karla', sans-serif",
                      lineHeight: 1.65,
                    }}
                  >
                    {product.ingredientDetails}
                  </p>
                </div>

                {/* Brewing Ritual */}
                <div>
                  <h3
                    className="text-[#1A1A1A] text-lg mb-2"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 600,
                    }}
                  >
                    Brewing Ritual
                  </h3>
                  <div
                    className="text-[#1A1A1A]/80 text-sm space-y-1"
                    style={{
                      fontFamily: "'Karla', sans-serif",
                      lineHeight: 1.65,
                    }}
                  >
                    <p>
                      <strong>Water:</strong> {product.waterTemp}
                    </p>
                    <p>
                      <strong>Steep:</strong> {product.steepTime}
                    </p>
                    <p>
                      <strong>Best with:</strong> {product.bestWith}
                    </p>
                    <p>
                      <strong>Caffeine:</strong> {product.caffeine}
                    </p>
                    <p className="mt-2 text-[#A89F91] text-xs">
                      Use 1 tablespoon per 8 oz of water. Cover while steeping.
                      Use filtered water for the cleanest flavor.
                    </p>
                  </div>
                </div>

                {/* Caffeine */}
                <div className="flex items-center gap-2 text-xs text-[#A89F91]">
                  <span
                    className="px-2 py-1 border border-[#A89F91]/30"
                    style={{ fontFamily: "'Karla', sans-serif" }}
                  >
                    {product.caffeine}
                  </span>
                  <span
                    className="px-2 py-1 border border-[#A89F91]/30"
                    style={{ fontFamily: "'Karla', sans-serif" }}
                  >
                    2 oz / 20-25 cups
                  </span>
                </div>
              </div>

              {/* FDA Disclaimer */}
              <p
                className="text-[#A89F91] text-[10px] mt-6 leading-relaxed"
                style={{ fontFamily: "'Karla', sans-serif" }}
              >
                *These statements have not been evaluated by the Food and Drug
                Administration. This product is not intended to diagnose, treat,
                cure, or prevent any disease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Placeholder */}
      <section className="bg-[#EDE7DB] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-[#1A1A1A] text-2xl mb-8 text-center"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Reviews
          </h2>
          <div className="text-center py-8">
            <p
              className="text-[#A89F91] text-sm italic"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}
            >
              Be the first to share your ritual experience with {product.name}.
            </p>
            <button
              className="mt-4 px-6 py-3 border border-[#2D4A3E] text-[#2D4A3E] text-xs tracking-[0.08em] uppercase hover:bg-[#2D4A3E] hover:text-[#F5F0E8] transition-colors"
              style={{
                fontFamily: "'Karla', sans-serif",
                fontWeight: 700,
              }}
            >
              Write a Review
            </button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-[#F5F0E8] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-[#1A1A1A] text-2xl mb-8 text-center"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Continue Your Ritual
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
