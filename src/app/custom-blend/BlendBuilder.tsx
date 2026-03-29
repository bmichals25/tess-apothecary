"use client";

import { useState, useMemo } from "react";
import { useCart } from "@/lib/cart-context";

/* ─── Data ─── */

const intentions = [
  { id: "calm", label: "Calm & Relaxation", icon: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
      <path d="M20 8 Q14 14 14 22 Q14 32 20 34 Q26 32 26 22 Q26 14 20 8Z" />
      <path d="M18 20 Q20 24 22 20" opacity="0.4" />
    </svg>
  )},
  { id: "energy", label: "Energy & Focus", icon: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
      <circle cx="20" cy="20" r="8" />
      <line x1="20" y1="6" x2="20" y2="10" /><line x1="20" y1="30" x2="20" y2="34" />
      <line x1="6" y1="20" x2="10" y2="20" /><line x1="30" y1="20" x2="34" y2="20" />
      <line x1="10" y1="10" x2="13" y2="13" /><line x1="27" y1="27" x2="30" y2="30" />
      <line x1="30" y1="10" x2="27" y2="13" /><line x1="13" y1="27" x2="10" y2="30" />
    </svg>
  )},
  { id: "sleep", label: "Better Sleep", icon: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
      <path d="M24 8 Q14 10 12 20 Q10 30 20 34 Q30 34 32 24 Q26 26 24 20 Q22 14 24 8Z" />
      <circle cx="28" cy="12" r="1" fill="currentColor" opacity="0.3" />
      <circle cx="32" cy="18" r="0.7" fill="currentColor" opacity="0.2" />
    </svg>
  )},
  { id: "digestive", label: "Digestive Support", icon: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
      <path d="M16 8 Q12 8 12 14 L12 18 Q12 22 16 22 Q20 22 20 26 L20 30 Q20 34 24 34" />
      <path d="M14 12 L18 12" opacity="0.4" /><path d="M18 26 L22 26" opacity="0.4" />
    </svg>
  )},
  { id: "immune", label: "Immune Boost", icon: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
      <path d="M20 6 L22 14 L30 14 L24 19 L26 27 L20 22 L14 27 L16 19 L10 14 L18 14Z" />
    </svg>
  )},
  { id: "stress", label: "Stress Relief", icon: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
      <path d="M12 28 Q12 18 20 14 Q28 18 28 28" />
      <line x1="12" y1="28" x2="28" y2="28" />
      <path d="M17 22 Q20 20 23 22" opacity="0.4" />
      <path d="M20 8 Q20 12 20 14" opacity="0.3" />
      <path d="M20 8 Q18 10 16 10" opacity="0.3" />
      <path d="M20 8 Q22 10 24 10" opacity="0.3" />
    </svg>
  )},
  { id: "clarity", label: "Mental Clarity", icon: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
      <path d="M8 20 Q20 6 32 20 Q20 34 8 20Z" />
      <circle cx="20" cy="20" r="5" />
      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.2" />
    </svg>
  )},
  { id: "emotional", label: "Emotional Balance", icon: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
      <path d="M20 34 Q8 26 8 18 Q8 12 14 12 Q18 12 20 16 Q22 12 26 12 Q32 12 32 18 Q32 26 20 34Z" />
    </svg>
  )},
  { id: "detox", label: "Detox & Cleansing", icon: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
      <path d="M18 6 L18 16 Q10 20 10 28 Q10 34 20 34 Q30 34 30 28 Q30 20 22 16 L22 6" />
      <line x1="18" y1="6" x2="22" y2="6" />
      <path d="M16 26 Q20 22 24 26" opacity="0.3" />
    </svg>
  )},
  { id: "pain", label: "Pain & Inflammation Relief", icon: (
    <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
      <circle cx="20" cy="20" r="12" />
      <line x1="20" y1="12" x2="20" y2="28" />
      <line x1="12" y1="20" x2="28" y2="20" />
    </svg>
  )},
];

const healthFlags = [
  "Pregnant or nursing",
  "Taking blood thinners",
  "Thyroid medication",
  "Allergies to specific herbs",
  "Caffeine sensitive",
  "None of the above",
];

const flavorProfiles = [
  { id: "floral", label: "Floral" },
  { id: "earthy", label: "Earthy" },
  { id: "spicy", label: "Spicy" },
  { id: "citrusy", label: "Citrusy" },
  { id: "minty", label: "Minty" },
  { id: "sweet", label: "Sweet" },
  { id: "open", label: "I'm open to anything" },
];

