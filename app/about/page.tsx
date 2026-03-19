import { AboutPage } from "./components/AboutPage";
import HomeAboutSection from "@/app/(home)/components/HomeAboutSection";
import { CoreValuesSection } from "./components/CoreValuesSection";
import { CompanyTimeline } from "./components/CompanyTimeline";
import { Stats } from "./components/Stats";

export default function About() {
  return (
    <>
      <AboutPage />
      <HomeAboutSection />
      <CoreValuesSection />
      <CompanyTimeline />
      <Stats />
    </>
  );
}
