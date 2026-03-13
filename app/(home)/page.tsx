import { Hero } from "./components/Hero";
import { About } from "./components/About";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Hero/>
      <About/>
    </div>
  );
}
