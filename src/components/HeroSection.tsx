"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function HeroSection() {
  const headlineWords = ["Brewed", "with"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--apothecary-black)]">
      {/* Looping hero video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/products/mockup-full-collection.jpg"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay — stronger on left for text readability, fades to let video show on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--apothecary-black)]/85 via-[var(--apothecary-black)]/50 to-[var(--apothecary-black)]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--apothecary-black)]/80 via-transparent to-[var(--apothecary-black)]/30" />

      {/* Floating botanical SVGs — pure CSS animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute top-[15%] left-[8%] w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 opacity-[0.06] float-slow"
          viewBox="0 0 100 100"
          fill="none"
          stroke="var(--parchment)"
          strokeWidth="0.5"
        >
          <path d="M50 90 Q50 50 30 30 Q50 40 50 10 Q50 40 70 30 Q50 50 50 90Z" />
          <path d="M40 60 Q30 50 20 55" />
          <path d="M60 60 Q70 50 80 55" />
        </svg>

        <svg
          className="absolute top-[30%] right-[10%] w-16 sm:w-24 lg:w-40 h-16 sm:h-24 lg:h-40 opacity-[0.05] float-medium"
          viewBox="0 0 100 100"
          fill="none"
          stroke="var(--parchment)"
          strokeWidth="0.4"
        >
          <circle cx="50" cy="30" r="15" />
          <circle cx="50" cy="30" r="25" />
          <line x1="50" y1="45" x2="50" y2="90" />
          <ellipse cx="35" cy="65" rx="12" ry="5" transform="rotate(-40, 35, 65)" />
          <ellipse cx="65" cy="60" rx="10" ry="4" transform="rotate(35, 65, 60)" />
        </svg>

        <svg
          className="absolute bottom-[20%] left-[15%] w-16 sm:w-20 lg:w-28 h-16 sm:h-20 lg:h-28 opacity-[0.04] float-medium"
          viewBox="0 0 100 100"
          fill="none"
          stroke="var(--parchment)"
          strokeWidth="0.5"
        >
          <path d="M50 80 C50 60 30 50 20 30" />
          <path d="M50 80 C50 60 70 50 80 30" />
          <path d="M50 80 C50 50 50 30 50 10" />
          <circle cx="20" cy="28" r="5" />
          <circle cx="80" cy="28" r="5" />
          <circle cx="50" cy="8" r="5" />
        </svg>

        {/* Crescent moon */}
        <svg
          className="absolute top-[12%] right-[20%] w-16 h-16 opacity-[0.08]"
          viewBox="0 0 50 50"
          fill="none"
          stroke="var(--parchment)"
          strokeWidth="0.5"
        >
          <path d="M30 5 A18 18 0 0 1 30 45 A12 18 0 0 0 30 5" fill="rgba(245,240,232,0.03)" />
        </svg>
      </div>

      {/* Candlelight glow — pure CSS */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] rounded-full candle-glow pointer-events-none" />

      {/* Content — left-aligned for editorial feel, gives video room to breathe */}
      <div className="relative z-10 text-left px-5 sm:px-10 lg:px-20 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-body text-[var(--parchment)]/60 text-xs sm:text-sm tracking-[0.2em] uppercase mb-6"
        >
          Small-Batch Herbal Tea Blends
        </motion.p>

        <h1 className="font-heading text-[var(--parchment)] text-fluid-hero font-semibold mb-4">
          {headlineWords.map((word, i) => (
            <motion.span
              key={word}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            custom={2}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="italic inline-block"
          >
            Intention
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-accent text-[var(--amber-elixir)] text-xl sm:text-2xl mb-6"
        >
          Every cup is a spell
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="font-body text-[var(--parchment)]/70 text-base sm:text-lg max-w-lg mb-10 leading-relaxed"
        >
          Five organic herbal blends crafted for daily ritual.
          From morning energy to evening calm.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-start"
        >
          <Link
            href="/shop"
            className="btn-glow px-10 py-4 bg-[var(--forest-veil)] text-[var(--parchment)] font-body text-sm font-bold tracking-[0.1em] uppercase hover:bg-[var(--amber-elixir)] transition-all duration-500"
          >
            Shop the Collection
          </Link>
          <Link
            href="/about"
            className="px-10 py-4 border border-[var(--warm-stone)]/30 text-[var(--parchment)] font-body text-sm font-bold tracking-[0.1em] uppercase hover:border-[var(--amber-elixir)] hover:text-[var(--amber-elixir)] hover:scale-[1.02] transition-all duration-300"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--parchment)]/30">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-4 h-4"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 6 L8 10 L12 6" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
