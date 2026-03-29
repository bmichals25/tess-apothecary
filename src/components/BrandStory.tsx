"use client";

import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import StarField from "./StarField";

export default function BrandStory() {
  return (
    <section className="relative bg-dark-wood py-28 sm:py-36 px-5 overflow-hidden">
      {/* Star field background */}
      <StarField />

      {/* Subtle atmospheric gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--forest-veil)]/10 via-transparent to-[var(--forest-veil)]/5" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: decorative vertical text */}
          <div className="hidden lg:flex lg:col-span-2 justify-center">
            <ScrollReveal delay={0.1}>
              <span
                className="font-accent text-[var(--amber-elixir)]/20 text-6xl"
                style={{ writingMode: "vertical-rl" }}
              >
                Brewed with Intention
              </span>
            </ScrollReveal>
          </div>

          {/* Right: story content */}
          <div className="lg:col-span-10">
            <ScrollReveal>
              <p className="font-accent text-[var(--amber-elixir)] text-base mb-2 opacity-70">
                Chapter I
              </p>
              <h2 className="font-heading text-[var(--parchment)] text-fluid-section font-semibold mb-8">
                Our Story
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <blockquote className="grimoire-quote font-heading text-[var(--parchment)] text-fluid-subtitle font-normal italic leading-[1.5] mb-10">
                There&apos;s a kind of knowing that lives in your hands before it
                reaches your head. The way you instinctively reach for chamomile
                when the world gets loud. The way your grandmother brewed something
                bitter and strange when you couldn&apos;t sleep, and it worked, and
                she never told you why &mdash; just smiled and said{" "}
                <em>&ldquo;drink.&rdquo;</em>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="divider-botanical mb-10" />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="font-body text-[var(--warm-stone)] text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
                Tess&apos;s Apothecary was born from that lineage of quiet knowing.
                Our blends are formulated at the intersection of herbalism and ritual
                &mdash; each one designed for a specific moment in your day, crafted
                with organic herbs and an unwavering belief that your daily cup of tea
                can be something sacred.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Link
                href="/about"
                className="inline-block px-10 py-4 border border-[var(--warm-stone)]/25 text-[var(--parchment)] font-body text-sm font-bold tracking-[0.1em] uppercase hover:border-[var(--amber-elixir)] hover:text-[var(--amber-elixir)] transition-all duration-400"
              >
                Read Our Story
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
