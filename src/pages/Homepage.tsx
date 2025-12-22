import HeroSection from '../components/home/HeroSection'
import PathwaysSection from '../components/home/PathwaysSection'
import PillarsSection from '../components/home/PillarsSection'
import CorridorSection from '../components/home/CorridorSection'
import CredibilitySection from '../components/home/CredibilitySection'
import CTASection from '../components/home/CTASection'

export default function Homepage() {
  return (
    <div className="w-full">
      <HeroSection />
      <PathwaysSection />
      <PillarsSection />
      <CorridorSection />
      <CredibilitySection />
      <CTASection />
    </div>
  )
}
