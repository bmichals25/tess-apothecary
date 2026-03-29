"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <div className="space-y-14">
      {categories.map((cat) => (
        <div key={cat.title}>
          <h2 className="font-heading text-[var(--apothecary-black)] text-2xl font-semibold mb-6 pb-4 border-b border-[var(--warm-stone)]/25">
            {cat.title}
          </h2>
          <div className="space-y-0">
            {cat.items.map((item, i) => {
              const key = `${cat.title}-${i}`;
              const isOpen = openItems.has(key);
              return (
                <div key={key} className="border-b border-[var(--warm-stone)]/15 transition-colors duration-200 hover:bg-[var(--linen)]/50">
                  <button
                    onClick={() => toggle(key)}
                    className="w-full flex items-start justify-between py-5 px-3 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-body text-[var(--apothecary-black)] text-[15px] pr-4 group-hover:text-[var(--forest-veil)] transition-colors font-medium leading-relaxed">
                      {item.question}
                    </span>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 flex-shrink-0 text-[var(--warm-stone)] mt-0.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-10">
                          <p className="font-body text-[var(--apothecary-black)]/75 text-sm leading-[1.8]">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
