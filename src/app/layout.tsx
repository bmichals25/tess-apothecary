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
        {/* Scroll-driven animations are pure CSS — no JS setup needed */}
      </head>
      <body className="min-h-full flex flex-col">
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
