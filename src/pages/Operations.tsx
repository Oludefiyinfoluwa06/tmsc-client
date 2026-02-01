import {
  ModularCentersHero,
  ModularCentersOverview,
  ModularCenterTypes,
  ModularCentersBenefits,
  ModularCentersCTA
} from '../components/modularCenters'
import CentersList from '../components/modularCenters/CentersList'
import { ArrowRight, Zap, Cog, TrendingUp, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Operations() {
  return (
    <>
      <ModularCentersHero />
      {/* <ModularCentersOverview /> */}
      <CentersList />
      <ModularCenterTypes />
      <ModularCentersBenefits />

      {/* What DPN Delivers - Card Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What a Digital Production Node Delivers</h2>
            <div className="w-16 h-1 bg-linear-to-r from-red-600 to-red-600/20 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: Zap, title: 'Immediate Production', desc: 'Production capability upon commissioning' },
              { icon: Cog, title: 'Modular Deployment', desc: 'Speed, repeatability, and scale' },
              { icon: TrendingUp, title: 'Digital Monitoring', desc: 'Accountability and performance tracking' },
              { icon: Globe, title: 'Skills Transfer', desc: 'Embedded in real production workflows' }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-500/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <div className="relative">
                    <Icon className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <p className="text-lg font-semibold text-gray-900">Production first. Skills are a consequence.</p>
          </div>
        </div>
      </section>

      {/* How Nodes Are Deployed */}
      <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How Nodes Are Deployed</h2>
            <p className="text-xl text-gray-700">Commissioned, Not Booked</p>
            <div className="w-16 h-1 bg-linear-to-r from-red-600 to-red-600/20 mx-auto mt-4"></div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-10 md:p-12 mb-12 shadow-sm hover:shadow-md transition-all">
            <p className="text-lg text-gray-700 mb-6">Digital Production Nodes are not shared-use facilities. They are:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Commissioned', desc: 'By governments, institutions, or operators' },
                { title: 'Deployed', desc: 'For defined production objectives' },
                { title: 'Operated', desc: 'As part of a wider industrial network' }
              ].map((item, idx) => (
                <div key={idx} className="pl-6 border-l-4 border-red-600">
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-linear-to-r from-red-600 to-red-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              Deploy a Digital Production Node
              <ArrowRight size={20} />
            </Link>
            <div className="inline-flex items-center gap-4 text-sm">
              <Link to="/operations" className="text-gray-700 font-medium hover:text-red-600 transition-colors">View Operational Nodes</Link>
              <span className="text-gray-300">•</span>
              <Link to="/projects" className="text-gray-700 font-medium hover:text-red-600 transition-colors">See Deployed Systems</Link>
            </div>
          </div>
        </div>
      </section>

      <ModularCentersCTA />
    </>
  )
}
