import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp, Users, Settings, Wrench, Plug, BookOpen, Target } from 'lucide-react'

export default function MachineExchangeProgram() {
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
            <Zap size={16} className="text-red-400" />
            <span className="text-red-300 text-sm font-semibold">Industrial Transformation</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 animate-fade-in-up">
            Machine Exchange <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-emerald-400 to-cyan-400">Program</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Connect manufacturers with the industrial equipment they need to scale production across Africa. Vetted suppliers, flexible financing, technical support.
          </p>

          <div className="flex gap-4 flex-wrap mb-22 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-linear-to-r from-red-600 to-red-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-red-500 hover:to-red-400" to="/contact">
              Request Machine Access
              <ArrowRight size={20} />
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base bg-white/10 text-white border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1" to="/partners">
              Partner With Us
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
                <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">What is it?</p>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Machine Exchange Program</h2>
                <div className="w-20 h-1 bg-linear-to-r from-red-600 to-transparent"></div>
              </div>
              
              <p className="text-white/80 text-lg leading-relaxed">
                The Machine Exchange Program connects manufacturers, producers, and enterprises with vetted industrial equipment suppliers. We handle the sourcing, financing, and delivery.
              </p>
              
              <div className="space-y-5">
                {[
                  { icon: Shield, title: 'Vetted Suppliers', desc: 'Quality OEM equipment from trusted sources' },
                  { icon: TrendingUp, title: 'Flexible Financing', desc: 'Payment options tailored to your business' },
                  { icon: Users, title: 'Technical Support', desc: 'Training and after-sales support included' }
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
                <h3 className="text-2xl font-bold text-white mb-8">Who It's For</h3>
                <ul className="space-y-4">
                  {[
                    'Manufacturing enterprises scaling production',
                    'Government agencies building industrial capacity',
                    'Training centers expanding technical offerings',
                    'SMEs looking to modernize operations',
                    'Regional manufacturers seeking equipment',
                    'Industries requiring specialized machinery'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <CheckCircle className="text-red-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" size={20} />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
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
              { step: '1', title: 'Submit Needs', description: 'Tell us what equipment you need and your requirements' },
              { step: '2', title: 'Quote & Terms', description: 'Receive vetted equipment options with pricing' },
              { step: '3', title: 'Approve & Finance', description: 'Accept terms and arrange flexible payment' },
              { step: '4', title: 'Deploy & Support', description: 'Equipment delivered with training and support' }
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
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Available Equipment</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Machine Categories</h2>
            <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: 'Fabrication Equipment', examples: 'Welding machines, cutting tools, marking systems', Icon: Settings },
              { category: 'Manufacturing Machinery', examples: 'CNC machines, industrial presses, assembly systems', Icon: Wrench },
              { category: 'Processing Equipment', examples: 'Mills, lathes, drilling machines, grinding systems', Icon: Zap },
              { category: 'Specialized Systems', examples: 'Laser systems, automation equipment, testing machinery', Icon: Target },
              { category: 'Support Equipment', examples: 'Power supplies, hydraulic systems, tooling', Icon: Plug },
              { category: 'Training Equipment', examples: 'Demonstration units, practice stations, lab equipment', Icon: BookOpen }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2">
                  <div className="mb-4"><item.Icon className="text-red-400" size={32} /></div>
                  <h3 className="text-white font-semibold text-lg mb-3">{item.category}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{item.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-linear-to-b from-black to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-r from-red-600/10 via-transparent to-blue-600/10"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Scale Your Production?</h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with our team to discuss your equipment needs and explore flexible financing options tailored to your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-xl hover:shadow-red-600/50 hover:-translate-y-1" to="/contact">
              Request Machine Access
              <ArrowRight size={20} />
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 font-semibold rounded-lg hover:bg-white/20 hover:border-white transition-all duration-300 hover:-translate-y-1" to="/contact">
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
