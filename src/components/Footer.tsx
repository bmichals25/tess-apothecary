import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <span
                className="text-2xl block leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                Tess&apos;s
              </span>
              <span
                className="text-xs tracking-[0.12em] uppercase text-[#A89F91]"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  fontWeight: 500,
                }}
              >
                Apothecary
              </span>
            </div>
            <p
              className="text-sm text-[#A89F91] leading-relaxed max-w-xs"
              style={{ fontFamily: "'Karla', sans-serif" }}
            >
              Handcrafted herbal blends for intention, ritual, and the quiet
              magic of taking care of yourself. Every cup is a spell.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3
              className="text-sm uppercase tracking-[0.08em] text-[#C4873B] mb-4"
              style={{ fontFamily: "'Karla', sans-serif", fontWeight: 700 }}
            >
              Shop
            </h3>
            <ul className="space-y-2">
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
                    className="text-sm text-[#A89F91] hover:text-[#F5F0E8] transition-colors"
                    style={{ fontFamily: "'Karla', sans-serif" }}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3
              className="text-sm uppercase tracking-[0.08em] text-[#C4873B] mb-4"
              style={{ fontFamily: "'Karla', sans-serif", fontWeight: 700 }}
            >
              Help
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact Us" },
                { href: "/shipping", label: "Shipping Policy" },
                { href: "/returns", label: "Return Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A89F91] hover:text-[#F5F0E8] transition-colors"
                    style={{ fontFamily: "'Karla', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <h3
              className="text-sm uppercase tracking-[0.08em] text-[#C4873B] mb-4"
              style={{ fontFamily: "'Karla', sans-serif", fontWeight: 700 }}
            >
              Legal
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                { href: "/terms", label: "Terms of Service" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#A89F91] hover:text-[#F5F0E8] transition-colors"
                    style={{ fontFamily: "'Karla', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3
              className="text-sm uppercase tracking-[0.08em] text-[#C4873B] mb-4"
              style={{ fontFamily: "'Karla', sans-serif", fontWeight: 700 }}
            >
              Follow
            </h3>
            <div className="flex gap-4">
              {["Instagram", "TikTok", "Pinterest"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-sm text-[#A89F91] hover:text-[#F5F0E8] transition-colors"
                  style={{ fontFamily: "'Karla', sans-serif" }}
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-[#A89F91]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-[#A89F91]"
            style={{ fontFamily: "'Karla', sans-serif" }}
          >
            &copy; {new Date().getFullYear()} Tess&apos;s Apothecary LLC. All rights
            reserved.
          </p>
          <p
            className="text-xs text-[#A89F91]/60"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Brewed with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
