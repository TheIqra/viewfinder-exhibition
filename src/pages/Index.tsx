import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import SectionsDetail from "@/components/SectionsDetail";
import RulesSection from "@/components/RulesSection";
import RegistrationSection from "@/components/RegistrationSection";
import TermsSection from "@/components/TermsSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <main className="bg-background min-h-screen">
    <HeroSection />
    <AboutSection />
    <ScheduleSection />
    <SectionsDetail />
    <RulesSection />
    <RegistrationSection />
    <TermsSection />
    <ComingSoonSection />
    <FooterSection />
  </main>
);

export default Index;
