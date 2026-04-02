import { PageHero } from "@/app/components/PageHero";
import aboutHero from "@/app/assets/about.png";

export function AboutPage() {
  return (
    <div className="bg-white text-black">
      <PageHero
        subtitle="About Us"
        title="About Cal Coast Logistics"
        description="Fresno's trusted freight partner delivering reliability, safety, and excellence across the nation since 2015."
        image={aboutHero}
      />

      <main className="mx-auto max-w-7xl px-4">
        {/* About content below */}
      </main>
    </div>
  );
}
