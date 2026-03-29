"use client";

import { useCart } from "@/lib/cart-context";
import Link from "next/link";

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, setIsOpen } =
    useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      {/* Drawer */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-[#F5F0E8] shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#A89F91]/30">
          <h2
            className="text-xl text-[#1A1A1A]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Your Apothecary Order
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#1A1A1A] hover:text-[#2D4A3E]"
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p
                className="text-[#A89F91] text-lg mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                Your apothecary is empty
              </p>
              <p
                className="text-[#A89F91] text-sm"
                style={{ fontFamily: "'Karla', sans-serif" }}
              >
                The herbs are waiting for you.
              </p>
              <Link
                href="/shop"
                onClick={() => setIsOpen(false)}
                className="inline-block mt-6 px-6 py-3 bg-[#2D4A3E] text-[#F5F0E8] text-sm tracking-[0.08em] uppercase hover:bg-[#1A1A1A] transition-colors"
                style={{ fontFamily: "'Karla', sans-serif", fontWeight: 700 }}
              >
                Browse Blends
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.slug}
                  className="flex items-start gap-4 py-4 border-b border-[#A89F91]/20"
                >
                  {/* Placeholder swatch */}
                  <div className="w-16 h-16 rounded bg-[#2D4A3E]/10 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-[#1A1A1A] text-base truncate"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 600,
                      }}
                    >
                      {item.name}
                    </h3>
                    <p
                      className="text-[#1A1A1A] text-sm mt-1"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontWeight: 700,
                      }}
                    >
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.slug, item.quantity - 1)
                        }
                        className="w-7 h-7 flex items-center justify-center border border-[#A89F91]/40 text-[#1A1A1A] hover:bg-[#EDE7DB] text-sm"
                      >
                        &minus;
                      </button>
                      <span
                        className="text-sm w-6 text-center"
                        style={{ fontFamily: "'Karla', sans-serif" }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.slug, item.quantity + 1)
                        }
                        className="w-7 h-7 flex items-center justify-center border border-[#A89F91]/40 text-[#1A1A1A] hover:bg-[#EDE7DB] text-sm"
                      >
                        +
                      </button>
                      <button
                        onClick={() => removeItem(item.slug)}
                        className="ml-auto text-[#A89F91] hover:text-[#B5706E] text-xs underline"
                        style={{ fontFamily: "'Karla', sans-serif" }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#A89F91]/30 px-6 py-5 space-y-4">
            <div className="flex justify-between items-center">
              <span
                className="text-sm uppercase tracking-[0.08em] text-[#A89F91]"
                style={{ fontFamily: "'Karla', sans-serif", fontWeight: 500 }}
              >
                Subtotal
              </span>
              <span
                className="text-xl text-[#1A1A1A]"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                }}
              >
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            {totalPrice < 45 && (
              <p
                className="text-xs text-[#A89F91]"
                style={{ fontFamily: "'Karla', sans-serif" }}
              >
                Add ${(45 - totalPrice).toFixed(2)} more for free shipping
              </p>
            )}
            <button
              className="w-full py-3 bg-[#2D4A3E] text-[#F5F0E8] text-sm tracking-[0.08em] uppercase hover:bg-[#1A1A1A] transition-colors"
              style={{ fontFamily: "'Karla', sans-serif", fontWeight: 700 }}
            >
              Begin Your Ritual
            </button>
            <p
              className="text-[10px] text-[#A89F91] text-center"
              style={{ fontFamily: "'Karla', sans-serif" }}
            >
              Shipping calculated at checkout
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
