"use client";

const gridItems = [
  { image: "/images/products/mockup-eventide-elixir.jpg", alt: "Eventide Elixir herbal tea blend" },
  { image: "/images/products/mockup-sun-tonic.jpg", alt: "Sun Tonic morning tea blend" },
  { image: "/images/products/mockup-shadow-work.jpg", alt: "Shadow Work grounding tea blend" },
  { image: "/images/products/mockup-heart-opener.jpg", alt: "Heart Opener love tea blend" },
];

export default function InstagramSection() {
  return (
    <section className="bg-aged-paper parchment-texture py-24 sm:py-32 px-5">
      <div className="max-w-6xl mx-auto relative z-[2] scroll-reveal">
        <div className="text-center mb-12">
          <p className="font-accent text-[var(--amber-elixir)] text-xl mb-3">
            @tessapothecary
          </p>
          <h2 className="font-heading text-[var(--apothecary-black)] text-fluid-section font-semibold">
            Follow the Ritual
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {gridItems.map((item, i) => (
            <div key={i}>
              <a
                href="https://instagram.com/tessapothecary"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square relative overflow-hidden group product-image-container"
                aria-label={`View on Instagram - ${item.alt}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="eager"
                />

                {/* Hover overlay with heart icon */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 bg-[var(--apothecary-black)]/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="var(--parchment)"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 mb-2"
                    aria-hidden="true"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                  <span className="font-body text-[var(--parchment)] text-xs tracking-[0.08em] uppercase font-bold">
                    Follow @tessapothecary
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
