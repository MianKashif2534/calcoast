import { PageHero } from "@/app/components/PageHero";

export function WhyUsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <PageHero
        subtitle="5.0 Rated Carrier"
        title="Why Choose Cal Coast?"
        description="Discover what sets us apart from the competition and why brokers trust us with their freight."
      />
      <main className="mx-auto max-w-7xl px-4 py-16">
        {/* Why Us content below */}
      </main>
    </div>
  );
}
