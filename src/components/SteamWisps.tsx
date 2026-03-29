"use client";

export default function SteamWisps({ className = "" }: { className?: string }) {
  return (
    <div className={`steam-container pointer-events-none ${className}`} aria-hidden="true">
      <div className="steam-wisp steam-wisp-1" />
      <div className="steam-wisp steam-wisp-2" />
      <div className="steam-wisp steam-wisp-3" />
    </div>
  );
}
