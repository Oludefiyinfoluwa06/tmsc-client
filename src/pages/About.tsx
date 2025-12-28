import HeroSection from '../components/about/HeroSection';
import EngagementHighlights from '../components/about/EngagementHighlights';
import VisionMission from '../components/about/VisionMission';
import EquipmentExchangeProgram from '../components/about/EquipmentExchangeProgram';
import SystemSection from '../components/about/SystemSection';
import CTASection from '../components/about/CTASection';

export default function About() {
  return (
    <>
      <HeroSection />
      <EngagementHighlights />
      <VisionMission />
      <EquipmentExchangeProgram />
      <SystemSection />
      <CTASection />
    </>
  );
}
