"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
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
      <div className="bg-[var(--parchment)] px-5 py-4">
        <div className="max-w-7xl mx-auto">
          <nav className="font-body text-xs text-[var(--warm-stone)]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[var(--forest-veil)] transition-colors">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/shop" className="hover:text-[var(--forest-veil)] transition-colors">
              Shop
            </Link>{" "}
            / <span className="text-[var(--apothecary-black)]">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="bg-[var(--parchment)] py-12 sm:py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <ScrollReveal direction="left">
              <div className="relative aspect-square overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(145deg, ${product.gradientFrom} 0%, ${product.accentColor} 50%, ${product.gradientTo} 100%)`,
                  }}
                />
                <div className="absolute inset-0 opacity-[0.06]">
                  <svg
                    viewBox="0 0 400 400"
                    className="w-full h-full"
                    preserveAspectRatio="xMidYMid slice"
                    fill="none"
                    stroke="var(--parchment)"
                    strokeWidth="0.5"
                  >
                    <circle cx="200" cy="150" r="60" />
                    <circle cx="200" cy="150" r="100" />
                    <circle cx="200" cy="150" r="140" />
                    <line x1="200" y1="250" x2="200" y2="380" />
                    <path d="M200 290 Q160 270 140 285" />
                    <path d="M200 320 Q240 300 260 315" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-[var(--parchment)]/40 text-7xl mb-4">
                    {product.iconEmoji}
                  </span>
                  <span className="font-heading text-[var(--parchment)] text-4xl sm:text-5xl font-semibold">
                    {product.name}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Product Info */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col">
                <span className="font-body text-[var(--warm-stone)] text-[11px] tracking-[0.12em] uppercase font-bold mb-3">
                  {product.category}
                </span>
                <h1 className="font-heading text-[var(--apothecary-black)] text-fluid-display font-semibold mb-3">
                  {product.name}
                </h1>
                <p className="font-accent text-[var(--amber-elixir)] text-lg mb-5">
                  {product.tagline}
                </p>
                <p className="font-heading text-[var(--apothecary-black)] text-3xl font-bold mb-8">
                  ${product.price.toFixed(2)}
                </p>

                <div className="mb-8">
                  {product.description.split("\n\n").map((para, i) => (
                    <p key={i} className="font-body text-[var(--apothecary-black)]/75 text-[15px] mb-4 leading-[1.8]">
                      {para}
                    </p>
                  ))}
                </div>

                <button
                  onClick={() => addItem(product.slug, product.name, product.price)}
                  className="btn-glow w-full sm:w-auto px-10 py-4 bg-[var(--forest-veil)] text-[var(--parchment)] font-body text-sm font-bold tracking-[0.1em] uppercase hover:bg-[var(--apothecary-black)] transition-all duration-400 mb-10"
                  aria-label={`Add ${product.name} to cart - $${product.price.toFixed(2)}`}
                >
                  Add to Cart &mdash; ${product.price.toFixed(2)}
                </button>

                <div className="space-y-8 border-t border-[var(--warm-stone)]/20 pt-8">
                  <div>
                    <h3 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
                      Ingredients
                    </h3>
                    <p className="font-body text-[var(--apothecary-black)]/70 text-sm leading-relaxed">
                      {product.ingredientDetails}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
                      Brewing Ritual
                    </h3>
                    <div className="font-body text-[var(--apothecary-black)]/70 text-sm space-y-2 leading-relaxed">
                      <p><strong className="text-[var(--apothecary-black)]">Water:</strong> {product.waterTemp}</p>
                      <p><strong className="text-[var(--apothecary-black)]">Steep:</strong> {product.steepTime}</p>
                      <p><strong className="text-[var(--apothecary-black)]">Best with:</strong> {product.bestWith}</p>
                      <p><strong className="text-[var(--apothecary-black)]">Caffeine:</strong> {product.caffeine}</p>
                      <p className="mt-3 text-[var(--warm-stone)] text-xs">
                        Use 1 tablespoon per 8 oz of water. Cover while steeping. Use filtered water for the cleanest flavor.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-body text-[var(--warm-stone)] text-[11px] tracking-[0.06em] px-3 py-1.5 border border-[var(--warm-stone)]/25">
                      {product.caffeine}
                    </span>
                    <span className="font-body text-[var(--warm-stone)] text-[11px] tracking-[0.06em] px-3 py-1.5 border border-[var(--warm-stone)]/25">
                      2 oz / 20-25 cups
                    </span>
                    <span className="font-body text-[var(--warm-stone)] text-[11px] tracking-[0.06em] px-3 py-1.5 border border-[var(--warm-stone)]/25">
                      Organic
                    </span>
                  </div>
                </div>

                <p className="font-body text-[var(--warm-stone)] text-[10px] mt-8 leading-relaxed">
                  *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[var(--linen)] py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center">
            <h2 className="font-heading text-[var(--apothecary-black)] text-2xl sm:text-3xl font-semibold mb-8">
              Reviews
            </h2>
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--forest-veil)]/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="var(--warm-stone)" className="w-6 h-6" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </div>
            <p className="font-heading text-[var(--apothecary-black)] text-base font-semibold mb-1">
              No reviews yet
            </p>
            <p className="font-body text-[var(--warm-stone)] text-sm mb-6">
              Be the first to share your ritual experience with {product.name}.
            </p>
            <button className="px-8 py-3 border border-[var(--forest-veil)] text-[var(--forest-veil)] font-body text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-[var(--forest-veil)] hover:text-[var(--parchment)] transition-all duration-300">
              Write a Review
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-[var(--parchment)] py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-[var(--apothecary-black)] text-2xl sm:text-3xl font-semibold">
              Continue Your Ritual
            </h2>
          </ScrollReveal>
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            staggerDelay={0.1}
          >
            {related.map((p) => (
              <StaggerItem key={p.slug}>
                <ProductCard product={p} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
