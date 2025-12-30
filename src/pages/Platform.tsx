import {
  PlatformHero,
  PlatformWhatIsSection,
  PlatformHowItWorks,
  PlatformBenefits,
  PlatformCTA
} from '../components/platform'
import MachineExchangeSummary from '../components/platform/MachineExchangeSummary'

export default function MachineExchangePlatform() {
  return (
    <>
      <PlatformHero />
      <PlatformWhatIsSection />
      <MachineExchangeSummary />
      <PlatformHowItWorks />
      <PlatformBenefits />
      <PlatformCTA />
    </>
  )
}
