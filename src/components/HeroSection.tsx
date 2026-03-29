"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeDir: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: -Math.random() * 0.5 - 0.1,
        opacity: Math.random() * 0.4,
        fadeDir: Math.random() > 0.5 ? 1 : -1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.fadeDir * 0.003;

        if (p.opacity >= 0.5) p.fadeDir = -1;
        if (p.opacity <= 0) {
          p.fadeDir = 1;
          p.opacity = 0;
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 135, 59, ${p.opacity})`;
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Fog / mist layers */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 fog-layer-1" />
        <div className="absolute inset-0 fog-layer-2" />
      </div>

      {/* Floating particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Candlelight flicker */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full candle-glow pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p
          className="text-[#C4873B] text-lg sm:text-xl mb-4 hero-fade-in"
          style={{ fontFamily: "'Caveat', cursive", animationDelay: "0.2s" }}
        >
          Welcome to the Apothecary
        </p>
        <h1
          className="text-[#F5F0E8] text-4xl sm:text-5xl md:text-7xl leading-[1.1] mb-6 hero-fade-in"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            animationDelay: "0.5s",
          }}
        >
          Brewed with
          <br />
          Intention
        </h1>
        <p
          className="text-[#A89F91] text-base sm:text-lg max-w-xl mx-auto mb-8 hero-fade-in"
          style={{
            fontFamily: "'Karla', sans-serif",
            lineHeight: 1.65,
            animationDelay: "0.8s",
          }}
        >
          Small-batch herbal tea blends crafted for daily ritual and intentional
          wellness. Where herbalism meets modern mysticism.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center hero-fade-in"
          style={{ animationDelay: "1.1s" }}
        >
          <Link
            href="/shop"
            className="px-8 py-4 bg-[#2D4A3E] text-[#F5F0E8] text-sm tracking-[0.08em] uppercase hover:bg-[#C4873B] transition-colors"
            style={{ fontFamily: "'Karla', sans-serif", fontWeight: 700 }}
          >
            Shop the Collection
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border border-[#A89F91]/40 text-[#F5F0E8] text-sm tracking-[0.08em] uppercase hover:border-[#C4873B] hover:text-[#C4873B] transition-colors"
            style={{ fontFamily: "'Karla', sans-serif", fontWeight: 700 }}
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hero-fade-in" style={{ animationDelay: "1.5s" }}>
        <span
          className="text-[#A89F91]/60 text-xs tracking-[0.1em] uppercase"
          style={{ fontFamily: "'Karla', sans-serif" }}
        >
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#A89F91]/60 to-transparent" />
      </div>
    </section>
  );
}
