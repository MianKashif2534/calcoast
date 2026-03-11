import { Hero } from "@/app/components/Hero";
import { Navbar } from "@/app/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <Hero />
    </div>
  );
}
