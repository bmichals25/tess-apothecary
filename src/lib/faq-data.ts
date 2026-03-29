export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    title: "Products",
    items: [
      {
        question: "What are the ingredients in each blend?",
        answer:
          "Every ingredient is listed on our product pages and on the tin/pouch labels. All herbs are sourced from trusted suppliers and blended in small batches. We use no artificial flavors, colors, or preservatives. Just plants, as nature intended.",
      },
      {
        question: "Do any of the blends contain caffeine?",
        answer:
          "Most of our blends are naturally caffeine-free. Sun Tonic contains moderate caffeine from green tea (~25-30mg per cup). Shadow Work has trace caffeine from cacao (~5mg). Eventide Elixir, Inner Sight, and Heart Opener are all 100% caffeine-free.",
      },
      {
        question: "Are your teas organic?",
        answer:
          "We source organic ingredients wherever possible, and the majority of our herbs are certified organic. However, we are not yet certified organic as a blending operation \u2014 that certification is on our roadmap. All of our ingredients are ethically sourced and free from pesticides and synthetic chemicals.",
      },
      {
        question: "Are your blends safe for people with allergies?",
        answer:
          "Our blends are free from the top 8 FDA-recognized allergens. However, chamomile (in Eventide Elixir) is in the ragweed/daisy family \u2014 if you have ragweed allergies, consult your healthcare provider. We always recommend reading the full ingredient list and consulting with a healthcare provider if you have severe allergies.",
      },
      {
        question: "Are your teas safe during pregnancy or breastfeeding?",
        answer:
          "Please consult your healthcare provider before consuming herbal teas during pregnancy or breastfeeding. Several of our ingredients \u2014 including valerian, passionflower, ashwagandha, and ginkgo biloba \u2014 are generally not recommended during pregnancy. We\u2019d rather you ask and sip safely than worry.",
      },
      {
        question: "Can I drink these teas if I\u2019m taking medications?",
        answer:
          "Herbal teas can interact with certain medications. Key interactions include valerian/passionflower with sedatives, green tea with blood thinners, ashwagandha with thyroid medications, and ginkgo with blood thinners and NSAIDs. Please consult your healthcare provider or pharmacist before incorporating our blends into your routine.",
      },
      {
        question: "How do I brew each blend for the best experience?",
        answer:
          "Each blend has its own ideal brewing ritual. Use 1 tablespoon per 8 oz of water, and always cover your cup while steeping. Eventide Elixir: 200\u00b0F, 5-7 min. Sun Tonic: 175\u00b0F, 3-4 min. Shadow Work: 205\u00b0F, 7-10 min. Inner Sight: 200\u00b0F, 5-7 min. Heart Opener: 212\u00b0F, 5-7 min.",
      },
      {
        question: "What is the shelf life of your blends?",
        answer:
          "Properly stored, our blends stay fresh and potent for 12-18 months from the date of blending. Keep tins sealed tightly, store in a cool dry dark place, and keep away from strong-smelling foods. Don\u2019t refrigerate or freeze.",
      },
      {
        question: "Are your products vegan and gluten-free?",
        answer:
          "Yes to both. All five of our blends and the Ritual Kit are 100% plant-based, vegan, gluten-free, free from dairy, eggs, soy, and nuts, free from artificial additives, and non-GMO. Our teas are simply plants \u2014 nothing more, nothing less.",
      },
      {
        question: "What is the Ritual Kit, and is it a good gift?",
        answer:
          "The Ritual Kit is our signature collection \u2014 a sampler of all five blends with an intention-setting guide card, a dried flower sprig, branded tissue paper, and a wax seal. It\u2019s our most-gifted product, perfect for anyone who loves wellness, self-care, or beautiful things.",
      },
      {
        question: "Do you sell loose leaf tea or tea bags?",
        answer:
          "Our blends are available as loose leaf tea for the fullest flavor. We recommend a simple tea infuser or strainer. Pre-portioned biodegradable tea sachets are on our product roadmap \u2014 stay tuned.",
      },
      {
        question: "Can I brew your teas as iced tea?",
        answer:
          "Absolutely. Cold brew method: Add 2 tbsp to 16 oz room-temperature water, steep in the fridge for 8-12 hours. Quick-brew: Brew strong and hot with 2x tea, then pour over a full glass of ice. Best iced: Heart Opener, Sun Tonic, and Inner Sight.",
      },
      {
        question: "How much tea is in each tin/pouch?",
        answer:
          "Each individual blend contains approximately 2 oz (56g) of loose leaf tea, yielding about 20-25 cups. The Ritual Kit has sample portions for 3-4 cups of each blend (15-20 cups total). At one cup per day, a tin lasts about three weeks.",
      },
    ],
  },
  {
    title: "Orders & Shipping",
    items: [
      {
        question: "How long does it take to process my order?",
        answer:
          "We prepare each order by hand, so please allow 1-3 business days for processing. During busy seasons, processing may take up to 5 business days. You\u2019ll receive a shipping confirmation email with tracking as soon as your order ships.",
      },
      {
        question: "What are the shipping options and costs?",
        answer:
          "Standard (USPS First Class): 3-7 business days, $4.95. Expedited (USPS Priority): 2-3 business days, $8.95. Free Standard Shipping on orders over $45. Delivery times are estimates from the date of shipment.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Not yet, but it\u2019s on our horizon. We currently ship to all 50 U.S. states. Sign up for our email list and we\u2019ll announce international shipping as soon as it\u2019s available.",
      },
      {
        question: "How do I track my order?",
        answer:
          "Once your order ships, you\u2019ll receive a shipping confirmation email with a tracking number and link. You can also view tracking in your account dashboard under Order History.",
      },
      {
        question:
          'My tracking says "delivered" but I haven\u2019t received my order.',
        answer:
          "Check around your delivery area, wait 24 hours (tracking can update prematurely), and check with others at your address. If it\u2019s been 48 hours, email us at support@tessapothecary.com and we\u2019ll make it right.",
      },
      {
        question: "Can I change or cancel my order after placing it?",
        answer:
          "We can only guarantee changes or cancellations within 2 hours of placing your order. Email support@tessapothecary.com immediately. Once packed or shipped, we\u2019re unable to modify orders.",
      },
      {
        question: "Can I send an order as a gift?",
        answer:
          "Absolutely! During checkout, ship to a different address, add a gift message, and select gift wrapping for an extra-special unboxing. Pricing and order details are never included in gift shipments.",
      },
      {
        question: "What happens if my order arrives damaged?",
        answer:
          "Email support@tessapothecary.com within 7 days of delivery with your order number and photos. We\u2019ll send a replacement at no cost, no return required.",
      },
    ],
  },
  {
    title: "Returns & Exchanges",
    items: [
      {
        question: "What is your return policy?",
        answer:
          "Unopened products can be returned within 30 days for a full refund (minus original shipping). We can\u2019t accept returns on opened teas for food safety, but reach out \u2014 we may offer store credit or brewing suggestions. We care more about your happiness than a strict policy.",
      },
      {
        question: "What if I just don\u2019t like the flavor of a blend?",
        answer:
          "Taste is personal! We can suggest brewing adjustments (steep time, water temp, adding honey or milk). If you\u2019ve only tried one cup, we may offer a one-time exchange or store credit. Take our quiz for a better recommendation next time.",
      },
      {
        question: "How do I initiate a return?",
        answer:
          "Email support@tessapothecary.com with your order number, items to return, and reason. We\u2019ll respond within 24 hours. Return shipping is the customer\u2019s responsibility unless the return is due to our error. Refunds process within 5-7 business days.",
      },
      {
        question: "Can I exchange one blend for another?",
        answer:
          "We don\u2019t offer direct exchanges, but you can return an unopened blend and place a new order. If we sent the wrong blend, we\u2019ll ship the correct one immediately at no charge.",
      },
      {
        question: "I received the wrong item. What do I do?",
        answer:
          "Email support@tessapothecary.com with your order number and a photo. We\u2019ll ship the correct item immediately at no cost. You\u2019re welcome to keep the wrong item as a gift from us.",
      },
      {
        question: "How long does it take to receive my refund?",
        answer:
          "1-2 business days for inspection, refund issued within 24 hours of approval, then 5-10 business days to appear in your account depending on your bank.",
      },
    ],
  },
  {
    title: "Account & Payments",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept Visa, Mastercard, American Express, Discover, Apple Pay, Google Pay, and Shop Pay. All transactions are securely processed and encrypted.",
      },
      {
        question: "Do I need to create an account to place an order?",
        answer:
          "Not at all \u2014 guest checkout is always available. Creating an account gives you order history, saved addresses, faster checkout, loyalty points, and early access to new blends.",
      },
      {
        question: "Is my payment information secure?",
        answer:
          "Absolutely. We use SSL encryption, PCI-DSS compliant payment processing, and never store your full credit card number. If you notice an unauthorized charge, contact us immediately.",
      },
      {
        question: "Can I use a discount code?",
        answer:
          "Yes! Enter your code in the Discount Code field at checkout. One code per order, codes cannot be combined with other promotions unless stated, and codes have expiration dates.",
      },
      {
        question: "Will I be charged sales tax?",
        answer:
          "Sales tax is calculated based on your shipping address in accordance with local and state tax laws. You\u2019ll see the exact amount at checkout before completing your purchase.",
      },
    ],
  },
];
