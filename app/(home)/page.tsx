import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { FreightServices } from "./components/FreightServices";
import { StatsSection } from "./components/StatsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { CoverageSection } from "./components/CoverageSection";
import { QuoteSection } from "./components/QuoteSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Hero />
      <About />
      <FreightServices />
      <StatsSection />
      <ReviewsSection />
      <CoverageSection />
      <QuoteSection />
    </div>
  );
}
