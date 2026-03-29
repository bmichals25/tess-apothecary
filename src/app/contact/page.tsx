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
      <section className="bg-[#1A1A1A] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-[#C4873B] text-lg mb-2"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Reach Out
          </p>
          <h1
            className="text-[#F5F0E8] text-4xl sm:text-5xl mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontWeight: 600,
            }}
          >
            Contact Us
          </h1>
          <p
            className="text-[#A89F91] text-base max-w-xl mx-auto"
            style={{ fontFamily: "'Karla', sans-serif", lineHeight: 1.65 }}
          >
            Questions about a blend? Need help with an order? Just want to chat
            about herbs? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F0E8] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3
                  className="text-[#1A1A1A] text-lg mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  Email
                </h3>
                <a
                  href="mailto:support@tessapothecary.com"
                  className="text-[#2D4A3E] text-sm hover:text-[#C4873B] transition-colors"
                  style={{ fontFamily: "'Karla', sans-serif" }}
                >
                  support@tessapothecary.com
                </a>
              </div>
              <div>
                <h3
                  className="text-[#1A1A1A] text-lg mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  Response Time
                </h3>
                <p
                  className="text-[#1A1A1A]/80 text-sm"
                  style={{ fontFamily: "'Karla', sans-serif", lineHeight: 1.65 }}
                >
                  We respond to all inquiries within 1-2 business days.
                </p>
              </div>
              <div>
                <h3
                  className="text-[#1A1A1A] text-lg mb-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontWeight: 600,
                  }}
                >
                  Follow Us
                </h3>
                <div className="flex flex-col gap-2">
                  {["Instagram", "TikTok", "Pinterest"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="text-[#2D4A3E] text-sm hover:text-[#C4873B] transition-colors"
                      style={{ fontFamily: "'Karla', sans-serif" }}
                    >
                      {platform}
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
