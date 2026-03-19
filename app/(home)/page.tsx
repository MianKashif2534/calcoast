import { Hero } from "./components/Hero";
import HomeAboutSection from "./components/HomeAboutSection";
import { FreightServices } from "./components/FreightServices";
import { StatsSection } from "./components/StatsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { CoverageSection } from "./components/CoverageSection";
import { QuoteSection } from "./components/QuoteSection";
import { ContactSection } from "./components/ContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Hero />
      <HomeAboutSection />
      <FreightServices />
      <StatsSection />
      <ReviewsSection />
      <CoverageSection />
      <QuoteSection />
      <ContactSection />
    </div>
  );
}
