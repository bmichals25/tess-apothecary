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
      <div className="bg-[var(--linen)] p-12 text-center">
        <p className="font-heading text-[var(--forest-veil)] text-xl font-semibold mb-2">
          Message received
        </p>
        <p className="font-body text-[var(--warm-stone)] text-sm">
          We&apos;ll get back to you within 1-2 business days.
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
            className="block font-body text-xs uppercase tracking-[0.08em] text-[var(--warm-stone)] font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-3 bg-transparent border border-[var(--warm-stone)]/40 text-[var(--apothecary-black)] font-body text-sm focus:outline-none focus:border-[var(--forest-veil)] transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block font-body text-xs uppercase tracking-[0.08em] text-[var(--warm-stone)] font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-3 bg-transparent border border-[var(--warm-stone)]/40 text-[var(--apothecary-black)] font-body text-sm focus:outline-none focus:border-[var(--forest-veil)] transition-colors"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block font-body text-xs uppercase tracking-[0.08em] text-[var(--warm-stone)] font-medium mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="w-full px-4 py-3 bg-transparent border border-[var(--warm-stone)]/40 text-[var(--apothecary-black)] font-body text-sm focus:outline-none focus:border-[var(--forest-veil)] transition-colors"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block font-body text-xs uppercase tracking-[0.08em] text-[var(--warm-stone)] font-medium mb-2"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={6}
          required
          className="w-full px-4 py-3 bg-transparent border border-[var(--warm-stone)]/40 text-[var(--apothecary-black)] font-body text-sm focus:outline-none focus:border-[var(--forest-veil)] transition-colors resize-vertical"
        />
      </div>
      <button
        type="submit"
        className="px-8 py-4 bg-[var(--forest-veil)] text-[var(--parchment)] font-body text-sm font-bold tracking-[0.08em] uppercase hover:bg-[var(--apothecary-black)] hover:scale-[1.02] hover:shadow-md transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
