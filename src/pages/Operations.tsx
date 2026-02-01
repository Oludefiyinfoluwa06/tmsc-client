import {
  ModularCentersHero,
  ModularCentersOverview,
  ModularCenterTypes,
  ModularCentersBenefits,
  ModularCentersCTA
} from '../components/modularCenters'
import CentersList from '../components/modularCenters/CentersList'

export default function Operations() {
  return (
    <>
      <ModularCentersHero />
      <ModularCentersOverview />
      <CentersList />
      <ModularCenterTypes />
      <ModularCentersBenefits />
      <ModularCentersCTA />
    </>
  )
}
