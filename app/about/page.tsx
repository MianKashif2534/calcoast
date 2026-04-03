import { AboutPage } from "./components/AboutPage";
import { AboutGallerySection } from "./components/AboutGallerySection";
import HomeAboutSection from "@/app/(home)/components/HomeAboutSection";
import { CoreValuesSection } from "./components/CoreValuesSection";
import { CompanyTimeline } from "./components/CompanyTimeline";
import { StatsSection } from "@/app/(home)/components/StatsSection";

export default function About() {
  return (
    <>
      <AboutPage />
      <HomeAboutSection />
      <AboutGallerySection />
      <CoreValuesSection />
      <CompanyTimeline />
      <StatsSection />
    </>
  );
}
