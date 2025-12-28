import { ArrowRight, Zap, Wrench, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductGrid } from '../components/products'

export default function TitaniumLaser() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden" style={{ paddingTop: '15px' }}>
        {/* Video Background */}
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-red-900/50 to-blue-900/70 z-10"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>

        <div className="relative z-20 w-full mx-auto px-6 md:px-8 text-left pt-20">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur">
            <Zap size={16} className="text-red-400" />
            <span className="text-red-300 text-sm font-semibold">Advanced Laser Systems</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 animate-fade-in-up">
            Titanium <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-emerald-400 to-cyan-400">Laser</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Advanced laser machinery with cutting, welding, marking, and cleaning capabilities plus comprehensive training and lifetime support.
          </p>

          <div className="flex gap-4 flex-wrap mb-22 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-linear-to-r from-red-600 to-red-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-red-500 hover:to-red-400" to="/contact">
              Learn More
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-linear-to-b from-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Multi-Function Capability',
                description: 'Cutting, welding, marking, and cleaning - all in one advanced laser system.'
              },
              {
                icon: Wrench,
                title: 'Full Training Program',
                description: 'Comprehensive operator training ensuring your team maximizes system capabilities.'
              },
              {
                icon: Award,
                title: 'Lifetime Support',
                description: 'Dedicated technical support, maintenance, and continuous system optimization.'
              }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-red-500/50 transition-all">
                  <Icon className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ProductGrid 
        products={[
          {
            id: 'laser-cutting-system',
            name: 'Laser Cutting System',
            description: 'Precision laser cutting machine for metals and non-metals with advanced automation.',
            features: [
              'High-speed cutting',
              'Precision accuracy',
              'Material versatility',
              'Maintenance included'
            ]
          },
          {
            id: 'laser-welding-system',
            name: 'Laser Welding System',
            description: 'Advanced laser welding technology for strong, clean welds on various materials.',
            features: [
              'High-quality welds',
              'Minimal distortion',
              'Automation ready',
              'Training provided'
            ]
          },
          {
            id: 'laser-marking-system',
            name: 'Laser Marking System',
            description: 'Industrial laser marking and engraving system for product identification.',
            features: [
              'Permanent marking',
              'High-speed operation',
              'Material flexibility',
              'Lifetime support'
            ]
          }
        ]}
        title="Titanium Laser Systems"
        description="Advanced laser technology solutions for your industrial needs"
      />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-linear-to-r from-red-900/30 via-red-900/20 to-blue-900/30 border-y border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Production
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Discover how Titanium Laser systems can elevate your manufacturing capabilities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-linear-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-600 transition-all"
            >
              Explore Solutions
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
