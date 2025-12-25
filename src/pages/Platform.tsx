import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Shield, Users, Zap, Settings, Wrench, Lightbulb, Cpu, Search, Package, Check, Eye, Lock, CreditCard, Scissors, Flame, FlaskConical } from 'lucide-react'

export default function MachineExchangePlatform() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white pt-20 overflow-hidden">
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

        <div className="relative z-20 w-full mx-auto px-6 md:px-8 text-left mt-4">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur">
            <Globe size={16} className="text-red-400" />
            <span className="text-red-300 text-sm font-semibold">Digital Marketplace</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 animate-fade-in-up">
            Machine Exchange <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-emerald-400 to-cyan-400">Platform</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            The digital marketplace connecting equipment suppliers, manufacturers, and enterprises for transparent machine trading.
          </p>

          <div className="flex gap-4 flex-wrap mb-22 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-linear-to-r from-red-600 to-red-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-red-500 hover:to-red-400" to="/contact">
              Join Waitlist
              <ArrowRight size={20} />
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base bg-white/10 text-white border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1" to="/contact">
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-32 bg-linear-to-b from-black to-black/80">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">About The Platform</p>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">What is the Platform?</h2>
                <div className="w-20 h-1 bg-linear-to-r from-red-600 to-transparent"></div>
              </div>

              <p className="text-white/80 text-lg leading-relaxed">
                The Machine Exchange Platform is a digital marketplace designed to make industrial equipment trading transparent, accessible, and efficient. It connects suppliers, buyers, and financing partners in one integrated system.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Zap, title: 'Equipment Listings', desc: 'Browse vetted machines from verified suppliers' },
                  { icon: Shield, title: 'Financing Integration', desc: 'Access structured payment options directly' },
                  { icon: Users, title: 'Support Services', desc: 'Training, installation, and support included' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-linear-to-br from-red-600/20 to-red-600/5 border border-red-600/30 flex items-center justify-center group-hover:border-red-600/60 transition-all duration-300">
                      <item.icon className="text-red-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-8">For Everyone</h3>
                <div className="space-y-6">
                  {[
                    { role: 'Suppliers', desc: 'Reach more buyers across Africa with verified credentials' },
                    { role: 'Manufacturers', desc: 'Find equipment that meets your needs with financing' },
                    { role: 'Enterprises', desc: 'Scale production with access to quality equipment' },
                    { role: 'Training Centers', desc: 'Equip facilities with demonstration equipment' }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <h4 className="text-red-400 font-semibold mb-2">{item.role}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">How It Works</h2>
            <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Create Account', description: 'Sign up as a supplier, buyer, or service provider' },
              { step: '2', title: 'Browse or List', description: 'Find equipment or post machines for sale' },
              { step: '3', title: 'Connect & Quote', description: 'Connect with suppliers and receive quotes' },
              { step: '4', title: 'Arrange & Deploy', description: 'Finalize terms and schedule delivery' }
            ].map((item, idx) => (
              <div key={item.step} className="relative group">
                {/* Connection Line */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-24 left-full w-8 h-0.5 bg-linear-to-r from-red-600/60 to-transparent"></div>
                )}

                <div className="bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2 h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-linear-to-br from-red-600 to-red-700 text-white font-bold text-lg mb-6 shadow-lg group-hover:shadow-red-600/50 transition-all duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold mb-3 text-lg">{item.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Categories Section */}
      <section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Browse</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Machine Categories</h2>
            <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'Fabrication Equipment', Icon: Settings },
              { category: 'Manufacturing Machinery', Icon: Wrench },
              { category: 'Processing Equipment', Icon: Zap },
              { category: 'Laser Systems', Icon: Lightbulb },
              { category: 'Automation Equipment', Icon: Cpu },
              { category: 'Welding Systems', Icon: Flame },
              { category: 'Cutting Machines', Icon: Scissors },
              { category: 'Inspection Equipment', Icon: Search },
              { category: 'Material Handling', Icon: Package },
              { category: 'Quality Control', Icon: Check },
              { category: 'Test Equipment', Icon: FlaskConical },
              { category: 'Support Equipment', Icon: Wrench }
            ].map((item, idx) => (
              <button
                key={idx}
                className="group relative"
              >
                <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2 text-left">
                  <div className="mb-4"><item.Icon className="text-red-400" size={32} /></div>
                  <h3 className="text-white font-semibold group-hover:text-red-400 transition-colors">{item.category}</h3>
                  <p className="text-white/70 text-sm mt-2">Browse equipment in this category</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding CTA Section */}
      <section className="py-32 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'I\'m a Buyer',
                description: 'Looking for industrial equipment to scale your operations',
                cta: 'Browse Equipment',
                href: '/contact',
                icon: '🛒'
              },
              {
                title: 'I\'m a Supplier',
                description: 'Want to reach more customers and expand your market',
                cta: 'List Your Machines',
                href: '/contact',
                icon: '📤'
              },
              {
                title: 'I\'m a Service Provider',
                description: 'Offering financing, installation, or training services',
                cta: 'Partner With Us',
                href: '/partners',
                icon: '🤝'
              }
            ].map((option, idx) => (
              <div key={idx} className="group">
                <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2 text-center">
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3 className="text-white text-xl font-semibold mb-4">{option.title}</h3>
                  <p className="text-white/70 text-sm mb-8 leading-relaxed">{option.description}</p>
                  <Link
                    to={option.href}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg hover:shadow-red-600/50 hover:-translate-y-1"
                  >
                    {option.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Advantages</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Platform Benefits</h2>
            <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Transparency', description: 'Clear pricing, specifications, and terms for all transactions', Icon: Eye },
              { title: 'Efficiency', description: 'Streamlined process from browsing to delivery', Icon: Zap },
              { title: 'Trust', description: 'Vetted suppliers and secure transactions', Icon: Lock },
              { title: 'Support', description: 'Training, installation, and technical assistance included', Icon: Users },
              { title: 'Financing', description: 'Integrated flexible payment and financing options', Icon: CreditCard },
              { title: 'Scale', description: 'Access to equipment across Africa and beyond', Icon: Globe }
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-linear-to-br from-red-600/20 to-red-600/5 border border-red-600/30">
                    <benefit.Icon className="text-red-400" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2 text-lg">{benefit.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-linear-to-b from-black to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-r from-red-600/10 via-transparent to-blue-600/10"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Join the Machine Exchange Platform</h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Be among the first to access transparent, efficient machine trading across Africa. Simple, secure, and seamless.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-xl hover:shadow-red-600/50 hover:-translate-y-1" to="/contact">
              Join Waitlist
              <ArrowRight size={20} />
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 font-semibold rounded-lg hover:bg-white/20 hover:border-white transition-all duration-300 hover:-translate-y-1" to="/contact">
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
