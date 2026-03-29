import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--apothecary-black)] text-[var(--parchment)]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="mb-6">
              <span className="font-heading text-2xl block leading-tight font-semibold tracking-tight">
                Tess&apos;s
              </span>
              <span className="font-body text-xs tracking-[0.14em] uppercase text-[var(--warm-stone)] font-medium">
                Apothecary
              </span>
            </div>
            <p className="font-body text-sm text-[var(--warm-stone)] leading-relaxed max-w-xs mb-8">
              Handcrafted herbal blends for intention, ritual, and the quiet
              magic of taking care of yourself.
            </p>
            <p className="font-accent text-[var(--amber-elixir)] text-base">
              Every cup is a spell.
            </p>
          </div>

          {/* Shop */}
          <div className="md:col-span-2">
            <h3 className="font-body text-[11px] uppercase tracking-[0.12em] text-[var(--amber-elixir)] mb-5 font-bold">
              Shop
            </h3>
            <ul className="space-y-3">
              {[
                "Eventide Elixir",
                "Sun Tonic",
                "Shadow Work",
                "Inner Sight",
                "Heart Opener",
                "The Ritual Kit",
              ].map((name) => (
                <li key={name}>
                  <Link
                    href={`/shop/${name.toLowerCase().replace(/\s+/g, "-").replace(/'/g, "")}`}
                    className="font-body text-sm text-[var(--warm-stone)] hover:text-[var(--parchment)] transition-colors duration-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="md:col-span-2">
            <h3 className="font-body text-[11px] uppercase tracking-[0.12em] text-[var(--amber-elixir)] mb-5 font-bold">
              Help
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact Us" },
                { href: "/shipping", label: "Shipping Policy" },
                { href: "/returns", label: "Return Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[var(--warm-stone)] hover:text-[var(--parchment)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div className="md:col-span-4">
            <h3 className="font-body text-[11px] uppercase tracking-[0.12em] text-[var(--amber-elixir)] mb-5 font-bold">
              Connect
            </h3>
            <div className="flex gap-6 mb-8">
              {["Instagram", "TikTok", "Pinterest"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="font-body text-sm text-[var(--warm-stone)] hover:text-[var(--parchment)] transition-colors duration-300"
                >
                  {platform}
                </a>
              ))}
            </div>

            <h3 className="font-body text-[11px] uppercase tracking-[0.12em] text-[var(--amber-elixir)] mb-5 font-bold">
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/terms", label: "Terms of Service" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[var(--warm-stone)] hover:text-[var(--parchment)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 pt-8 border-t border-[var(--warm-stone)]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[var(--warm-stone)]/60">
            &copy; {new Date().getFullYear()} Tess&apos;s Apothecary LLC. All rights reserved.
          </p>
          <p className="font-accent text-sm text-[var(--warm-stone)]/40">
            Brewed with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
