import { Link } from 'react-router-dom'
import { ArrowRight, Factory, TrendingUp, CheckCircle, Building2, Users } from 'lucide-react'

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
          <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1771450258/tmsc-hero_pguscb.mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-red-900/50 to-blue-900/70 z-10"></div>

        <div className="relative z-20 w-full mx-auto px-6 md:px-8 text-left pt-20">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur">
            <Factory size={16} className="text-red-400" />
            <span className="text-red-300 text-sm font-semibold">Digital Production Nodes</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
            Digital Production Nodes
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
      <section className="py-20 md:py-32 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">What Are Digital Production Nodes?</h2>
                <div className="w-20 h-1 bg-linear-to-r from-red-600 to-red-600/20"></div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                Digital Production Nodes are deployable production infrastructure that bring world-class manufacturing capability to regional locations. They integrate production equipment, embedded skills transfer workflows, and support services in one integrated facility.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Building2, title: 'Modular Design', desc: 'Configured and deployed based on regional needs' },
                  { icon: Users, title: 'Embedded Skills Transfer', desc: 'TVET partnerships and operator programs' },
                  { icon: TrendingUp, title: 'Revenue Generation', desc: 'Productive while transferring operational skills' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center group-hover:border-red-500/30 transition-all duration-300">
                      <item.icon className="text-red-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-blue-500/5 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Components</h3>
                <ul className="space-y-4">
                  {[
                    'State-of-the-art production equipment',
                    'Hands-on training workshops',
                    'Support service facilities',
                    'Professional management team',
                    'Quality assurance systems'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <CheckCircle className="text-red-600 shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                  <div key={idx} className="bg-linear-to-r from-red-50 to-transparent rounded-lg p-6 border border-red-100">
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
