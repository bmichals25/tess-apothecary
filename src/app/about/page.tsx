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
      <section className="bg-[var(--apothecary-black)] py-20 px-5 sm:px-8 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/products/mockup-full-collection.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--apothecary-black)]/60 via-[var(--apothecary-black)]/40 to-[var(--apothecary-black)]/80" />
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="font-accent text-[var(--amber-elixir)] text-lg mb-3">
            Our Story
          </p>
          <h1 className="font-heading text-[var(--parchment)] text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            Born from a Lineage
            <br />
            of Quiet Knowing
          </h1>
        </div>
      </section>

      {/* Brand Story */}
      <section className="bg-[var(--parchment)] py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <p className="font-heading text-[var(--apothecary-black)] text-lg leading-relaxed italic">
              There&apos;s a kind of knowing that lives in your hands before it
              reaches your head. The way you instinctively reach for chamomile
              when the world gets loud. The way your grandmother brewed something
              bitter and strange when you couldn&apos;t sleep, and it worked, and
              she never told you why &mdash; just smiled and said
              &ldquo;drink.&rdquo;
            </p>
            <p className="font-heading text-[var(--apothecary-black)] text-lg leading-relaxed italic">
              Tess&apos;s Apothecary was born from that lineage of quiet knowing.
            </p>

            <div className="w-16 h-px bg-[var(--amber-elixir)] mx-auto my-10" />

            <p className="font-body text-[var(--apothecary-black)]/80 text-base leading-relaxed">
              We believe that every herb carries an intention. Lavender
              doesn&apos;t just taste floral &mdash; it asks you to soften.
              Reishi doesn&apos;t just support immunity &mdash; it asks you to
              slow down. Rosemary doesn&apos;t just sharpen focus &mdash; it asks
              you to remember who you are.
            </p>
            <p className="font-body text-[var(--apothecary-black)]/80 text-base leading-relaxed">
              Our blends are formulated at the intersection of herbalism and
              ritual. Each one is designed for a specific moment in your day
              &mdash; the exhale before sleep, the spark of morning energy, the
              courage to look inward, the openness to love. We source organic
              botanicals, adaptogenic mushrooms, and time-honored herbs, then
              blend them in small batches with the kind of care that doesn&apos;t
              scale &mdash; and we like it that way.
            </p>
            <p className="font-body text-[var(--apothecary-black)]/80 text-base leading-relaxed">
              This isn&apos;t wellness as a trend. This is wellness as a
              practice. A cup of tea as a spell you cast for yourself. A daily
              ritual that says:{" "}
              <em>
                I am paying attention to how I feel, and I am choosing to feel
                better.
              </em>
            </p>
            <p className="font-accent text-[var(--amber-elixir)] text-xl text-center mt-8">
              Welcome to the apothecary. The kettle&apos;s on.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-[var(--linen)] py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-[var(--apothecary-black)] text-3xl text-center font-semibold mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            ].map((value, i) => (
              <div
                key={value.title}
                className={`bg-[var(--parchment)] p-8 ${i === 4 ? "md:col-span-3 md:max-w-md md:mx-auto" : ""}`}
              >
                <h3 className="font-heading text-[var(--apothecary-black)] text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-[var(--apothecary-black)]/80 text-sm leading-relaxed">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Tess */}
      <section className="bg-[var(--apothecary-black)] py-20 px-5 sm:px-8 lg:px-10">
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
              <p className="font-accent text-[var(--amber-elixir)] text-lg mb-2">
                The Herbalist
              </p>
              <h2 className="font-heading text-[var(--parchment)] text-3xl font-semibold mb-6">
                Meet Tess
              </h2>
              <p className="font-body text-[var(--warm-stone)] text-base leading-relaxed mb-4">
                Every blend in the Apothecary is formulated by hand, informed by
                years of studying traditional herbalism and a deep personal
                practice of ritual and intention-setting.
              </p>
              <p className="font-body text-[var(--warm-stone)] text-base leading-relaxed">
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
      <section className="bg-[var(--parchment)] py-20 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-[var(--apothecary-black)] text-3xl font-semibold mb-6">
            Sourcing &amp; Quality
          </h2>
          <p className="font-body text-[var(--apothecary-black)]/80 text-base leading-relaxed mb-4">
            We source organic ingredients wherever possible, working with
            suppliers who share our values around purity and sustainability. All
            of our herbs are free from pesticides and synthetic chemicals.
          </p>
          <p className="font-body text-[var(--apothecary-black)]/80 text-base leading-relaxed mb-8">
            Every batch is blended by hand in small quantities to ensure
            freshness and potency. We don&apos;t mass-produce &mdash; we
            craft. Because you can taste the difference between something made
            for everyone and something made for <em>you</em>.
          </p>
          <Link
            href="/shop"
            className="inline-block px-8 py-4 bg-[var(--forest-veil)] text-[var(--parchment)] font-body text-sm font-bold tracking-[0.08em] uppercase hover:bg-[var(--apothecary-black)] transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
