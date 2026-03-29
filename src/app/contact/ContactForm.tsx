"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          formData as unknown as Record<string, string>
        ).toString(),
      });
    } catch {
      // fallback
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#EDE7DB] p-12 text-center">
        <p
          className="text-[#2D4A3E] text-xl mb-2"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 600,
          }}
        >
          Message received
        </p>
        <p
          className="text-[#A89F91] text-sm"
          style={{ fontFamily: "'Karla', sans-serif" }}
        >
          We&apos;ll get back to you within 1-2 business days. The kettle&apos;s
          on while you wait.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-[0.08em] text-[#A89F91] mb-2"
            style={{ fontFamily: "'Karla', sans-serif", fontWeight: 500 }}
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-3 bg-transparent border border-[#A89F91]/40 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#2D4A3E] transition-colors"
            style={{ fontFamily: "'Karla', sans-serif" }}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-[0.08em] text-[#A89F91] mb-2"
            style={{ fontFamily: "'Karla', sans-serif", fontWeight: 500 }}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-3 bg-transparent border border-[#A89F91]/40 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#2D4A3E] transition-colors"
            style={{ fontFamily: "'Karla', sans-serif" }}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-xs uppercase tracking-[0.08em] text-[#A89F91] mb-2"
          style={{ fontFamily: "'Karla', sans-serif", fontWeight: 500 }}
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="w-full px-4 py-3 bg-transparent border border-[#A89F91]/40 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#2D4A3E] transition-colors"
          style={{ fontFamily: "'Karla', sans-serif" }}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-[0.08em] text-[#A89F91] mb-2"
          style={{ fontFamily: "'Karla', sans-serif", fontWeight: 500 }}
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={6}
          required
          className="w-full px-4 py-3 bg-transparent border border-[#A89F91]/40 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#2D4A3E] transition-colors resize-vertical"
          style={{ fontFamily: "'Karla', sans-serif" }}
        />
      </div>
      <button
        type="submit"
        className="px-8 py-4 bg-[#2D4A3E] text-[#F5F0E8] text-sm tracking-[0.08em] uppercase hover:bg-[#1A1A1A] transition-colors"
        style={{ fontFamily: "'Karla', sans-serif", fontWeight: 700 }}
      >
        Send Message
      </button>
    </form>
  );
}
