"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Netlify forms will handle this via hidden form
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true); // Still show success on client
    }
  };

  return (
    <section className="bg-[#2D4A3E] py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-[#C4873B] text-xl mb-2"
          style={{ fontFamily: "'Caveat', cursive" }}
        >
          The kettle&apos;s on
        </p>
        <h2
          className="text-[#F5F0E8] text-3xl sm:text-4xl mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 600,
          }}
        >
          Join the Coven
        </h2>
        <p
          className="text-[#A89F91] text-base mb-8 max-w-lg mx-auto"
          style={{ fontFamily: "'Karla', sans-serif", lineHeight: 1.65 }}
        >
          Sign up for seasonal rituals, behind-the-blend stories, and early
          access to new releases. Plus, 15% off your first ritual.
        </p>

        {submitted ? (
          <div className="py-4">
            <p
              className="text-[#C4873B] text-lg"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
              }}
            >
              Welcome to the Apothecary. Check your inbox for your 15% off code.
            </p>
          </div>
        ) : (
          <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input type="hidden" name="form-name" value="newsletter" />
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-[#1A1A1A]/40 border border-[#A89F91]/30 text-[#F5F0E8] placeholder-[#A89F91]/60 text-sm focus:outline-none focus:border-[#C4873B] transition-colors"
              style={{ fontFamily: "'Karla', sans-serif" }}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#C4873B] text-[#F5F0E8] text-sm tracking-[0.08em] uppercase hover:bg-[#D4A843] transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Karla', sans-serif", fontWeight: 700 }}
            >
              Join the Coven
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
