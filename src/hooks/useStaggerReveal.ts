"use client";

import { useEffect, useRef, useCallback } from "react";

export function useStaggerReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const hasRevealed = useRef(false);

  const revealChildren = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const cards = el.querySelectorAll(".reveal-card");
    cards.forEach((card) => card.classList.add("is-visible"));
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already revealed (e.g. filter change re-render), reveal immediately
    if (hasRevealed.current) {
      revealChildren();
      return;
    }

    // If already in viewport, reveal immediately
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      hasRevealed.current = true;
      revealChildren();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasRevealed.current = true;
          revealChildren();
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  });

  return ref;
}
