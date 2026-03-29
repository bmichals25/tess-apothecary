import HeroSection from "@/components/HeroSection";
import RitualKitFeature from "@/components/RitualKitFeature";
import ProductGrid from "@/components/ProductGrid";
import BrandStory from "@/components/BrandStory";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import NewsletterSignup from "@/components/NewsletterSignup";
import InstagramSection from "@/components/InstagramSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <RitualKitFeature />
      <ProductGrid />
      <BrandStory />
      <HowItWorks />
      <Testimonials />
      <NewsletterSignup />
      <InstagramSection />
    </>
  );
}
