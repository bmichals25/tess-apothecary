"use client";

import { motion } from "framer-motion";

type DividerVariant = "herbs" | "moon" | "stars" | "leaves" | "simple";

const dividerPaths: Record<DividerVariant, React.ReactNode> = {
  herbs: (
    <svg viewBox="0 0 800 60" className="w-full h-auto max-w-2xl" preserveAspectRatio="xMidYMid meet">
      <g stroke="currentColor" fill="none" strokeWidth="0.8" strokeLinecap="round">
        {/* Center herb sprig */}
        <line x1="400" y1="55" x2="400" y2="18" />
        <path d="M400 40 Q388 34 380 38" />
        <path d="M400 40 Q412 34 420 38" />
        <path d="M400 32 Q386 26 378 30" />
        <path d="M400 32 Q414 26 422 30" />
        <path d="M400 24 Q392 20 388 22" />
        <path d="M400 24 Q408 20 412 22" />
        {/* Seed pod at top */}
        <ellipse cx="400" cy="15" rx="3" ry="5" />

        {/* Left branch */}
        <line x1="340" y1="44" x2="340" y2="22" />
        <path d="M340 38 Q332 34 328 36" />
        <path d="M340 38 Q348 34 352 36" />
        <path d="M340 30 Q334 27 331 29" />
        <path d="M340 30 Q346 27 349 29" />
        <circle cx="340" cy="19" r="3" />

        {/* Right branch */}
        <line x1="460" y1="44" x2="460" y2="22" />
        <path d="M460 38 Q452 34 448 36" />
        <path d="M460 38 Q468 34 472 36" />
        <path d="M460 30 Q454 27 451 29" />
        <path d="M460 30 Q466 27 469 29" />
        <circle cx="460" cy="19" r="3" />

        {/* Connecting lines */}
        <line x1="200" y1="35" x2="325" y2="35" opacity="0.3" />
        <line x1="475" y1="35" x2="600" y2="35" opacity="0.3" />

        {/* Far left leaf */}
        <path d="M220 35 Q215 28 220 22 Q225 28 220 35" />
        {/* Far right leaf */}
        <path d="M580 35 Q575 28 580 22 Q585 28 580 35" />

        {/* Dots */}
        <circle cx="260" cy="35" r="1.5" fill="currentColor" opacity="0.3" />
        <circle cx="300" cy="35" r="1" fill="currentColor" opacity="0.2" />
        <circle cx="500" cy="35" r="1" fill="currentColor" opacity="0.2" />
        <circle cx="540" cy="35" r="1.5" fill="currentColor" opacity="0.3" />
      </g>
    </svg>
  ),
  moon: (
    <svg viewBox="0 0 800 50" className="w-full h-auto max-w-xl" preserveAspectRatio="xMidYMid meet">
      <g stroke="currentColor" fill="none" strokeWidth="0.8" strokeLinecap="round">
        {/* Center crescent moon */}
        <path d="M400 10 A15 15 0 0 1 400 40 A10 10 0 0 0 400 10" />

        {/* Stars flanking */}
        <g transform="translate(355, 25)" opacity="0.6">
          <line x1="0" y1="-5" x2="0" y2="5" />
          <line x1="-5" y1="0" x2="5" y2="0" />
          <line x1="-3" y1="-3" x2="3" y2="3" />
          <line x1="3" y1="-3" x2="-3" y2="3" />
        </g>
        <g transform="translate(445, 25)" opacity="0.6">
          <line x1="0" y1="-5" x2="0" y2="5" />
          <line x1="-5" y1="0" x2="5" y2="0" />
          <line x1="-3" y1="-3" x2="3" y2="3" />
          <line x1="3" y1="-3" x2="-3" y2="3" />
        </g>

        {/* Tiny stars */}
        <circle cx="330" cy="20" r="1" fill="currentColor" opacity="0.4" />
        <circle cx="470" cy="30" r="1" fill="currentColor" opacity="0.4" />
        <circle cx="310" cy="30" r="0.8" fill="currentColor" opacity="0.3" />
        <circle cx="490" cy="20" r="0.8" fill="currentColor" opacity="0.3" />

        {/* Extending lines */}
        <line x1="180" y1="25" x2="300" y2="25" opacity="0.15" />
        <line x1="500" y1="25" x2="620" y2="25" opacity="0.15" />
      </g>
    </svg>
  ),
  stars: (
    <svg viewBox="0 0 800 40" className="w-full h-auto max-w-xl" preserveAspectRatio="xMidYMid meet">
      <g stroke="currentColor" fill="none" strokeWidth="0.7" strokeLinecap="round">
        {/* Center star cluster */}
        <g transform="translate(400, 20)">
          <line x1="0" y1="-8" x2="0" y2="8" />
          <line x1="-8" y1="0" x2="8" y2="0" />
          <line x1="-5" y1="-5" x2="5" y2="5" />
          <line x1="5" y1="-5" x2="-5" y2="5" />
        </g>

        {/* Scattered constellation dots connected with faint lines */}
        <circle cx="350" cy="15" r="1.5" fill="currentColor" opacity="0.4" />
        <circle cx="370" cy="28" r="1" fill="currentColor" opacity="0.3" />
        <circle cx="430" cy="12" r="1" fill="currentColor" opacity="0.3" />
        <circle cx="450" cy="26" r="1.5" fill="currentColor" opacity="0.4" />

        <line x1="350" y1="15" x2="370" y2="28" opacity="0.15" />
        <line x1="370" y1="28" x2="400" y2="20" opacity="0.15" />
        <line x1="400" y1="20" x2="430" y2="12" opacity="0.15" />
        <line x1="430" y1="12" x2="450" y2="26" opacity="0.15" />

        {/* More distant stars */}
        <circle cx="280" cy="20" r="0.8" fill="currentColor" opacity="0.2" />
        <circle cx="310" cy="12" r="1" fill="currentColor" opacity="0.25" />
        <circle cx="490" cy="18" r="1" fill="currentColor" opacity="0.25" />
        <circle cx="520" cy="28" r="0.8" fill="currentColor" opacity="0.2" />

        {/* Extending lines */}
        <line x1="180" y1="20" x2="270" y2="20" opacity="0.1" />
        <line x1="530" y1="20" x2="620" y2="20" opacity="0.1" />
      </g>
    </svg>
  ),
  leaves: (
    <svg viewBox="0 0 800 50" className="w-full h-auto max-w-2xl" preserveAspectRatio="xMidYMid meet">
      <g stroke="currentColor" fill="none" strokeWidth="0.8" strokeLinecap="round">
        {/* Center leaf arrangement */}
        <path d="M400 40 Q390 25 400 12 Q410 25 400 40" />
        <line x1="400" y1="40" x2="400" y2="12" opacity="0.4" />

        {/* Left leaves */}
        <path d="M370 38 Q362 28 370 18 Q378 28 370 38" transform="rotate(-20, 370, 28)" />
        <path d="M345 36 Q340 30 345 24 Q350 30 345 36" transform="rotate(-30, 345, 30)" />

        {/* Right leaves */}
        <path d="M430 38 Q422 28 430 18 Q438 28 430 38" transform="rotate(20, 430, 28)" />
        <path d="M455 36 Q450 30 455 24 Q460 30 455 36" transform="rotate(30, 455, 30)" />

        {/* Connecting vine */}
        <line x1="200" y1="30" x2="330" y2="30" opacity="0.15" />
        <line x1="470" y1="30" x2="600" y2="30" opacity="0.15" />

        {/* Small buds */}
        <circle cx="240" cy="30" r="2" opacity="0.3" />
        <circle cx="560" cy="30" r="2" opacity="0.3" />
      </g>
    </svg>
  ),
  simple: (
    <svg viewBox="0 0 800 20" className="w-full h-auto max-w-lg" preserveAspectRatio="xMidYMid meet">
      <g stroke="currentColor" fill="none" strokeWidth="0.6" strokeLinecap="round">
        <line x1="250" y1="10" x2="380" y2="10" opacity="0.2" />
        <circle cx="400" cy="10" r="3" opacity="0.3" />
        <line x1="420" y1="10" x2="550" y2="10" opacity="0.2" />
      </g>
    </svg>
  ),
};

export default function BotanicalDivider({
  variant = "herbs",
  color = "var(--warm-stone)",
  className = "",
}: {
  variant?: DividerVariant;
  color?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
      className={`flex justify-center py-4 ${className}`}
      style={{ color }}
      aria-hidden="true"
    >
      {dividerPaths[variant]}
    </motion.div>
  );
}
