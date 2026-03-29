export interface Product {
  slug: string;
  name: string;
  price: number;
  category: string;
  tagline: string;
  description: string;
  ingredients: string[];
  ingredientDetails: string;
  caffeine: string;
  waterTemp: string;
  steepTime: string;
  bestWith: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  iconEmoji: string;
}

export const products: Product[] = [
  {
    slug: "eventide-elixir",
    name: "Eventide Elixir",
    price: 18,
    category: "Evening",
    tagline: "Nighttime Ritual Blend",
    description:
      "The day is done. The screens are dark. This is the hour that belongs to you.\n\nEventide Elixir is our invitation to exhale. Organic chamomile and passionflower quiet the noise, while valerian root eases you toward the kind of sleep that actually restores. Dried lavender adds a whisper of calm that lingers long after the last sip.\n\nBest brewed by moonlight. Best enjoyed in your favorite mug, in your favorite corner, with nowhere else to be.",
    ingredients: ["Chamomile", "Lavender", "Valerian Root", "Passionflower"],
    ingredientDetails:
      "Organic chamomile flowers, organic dried lavender, organic valerian root, organic passionflower herb",
    caffeine: "Caffeine-free",
    waterTemp: "200\u00b0F (just below boiling)",
    steepTime: "5-7 minutes",
    bestWith: "A drizzle of honey, an hour before bed",
    accentColor: "#3D3B6B",
    gradientFrom: "#1A1A1A",
    gradientTo: "#3D3B6B",
    iconEmoji: "\u263D",
  },
  {
    slug: "sun-tonic",
    name: "Sun Tonic",
    price: 18,
    category: "Morning",
    tagline: "Energizing Morning Blend",
    description:
      "The sun is barely up and already the world wants something from you. Before you give it away, take this.\n\nSun Tonic is morning as it should be \u2014 gentle caffeine from green tea that wakes without jittering, ginger that warms from the inside out, turmeric that lights you up like actual gold, and lemon balm to keep anxiety from claiming your first hours.\n\nThis is your morning before the morning takes over.",
    ingredients: ["Green Tea", "Ginger Root", "Turmeric", "Lemon Balm"],
    ingredientDetails:
      "Organic green tea leaves, organic ginger root, organic turmeric root, organic lemon balm leaf",
    caffeine: "Moderate (25-30mg, about 1/3 cup of coffee)",
    waterTemp: "175\u00b0F (slightly cooled)",
    steepTime: "3-4 minutes",
    bestWith: "A squeeze of fresh lemon, first thing in the morning",
    accentColor: "#E5A830",
    gradientFrom: "#2D4A3E",
    gradientTo: "#E5A830",
    iconEmoji: "\u2600",
  },
  {
    slug: "shadow-work",
    name: "Shadow Work",
    price: 22,
    category: "Grounding",
    tagline: "Deep Grounding Blend",
    description:
      "For the days when you need roots, not wings.\n\nShadow Work is the blend for going inward. Reishi mushroom \u2014 the ancient adaptogen monks brewed for meditation \u2014 meets ashwagandha to steady your nervous system. Ceylon cinnamon adds warmth to the work, and raw cacao brings just enough richness to make the journey sweet.\n\nThis is not a light cup of tea. This is the one you brew when you\u2019re ready to sit with what comes up.",
    ingredients: [
      "Reishi Mushroom",
      "Ashwagandha",
      "Ceylon Cinnamon",
      "Cacao Nibs",
    ],
    ingredientDetails:
      "Organic reishi mushroom, organic ashwagandha root, organic Ceylon cinnamon bark, organic raw cacao nibs, organic black pepper (for absorption)",
    caffeine: "Trace (very low, ~5mg from cacao)",
    waterTemp: "205\u00b0F (just off the boil)",
    steepTime: "7-10 minutes",
    bestWith: "A splash of oat milk and honey, during journaling",
    accentColor: "#4A3428",
    gradientFrom: "#1A1A1A",
    gradientTo: "#4A3428",
    iconEmoji: "\u2727",
  },
  {
    slug: "inner-sight",
    name: "Inner Sight",
    price: 22,
    category: "Focus",
    tagline: "Clarity & Focus Blend",
    description:
      "Somewhere beneath the noise, you already know the answer.\n\nInner Sight is the blend that clears the fog. Peppermint sharpens the senses, rosemary \u2014 the herb of remembrance \u2014 calls you back to yourself, and ginkgo biloba opens the pathways. Lion\u2019s mane mushroom, the nootropic beloved by monks and makers alike, supports cognitive clarity without a single milligram of caffeine.\n\nBrew this before creative work. Before decisions. Before any moment that asks you to see clearly.",
    ingredients: [
      "Peppermint",
      "Rosemary",
      "Ginkgo Biloba",
      "Lion\u2019s Mane Mushroom",
    ],
    ingredientDetails:
      "Organic peppermint leaf, organic rosemary leaf, organic ginkgo biloba leaf, organic lion\u2019s mane mushroom fruiting body",
    caffeine: "Caffeine-free",
    waterTemp: "200\u00b0F (just below boiling)",
    steepTime: "5-7 minutes",
    bestWith:
      "Nothing needed \u2014 the peppermint speaks for itself. Before creative work.",
    accentColor: "#3A7D7B",
    gradientFrom: "#2D4A3E",
    gradientTo: "#3A7D7B",
    iconEmoji: "\u2726",
  },
  {
    slug: "heart-opener",
    name: "Heart Opener",
    price: 18,
    category: "Love",
    tagline: "Love & Compassion Blend",
    description:
      "Some days your chest feels tight and you can\u2019t name why. This blend is for those days.\n\nHeart Opener is rose petals and hibiscus \u2014 the flowers that have symbolized love across every culture that ever grew them. Hawthorn berry, the herbalist\u2019s heart tonic, supports emotional and cardiovascular ease. Cardamom adds warmth and a whisper of spice that makes the whole cup feel like being held.\n\nBrew this when you need softness. When you want to give love, receive it, or simply remember that you deserve it.",
    ingredients: [
      "Rose Petals",
      "Hibiscus",
      "Hawthorn Berry",
      "Cardamom",
    ],
    ingredientDetails:
      "Organic rose petals, organic hibiscus flowers, organic hawthorn berry, organic green cardamom pods",
    caffeine: "Caffeine-free",
    waterTemp: "212\u00b0F (full boil)",
    steepTime: "5-7 minutes",
    bestWith: "A touch of honey if desired. When you need softness.",
    accentColor: "#D4908E",
    gradientFrom: "#B5706E",
    gradientTo: "#D4908E",
    iconEmoji: "\u2661",
  },
  {
    slug: "the-ritual-kit",
    name: "The Ritual Kit",
    price: 58,
    category: "Sampler",
    tagline: "All 5 Blends + Intention-Setting Guide",
    description:
      "The complete Tess\u2019s Apothecary experience in one beautiful box.\n\nThe Ritual Kit contains sample-size portions of all five blends \u2014 enough for 3-4 cups of each \u2014 plus our signature intention-setting guide card with a prompt for each blend. It arrives wrapped in branded tissue paper with a dried flower sprig and wax seal.\n\nThis is how most people begin their journey with the Apothecary. It\u2019s also the most-gifted item in our collection \u2014 perfect for anyone who loves wellness, ritual, beautiful things, or simply deserves a reminder to slow down.",
    ingredients: [
      "Eventide Elixir sample",
      "Sun Tonic sample",
      "Shadow Work sample",
      "Inner Sight sample",
      "Heart Opener sample",
      "Intention-Setting Guide Card",
    ],
    ingredientDetails:
      "Includes sample portions of all five blends. See individual blend pages for full ingredient lists.",
    caffeine: "Varies by blend",
    waterTemp: "See individual blends",
    steepTime: "See individual blends",
    bestWith: "A quiet evening and a willingness to begin",
    accentColor: "#D4A843",
    gradientFrom: "#1A1A1A",
    gradientTo: "#D4A843",
    iconEmoji: "\u2728",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export const categories = [
  "All",
  "Morning",
  "Evening",
  "Grounding",
  "Focus",
  "Love",
  "Sampler",
];
