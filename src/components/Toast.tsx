"use client";

import { useCart } from "@/lib/cart-context";

export default function Toast() {
  const { toast, dismissToast } = useCart();

  if (!toast) return null;

  return (
    <div
      className="fixed top-24 right-4 z-[110] max-w-sm w-full pointer-events-auto"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className={`bg-[#2D4A3E] text-[#F5F0E8] px-6 py-4 flex items-center gap-4 ${
          toast.exiting ? "toast-exit" : "toast-enter"
        }`}
        style={{ boxShadow: "var(--shadow-4)" }}
      >
        {/* Checkmark icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 flex-shrink-0 text-[#C4873B]"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-bold truncate"
            style={{ fontFamily: "var(--font-karla), sans-serif" }}
          >
            {toast.message}
          </p>
          <p
            className="text-xs text-[#A89F91] mt-0.5"
            style={{ fontFamily: "var(--font-karla), sans-serif" }}
          >
            Added to your apothecary order
          </p>
        </div>
        <button
          onClick={dismissToast}
          className="flex-shrink-0 text-[#A89F91] hover:text-[#F5F0E8] transition-colors"
          aria-label="Dismiss notification"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
