import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tess's Apothecary. We'd love to hear from you.",
  openGraph: {
    title: "Contact | Tess's Apothecary",
    description: "Get in touch with Tess's Apothecary.",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20 sm:pt-24">
      <section className="bg-[var(--apothecary-black)] py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-accent text-[var(--amber-elixir)] text-lg mb-2">
            Reach Out
          </p>
          <h1 className="font-heading text-[var(--parchment)] text-4xl sm:text-5xl font-semibold mb-4">
            Contact Us
          </h1>
          <p className="font-body text-[var(--warm-stone)] text-base max-w-xl mx-auto leading-relaxed">
            Questions about a blend? Need help with an order? Just want to chat
            about herbs? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-[var(--parchment)] py-16 px-5 sm:px-8 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-[var(--apothecary-black)] text-lg font-semibold mb-2">
                  Email
                </h3>
                <a
                  href="mailto:support@tessapothecary.com"
                  className="font-body text-[var(--forest-veil)] text-sm hover:text-[var(--amber-elixir)] transition-colors"
                >
                  support@tessapothecary.com
                </a>
              </div>
              <div>
                <h3 className="font-heading text-[var(--apothecary-black)] text-lg font-semibold mb-2">
                  Response Time
                </h3>
                <p className="font-body text-[var(--apothecary-black)]/80 text-sm leading-relaxed">
                  We respond to all inquiries within 1-2 business days.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-[var(--apothecary-black)] text-lg font-semibold mb-2">
                  Follow Us
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    { name: "Instagram", url: "https://instagram.com/tessapothecary" },
                    { name: "TikTok", url: "https://tiktok.com/@tessapothecary" },
                    { name: "Pinterest", url: "https://pinterest.com/tessapothecary" },
                  ].map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-[var(--forest-veil)] text-sm hover:text-[var(--amber-elixir)] transition-colors"
                    >
                      {platform.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
