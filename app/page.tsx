import HeroSection from "@/components/home/HeroSection";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import FeaturedPackageShowcase from "@/components/home/FeaturedPackageShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import WhyAerova from "@/components/home/WhyAerova";
import TravelStatistics from "@/components/home/TravelStatistics";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TravelExperiences from "@/components/home/TravelExperiences";
import TravelJournalSection from "@/components/home/TravelJournalSection";
import DarkCTASection from "@/components/home/DarkCTASection";
import InstagramGallery from "@/components/home/InstagramGallery";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturedDestinations />
      <FeaturedPackageShowcase />
      <HowItWorks />
      <WhyAerova />
      <TravelStatistics />
      <TravelExperiences />
      <TestimonialsSection />
      <TravelJournalSection />
      <DarkCTASection />
      <InstagramGallery />
    </div>
  );
}
