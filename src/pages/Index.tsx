import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import FeaturedPropertiesSection from "@/components/FeaturedPropertiesSection";
import LuxuryPropertiesSection from "@/components/LuxuryPropertiesSection";
import EnhancedTestimonialsSection from "@/components/EnhancedTestimonialsSection";
import TrustedPartnersSection from "@/components/TrustedPartnersSection";
import StatsSection from "@/components/StatsSection";
import AppPreviewSection from "@/components/AppPreviewSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <FeaturedPropertiesSection />
      <LuxuryPropertiesSection />
      <EnhancedTestimonialsSection />
      <TrustedPartnersSection />
      <StatsSection />
      <AppPreviewSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
