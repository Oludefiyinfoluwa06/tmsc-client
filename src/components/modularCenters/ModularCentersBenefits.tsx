import { DollarSign, GraduationCap, Building, Handshake, BarChart3, Sprout } from 'lucide-react'

export default function ModularCentersBenefits() {
  return (
    <section className="py-32 bg-black/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Advantages</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Why Partner With Us?</h2>
          <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Economic Impact', description: 'Create local jobs and generate sustainable economic activity', Icon: DollarSign },
            { title: 'Skill Development', description: 'Build workforce capabilities aligned with industry needs', Icon: GraduationCap },
            { title: 'Infrastructure', description: 'Establish modern manufacturing capacity in your region', Icon: Building },
            { title: 'Partnerships', description: 'Connect with government, TVET, and industry stakeholders', Icon: Handshake },
            { title: 'Revenue', description: 'Generate income through production and training services', Icon: BarChart3 },
            { title: 'Sustainability', description: 'Build long-term competitive advantage for your community', Icon: Sprout }
          ].map((benefit, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-red-600/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2 text-center flex flex-col items-center">
                <div className="mb-4"><benefit.Icon className="text-red-400" size={40} /></div>
                <h3 className="text-white font-semibold mb-3 text-lg">{benefit.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
