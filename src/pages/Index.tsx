import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SolutionSection from "@/components/SolutionSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <HeroSection />
      <SolutionSection />
      <AboutSection />
      <FAQSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
