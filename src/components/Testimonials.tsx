"use client";

const testimonials = [
  {
    quote:
      "Eventide Elixir is the only thing that gets me to put my phone down at night. The lavender hits and suddenly the day lets go.",
    author: "Rachel M.",
    blend: "Eventide Elixir",
  },
  {
    quote:
      "I bought the Ritual Kit as a gift and ended up ordering one for myself the same week. The unboxing alone is worth it.",
    author: "Sarah K.",
    blend: "The Ritual Kit",
  },
  {
    quote:
      "Shadow Work with oat milk has become my journaling companion. I don't sit down to write without it anymore.",
    author: "Maya L.",
    blend: "Shadow Work",
  },
  {
    quote:
      "Finally a wellness tea brand that doesn't feel like it's trying too hard. The herbs are real, the ritual is real, and it actually tastes incredible.",
    author: "Jen T.",
    blend: "Sun Tonic",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[var(--linen)] parchment-texture py-24 sm:py-32 px-5">
      <div className="max-w-6xl mx-auto relative z-[2]">
        <div className="text-center mb-16 reveal-section">
          <p className="font-accent text-[var(--amber-elixir)] text-xl mb-3">
            Voices from the Coven
          </p>
          <h2 className="font-heading text-[var(--apothecary-black)] text-fluid-section font-semibold">
            What Our Community Says
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className={i % 2 === 0 ? "reveal-left" : "reveal-right"}>
              <div className="bg-[var(--parchment)] p-8 sm:p-10 relative group hover:shadow-lg transition-all duration-500 apothecary-label">
                {/* Large decorative quote mark */}
                <span className="absolute top-6 left-8 font-heading text-7xl text-[var(--amber-elixir)]/10 leading-none select-none pointer-events-none">
                  &ldquo;
                </span>

                <blockquote className="grimoire-quote font-body text-[var(--apothecary-black)] text-base leading-[1.8] mb-8 relative z-10 pt-8 border-l-0">
                  <span className="italic">{t.quote}</span>
                </blockquote>

                <div className="flex items-center gap-4">
                  {/* Avatar placeholder with botanical leaf */}
                  <div className="w-10 h-10 rounded-full bg-[var(--forest-veil)]/15 flex items-center justify-center relative">
                    <span className="font-heading text-[var(--forest-veil)] text-sm font-semibold">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-body text-[var(--apothecary-black)] text-sm font-bold">
                      {t.author}
                    </p>
                    <p className="font-accent text-[var(--amber-elixir)] text-sm">
                      on {t.blend}
                    </p>
                  </div>
                </div>

                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--amber-elixir)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
