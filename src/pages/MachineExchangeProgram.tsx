import {
  MachineExchangeProgramHero,
  MachineExchangeProgramOverview,
  MachineExchangeProgramHowItWorks,
  MachineExchangeProgramCTA
} from '../components/machineExchangeProgram'

export default function MachineExchangeProgram() {
  return (
    <>
      <MachineExchangeProgramHero />
      <MachineExchangeProgramOverview />
      <MachineExchangeProgramHowItWorks />
      <MachineExchangeProgramCTA />
    </>
  )
}
