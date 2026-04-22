import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import PainSection from './components/PainSection';
import WhySection from './components/WhySection';
import FlowSection from './components/FlowSection';
import PricingSection from './components/PricingSection';
import TrainerSection from './components/TrainerSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import CounselingForm from './components/CounselingForm';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <PainSection />
        <WhySection />
        <FlowSection />
        <PricingSection />
        <TrainerSection />
        <TestimonialSection />
        <FAQSection />
        <CounselingForm />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
