import type { Metadata } from "next";
import BlendBuilder from "./BlendBuilder";
import ConsultationSection from "./ConsultationSection";

export const metadata: Metadata = {
  title: "Custom Blend Builder | Your Blend, Your Ritual",
  description:
    "Create a one-of-a-kind herbal tea blend crafted just for you. Share your wellness goals, preferences, and health profile — Tess will hand-select herbs and mix your custom blend to order.",
  openGraph: {
    title: "Custom Blend Builder | Tess's Apothecary",
    description:
      "Tell us what you need. Tess will craft a one-of-a-kind herbal blend just for you.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Blend Builder | Tess's Apothecary",
    description:
      "Tell us what you need. Tess will craft a one-of-a-kind herbal blend just for you.",
  },
};

const howItWorksSteps = [
  {
    number: "01",
    title: "Share your needs",
    description: "Fill out the blend profile with your intentions, health concerns, and flavor preferences.",
    icon: (
      <svg viewBox="0 0 50 50" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
        <path d="M15 10 L15 40 L35 40 L35 10 Z" />
        <line x1="20" y1="18" x2="30" y2="18" opacity="0.4" />
        <line x1="20" y1="23" x2="30" y2="23" opacity="0.4" />
        <line x1="20" y1="28" x2="27" y2="28" opacity="0.4" />
        <path d="M32 8 L38 14 L35 14 L35 10" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Tess crafts your blend",
    description: "Hand-selected herbs, carefully measured and mixed to order based on your unique profile.",
    icon: (
      <svg viewBox="0 0 50 50" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
        <path d="M14 30 Q14 42 25 44 Q36 42 36 30" />
        <line x1="12" y1="30" x2="38" y2="30" />
        <line x1="32" y1="16" x2="24" y2="28" strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="34" cy="14" rx="3" ry="2" transform="rotate(-45, 34, 14)" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Receive your ritual",
    description: "Shipped in branded packaging with a custom blend card listing your ingredients and brewing instructions.",
    icon: (
      <svg viewBox="0 0 50 50" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
        <rect x="12" y="16" width="26" height="22" rx="0" />
        <path d="M12 16 L25 26 L38 16" />
        <circle cx="25" cy="10" r="1.5" fill="currentColor" opacity="0.2" />
        <path d="M22 8 Q25 4 28 8" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Refine & reorder",
    description: "Love it? We save your formula for easy reorders. Want to tweak it? We can adjust.",
    icon: (
      <svg viewBox="0 0 50 50" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
        <path d="M25 10 Q38 18 32 30 Q28 38 25 42 Q22 38 18 30 Q12 18 25 10Z" />
        <circle cx="25" cy="24" r="4" opacity="0.3" />
      </svg>
    ),
  },
];

export default function CustomBlendPage() {
  return (
    <div className="pt-20 sm:pt-24">
      {/* ─── Hero Section ─── */}
      <section className="bg-[var(--apothecary-black)] relative overflow-hidden">
        {/* Fog layers */}
        <div className="absolute inset-0 fog-layer-1 pointer-events-none" />
        <div className="absolute inset-0 fog-layer-2 pointer-events-none" />

        <div className="relative z-10 py-24 sm:py-32 lg:py-40 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-accent text-[var(--amber-elixir)] text-xl mb-4 hero-fade-in" style={{ animationDelay: "0.1s" }}>
              Made just for you
            </p>
            <h1 className="font-heading text-[var(--parchment)] text-fluid-hero font-semibold mb-6 hero-fade-in" style={{ animationDelay: "0.2s" }}>
              Your Blend, Your Ritual
            </h1>
            <p className="font-body text-[var(--warm-stone)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10 hero-fade-in" style={{ animationDelay: "0.35s" }}>
              Tell us what you need. Tess will craft a one-of-a-kind herbal blend just for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 hero-fade-in" style={{ animationDelay: "0.5s" }}>
              <a
                href="#blend-builder"
                className="btn-glow px-8 py-4 min-h-[44px] bg-[var(--amber-elixir)] text-[var(--parchment)] font-body text-sm font-bold tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[var(--burnished-gold)]"
              >
                Create My Blend
              </a>
              <a
                href="#consultation"
                className="px-8 py-4 min-h-[44px] border border-[var(--parchment)]/20 text-[var(--parchment)] font-body text-sm font-bold tracking-[0.06em] uppercase transition-all duration-300 hover:bg-[var(--parchment)]/10"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Blend Builder Section ─── */}
      <section id="blend-builder" className="bg-aged-paper parchment-texture py-24 sm:py-32 px-5">
        <div className="max-w-6xl mx-auto relative z-[2]">
          <div className="text-center mb-16 scroll-reveal">
            <p className="font-accent text-[var(--amber-elixir)] text-xl mb-3">
              Your custom formula
            </p>
            <h2 className="font-heading text-[var(--apothecary-black)] text-fluid-section font-semibold mb-4">
              Custom Blend Builder
            </h2>
            <p className="font-body text-[var(--warm-stone)] text-base max-w-xl mx-auto leading-relaxed">
              Walk through each step to tell us about your needs, preferences, and health profile.
              Every answer shapes your one-of-a-kind blend.
            </p>
          </div>
          <BlendBuilder />
        </div>
      </section>

      {/* ─── Consultation Section ─── */}
      <ConsultationSection />

      {/* ─── How It Works ─── */}
      <section className="bg-[var(--parchment)] py-24 sm:py-32 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-reveal">
            <p className="font-accent text-[var(--amber-elixir)] text-xl mb-3">
              From profile to package
            </p>
            <h2 className="font-heading text-[var(--apothecary-black)] text-fluid-section font-semibold">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 scroll-reveal--stagger">
            {howItWorksSteps.map((step) => (
              <div key={step.number} className="text-center group">
                <div className="mx-auto mb-6 w-20 h-20 rounded-full border border-[var(--warm-stone)]/20 flex items-center justify-center text-[var(--forest-veil)] group-hover:border-[var(--amber-elixir)]/40 group-hover:text-[var(--amber-elixir)] transition-all duration-500">
                  {step.icon}
                </div>
                <span className="font-body text-[var(--warm-stone)]/40 text-xs tracking-[0.15em] uppercase font-bold mb-2 block">
                  Step {step.number}
                </span>
                <h3 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-[var(--warm-stone)] text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
