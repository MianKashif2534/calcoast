import { PageHero } from "@/app/components/PageHero";
import { WhyUsCtaSection } from "./WhyUsCtaSection";
import { WhyUsFleetSection } from "./WhyUsFleetSection";
import { WhyUsStrengthsSection } from "./WhyUsStrengthsSection";
import whyUsHero from "@/app/assets/WhyusHeroSection.png"; // 👈 apni hero image

export function WhyUsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHero
        subtitle="5.0 Rated Carrier"
        title="Why Choose Cal Coast?"
        description="Discover what sets us apart from the competition and why brokers trust us with their freight."
        image={whyUsHero} // 👈 yaha add karo
      />

      <WhyUsFleetSection />
      <WhyUsStrengthsSection />
      <WhyUsCtaSection />
    </div>
  );
}
