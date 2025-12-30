import { Wrench } from 'lucide-react'

export default function MachineExchangeSummary() {
  return (
    <section className="py-16 bg-linear-to-b from-slate-900 to-black border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-white">
        <div className="flex items-start gap-4 mb-6">
          <Wrench className="w-10 h-10 text-red-400" />
          <div>
            <h3 className="text-2xl font-semibold">Machine Exchange — In a nutshell</h3>
            <p className="text-gray-400">Our Machine Exchange program helps you acquire, upgrade and operate industrial machinery.</p>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <li className="bg-gray-900/40 p-6 rounded-lg border border-gray-800">
            <h4 className="font-semibold text-white mb-2">1. Buying machines</h4>
            <p className="text-gray-400 text-sm">Access new and vetted industrial equipment for your operation.</p>
          </li>

          <li className="bg-gray-900/40 p-6 rounded-lg border border-gray-800">
            <h4 className="font-semibold text-white mb-2">2. Upgrading equipment</h4>
            <p className="text-gray-400 text-sm">Trade in older machines for newer models with tailored upgrade options.</p>
          </li>

          <li className="bg-gray-900/40 p-6 rounded-lg border border-gray-800">
            <h4 className="font-semibold text-white mb-2">3. Training & maintenance</h4>
            <p className="text-gray-400 text-sm">Receive operator training and ongoing maintenance guidance to maximize uptime.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}
