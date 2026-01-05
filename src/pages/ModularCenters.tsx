import {
  ModularCentersHero,
  ModularCentersOverview,
  ModularCenterTypes,
  ModularCentersBenefits,
  ModularCentersCTA
} from '../components/modularCenters'
import CentersList from '../components/modularCenters/CentersList'

export default function ModularCenters() {
  return (
    <>
      <ModularCentersHero />
      <ModularCentersOverview />

      {/* Centers listing with placeholder data for now */}
      <CentersList />

      <ModularCenterTypes />
      <ModularCentersBenefits />
      <ModularCentersCTA />
    </>
  )
}
