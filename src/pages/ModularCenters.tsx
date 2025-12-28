import {
  ModularCentersHero,
  ModularCentersOverview,
  ModularCenterTypes,
  ModularCentersBenefits,
  ModularCentersCTA
} from '../components/modularCenters'

export default function ModularCenters() {
  return (
    <>
      <ModularCentersHero />
      <ModularCentersOverview />
      <ModularCenterTypes />
      <ModularCentersBenefits />
      <ModularCentersCTA />
    </>
  )
}
