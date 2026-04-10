import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import AboutSection from "@/components/AboutSection";
import WhoCanParticipate from "@/components/WhoCanParticipate";
import ScheduleSection from "@/components/ScheduleSection";
import EventSegments from "@/components/EventSegments";
import SectionsDetail from "@/components/SectionsDetail";
import JudgeSection from "@/components/JudgeSection";
import RulesSection from "@/components/RulesSection";
import RegistrationSection from "@/components/RegistrationSection";
import TermsSection from "@/components/TermsSection";
import FAQSection from "@/components/FAQSection";
import ComingSoonSection from "@/components/ComingSoonSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <main className="bg-background min-h-screen">
    <HeroSection />
    <MarqueeStrip />
    <ComingSoonSection />
    <AboutSection />
    <EventSegments />
    <ScheduleSection />
    <WhoCanParticipate />
    <MarqueeStrip />
    <SectionsDetail />
    <JudgeSection />
    <RulesSection />
    <RegistrationSection />
    <FAQSection />
    <MarqueeStrip />
    <FooterSection />
    <WhatsAppButton />
  </main>
);

export default Index;
