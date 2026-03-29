"use client";

import { useState } from "react";
import type { FAQCategory } from "@/lib/faq-data";

export default function FAQAccordion({
  categories,
}: {
  categories: FAQCategory[];
}) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <div className="space-y-12">
      {categories.map((cat) => (
        <div key={cat.title}>
          <h2
            className="text-[#1A1A1A] text-2xl mb-6 pb-3 border-b border-[#A89F91]/30"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
            }}
          >
            {cat.title}
          </h2>
          <div className="space-y-0">
            {cat.items.map((item, i) => {
              const key = `${cat.title}-${i}`;
              const isOpen = openItems.has(key);
              return (
                <div
                  key={key}
                  className="border-b border-[#A89F91]/20"
                >
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-start justify-between py-5 text-left group"
                  >
                    <span
                      className="text-[#1A1A1A] text-base pr-4 group-hover:text-[#2D4A3E] transition-colors"
                      style={{
                        fontFamily: "'Karla', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {item.question}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-5 h-5 flex-shrink-0 text-[#A89F91] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="pb-5 pr-8">
                      <p
                        className="text-[#1A1A1A]/80 text-sm leading-relaxed"
                        style={{
                          fontFamily: "'Karla', sans-serif",
                          lineHeight: 1.65,
                        }}
                      >
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
