import { Link } from 'react-router-dom'
import { ArrowRight, Factory, Zap, Cog, TrendingUp, Globe } from 'lucide-react'

export default function DigitalProductionNodes() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden" style={{ paddingTop: '15px' }}>
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1766813852/WhatsApp_Video_2025-12-22_at_9.17.20_PM_am07yf.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-red-900/50 to-blue-900/70 z-10"></div>

        <div className="relative z-20 w-full mx-auto px-6 md:px-8 text-left pt-20">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur">
            <Factory size={16} className="text-red-400" />
            <span className="text-red-300 text-sm font-semibold">Digital Production Nodes</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
            DIGITAL <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-emerald-400 to-cyan-400">PRODUCTION NODES</span>
          </h1>

          <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Commissioned industrial infrastructure, delivered through modular architecture.
          </p>

          <div className="flex gap-4 flex-wrap mb-22 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-linear-to-r from-red-600 to-red-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1" to="/contact">
              Deploy a Digital Production Node
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Introductory Copy */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="space-y-6 mb-12">
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-900">Digital Production Nodes are production-ready industrial systems designed to bring manufacturing capacity closer to demand, without long construction cycles or idle assets.</p>
            <p className="text-lg leading-relaxed text-gray-700">Each node is delivered as a fully commissioned production environment, embedding skills transfer directly into live operations and enabling immediate output.</p>
          </div>
        </div>
      </section>

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

      {/* Core Sections - What We Build, etc. */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="space-y-16">
            {/* What We Build */}
            <div className="pb-12 border-b border-gray-200">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Build</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Machine & Skills designs, deploys, and operates Digital Production Nodes. Each node is a fully commissioned industrial production system, delivered through modular industrial architecture to ensure speed, consistency, and repeatability across locations. These are not training facilities. They are operational production environments where skills are transferred through execution, not simulation.</p>
            </div>

            {/* What Is a DPN */}
            <div className="pb-12 border-b border-gray-200">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Is a Digital Production Node?</h3>
              <p className="text-lg text-gray-700 mb-6">A Digital Production Node is a standardised industrial production unit designed to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Commence production immediately upon commissioning',
                  'Transfer skills through real production workflows',
                  'Digitally track utilisation, uptime, performance, and output',
                  'Scale across locations through replication, not redesign'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <span className="text-red-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Modular */}
            <div className="pb-12 border-b border-gray-200">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Modular Matters</h3>
              <p className="text-lg text-gray-700 mb-6">Modular is not about temporary structures. Modular is about speed, certainty, and control.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Deployment in months, not years',
                  'Standardised costs, specifications, and timelines',
                  'Predictable operational performance',
                  'Rapid replication across states, sectors, and operators'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-red-50 rounded-lg p-4 border border-red-100">
                    <span className="text-red-600 font-bold mt-1">→</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Production First */}
            <div className="pb-12 border-b border-gray-200">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Production First. Skills Through Execution.</h3>
              <p className="text-lg text-gray-700 mb-6">Skills are not developed in isolation. They are transferred inside working production lines, under real operating conditions, using commissioned equipment, and producing measurable output.</p>
              <div className="space-y-3 mb-6">
                {[
                  'Job-ready operators',
                  'Immediate economic activity',
                  'Traceable productivity from day one'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-700">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-600 pl-6 py-4">
                <p className="text-gray-900 font-semibold">Training is not an add-on. It is a by-product of production.</p>
              </div>
            </div>

            {/* Who We Work With */}
            <div className="pb-12 border-b border-gray-200">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Who We Work With</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  'Governments and public institutions',
                  'Industrial agencies and development bodies',
                  'Private operators and manufacturing partners'
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                    <p className="text-gray-900 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-700 mt-8 font-medium">Our role is to activate industrial capacity, not simply install equipment.</p>
            </div>

            {/* Operating Focus */}
            <div className="pb-12 border-b border-gray-200">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Operating Focus</h3>
              <p className="text-lg text-gray-700 mb-6">To maintain delivery speed, accountability, and production readiness, Digital Production Nodes are structured with a clear operational focus:</p>
              <div className="space-y-4">
                {[
                  { title: 'Skills Transfer', desc: 'Within live production environments, not classroom or theory-led formats' },
                  { title: 'Complete Systems', desc: 'Deployed as complete operating systems, including workflows, supervision, and digital tracking' },
                  { title: 'Immediate Activity', desc: 'Commissioned with defined production use-cases to ensure immediate activity' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-red-50 to-transparent rounded-lg p-6 border border-red-100">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scale */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Designed for Scale</h3>
              <div className="bg-gray-100 rounded-xl p-8 mb-8">
                <p className="text-lg text-gray-800 leading-relaxed">Digital Production Nodes are designed to scale by default. Each deployment strengthens a wider network of production capacity, skilled labour, and operational data, forming a distributed industrial backbone capable of national expansion.</p>
              </div>

              <div className="text-center bg-gray-100 rounded-xl p-12 text-gray-800">
                <p className="text-2xl font-bold">Production first. Skills through execution. Scale by design.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
