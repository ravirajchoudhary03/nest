import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ImportantDates from "@/components/ImportantDates";
import EligibilitySection from "@/components/EligibilitySection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ImportantDates />
      <EligibilitySection />
      <Footer />
      <ScrollToTop />
    </>
  );
}
