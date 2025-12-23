import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import PillarsSection from '../components/home/PillarsSection'
import CorridorSection from '../components/home/CorridorSection'
import CredibilitySection from '../components/home/CredibilitySection'
import CTASection from '../components/home/CTASection'

export default function Homepage() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <CorridorSection />
      <CredibilitySection />
      <CTASection />
    </div>
  )
}
