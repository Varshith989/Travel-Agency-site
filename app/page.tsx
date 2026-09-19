import HeroSection from "@/components/home/HeroSection";
import SearchPanel from "@/components/home/SearchPanel";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import TravelExperiences from "@/components/home/TravelExperiences";
import FeaturedPackageShowcase from "@/components/home/FeaturedPackageShowcase";
import WhyAerova from "@/components/home/WhyAerova";
import HowItWorks from "@/components/home/HowItWorks";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TravelStatistics from "@/components/home/TravelStatistics";
import TravelJournalSection from "@/components/home/TravelJournalSection";
import InstagramGallery from "@/components/home/InstagramGallery";
import DarkCTASection from "@/components/home/DarkCTASection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <SearchPanel />
      <FeaturedDestinations />
      <TravelExperiences />
      <FeaturedPackageShowcase />
      <WhyAerova />
      <HowItWorks />
      <TestimonialsSection />
      <TravelStatistics />
      <TravelJournalSection />
      <InstagramGallery />
      <DarkCTASection />
    </div>
  );
}

