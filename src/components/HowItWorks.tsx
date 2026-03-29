"use client";

const steps = [
  {
    number: "01",
    title: "Choose Your Blend",
    description:
      "Five blends, five intentions. Morning energy, evening calm, deep grounding, mental clarity, or heart opening. Start with what calls to you.",
    // Mortar & pestle icon
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
        {/* Mortar bowl */}
        <path d="M14 32 Q14 48 30 50 Q46 48 46 32" />
        <line x1="12" y1="32" x2="48" y2="32" />
        {/* Pestle */}
        <line x1="38" y1="18" x2="28" y2="30" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="40" cy="16" rx="4" ry="2.5" transform="rotate(-45, 40, 16)" />
        {/* Herb sprig in mortar */}
        <path d="M25 38 Q22 34 24 30" opacity="0.4" />
        <path d="M25 38 Q28 34 26 30" opacity="0.4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Set Your Intention",
    description:
      "Each blend comes with a prompt. Take a breath. Set an intention for your cup. This is the part that turns tea into ritual.",
    // Eye / third eye icon
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
        {/* Eye shape */}
        <path d="M8 30 Q30 12 52 30 Q30 48 8 30Z" />
        <circle cx="30" cy="30" r="8" />
        <circle cx="30" cy="30" r="3" fill="currentColor" opacity="0.2" />
        {/* Rays above */}
        <line x1="30" y1="8" x2="30" y2="14" opacity="0.3" />
        <line x1="20" y1="10" x2="22" y2="16" opacity="0.3" />
        <line x1="40" y1="10" x2="38" y2="16" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Brew Your Ritual",
    description:
      "One tablespoon. The right water temperature. A covered cup. Five to seven minutes of stillness while the herbs do their work.",
    // Potion bottle / tea cup with steam
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
        {/* Cup body */}
        <path d="M16 24 L18 50 Q18 54 22 54 L38 54 Q42 54 42 50 L44 24" />
        <line x1="14" y1="24" x2="46" y2="24" />
        {/* Handle */}
        <path d="M44 30 Q52 30 52 37 Q52 44 44 44" />
        {/* Steam wisps */}
        <path d="M24 18 Q24 12 26 8" strokeLinecap="round" opacity="0.4" />
        <path d="M30 16 Q30 10 32 6" strokeLinecap="round" opacity="0.3" />
        <path d="M36 18 Q36 12 38 8" strokeLinecap="round" opacity="0.4" />
        {/* Small star near steam */}
        <g transform="translate(42, 12)" opacity="0.25">
          <line x1="0" y1="-3" x2="0" y2="3" />
          <line x1="-3" y1="0" x2="3" y2="0" />
        </g>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-aged-paper parchment-texture py-24 sm:py-32 px-5">
      <div className="max-w-6xl mx-auto relative z-[2]">
        <div className="text-center mb-20">
          <p className="font-accent text-[var(--amber-elixir)] text-base mb-1 opacity-70">
            Chapter II
          </p>
          <p className="font-accent text-[var(--amber-elixir)] text-xl mb-3">
            Simple as steeping
          </p>
          <h2 className="font-heading text-[var(--apothecary-black)] text-fluid-section font-semibold">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={step.number}>
              <div className="text-center group">
                {/* Icon with apothecary label frame */}
                <div className="mx-auto mb-8 w-24 h-24 rounded-full border border-[var(--warm-stone)]/20 flex items-center justify-center text-[var(--forest-veil)] group-hover:border-[var(--amber-elixir)]/40 group-hover:text-[var(--amber-elixir)] transition-all duration-500 relative">
                  {step.icon}
                  {/* Small decorative dot at top */}
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--amber-elixir)] opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                </div>

                {/* Number */}
                <span className="font-body text-[var(--warm-stone)]/40 text-xs tracking-[0.15em] uppercase font-bold mb-3 block">
                  Step {step.number}
                </span>

                {/* Title */}
                <h3 className="font-heading text-[var(--apothecary-black)] text-xl sm:text-2xl font-semibold mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-body text-[var(--warm-stone)] text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Connecting line between steps (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[3.5rem] left-[calc(33.33%*var(--step-i)+16.66%+3rem)] w-[calc(33.33%-6rem)] h-px bg-[var(--warm-stone)]/10" style={{ "--step-i": index } as React.CSSProperties} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
