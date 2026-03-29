"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import StarField from "./StarField";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6 + i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.8, 0.25, 1] as [number, number, number, number],
    },
  }),
};

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeDir: number;
      wobble: number;
      wobbleSpeed: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Fewer, larger, more organic particles — like embers
    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.15,
        speedY: -Math.random() * 0.3 - 0.05,
        opacity: Math.random() * 0.3,
        fadeDir: Math.random() > 0.5 ? 1 : -1,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.008 + 0.003,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.wobble += p.wobbleSpeed;
        p.x += p.speedX + Math.sin(p.wobble) * 0.25;
        p.y += p.speedY;
        p.opacity += p.fadeDir * 0.0015;

        if (p.opacity >= 0.35) p.fadeDir = -1;
        if (p.opacity <= 0) {
          p.fadeDir = 1;
          p.opacity = 0;
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }
        if (p.y < -20) {
          p.y = canvas.height + 20;
          p.x = Math.random() * canvas.width;
        }

        // Draw with a soft glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `rgba(196, 135, 59, ${p.opacity})`);
        gradient.addColorStop(0.5, `rgba(212, 168, 67, ${p.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(196, 135, 59, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Inner bright core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 240, 232, ${p.opacity * 0.6})`;
        ctx.fill();
      }

      animFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const headlineWords = ["Brewed", "with"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--apothecary-black)]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Star field */}
      <StarField />

      {/* Fog / mist layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 fog-layer-1" />
        <div className="absolute inset-0 fog-layer-2" />
        <div className="absolute inset-0 fog-layer-3" />
      </div>

      {/* Floating botanical SVGs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left botanical */}
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

        {/* Right botanical */}
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

        {/* Bottom botanical */}
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

        {/* Crescent moon - top right */}
        <motion.svg
          className="absolute top-[12%] right-[20%] w-16 h-16 opacity-[0.08]"
          viewBox="0 0 50 50"
          fill="none"
          stroke="var(--parchment)"
          strokeWidth="0.5"
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 0.08, rotate: 0 }}
          transition={{ delay: 1.5, duration: 2 }}
        >
          <path d="M30 5 A18 18 0 0 1 30 45 A12 18 0 0 0 30 5" fill="rgba(245,240,232,0.03)" />
        </motion.svg>
      </div>

      {/* Floating particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Candlelight flicker */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] rounded-full candle-glow pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        {/* Product category -- instantly tells visitor what we sell */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-[var(--parchment)]/60 text-xs sm:text-sm tracking-[0.2em] uppercase mb-6"
        >
          Small-Batch Herbal Tea Blends
        </motion.p>

        {/* Split-word animated headline */}
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
          transition={{ delay: 1.0, duration: 0.8 }}
          className="font-accent text-[var(--amber-elixir)] text-xl sm:text-2xl mb-6"
        >
          Every cup is a spell
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="font-body text-[var(--warm-stone)] text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Five organic herbal blends crafted for daily ritual.
          From morning energy to evening calm.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/shop"
            className="btn-glow px-10 py-4 bg-[var(--forest-veil)] text-[var(--parchment)] font-body text-sm font-bold tracking-[0.1em] uppercase hover:bg-[var(--amber-elixir)] transition-all duration-500"
          >
            Shop the Collection
          </Link>
          <Link
            href="/about"
            className="px-10 py-4 border border-[var(--warm-stone)]/30 text-[var(--parchment)] font-body text-sm font-bold tracking-[0.1em] uppercase hover:border-[var(--amber-elixir)] hover:text-[var(--amber-elixir)] transition-all duration-400"
          >
            Our Story
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-body text-[var(--warm-stone)]/50 text-[11px] tracking-[0.15em] uppercase">
          Scroll to discover
        </span>
        <div className="scroll-indicator">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(140, 126, 110, 0.4)"
            strokeWidth="1.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
