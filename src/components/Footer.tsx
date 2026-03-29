"use client";

import Link from "next/link";
import MoonPhases from "./MoonPhases";
import WaxSeal from "./WaxSeal";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-dark-wood text-[var(--parchment)] relative overflow-hidden" role="contentinfo">
      {/* Subtle star dots in background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[var(--parchment)]"
            style={{
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.15 + 0.03,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="mb-6 flex items-start gap-4">
              <div>
                <span className="font-heading text-2xl block leading-tight font-semibold tracking-tight">
                  Tess&apos;s
                </span>
                <span className="font-body text-xs tracking-[0.14em] uppercase text-[var(--warm-stone)] font-medium">
                  Apothecary
                </span>
              </div>
              <WaxSeal size={40} className="opacity-40 mt-1" />
            </div>
            <p className="font-body text-sm text-[var(--warm-stone)] leading-relaxed max-w-xs mb-8">
              Handcrafted herbal blends for intention, ritual, and the quiet
              magic of taking care of yourself.
            </p>
            <p className="font-accent text-[var(--amber-elixir)] text-base">
              Every cup is a spell.
            </p>
          </div>

          {/* Shop */}
          <div className="md:col-span-2">
            <h3 className="font-body text-[11px] uppercase tracking-[0.12em] text-[var(--amber-elixir)] mb-5 font-bold">
              Shop
            </h3>
            <ul className="space-y-3">
              {[
                "Eventide Elixir",
                "Sun Tonic",
                "Shadow Work",
                "Inner Sight",
                "Heart Opener",
                "The Ritual Kit",
              ].map((name) => (
                <li key={name}>
                  <Link
                    href={`/shop/${name.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "")}`}
                    className="font-body text-sm text-[var(--warm-stone)] hover:text-[var(--parchment)] transition-colors duration-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="md:col-span-2">
            <h3 className="font-body text-[11px] uppercase tracking-[0.12em] text-[var(--amber-elixir)] mb-5 font-bold">
              Help
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact Us" },
                { href: "/shipping", label: "Shipping Policy" },
                { href: "/returns", label: "Return Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[var(--warm-stone)] hover:text-[var(--parchment)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div className="md:col-span-4">
            <h3 className="font-body text-[11px] uppercase tracking-[0.12em] text-[var(--amber-elixir)] mb-5 font-bold">
              Connect
            </h3>
            <div className="flex gap-6 mb-8">
              {["Instagram", "TikTok", "Pinterest"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="social-hover font-body text-sm text-[var(--warm-stone)] hover:text-[var(--amber-elixir)]"
                >
                  {platform}
                </a>
              ))}
            </div>

            <h3 className="font-body text-[11px] uppercase tracking-[0.12em] text-[var(--amber-elixir)] mb-5 font-bold">
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/terms", label: "Terms of Service" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[var(--warm-stone)] hover:text-[var(--parchment)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Moon Phases */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-12 mb-8"
        >
          <MoonPhases color="var(--warm-stone)" className="opacity-30" />
        </motion.div>

        {/* Divider */}
        <div className="pt-8 border-t border-[var(--warm-stone)]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[var(--warm-stone)]/60">
            &copy; {new Date().getFullYear()} Tess&apos;s Apothecary LLC. All rights reserved.
          </p>
          <p className="font-accent text-sm text-[var(--warm-stone)]/40">
            Brewed with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
