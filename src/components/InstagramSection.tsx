"use client";

import ScrollReveal from "./ScrollReveal";
import { StaggerContainer, StaggerItem } from "./ScrollReveal";

const gridItems = [
  { from: "#2D4A3E", to: "#1A1A1A", accent: "rgba(196,135,59,0.15)" },
  { from: "#C4873B", to: "#4A3428", accent: "rgba(45,74,62,0.15)" },
  { from: "#8B7B9E", to: "#1A1A1A", accent: "rgba(181,112,110,0.15)" },
  { from: "#B5706E", to: "#2D4A3E", accent: "rgba(139,123,158,0.15)" },
];

export default function InstagramSection() {
  return (
    <section className="bg-[var(--parchment)] py-24 sm:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <p className="font-accent text-[var(--amber-elixir)] text-xl mb-3">
            @tessapothecary
          </p>
          <h2 className="font-heading text-[var(--apothecary-black)] text-fluid-section font-semibold">
            Follow the Ritual
          </h2>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
          staggerDelay={0.1}
        >
          {gridItems.map((colors, i) => (
            <StaggerItem key={i}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square relative overflow-hidden group cursor-pointer"
                aria-label={`View Instagram post ${i + 1}`}
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${colors.from}, ${colors.to})`,
                  }}
                />

                {/* Decorative overlay pattern */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(circle at 30% 70%, ${colors.accent} 0%, transparent 60%)`,
                  }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 bg-[var(--apothecary-black)]/40">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="var(--parchment)"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
