"use client";

const phases = [
  // New moon
  <svg key="new" viewBox="0 0 20 20" className="w-4 h-4">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="0.6" fill="none" />
  </svg>,
  // Waxing crescent
  <svg key="waxc" viewBox="0 0 20 20" className="w-4 h-4">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="0.6" fill="none" />
    <path d="M10 2 A8 8 0 0 1 10 18 A4 8 0 0 0 10 2" fill="currentColor" opacity="0.3" />
  </svg>,
  // First quarter
  <svg key="fq" viewBox="0 0 20 20" className="w-4 h-4">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="0.6" fill="none" />
    <path d="M10 2 A8 8 0 0 1 10 18 L10 2" fill="currentColor" opacity="0.3" />
  </svg>,
  // Waxing gibbous
  <svg key="waxg" viewBox="0 0 20 20" className="w-4 h-4">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="0.6" fill="none" />
    <path d="M10 2 A8 8 0 0 1 10 18 A4 8 0 0 1 10 2" fill="currentColor" opacity="0.3" />
  </svg>,
  // Full moon
  <svg key="full" viewBox="0 0 20 20" className="w-4 h-4">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="0.6" fill="currentColor" opacity="0.3" />
  </svg>,
  // Waning gibbous
  <svg key="wang" viewBox="0 0 20 20" className="w-4 h-4">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="0.6" fill="none" />
    <path d="M10 2 A8 8 0 0 0 10 18 A4 8 0 0 0 10 2" fill="currentColor" opacity="0.3" />
  </svg>,
  // Last quarter
  <svg key="lq" viewBox="0 0 20 20" className="w-4 h-4">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="0.6" fill="none" />
    <path d="M10 2 A8 8 0 0 0 10 18 L10 2" fill="currentColor" opacity="0.3" />
  </svg>,
  // Waning crescent
  <svg key="wanc" viewBox="0 0 20 20" className="w-4 h-4">
    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="0.6" fill="none" />
    <path d="M10 2 A8 8 0 0 0 10 18 A4 8 0 0 1 10 2" fill="currentColor" opacity="0.3" />
  </svg>,
];

export default function MoonPhases({
  color = "var(--warm-stone)",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      style={{ color }}
      aria-hidden="true"
    >
      {phases}
    </div>
  );
}
