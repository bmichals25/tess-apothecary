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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
            {/* Product Image */}
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/3] sm:aspect-square overflow-hidden bg-[var(--linen)]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
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
                  onClick={() => addItem(product.slug, product.name, product.price, product.image)}
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

      {/* Related Products */}
      <section className="bg-[var(--parchment)] py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-heading text-[var(--apothecary-black)] text-2xl sm:text-3xl font-semibold">
              Continue Your Ritual
            </h2>
          </ScrollReveal>
          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
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
