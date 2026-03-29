"use client";

import { useEffect, useRef } from "react";

export default function StarField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animFrame: number;

    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const count = Math.floor((canvas.width * canvas.height) / 8000);
    for (let i = 0; i < Math.min(count, 80); i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.4 + 0.1,
        twinkleSpeed: Math.random() * 0.008 + 0.003,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 1;

      for (const star of stars) {
        const twinkle = prefersReduced
          ? star.opacity
          : star.opacity * (0.5 + 0.5 * Math.sin(time * star.twinkleSpeed + star.twinkleOffset));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 240, 232, ${twinkle})`;
        ctx.fill();

        // Subtle cross on brighter stars
        if (star.size > 1) {
          ctx.strokeStyle = `rgba(245, 240, 232, ${twinkle * 0.3})`;
          ctx.lineWidth = 0.3;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 2, star.y);
          ctx.lineTo(star.x + star.size * 2, star.y);
          ctx.moveTo(star.x, star.y - star.size * 2);
          ctx.lineTo(star.x, star.y + star.size * 2);
          ctx.stroke();
        }
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
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
