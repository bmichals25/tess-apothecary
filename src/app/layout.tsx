import type { Metadata } from "next";
import { Cormorant_Garamond, Karla, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/lib/cart-context";
import Toast from "@/components/Toast";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-karla",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tess's Apothecary | Herbal Tea Blends for Ritual & Intention",
    template: "%s | Tess's Apothecary",
  },
  description:
    "Small-batch herbal tea blends crafted for daily ritual and intentional wellness. Where herbalism meets modern mysticism. Shop Eventide Elixir, Sun Tonic, Shadow Work, Inner Sight, Heart Opener, and The Ritual Kit.",
  keywords: [
    "herbal tea",
    "loose leaf tea",
    "ritual tea",
    "apothecary",
    "wellness tea",
    "adaptogenic tea",
    "herbal blends",
    "tea ritual",
    "self care",
    "intentional wellness",
  ],
  authors: [{ name: "Tess's Apothecary" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tess's Apothecary",
    title: "Tess's Apothecary | Herbal Tea Blends for Ritual & Intention",
    description:
      "Small-batch herbal tea blends crafted for daily ritual and intentional wellness. Every cup is a spell.",
    images: [
      {
        url: "/images/products/mockup-full-collection.jpg",
        width: 1200,
        height: 630,
        alt: "Tess's Apothecary herbal tea collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tess's Apothecary | Herbal Tea Blends for Ritual & Intention",
    description:
      "Small-batch herbal tea blends crafted for daily ritual and intentional wellness. Every cup is a spell.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${karla.variable} ${caveat.variable} h-full antialiased`}
    >
      <head>
        {/* Preload all product images so the page scrolls smoothly with no loading pauses */}
        <link rel="preload" as="image" href="/images/logos/tess-wordmark-horizontal-gold.png" />
        <link rel="preload" as="image" href="/images/products/mockup-full-collection.jpg" />
        <link rel="preload" as="image" href="/images/products/mockup-eventide-elixir.jpg" />
        <link rel="preload" as="image" href="/images/products/mockup-sun-tonic.jpg" />
        <link rel="preload" as="image" href="/images/products/mockup-shadow-work.jpg" />
        <link rel="preload" as="image" href="/images/products/mockup-inner-sight.jpg" />
        <link rel="preload" as="image" href="/images/products/mockup-heart-opener.jpg" />
        <link rel="preload" as="image" href="/images/products/mockup-ritual-kit-closed.jpg" />
        <link rel="preload" as="video" href="/videos/hero-video.mp4" />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Full-page loader — shows while site assets load, fades out when ready */}
        <div id="site-loader" style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          background: '#1A1A1A',
          transition: 'opacity 0.6s ease',
        }}>
          {/* Animated mortar & pestle icon */}
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" stroke="#D4A843" strokeWidth="1.5" style={{ animation: 'loaderPulse 1.5s ease-in-out infinite' }}>
            <path d="M30 55 Q50 40 70 55" />
            <path d="M25 58 Q50 72 75 58" />
            <path d="M25 58 L30 55" />
            <path d="M75 58 L70 55" />
            <line x1="55" y1="35" x2="60" y2="20" />
            <path d="M40 50 Q35 42 28 45" />
            <path d="M60 50 Q65 42 72 45" />
            <path d="M50 48 Q50 38 50 30" />
            <circle cx="50" cy="18" r="3" fill="#D4A843" opacity="0.4" />
          </svg>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#D4A843', fontSize: '14px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Preparing your ritual...
          </p>
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes loaderPulse { 0%,100% { opacity: 0.4; transform: scale(0.95); } 50% { opacity: 1; transform: scale(1.05); } }
          `}} />
        </div>
        <script dangerouslySetInnerHTML={{ __html: `
          window.addEventListener('load', function() {
            // Fade out loader
            var loader = document.getElementById('site-loader');
            if (loader) {
              loader.style.opacity = '0';
              setTimeout(function() { loader.remove(); }, 600);
            }

            // Set up scroll reveals — single shared IntersectionObserver
            var observer = new IntersectionObserver(function(entries) {
              entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target);
                }
              });
            }, {
              threshold: 0.1,
              rootMargin: '0px 0px -40px 0px'
            });

            document.querySelectorAll('.scroll-reveal, .scroll-reveal--left, .scroll-reveal--right, .scroll-reveal--scale, .scroll-reveal--stagger').forEach(function(el) {
              var rect = el.getBoundingClientRect();
              if (rect.top < window.innerHeight + 40) {
                el.classList.add('is-visible');
              } else {
                observer.observe(el);
              }
            });
          });
        `}} />

        <CartProvider>
          {/* Skip to content link for keyboard/screen-reader users */}
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="flex-1" role="main">
            {children}
          </main>
          <Footer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
