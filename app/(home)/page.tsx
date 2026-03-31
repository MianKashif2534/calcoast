import { Hero } from "./components/Hero";
import { FreightServices } from "./components/FreightServices";
import { StatsSection } from "./components/StatsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { CoverageSection } from "./components/CoverageSection";

import { QuoteFormSection } from "../contact/components/QuoteFormSection";
import { ContactUsSection } from "../contact/components/ContactUsSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Hero />
      <FreightServices />
      <StatsSection />
      <ReviewsSection />
      <CoverageSection />

      <QuoteFormSection />
      <ContactUsSection />
    </div>
  );
}
