import HeroSection from "@/components/HeroSection";
import RitualKitFeature from "@/components/RitualKitFeature";
import ProductGrid from "@/components/ProductGrid";
import BrandStory from "@/components/BrandStory";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import NewsletterSignup from "@/components/NewsletterSignup";
import InstagramSection from "@/components/InstagramSection";
import BotanicalDivider from "@/components/BotanicalDivider";
import CustomBlendCTA from "@/components/CustomBlendCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BotanicalDivider variant="herbs" className="bg-[var(--parchment)] pt-6 pb-2" />
      <RitualKitFeature />
      <BotanicalDivider variant="leaves" className="bg-[var(--bone)] pt-2 pb-2" color="var(--forest-veil)" />
      <ProductGrid />
      <BotanicalDivider variant="moon" className="bg-[var(--apothecary-black)] pt-4 pb-0" color="var(--amber-elixir)" />
      <BrandStory />
      <BotanicalDivider variant="simple" className="bg-[var(--parchment)] pt-2 pb-2" />
      <HowItWorks />
      <CustomBlendCTA />
      <BotanicalDivider variant="stars" className="bg-[var(--linen)] pt-2 pb-2" color="var(--warm-stone)" />
      <Testimonials />
      <NewsletterSignup />
      <BotanicalDivider variant="herbs" className="bg-[var(--parchment)] pt-4 pb-2" color="var(--forest-veil)" />
      <InstagramSection />
    </>
  );
}
