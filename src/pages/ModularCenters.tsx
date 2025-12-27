import {
  ModularCentersHero,
  ModularCentersOverview,
  ModularCenterTypes,
  ModularCentersSiteProgress,
  ModularCentersBenefits,
  ModularCentersCTA
} from '../components/modularCenters'

export default function ModularCenters() {
  return (
    <>
      <ModularCentersHero />
      <ModularCentersOverview />
      <ModularCenterTypes />
      <ModularCentersSiteProgress />
      <ModularCentersBenefits />
      <ModularCentersCTA />
    </>
  )
}
