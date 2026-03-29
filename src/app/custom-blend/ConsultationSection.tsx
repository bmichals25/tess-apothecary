"use client";

import { useCart } from "@/lib/cart-context";

const tiers = [
  {
    slug: "consultation-quick",
    name: "Quick Consult",
    duration: "15 min",
    price: 35,
    description: "A focused session on one specific concern",
    features: ["Video or phone call", "One targeted recommendation"],
    highlight: false,
  },
  {
    slug: "consultation-full",
    name: "Full Consultation",
    duration: "45 min",
    price: 85,
    description: "Comprehensive wellness review + custom blend recommendation",
    features: [
      "Video call",
      "Includes one custom blend (4oz)",
      "Full wellness assessment",
    ],
    highlight: true,
  },
  {
    slug: "consultation-deep",
    name: "The Deep Dive",
    duration: "90 min",
    price: 150,
    description: "Full health history, herbal protocol, ongoing support",
    features: [
      "Video call",
      "Includes two custom blends (4oz each)",
      "Written herbal protocol",
      "2 weeks email follow-up",
    ],
    highlight: false,
  },
];

export default function ConsultationSection() {
  const { addItem } = useCart();

  const handleBook = (tier: (typeof tiers)[number]) => {
    addItem(
      tier.slug,
      `${tier.name} (${tier.duration})`,
      tier.price,
      "/images/products/mockup-full-collection.jpg"
    );
  };

  return (
    <section id="consultation" className="bg-[var(--apothecary-black)] py-24 sm:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <p className="font-accent text-[var(--amber-elixir)] text-xl mb-3">
            One-on-one guidance
          </p>
          <h2 className="font-heading text-[var(--parchment)] text-fluid-section font-semibold mb-5">
            Speak with an Herbalist
          </h2>
          <p className="font-body text-[var(--warm-stone)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Want personalized guidance? Book a one-on-one consultation with one of our herbology experts.
            We&apos;ll discuss your wellness goals, current health, and create a comprehensive herbal
            protocol tailored to you.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 scroll-reveal--stagger">
          {tiers.map((tier) => (
            <div
              key={tier.slug}
              className={`relative flex flex-col p-8 transition-all duration-300 border ${
                tier.highlight
                  ? "border-[var(--amber-elixir)]/40 bg-[var(--amber-elixir)]/[0.04]"
                  : "border-[var(--warm-stone)]/15 bg-white/[0.02]"
              } hover:border-[var(--amber-elixir)]/60 hover:bg-[var(--amber-elixir)]/[0.06]`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[var(--amber-elixir)] text-[var(--parchment)] font-body text-[10px] font-bold tracking-[0.1em] uppercase">
                  Most Popular
                </span>
              )}

              {/* Duration badge */}
              <span className="font-body text-[var(--warm-stone)] text-xs tracking-[0.1em] uppercase font-bold mb-4">
                {tier.duration}
              </span>

              {/* Name */}
              <h3 className="font-heading text-[var(--parchment)] text-2xl font-semibold mb-2">
                {tier.name}
              </h3>

              {/* Price */}
              <p className="font-heading text-[var(--amber-elixir)] text-3xl font-bold mb-4">
                ${tier.price}
              </p>

              {/* Description */}
              <p className="font-body text-[var(--warm-stone)] text-sm leading-relaxed mb-6">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-[var(--amber-elixir)] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-body text-[var(--parchment)]/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Book button */}
              <button
                onClick={() => handleBook(tier)}
                className={`btn-glow w-full py-3 min-h-[44px] font-body text-sm font-bold tracking-[0.06em] uppercase transition-all duration-300 ${
                  tier.highlight
                    ? "bg-[var(--amber-elixir)] text-[var(--parchment)] hover:bg-[var(--burnished-gold)]"
                    : "bg-transparent text-[var(--parchment)] border border-[var(--parchment)]/20 hover:bg-[var(--parchment)]/10"
                }`}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* FDA Disclaimer */}
        <p className="font-body text-[var(--warm-stone)]/60 text-xs text-center max-w-2xl mx-auto mt-12 leading-relaxed">
          Our herbology consultations are for educational purposes only and do not constitute medical advice.
          These statements have not been evaluated by the Food and Drug Administration.
          These products are not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
    </section>
  );
}
