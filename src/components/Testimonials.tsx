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
    <section className="bg-[#EDE7DB] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-[#C4873B] text-lg mb-2"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            From the Coven
          </p>
          <h2
            className="text-[#1A1A1A] text-3xl sm:text-4xl"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
            }}
          >
            What Our Community Says
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#F5F0E8] p-8 relative">
              {/* Quote mark */}
              <span
                className="absolute top-4 left-6 text-5xl text-[#C4873B]/20 leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                &ldquo;
              </span>
              <blockquote
                className="text-[#1A1A1A] text-base leading-relaxed mb-6 relative z-10 pt-6"
                style={{
                  fontFamily: "'Karla', sans-serif",
                  lineHeight: 1.65,
                }}
              >
                {t.quote}
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2D4A3E]/20" />
                <div>
                  <p
                    className="text-[#1A1A1A] text-sm"
                    style={{
                      fontFamily: "'Karla', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {t.author}
                  </p>
                  <p
                    className="text-[#A89F91] text-xs"
                    style={{ fontFamily: "'Karla', sans-serif" }}
                  >
                    on {t.blend}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
