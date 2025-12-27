import {
  MachineExchangeProgramHero,
  MachineExchangeProgramOverview,
  MachineExchangeProgramHowItWorks,
  MachineExchangeProgramCategories,
  MachineExchangeProgramCTA
} from '../components/machineExchangeProgram'

export default function MachineExchangeProgram() {
  return (
    <>
      <MachineExchangeProgramHero />
      <MachineExchangeProgramOverview />
      <MachineExchangeProgramHowItWorks />
      <MachineExchangeProgramCategories />
      <MachineExchangeProgramCTA />
    </>
  )
}