const caffeineOptions = [
  { id: "none", label: "None" },
  { id: "low", label: "Low" },
  { id: "moderate", label: "Moderate" },
];

const formatOptions = [
  { id: "loose-leaf", label: "Loose Leaf" },
  { id: "tea-bags", label: "Tea Bags" },
];

const sizeOptions = [
  { id: "2oz", label: "2oz Sample", price: 24 },
  { id: "4oz", label: "4oz Regular", price: 38 },
  { id: "8oz", label: "8oz Apothecary Size", price: 62 },
];

/* ─── Herb catalogue ─── */

interface Herb {
  id: string;
  name: string;
  desc: string;
}

interface HerbCategory {
  label: string;
  herbs: Herb[];
}

const herbCategories: HerbCategory[] = [
  {
    label: "Calming",
    herbs: [
      { id: "chamomile", name: "Chamomile", desc: "Gentle, floral, soothing" },
      { id: "lavender", name: "Lavender", desc: "Calming, aromatic, dreamy" },
      { id: "passionflower", name: "Passionflower", desc: "Deep relaxation, sleep support" },
      { id: "valerian-root", name: "Valerian Root", desc: "Potent sleep aid, earthy" },
    ],
  },
  {
    label: "Energizing",
    herbs: [
      { id: "green-tea", name: "Green Tea", desc: "Light caffeine, antioxidant-rich" },
      { id: "ginger", name: "Ginger", desc: "Warming, invigorating, digestive" },
      { id: "peppermint", name: "Peppermint", desc: "Refreshing, cooling, focus" },
      { id: "lemon-balm", name: "Lemon Balm", desc: "Uplifting, bright, calming energy" },
    ],
  },
  {
    label: "Adaptogenic",
    herbs: [
      { id: "ashwagandha", name: "Ashwagandha", desc: "Stress relief, grounding" },
      { id: "reishi", name: "Reishi Mushroom", desc: "Immune support, calm focus" },
      { id: "lions-mane", name: "Lion\u2019s Mane", desc: "Mental clarity, brain support" },
      { id: "holy-basil", name: "Holy Basil (Tulsi)", desc: "Adaptogenic, balancing" },
    ],
  },
  {
    label: "Floral & Fruity",
    herbs: [
      { id: "rose-petals", name: "Rose Petals", desc: "Heart-opening, romantic" },
      { id: "hibiscus", name: "Hibiscus", desc: "Tart, vibrant, vitamin C" },
      { id: "elderflower", name: "Elderflower", desc: "Delicate, immune-boosting" },
      { id: "jasmine", name: "Jasmine", desc: "Fragrant, calming, uplifting" },
    ],
  },
  {
    label: "Earthy & Spicy",
    herbs: [
      { id: "cinnamon", name: "Cinnamon", desc: "Warming, sweet, blood sugar support" },
      { id: "turmeric", name: "Turmeric", desc: "Anti-inflammatory, golden" },
      { id: "cacao", name: "Cacao", desc: "Rich, grounding, mood-lifting" },
      { id: "cardamom", name: "Cardamom", desc: "Aromatic, digestive, exotic" },
      { id: "rosemary", name: "Rosemary", desc: "Memory, focus, herbal" },
      { id: "ginkgo", name: "Ginkgo", desc: "Circulation, cognitive support" },
    ],
  },
];

const allHerbs = herbCategories.flatMap((c) => c.herbs);

/* ─── Component ─── */

