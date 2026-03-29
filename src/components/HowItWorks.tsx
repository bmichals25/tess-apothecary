"use client";

import ScrollReveal from "./ScrollReveal";
import { StaggerContainer, StaggerItem } from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Choose Your Blend",
    description:
      "Five blends, five intentions. Morning energy, evening calm, deep grounding, mental clarity, or heart opening. Start with what calls to you.",
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="30" cy="25" r="12" />
        <line x1="30" y1="37" x2="30" y2="55" />
        <path d="M22 45 Q18 42 15 46" />
        <path d="M38 48 Q42 45 45 49" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Set Your Intention",
    description:
      "Each blend comes with a prompt. Take a breath. Set an intention for your cup. This is the part that turns tea into ritual.",
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="30" cy="30" r="18" />
        <circle cx="30" cy="30" r="8" />
        <circle cx="30" cy="30" r="2" fill="currentColor" />
        <line x1="30" y1="10" x2="30" y2="15" />
        <line x1="30" y1="45" x2="30" y2="50" />
        <line x1="10" y1="30" x2="15" y2="30" />
        <line x1="45" y1="30" x2="50" y2="30" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Brew Your Ritual",
    description:
      "One tablespoon. The right water temperature. A covered cup. Five to seven minutes of stillness while the herbs do their work.",
    icon: (
      <svg viewBox="0 0 60 60" className="w-12 h-12" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M18 25 L18 50 Q18 55 23 55 L37 55 Q42 55 42 50 L42 25" />
        <line x1="18" y1="25" x2="42" y2="25" />
        <path d="M42 32 Q50 32 50 38 Q50 44 42 44" />
        {/* Steam */}
        <path d="M26 20 Q26 15 28 12" strokeLinecap="round" />
        <path d="M30 18 Q30 13 32 10" strokeLinecap="round" />
        <path d="M34 20 Q34 15 36 12" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[var(--parchment)] py-24 sm:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-20">
          <p className="font-accent text-[var(--amber-elixir)] text-xl mb-3">
            Simple as steeping
          </p>
          <h2 className="font-heading text-[var(--apothecary-black)] text-fluid-section font-semibold">
            How It Works
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
          staggerDelay={0.2}
        >
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="text-center group">
                {/* Icon */}
                <div className="mx-auto mb-8 w-20 h-20 rounded-full border border-[var(--warm-stone)]/20 flex items-center justify-center text-[var(--forest-veil)] group-hover:border-[var(--amber-elixir)]/40 group-hover:text-[var(--amber-elixir)] transition-all duration-500">
                  {step.icon}
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
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
