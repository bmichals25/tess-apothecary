"use client";

export default function WaxSeal({
  size = 64,
  color = "var(--amber-elixir)",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {/* Outer wax blob - irregular circle */}
      <path
        d="M50 5
           Q65 3 75 12
           Q85 18 90 30
           Q95 42 92 55
           Q90 68 82 78
           Q72 88 58 93
           Q45 97 32 92
           Q18 86 10 72
           Q4 60 6 45
           Q8 30 18 18
           Q28 8 42 5 Z"
        fill={color}
        opacity="0.9"
      />
      {/* Inner ring */}
      <circle
        cx="50"
        cy="50"
        r="28"
        fill="none"
        stroke="rgba(245, 240, 232, 0.2)"
        strokeWidth="0.8"
      />
      {/* TA monogram */}
      <text
        x="50"
        y="46"
        textAnchor="middle"
        dominantBaseline="central"
        fill="rgba(245, 240, 232, 0.7)"
        fontSize="18"
        fontFamily="Georgia, serif"
        fontWeight="600"
        letterSpacing="1"
      >
        TA
      </text>
      {/* Small decorative leaf below */}
      <path
        d="M50 60 Q46 56 50 52 Q54 56 50 60"
        fill="none"
        stroke="rgba(245, 240, 232, 0.3)"
        strokeWidth="0.6"
      />
    </svg>
  );
}