export default function BlendBuilder() {
  const { addItem } = useCart();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "back">("forward");

  /* Form state */
  const [selectedIntentions, setSelectedIntentions] = useState<string[]>([]);
  const [physicalConcerns, setPhysicalConcerns] = useState("");
  const [emotionalConcerns, setEmotionalConcerns] = useState("");
  const [selectedFlags, setSelectedFlags] = useState<string[]>([]);
  const [flavor, setFlavor] = useState("");
  const [caffeine, setCaffeine] = useState("");
  const [format, setFormat] = useState("loose-leaf");
  const [size, setSize] = useState("4oz");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lovedHerbs, setLovedHerbs] = useState<string[]>([]);
  const [excludedHerbs, setExcludedHerbs] = useState<string[]>([]);
  const [herbSearch, setHerbSearch] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 5;

  const goTo = (nextStep: number) => {
    setDirection(nextStep > step ? "forward" : "back");
    setStep(nextStep);
  };

  const toggleIntention = (id: string) => {
    setSelectedIntentions((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleFlag = (flag: string) => {
    if (flag === "None of the above") {
      setSelectedFlags((prev) =>
        prev.includes(flag) ? [] : ["None of the above"]
      );
      return;
    }
    setSelectedFlags((prev) => {
      const without = prev.filter((f) => f !== "None of the above");
      return without.includes(flag)
        ? without.filter((f) => f !== flag)
        : [...without, flag];
    });
  };

  const toggleLoved = (id: string) => {
    setLovedHerbs((prev) =>
      prev.includes(id) ? prev.filter((h) => h !== id) : [...prev, id]
    );
    setExcludedHerbs((prev) => prev.filter((h) => h !== id));
  };

  const toggleExcluded = (id: string) => {
    setExcludedHerbs((prev) =>
      prev.includes(id) ? prev.filter((h) => h !== id) : [...prev, id]
    );
    setLovedHerbs((prev) => prev.filter((h) => h !== id));
  };

  const clearLovedInCategory = (herbs: Herb[]) => {
    const ids = herbs.map((h) => h.id);
    setLovedHerbs((prev) => prev.filter((h) => !ids.includes(h)));
  };

  const selectAllLovedInCategory = (herbs: Herb[]) => {
    const ids = herbs.map((h) => h.id);
    setLovedHerbs((prev) => [...new Set([...prev, ...ids])]);
    setExcludedHerbs((prev) => prev.filter((h) => !ids.includes(h)));
  };

  const clearExcludedInCategory = (herbs: Herb[]) => {
    const ids = herbs.map((h) => h.id);
    setExcludedHerbs((prev) => prev.filter((h) => !ids.includes(h)));
  };

  const selectAllExcludedInCategory = (herbs: Herb[]) => {
    const ids = herbs.map((h) => h.id);
    setExcludedHerbs((prev) => [...new Set([...prev, ...ids])]);
    setLovedHerbs((prev) => prev.filter((h) => !ids.includes(h)));
  };

  const filteredCategories = useMemo(() => {
    if (!herbSearch.trim()) return herbCategories;
    const q = herbSearch.toLowerCase();
    return herbCategories
      .map((cat) => ({
        ...cat,
        herbs: cat.herbs.filter(
          (h) =>
            h.name.toLowerCase().includes(q) ||
            h.desc.toLowerCase().includes(q) ||
            cat.label.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.herbs.length > 0);
  }, [herbSearch]);

  const selectedSize = sizeOptions.find((s) => s.id === size)!;

  const handleSubmit = () => {
    const slug = `custom-blend-${size}`;
    addItem(
      slug,
      `Custom Blend (${selectedSize.label})`,
      selectedSize.price,
      "/images/products/mockup-full-collection.jpg"
    );
    setSubmitted(true);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedIntentions.length > 0;
      case 2:
        return true;
      case 3:
        return true; // herb preferences are optional
      case 4:
        return flavor !== "" && caffeine !== "";
      case 5:
        return name.trim() !== "" && email.trim() !== "";
      default:
        return false;
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-20 scroll-reveal">
        <div className="mx-auto w-20 h-20 rounded-full border border-[var(--amber-elixir)]/30 flex items-center justify-center mb-8">
          <svg viewBox="0 0 40 40" className="w-10 h-10 text-[var(--amber-elixir)]" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
            <path d="M10 20 L17 27 L30 13" />
          </svg>
        </div>
        <h3 className="font-heading text-[var(--apothecary-black)] text-fluid-subtitle font-semibold mb-4">
          Your Blend Is Being Crafted
        </h3>
        <p className="font-body text-[var(--warm-stone)] text-base max-w-md mx-auto leading-relaxed mb-2">
          Tess will review your profile and craft your custom blend within 5-7 business days.
        </p>
        <p className="font-body text-[var(--warm-stone)] text-sm max-w-md mx-auto leading-relaxed">
          You&apos;ll receive an email with your custom blend details and ingredient list before it ships.
          Your blend has been added to your cart.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress indicator */}
      <div className="flex items-center justify-center gap-3 mb-12">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((s) => (
          <div key={s} className="flex items-center gap-3">
            <button
              onClick={() => s < step && goTo(s)}
              className={`w-10 h-10 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center font-body text-sm font-bold transition-all duration-500 ${
                s === step
                  ? "bg-[var(--amber-elixir)] text-[var(--parchment)]"
                  : s < step
                  ? "bg-[var(--forest-veil)] text-[var(--parchment)] cursor-pointer"
                  : "border border-[var(--warm-stone)]/30 text-[var(--warm-stone)]/50"
              }`}
              aria-label={`Step ${s}${s < step ? " (completed)" : s === step ? " (current)" : ""}`}
              aria-current={s === step ? "step" : undefined}
            >
              {s < step ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s
              )}
            </button>
            {s < totalSteps && (
              <div className={`hidden sm:block w-12 h-px transition-colors duration-500 ${
                s < step ? "bg-[var(--forest-veil)]" : "bg-[var(--warm-stone)]/20"
              }`} />
            )}
          </div>
        ))}
      </div>

      {/* Netlify Forms hidden form for data capture */}
      <form name="custom-blend" method="POST" data-netlify="true" hidden>
        <input type="hidden" name="form-name" value="custom-blend" />
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="intentions" />
        <textarea name="physical-concerns" />
        <textarea name="emotional-concerns" />
        <textarea name="health-flags" />
        <textarea name="loved-herbs" />
        <textarea name="excluded-herbs" />
        <input type="text" name="flavor" />
        <input type="text" name="caffeine" />
        <input type="text" name="format" />
        <input type="text" name="size" />
        <textarea name="notes" />
      </form>

      {/* Step content with transitions */}
      <div
        key={step}
        className={`${
          direction === "forward"
            ? "animate-[fadeSlideIn_0.4s_ease_forwards]"
            : "animate-[fadeSlideInReverse_0.4s_ease_forwards]"
        }`}
        style={{
          // @ts-expect-error -- inline keyframes via style
          "--tw-animate-delay": "0s",
        }}
      >
        {/* ─── Step 1: Intentions ─── */}
        {step === 1 && (
          <div>
            <div className="text-center mb-10">
              <p className="font-accent text-[var(--amber-elixir)] text-lg mb-2">Step 1 of 5</p>
              <h3 className="font-heading text-[var(--apothecary-black)] text-fluid-subtitle font-semibold mb-3">
                What are you seeking?
              </h3>
              <p className="font-body text-[var(--warm-stone)] text-sm max-w-lg mx-auto">
                Select all that resonate. This helps Tess understand the heart of your blend.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {intentions.map((item) => {
                const selected = selectedIntentions.includes(item.id);
                return (
                  <button
                    key={item.id}
                    onClick={() => toggleIntention(item.id)}
                    aria-pressed={selected}
                    className={`group p-4 sm:p-5 min-h-[100px] flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 border ${
                      selected
                        ? "border-[var(--amber-elixir)] bg-[var(--amber-elixir)]/5 shadow-[0_0_0_1px_var(--amber-elixir)]"
                        : "border-[var(--warm-stone)]/20 bg-[var(--bone)] hover:border-[var(--amber-elixir)]/40 hover:bg-[var(--amber-elixir)]/[0.02]"
                    }`}
                  >
                    <span className={`transition-colors duration-300 ${
                      selected ? "text-[var(--amber-elixir)]" : "text-[var(--warm-stone)] group-hover:text-[var(--amber-elixir)]"
                    }`}>
                      {item.icon}
                    </span>
                    <span className={`font-body text-xs sm:text-[13px] font-medium leading-tight transition-colors duration-300 ${
                      selected ? "text-[var(--apothecary-black)]" : "text-[var(--warm-stone)]"
                    }`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ─── Step 2: Health Profile ─── */}
        {step === 2 && (
          <div>
            <div className="text-center mb-10">
              <p className="font-accent text-[var(--amber-elixir)] text-lg mb-2">Step 2 of 5</p>
              <h3 className="font-heading text-[var(--apothecary-black)] text-fluid-subtitle font-semibold mb-3">
                Tell us about your body
              </h3>
              <p className="font-body text-[var(--warm-stone)] text-sm max-w-lg mx-auto">
                Everything you share stays confidential and helps us create a safer, more effective blend.
              </p>
            </div>
            <div className="max-w-2xl mx-auto space-y-8">
              {/* Physical concerns */}
              <div>
                <label htmlFor="physical" className="block font-body text-[var(--apothecary-black)] text-sm font-medium mb-2">
                  Describe any physical ailments, health concerns, or conditions
                </label>
                <textarea
                  id="physical"
                  value={physicalConcerns}
                  onChange={(e) => setPhysicalConcerns(e.target.value)}
                  placeholder="e.g., chronic tension headaches, trouble falling asleep, digestive discomfort after meals..."
                  rows={3}
                  className="w-full px-4 py-3 min-h-[44px] bg-[var(--bone)] border border-[var(--warm-stone)]/20 font-body text-sm text-[var(--apothecary-black)] placeholder:text-[var(--warm-stone)]/50 focus:border-[var(--amber-elixir)] focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              {/* Emotional concerns */}
              <div>
                <label htmlFor="emotional" className="block font-body text-[var(--apothecary-black)] text-sm font-medium mb-2">
                  Any mental/emotional concerns?
                </label>
                <textarea
                  id="emotional"
                  value={emotionalConcerns}
                  onChange={(e) => setEmotionalConcerns(e.target.value)}
                  placeholder="e.g., anxiety, brain fog, low energy in afternoons, seasonal mood changes..."
                  rows={3}
                  className="w-full px-4 py-3 min-h-[44px] bg-[var(--bone)] border border-[var(--warm-stone)]/20 font-body text-sm text-[var(--apothecary-black)] placeholder:text-[var(--warm-stone)]/50 focus:border-[var(--amber-elixir)] focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              {/* Health flags */}
              <div>
                <p className="font-body text-[var(--apothecary-black)] text-sm font-medium mb-3">
                  Any of these apply?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {healthFlags.map((flag) => {
                    const selected = selectedFlags.includes(flag);
                    return (
                      <button
                        key={flag}
                        onClick={() => toggleFlag(flag)}
                        aria-pressed={selected}
                        className={`flex items-center gap-3 px-4 py-3 min-h-[44px] text-left transition-all duration-300 border ${
                          selected
                            ? "border-[var(--amber-elixir)] bg-[var(--amber-elixir)]/5"
                            : "border-[var(--warm-stone)]/20 bg-[var(--bone)] hover:border-[var(--amber-elixir)]/40"
                        }`}
                      >
                        <span className={`w-5 h-5 flex-shrink-0 rounded border flex items-center justify-center transition-all duration-300 ${
                          selected
                            ? "border-[var(--amber-elixir)] bg-[var(--amber-elixir)]"
                            : "border-[var(--warm-stone)]/30"
                        }`}>
                          {selected && (
                            <svg className="w-3 h-3 text-[var(--parchment)]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        <span className="font-body text-sm text-[var(--apothecary-black)]">{flag}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── Step 3: Herb Preferences ─── */}
        {step === 3 && (
          <div>
            <div className="text-center mb-10">
              <p className="font-accent text-[var(--amber-elixir)] text-lg mb-2">Step 3 of 5</p>
              <h3 className="font-heading text-[var(--apothecary-black)] text-fluid-subtitle font-semibold mb-3">
                Your Herb Preferences
              </h3>
              <p className="font-body text-[var(--warm-stone)] text-sm max-w-lg mx-auto">
                Optionally tell us which herbs you love or want to avoid. This helps Tess personalize your blend.
              </p>
            </div>

            {/* Search filter */}
            <div className="max-w-4xl mx-auto mb-8">
              <input
                type="text"
                value={herbSearch}
                onChange={(e) => setHerbSearch(e.target.value)}
                placeholder="Search herbs..."
                className="w-full px-4 py-3 min-h-[44px] bg-[var(--bone)] border border-[var(--warm-stone)]/20 font-body text-sm text-[var(--apothecary-black)] placeholder:text-[var(--warm-stone)]/50 focus:border-[var(--amber-elixir)] focus:outline-none transition-colors duration-300"
              />
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* ── Herbs I Love ── */}
              <div>
                <h4 className="font-heading text-[var(--apothecary-black)] text-lg font-semibold mb-1 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[var(--amber-elixir)]/60 inline-block" />
                  Herbs I Love
                </h4>
                <p className="font-body text-[var(--warm-stone)] text-xs mb-5">
                  Select any you especially want included
                </p>
                <div className="space-y-6">
                  {filteredCategories.map((cat) => (
                    <div key={`love-${cat.label}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-body text-xs font-semibold uppercase tracking-wider text-[var(--warm-stone)]">
                          {cat.label}
                        </span>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => selectAllLovedInCategory(cat.herbs)}
                            className="font-body text-[10px] uppercase tracking-wider text-[var(--amber-elixir)] hover:underline"
                          >
                            Select all
                          </button>
                          <span className="text-[var(--warm-stone)]/30">|</span>
                          <button
                            type="button"
                            onClick={() => clearLovedInCategory(cat.herbs)}
                            className="font-body text-[10px] uppercase tracking-wider text-[var(--warm-stone)] hover:underline"
                          >
                            Clear
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.herbs.map((herb) => {
                          const loved = lovedHerbs.includes(herb.id);
                          return (
                            <button
                              key={`love-${herb.id}`}
                              type="button"
                              onClick={() => toggleLoved(herb.id)}
                              aria-pressed={loved}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-body text-xs transition-all duration-300 border ${
                                loved
                                  ? "border-[var(--amber-elixir)] bg-[var(--amber-elixir)]/10 text-[var(--apothecary-black)] shadow-[0_0_0_1px_var(--amber-elixir)]"
                                  : "border-[var(--warm-stone)]/20 bg-[var(--bone)] text-[var(--warm-stone)] hover:border-[var(--amber-elixir)]/40"
                              }`}
                            >
                              <span className="font-medium">{herb.name}</span>
                              <span className={`hidden sm:inline text-[10px] ${loved ? "text-[var(--warm-stone)]" : "text-[var(--warm-stone)]/60"}`}>
                                — {herb.desc}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Herbs to Exclude ── */}
              <div>
                <h4 className="font-heading text-[var(--apothecary-black)] text-lg font-semibold mb-1 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[var(--ritual-rose)]/60 inline-block" />
                  Herbs to Exclude
                </h4>
                <p className="font-body text-[var(--warm-stone)] text-xs mb-5">
                  Select any you do NOT want in your blend
                </p>
                <div className="space-y-6">
                  {filteredCategories.map((cat) => (
                    <div key={`excl-${cat.label}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-body text-xs font-semibold uppercase tracking-wider text-[var(--warm-stone)]">
                          {cat.label}
                        </span>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => selectAllExcludedInCategory(cat.herbs)}
                            className="font-body text-[10px] uppercase tracking-wider text-[var(--ritual-rose)] hover:underline"
                          >
                            Select all
                          </button>
                          <span className="text-[var(--warm-stone)]/30">|</span>
                          <button
                            type="button"
                            onClick={() => clearExcludedInCategory(cat.herbs)}
                            className="font-body text-[10px] uppercase tracking-wider text-[var(--warm-stone)] hover:underline"
                          >
                            Clear
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {cat.herbs.map((herb) => {
                          const excluded = excludedHerbs.includes(herb.id);
                          return (
                            <button
                              key={`excl-${herb.id}`}
                              type="button"
                              onClick={() => toggleExcluded(herb.id)}
                              aria-pressed={excluded}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-body text-xs transition-all duration-300 border ${
                                excluded
                                  ? "border-[var(--ritual-rose)] bg-[var(--ritual-rose)]/10 text-[var(--warm-stone)] opacity-75 line-through shadow-[0_0_0_1px_var(--ritual-rose)]"
                                  : "border-[var(--warm-stone)]/20 bg-[var(--bone)] text-[var(--warm-stone)] hover:border-[var(--ritual-rose)]/40"
                              }`}
                            >
                              <span className="font-medium">{herb.name}</span>
                              <span className={`hidden sm:inline text-[10px] ${excluded ? "text-[var(--warm-stone)]/60" : "text-[var(--warm-stone)]/60"}`}>
                                — {herb.desc}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── Step 4: Preferences ─── */}
        {step === 4 && (
          <div>
            <div className="text-center mb-10">
              <p className="font-accent text-[var(--amber-elixir)] text-lg mb-2">Step 4 of 5</p>
              <h3 className="font-heading text-[var(--apothecary-black)] text-fluid-subtitle font-semibold mb-3">
                Your preferences
              </h3>
              <p className="font-body text-[var(--warm-stone)] text-sm max-w-lg mx-auto">
                How do you like your tea? Let us know so we can craft something you&apos;ll love.
              </p>
            </div>
            <div className="max-w-2xl mx-auto space-y-10">
              {/* Flavor profile */}
              <div>
                <p className="font-body text-[var(--apothecary-black)] text-sm font-medium mb-3">Flavor profile</p>
                <div className="flex flex-wrap gap-2">
                  {flavorProfiles.map((fp) => (
                    <button
                      key={fp.id}
                      onClick={() => setFlavor(fp.id)}
                      aria-pressed={flavor === fp.id}
                      className={`px-5 py-3 min-h-[44px] font-body text-sm transition-all duration-300 border ${
                        flavor === fp.id
                          ? "border-[var(--amber-elixir)] bg-[var(--amber-elixir)]/5 text-[var(--apothecary-black)] shadow-[0_0_0_1px_var(--amber-elixir)]"
                          : "border-[var(--warm-stone)]/20 bg-[var(--bone)] text-[var(--warm-stone)] hover:border-[var(--amber-elixir)]/40"
                      }`}
                    >
                      {fp.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Caffeine */}
              <div>
                <p className="font-body text-[var(--apothecary-black)] text-sm font-medium mb-3">Caffeine preference</p>
                <div className="flex flex-wrap gap-2">
                  {caffeineOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setCaffeine(opt.id)}
                      aria-pressed={caffeine === opt.id}
                      className={`px-5 py-3 min-h-[44px] font-body text-sm transition-all duration-300 border ${
                        caffeine === opt.id
                          ? "border-[var(--amber-elixir)] bg-[var(--amber-elixir)]/5 text-[var(--apothecary-black)] shadow-[0_0_0_1px_var(--amber-elixir)]"
                          : "border-[var(--warm-stone)]/20 bg-[var(--bone)] text-[var(--warm-stone)] hover:border-[var(--amber-elixir)]/40"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Format */}
              <div>
                <p className="font-body text-[var(--apothecary-black)] text-sm font-medium mb-3">Format</p>
                <div className="flex flex-wrap gap-2">
                  {formatOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setFormat(opt.id)}
                      aria-pressed={format === opt.id}
                      className={`px-5 py-3 min-h-[44px] font-body text-sm transition-all duration-300 border ${
                        format === opt.id
                          ? "border-[var(--amber-elixir)] bg-[var(--amber-elixir)]/5 text-[var(--apothecary-black)] shadow-[0_0_0_1px_var(--amber-elixir)]"
                          : "border-[var(--warm-stone)]/20 bg-[var(--bone)] text-[var(--warm-stone)] hover:border-[var(--amber-elixir)]/40"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <p className="font-body text-[var(--apothecary-black)] text-sm font-medium mb-3">Blend size</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {sizeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setSize(opt.id)}
                      aria-pressed={size === opt.id}
                      className={`p-4 min-h-[44px] text-center transition-all duration-300 border ${
                        size === opt.id
                          ? "border-[var(--amber-elixir)] bg-[var(--amber-elixir)]/5 shadow-[0_0_0_1px_var(--amber-elixir)]"
                          : "border-[var(--warm-stone)]/20 bg-[var(--bone)] hover:border-[var(--amber-elixir)]/40"
                      }`}
                    >
                      <span className="block font-body text-sm font-medium text-[var(--apothecary-black)]">
                        {opt.label}
                      </span>
                      <span className="block font-heading text-xl font-semibold text-[var(--amber-elixir)] mt-1">
                        ${opt.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── Step 5: Contact & Summary ─── */}
        {step === 5 && (
          <div>
            <div className="text-center mb-10">
              <p className="font-accent text-[var(--amber-elixir)] text-lg mb-2">Step 5 of 5</p>
              <h3 className="font-heading text-[var(--apothecary-black)] text-fluid-subtitle font-semibold mb-3">
                Almost ready
              </h3>
              <p className="font-body text-[var(--warm-stone)] text-sm max-w-lg mx-auto">
                A few last details, then Tess will get to work on your blend.
              </p>
            </div>
            <div className="max-w-2xl mx-auto space-y-8">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="blend-name" className="block font-body text-[var(--apothecary-black)] text-sm font-medium mb-2">
                    Your name *
                  </label>
                  <input
                    id="blend-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 min-h-[44px] bg-[var(--bone)] border border-[var(--warm-stone)]/20 font-body text-sm text-[var(--apothecary-black)] placeholder:text-[var(--warm-stone)]/50 focus:border-[var(--amber-elixir)] focus:outline-none transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="blend-email" className="block font-body text-[var(--apothecary-black)] text-sm font-medium mb-2">
                    Email address *
                  </label>
                  <input
                    id="blend-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 min-h-[44px] bg-[var(--bone)] border border-[var(--warm-stone)]/20 font-body text-sm text-[var(--apothecary-black)] placeholder:text-[var(--warm-stone)]/50 focus:border-[var(--amber-elixir)] focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="blend-notes" className="block font-body text-[var(--apothecary-black)] text-sm font-medium mb-2">
                  Anything else Tess should know? <span className="text-[var(--warm-stone)]/50 font-normal">(optional)</span>
                </label>
                <textarea
                  id="blend-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 min-h-[44px] bg-[var(--bone)] border border-[var(--warm-stone)]/20 font-body text-sm text-[var(--apothecary-black)] placeholder:text-[var(--warm-stone)]/50 focus:border-[var(--amber-elixir)] focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              {/* Summary */}
              <div className="border border-[var(--warm-stone)]/20 p-6 bg-[var(--bone)]">
                <h4 className="font-heading text-[var(--apothecary-black)] text-lg font-semibold mb-4">
                  Your Blend Summary
                </h4>
                <div className="space-y-3 font-body text-sm">
                  <div className="flex justify-between">
                    <span className="text-[var(--warm-stone)]">Intentions</span>
                    <span className="text-[var(--apothecary-black)] text-right max-w-[60%]">
                      {selectedIntentions
                        .map((id) => intentions.find((i) => i.id === id)?.label)
                        .join(", ") || "—"}
                    </span>
                  </div>
                  {lovedHerbs.length > 0 && (
                    <>
                      <div className="h-px bg-[var(--warm-stone)]/10" />
                      <div className="flex justify-between">
                        <span className="text-[var(--warm-stone)]">Loved Herbs</span>
                        <span className="text-[var(--apothecary-black)] text-right max-w-[60%]">
                          {lovedHerbs.map((id) => allHerbs.find((h) => h.id === id)?.name).join(", ")}
                        </span>
                      </div>
                    </>
                  )}
                  {excludedHerbs.length > 0 && (
                    <>
                      <div className="h-px bg-[var(--warm-stone)]/10" />
                      <div className="flex justify-between">
                        <span className="text-[var(--warm-stone)]">Excluded Herbs</span>
                        <span className="text-[var(--warm-stone)] text-right max-w-[60%] line-through opacity-75">
                          {excludedHerbs.map((id) => allHerbs.find((h) => h.id === id)?.name).join(", ")}
                        </span>
                      </div>
                    </>
                  )}
                  <div className="h-px bg-[var(--warm-stone)]/10" />
                  <div className="flex justify-between">
                    <span className="text-[var(--warm-stone)]">Flavor</span>
                    <span className="text-[var(--apothecary-black)] capitalize">
                      {flavorProfiles.find((f) => f.id === flavor)?.label || "—"}
                    </span>
                  </div>
                  <div className="h-px bg-[var(--warm-stone)]/10" />
                  <div className="flex justify-between">
                    <span className="text-[var(--warm-stone)]">Caffeine</span>
                    <span className="text-[var(--apothecary-black)] capitalize">
                      {caffeineOptions.find((c) => c.id === caffeine)?.label || "—"}
                    </span>
                  </div>
                  <div className="h-px bg-[var(--warm-stone)]/10" />
                  <div className="flex justify-between">
                    <span className="text-[var(--warm-stone)]">Format</span>
                    <span className="text-[var(--apothecary-black)] capitalize">
                      {formatOptions.find((f) => f.id === format)?.label || "—"}
                    </span>
                  </div>
                  <div className="h-px bg-[var(--warm-stone)]/10" />
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--warm-stone)]">Size</span>
                    <span className="text-[var(--apothecary-black)] font-semibold">
                      {selectedSize.label} — ${selectedSize.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="font-body text-[var(--warm-stone)] text-xs leading-relaxed text-center">
                Tess will review your profile and craft your blend within 5-7 business days.
                You&apos;ll receive an email with your custom blend details and ingredient list before it ships.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between max-w-2xl mx-auto mt-12">
        {step > 1 ? (
          <button
            onClick={() => goTo(step - 1)}
            className="px-6 py-3 min-h-[44px] font-body text-sm font-medium text-[var(--warm-stone)] border border-[var(--warm-stone)]/30 hover:border-[var(--forest-veil)] hover:text-[var(--forest-veil)] transition-all duration-300"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        {step < totalSteps ? (
          <button
            onClick={() => canProceed() && goTo(step + 1)}
            disabled={!canProceed()}
            className={`btn-glow px-8 py-3 min-h-[44px] font-body text-sm font-bold tracking-[0.06em] uppercase transition-all duration-300 ${
              canProceed()
                ? "bg-[var(--forest-veil)] text-[var(--parchment)] hover:bg-[var(--apothecary-black)]"
                : "bg-[var(--warm-stone)]/20 text-[var(--warm-stone)]/50 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        ) : (
          <button
            onClick={() => canProceed() && handleSubmit()}
            disabled={!canProceed()}
            className={`btn-glow px-8 py-3 min-h-[44px] font-body text-sm font-bold tracking-[0.06em] uppercase transition-all duration-300 ${
              canProceed()
                ? "bg-[var(--amber-elixir)] text-[var(--parchment)] hover:bg-[var(--forest-veil)]"
                : "bg-[var(--warm-stone)]/20 text-[var(--warm-stone)]/50 cursor-not-allowed"
            }`}
          >
            Submit &amp; Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
