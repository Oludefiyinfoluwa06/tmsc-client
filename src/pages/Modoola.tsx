import { ArrowRight, Building2, Users, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductGrid } from '../components/products'

export default function Modoola() {
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
          <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1766446396/hero-vid_oj6v2d.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-red-900/50 to-blue-900/70 z-10"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>

        <div className="relative z-20 w-full mx-auto px-6 md:px-8 text-left pt-20">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur">
            <Building2 size={16} className="text-red-400" />
            <span className="text-red-300 text-sm font-semibold">Modular Industrial Centers</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 animate-fade-in-up">
            MODOOLA <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-emerald-400 to-cyan-400">Infrastructure</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Deployable modular centers that bring industrial capacity and training closer to demand across Africa.
          </p>

          <div className="flex gap-4 flex-wrap mb-22 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-linear-to-r from-red-600 to-red-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-red-500 hover:to-red-400" to="/contact">
              Request Concept Pack
              <ArrowRight size={20} />
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base bg-white/10 text-white border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1" to="/modular-centers">
              Learn More
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
                icon: Building2,
                title: 'Modular Design',
                description: 'Scalable, deployable infrastructure that adapts to local needs and can be rapidly established.'
              },
              {
                icon: Users,
                title: 'Skills Integration',
                description: 'TVET partnerships and comprehensive training programs embedded in each center.'
              },
              {
                icon: MapPin,
                title: 'Regional Hubs',
                description: 'Strategic placement across Africa for maximum accessibility and economic impact.'
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
            id: 'modular-center-basic',
            name: 'Basic Modular Center',
            description: 'Entry-level modular industrial center with essential equipment and setup.',
            price: 'Contact for pricing',
            features: [
              'Standard equipment package',
              'Basic training included',
              'Regional deployment',
              '1-year warranty'
            ]
          },
          {
            id: 'modular-center-pro',
            name: 'Professional Modular Center',
            description: 'Advanced modular center with enhanced capabilities and features.',
            price: 'Contact for pricing',
            features: [
              'Premium equipment package',
              'Comprehensive training',
              'Maintenance support',
              '2-year warranty'
            ]
          },
          {
            id: 'modular-center-enterprise',
            name: 'Enterprise Modular Center',
            description: 'Complete enterprise solution with full customization and support.',
            price: 'Contact for pricing',
            features: [
              'Fully customizable setup',
              'Advanced training program',
              'Priority support',
              '3-year warranty'
            ]
          }
        ]}
        title="Modular Center Solutions"
        description="Choose the modular center package that fits your manufacturing needs"
      />
    </div>
  )
}
