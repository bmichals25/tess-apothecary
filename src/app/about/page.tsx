import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Tess's Apothecary. Small-batch herbal tea blends crafted at the intersection of herbalism and ritual.",
  openGraph: {
    title: "About | Tess's Apothecary",
    description: "The story behind Tess's Apothecary.",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-20 sm:pt-24">
      {/* Hero */}
      <section className="bg-[#1A1A1A] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/products/mockup-full-collection.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-[#1A1A1A]/40 to-[#1A1A1A]/80" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p
            className="text-[#C4873B] text-lg mb-3"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Our Story
          </p>
          <h1
            className="text-[#F5F0E8] text-4xl sm:text-5xl mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Born from a Lineage
            <br />
            of Quiet Knowing
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-[#F5F0E8] py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <p
              className="text-[#1A1A1A] text-lg leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              There&apos;s a kind of knowing that lives in your hands before it
              reaches your head. The way you instinctively reach for chamomile
              when the world gets loud. The way your grandmother brewed something
              bitter and strange when you couldn&apos;t sleep, and it worked, and
              she never told you why &mdash; just smiled and said
              &ldquo;drink.&rdquo;
            </p>
            <p
              className="text-[#1A1A1A] text-lg leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.6,
              }}
            >
              Tess&apos;s Apothecary was born from that lineage of quiet knowing.
            </p>

            <div className="w-16 h-px bg-[#C4873B] mx-auto my-10" />

            <p
              className="text-[#1A1A1A]/80 text-base"
              style={{
                fontFamily: "'Karla', sans-serif",
                lineHeight: 1.65,
              }}
            >
              We believe that every herb carries an intention. Lavender
              doesn&apos;t just taste floral &mdash; it asks you to soften.
              Reishi doesn&apos;t just support immunity &mdash; it asks you to
              slow down. Rosemary doesn&apos;t just sharpen focus &mdash; it asks
              you to remember who you are.
            </p>
            <p
              className="text-[#1A1A1A]/80 text-base"
              style={{
                fontFamily: "'Karla', sans-serif",
                lineHeight: 1.65,
              }}
            >
              Our blends are formulated at the intersection of herbalism and
              ritual. Each one is designed for a specific moment in your day
              &mdash; the exhale before sleep, the spark of morning energy, the
              courage to look inward, the openness to love. We source organic
              botanicals, adaptogenic mushrooms, and time-honored herbs, then
              blend them in small batches with the kind of care that doesn&apos;t
              scale &mdash; and we like it that way.
            </p>
            <p
              className="text-[#1A1A1A]/80 text-base"
              style={{
                fontFamily: "'Karla', sans-serif",
                lineHeight: 1.65,
              }}
            >
              This isn&apos;t wellness as a trend. This is wellness as a
              practice. A cup of tea as a spell you cast for yourself. A daily
              ritual that says:{" "}
              <em>
                I am paying attention to how I feel, and I am choosing to feel
                better.
              </em>
            </p>
            <p
              className="text-[#C4873B] text-xl text-center mt-8"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Welcome to the apothecary. The kettle&apos;s on.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-[#EDE7DB] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-[#1A1A1A] text-3xl text-center mb-12"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Intention Over Convenience",
                text: "Everything we make has a purpose. From ingredient selection to packaging to the ritual guide tucked inside each order, every detail is deliberate.",
              },
              {
                title: "Rooted in Real Herbalism",
                text: "We respect the plants. Our formulations draw on centuries of herbal tradition. We use organic, ethically sourced botanicals with genuine functional properties.",
              },
              {
                title: "Accessible Mysticism",
                text: "Spirituality shouldn't require a gatekeeping quiz. We welcome the tarot-curious and the seasoned practitioner alike. Witchy without being exclusionary.",
              },
              {
                title: "Craft Over Scale",
                text: "Small batches. Hands-on blending. Packaging that feels like receiving a gift from a friend who knows herbs. We grow at the speed of quality.",
              },
              {
                title: "Beauty as Function",
                text: "Good design isn't vanity — it's part of the ritual. When your tea tin is beautiful enough to leave on your altar, the experience of brewing becomes something you look forward to.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-[#F5F0E8] p-8">
                <h3
                  className="text-[#1A1A1A] text-xl mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-[#1A1A1A]/80 text-sm"
                  style={{
                    fontFamily: "'Karla', sans-serif",
                    lineHeight: 1.65,
                  }}
                >
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Tess */}
      <section className="bg-[#1A1A1A] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src="/images/products/mockup-ritual-kit-open.jpg"
                alt="Tess's Apothecary collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p
                className="text-[#C4873B] text-lg mb-2"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                The Herbalist
              </p>
              <h2
                className="text-[#F5F0E8] text-3xl mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 600,
                }}
              >
                Meet Tess
              </h2>
              <p
                className="text-[#A89F91] text-base mb-4"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  lineHeight: 1.65,
                }}
              >
                Every blend in the Apothecary is formulated by hand, informed by
                years of studying traditional herbalism and a deep personal
                practice of ritual and intention-setting.
              </p>
              <p
                className="text-[#A89F91] text-base"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  lineHeight: 1.65,
                }}
              >
                Tess believes that the best wellness practices are the ones that
                feel less like obligation and more like coming home. That&apos;s
                why every tin is designed to sit on your altar, every blend is
                named for a practice, and every sip is an invitation to be
                present.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="bg-[#F5F0E8] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-[#1A1A1A] text-3xl mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Sourcing & Quality
          </h2>
          <p
            className="text-[#1A1A1A]/80 text-base mb-4"
            style={{
              fontFamily: "'Karla', sans-serif",
              lineHeight: 1.65,
            }}
          >
            We source organic ingredients wherever possible, working with
            suppliers who share our values around purity and sustainability. All
            of our herbs are free from pesticides and synthetic chemicals.
          </p>
          <p
            className="text-[#1A1A1A]/80 text-base mb-8"
            style={{
              fontFamily: "'Karla', sans-serif",
              lineHeight: 1.65,
            }}
          >
            Every batch is blended by hand in small quantities to ensure
            freshness and potency. We don&apos;t mass-produce &mdash; we
            craft. Because you can taste the difference between something made
            for everyone and something made for <em>you</em>.
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-[#2D4A3E] text-[#F5F0E8] text-sm tracking-[0.08em] uppercase hover:bg-[#1A1A1A] transition-colors"
            style={{
              fontFamily: "'Karla', sans-serif",
              fontWeight: 700,
            }}
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
