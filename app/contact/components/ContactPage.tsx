import { PageHero } from "@/app/components/PageHero";
import { ContactUsSection } from "./ContactUsSection";
import { QuoteFormSection } from "./QuoteFormSection";
import contactHero from "@/app/assets/aboutHeroSection.png"; // 👈 apni image

export function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHero
        subtitle="Get In Touch"
        title="Contact Us"
        description="Ready to ship? Have questions? Our team is here to help 24/7."
        image={contactHero} // 👈 yaha add karo
      />

      <ContactUsSection />
      <QuoteFormSection />
    </div>
  );
}
