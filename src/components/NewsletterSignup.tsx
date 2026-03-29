"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WaxSeal from "./WaxSeal";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative bg-dark-wood py-24 sm:py-32 px-5 overflow-hidden">

      {/* Atmospheric background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--forest-veil)]/20 via-transparent to-transparent" />
        <div className="absolute inset-0 fog-layer-1 opacity-30" />
        <div className="absolute inset-0 fog-layer-2 opacity-20" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center reveal-scale">
        <div className="flex justify-center mb-6">
          <WaxSeal size={48} className="opacity-50" />
        </div>
        <p className="font-accent text-[var(--amber-elixir)] text-xl sm:text-2xl mb-3">
          The kettle&apos;s on
        </p>

        <h2 className="font-heading text-[var(--parchment)] text-fluid-section font-semibold mb-5">
          Join the Coven
        </h2>

        <p className="font-body text-[var(--warm-stone)] text-base sm:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
          Sign up for seasonal rituals, behind-the-blend stories, and early
          access to new releases. Plus, 15% off your first ritual.
        </p>

        <div>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-6"
              >
                <p className="font-heading text-[var(--amber-elixir)] text-xl italic">
                  Welcome to the coven.
                </p>
                <p className="font-body text-[var(--parchment)] text-sm mt-2">
                  Your 15% off code: <span className="font-bold tracking-wider text-[var(--amber-elixir)]">FIRSTBREW</span>
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                name="newsletter"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input type="hidden" name="form-name" value="newsletter" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Your email address"
                  aria-label="Email address for newsletter"
                  className="flex-1 px-5 py-4 bg-white/5 border border-[var(--warm-stone)]/25 text-[var(--parchment)] placeholder-[var(--warm-stone)]/50 font-body text-sm focus:outline-none focus:border-[var(--amber-elixir)] focus:bg-white/8 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="btn-glow px-8 py-4 bg-[var(--amber-elixir)] text-[var(--parchment)] font-body text-sm font-bold tracking-[0.1em] uppercase hover:bg-[var(--burnished-gold)] transition-all duration-400 whitespace-nowrap"
                >
                  Join the Coven
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <p className="font-body text-[var(--warm-stone)]/40 text-xs mt-6">
          No spam, just magic. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
