"use client";

import { useCart } from "@/lib/cart-context";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, setIsOpen } =
    useCart();

  // Close cart on Escape key (accessibility)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, setIsOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="Shopping cart">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-[var(--apothecary-black)]/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 h-full w-full max-w-md bg-[var(--parchment)] shadow-2xl flex flex-col"
          >
            {/* Header — ledger style */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--warm-stone)]/20 bg-[var(--linen)]">
              <div>
                <h2 className="font-heading text-xl text-[var(--apothecary-black)] font-semibold">
                  Your Apothecary Order
                </h2>
                <p className="font-accent text-[var(--amber-elixir)] text-xs mt-0.5 opacity-70">The Ledger</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[var(--apothecary-black)] hover:text-[var(--forest-veil)] transition-colors p-1"
                aria-label="Close cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--forest-veil)]/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="var(--warm-stone)" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <p className="font-heading text-[var(--warm-stone)] text-lg italic mb-2">
                    Your apothecary is empty
                  </p>
                  <p className="font-body text-[var(--warm-stone)] text-sm mb-8">
                    The herbs are waiting for you.
                  </p>
                  <Link
                    href="/shop"
                    onClick={() => setIsOpen(false)}
                    className="inline-block px-8 py-3 bg-[var(--forest-veil)] text-[var(--parchment)] font-body text-sm font-bold tracking-[0.08em] uppercase hover:bg-[var(--apothecary-black)] transition-colors duration-300"
                  >
                    Browse Blends
                  </Link>
                </div>
              ) : (
                <ul className="space-y-0">
                  <AnimatePresence>
                    {items.map((item, i) => (
                      <motion.li
                        key={item.slug}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, height: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                        className="flex items-start gap-4 py-5 border-b border-[var(--warm-stone)]/15 ledger-item pl-3"
                      >
                        {/* Swatch */}
                        <div className="w-16 h-16 flex-shrink-0 bg-[var(--forest-veil)]/10 flex items-center justify-center">
                          <span className="font-heading text-[var(--forest-veil)] text-xs font-semibold tracking-wide uppercase">
                            {item.name.split(" ").map(w => w[0]).join("")}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading text-[var(--apothecary-black)] text-base font-semibold truncate">
                            {item.name}
                          </h3>
                          <p className="font-heading text-[var(--apothecary-black)] text-sm font-bold mt-1">
                            ${item.price.toFixed(2)}
                          </p>
                          <div className="flex items-center gap-2 mt-3">
                            <button
                              onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center border border-[var(--warm-stone)]/30 text-[var(--apothecary-black)] hover:bg-[var(--linen)] text-sm transition-colors"
                              aria-label="Decrease quantity"
                            >
                              &minus;
                            </button>
                            <span className="font-body text-sm w-6 text-center tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center border border-[var(--warm-stone)]/30 text-[var(--apothecary-black)] hover:bg-[var(--linen)] text-sm transition-colors"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                            <button
                              onClick={() => removeItem(item.slug)}
                              className="ml-auto font-body text-[var(--warm-stone)] hover:text-[var(--ritual-rose)] text-xs transition-colors"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[var(--warm-stone)]/20 px-6 py-5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm uppercase tracking-[0.08em] text-[var(--warm-stone)] font-medium">
                    Subtotal
                  </span>
                  <span className="font-heading text-xl text-[var(--apothecary-black)] font-bold">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                {totalPrice < 45 && (
                  <p className="font-body text-xs text-[var(--warm-stone)]">
                    Add ${(45 - totalPrice).toFixed(2)} more for free shipping
                  </p>
                )}
                <button className="w-full py-4 bg-[var(--forest-veil)] text-[var(--parchment)] font-body text-sm font-bold tracking-[0.1em] uppercase hover:bg-[var(--apothecary-black)] transition-colors duration-300">
                  Begin Your Ritual
                </button>
                <p className="font-body text-[10px] text-[var(--warm-stone)] text-center">
                  Shipping calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
