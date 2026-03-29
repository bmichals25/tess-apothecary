"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import Cart from "./Cart";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key (accessibility: keyboard nav)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      // Focus trap: mark main content as inert
      const mainContent = document.getElementById("main-content");
      const footer = document.querySelector("footer");
      if (mainContent) mainContent.setAttribute("inert", "");
      if (footer) footer.setAttribute("inert", "");
    } else {
      document.body.style.overflow = "";
      const mainContent = document.getElementById("main-content");
      const footer = document.querySelector("footer");
      if (mainContent) mainContent.removeAttribute("inert");
      if (footer) footer.removeAttribute("inert");
    }
    return () => {
      document.body.style.overflow = "";
      const mainContent = document.getElementById("main-content");
      const footer = document.querySelector("footer");
      if (mainContent) mainContent.removeAttribute("inert");
      if (footer) footer.removeAttribute("inert");
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "header-solid" : "header-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-18 sm:h-22">
            {/* Logo */}
            <Link href="/" className="relative z-10" aria-label="Tess's Apothecary - Home">
              <img
                src={scrolled ? "/images/logos/tess-apothecary-wordmark-dark-transparent.png" : "/images/logos/tess-apothecary-wordmark-transparent.png"}
                alt="Tess's Apothecary"
                className="w-auto transition-opacity duration-500"
                style={{ height: "clamp(3.5rem, 6vw + 2rem, 6rem)" }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link-draw font-body text-[13px] font-medium tracking-[0.06em] transition-colors duration-300 ${
                    scrolled
                      ? `text-[var(--apothecary-black)] hover:text-[var(--forest-veil)] nav-link-draw-dark`
                      : `text-[var(--parchment)]/80 hover:text-[var(--parchment)] nav-link-draw-light`
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Cart + Mobile Toggle */}
            <div className="flex items-center gap-5">
              <button
                onClick={() => setIsOpen(true)}
                className={`relative p-2 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors duration-500 ${
                  scrolled
                    ? "text-[var(--apothecary-black)] hover:text-[var(--forest-veil)]"
                    : "text-[var(--parchment)] hover:text-[var(--amber-elixir)]"
                }`}
                aria-label={`Open cart${totalItems > 0 ? `, ${totalItems} item${totalItems !== 1 ? "s" : ""}` : ""}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <AnimatePresence>
                  {totalItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-2 -right-2 bg-[var(--amber-elixir)] text-[var(--parchment)] text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold font-body"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden relative w-6 h-6 flex flex-col justify-center items-center transition-colors duration-500 ${
                  scrolled ? "text-[var(--apothecary-black)]" : "text-[var(--parchment)]"
                }`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <motion.span
                  animate={mobileOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                  className="absolute w-5 h-[1.5px] bg-current"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  className="absolute w-5 h-[1.5px] bg-current"
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  animate={mobileOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                  className="absolute w-5 h-[1.5px] bg-current"
                  transition={{ duration: 0.3 }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] mobile-overlay flex flex-col items-center justify-center"
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-5 text-[var(--parchment)] p-2"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <nav className="flex flex-col items-center gap-8" aria-label="Mobile navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-3xl text-[var(--parchment)] font-semibold tracking-tight hover:text-[var(--amber-elixir)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-10 text-center"
            >
              <p className="font-accent text-[var(--amber-elixir)] text-lg">
                Herbs, ritual &amp; quiet magic
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Cart />
    </>
  );
}
