import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import SectionsDetail from "@/components/SectionsDetail";
import RulesSection from "@/components/RulesSection";
import RegistrationSection from "@/components/RegistrationSection";
import TermsSection from "@/components/TermsSection";
import FAQSection from "@/components/FAQSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <main className="bg-background min-h-screen">
    <HeroSection />
    <MarqueeStrip />
    <AboutSection />
    <ScheduleSection />
    <MarqueeStrip />
    <SectionsDetail />
    <RulesSection />
    <RegistrationSection />
    <TermsSection />
    <FAQSection />
    <ComingSoonSection />
    <MarqueeStrip />
    <FooterSection />
  </main>
);

export default Index;
