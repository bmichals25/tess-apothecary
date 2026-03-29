import Link from "next/link";

export default function CustomBlendCTA() {
  return (
    <section className="bg-[var(--forest-veil)] relative overflow-hidden py-20 sm:py-24 px-5">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[var(--amber-elixir)] blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center scroll-reveal">
        <p className="font-accent text-[var(--amber-elixir)] text-xl mb-3">
          Something just for you
        </p>
        <h2 className="font-heading text-[var(--parchment)] text-fluid-section font-semibold mb-5">
          Can&apos;t Find Your Perfect Blend?
        </h2>
        <p className="font-body text-[var(--parchment)]/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Tell us your intentions, health goals, and flavor preferences. Tess will hand-craft
          a one-of-a-kind herbal blend made exclusively for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/custom-blend"
            className="btn-glow px-8 py-4 min-h-[44px] bg-[var(--amber-elixir)] text-[var(--parchment)] font-body text-sm font-bold tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[var(--burnished-gold)]"
          >
            Create My Custom Blend
          </Link>
          <Link
            href="/custom-blend#consultation"
            className="px-8 py-4 min-h-[44px] border border-[var(--parchment)]/20 text-[var(--parchment)] font-body text-sm font-bold tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[var(--parchment)]/10"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
