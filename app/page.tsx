import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PainSection from "./components/PainSection";
import WhySection from "./components/WhySection";
import FeaturesSection from "./components/FeaturesSection";
import DashboardSection from "./components/DashboardSection";
import BenefitsSection from "./components/BenefitsSection";
import ForWhoSection from "./components/ForWhoSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1" style={{ background: '#000a14', color: '#e8f4ff' }}>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PainSection />
        <WhySection />
        <FeaturesSection />
        <DashboardSection />
        <BenefitsSection />
        <ForWhoSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
