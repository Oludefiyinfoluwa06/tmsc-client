import HeroSection from '../components/home/HeroSection'
import PillarsSection from '../components/home/PillarsSection'
import CredibilitySection from '../components/home/CredibilitySection'
import CTASection from '../components/home/CTASection'

export default function Homepage() {
  return (
    <div className="w-full">
      <HeroSection />
      <PillarsSection />
      <CredibilitySection />
      <CTASection />
    </div>
  )
}
