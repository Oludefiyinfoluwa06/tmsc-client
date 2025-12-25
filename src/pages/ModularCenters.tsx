import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Building2, Users, TrendingUp, DollarSign, GraduationCap, Building, Handshake, BarChart3, Sprout, Factory, RotateCcw, Globe } from 'lucide-react'

export default function ModularCenters() {
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
            <Building2 size={16} className="text-red-400" />
            <span className="text-red-300 text-sm font-semibold">Infrastructure Solution</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 animate-fade-in-up">
            Industrial Modular <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-emerald-400 to-cyan-400">Centers</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Deployable industrial and training facilities that bring manufacturing capacity closer to demand across Africa.
          </p>

          <div className="flex gap-4 flex-wrap mb-22 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-linear-to-r from-red-600 to-red-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-red-500 hover:to-red-400" to="/contact">
              Explore Solutions
              <ArrowRight size={20} />
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base bg-white/10 text-white border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1" to="/contact">
              Request Info
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 bg-linear-to-b from-black to-black/80">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">What Are Modular Centers?</h2>
                <div className="w-20 h-1 bg-linear-to-r from-red-600 to-transparent"></div>
              </div>
              
              <p className="text-white/80 text-lg leading-relaxed">
                Industrial Modular Centers are deployable facilities that bring world-class manufacturing and training infrastructure to regional locations. They integrate production equipment, training stations, and support services in one integrated facility.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Building2, title: 'Modular Design', desc: 'Configured and deployed based on regional needs' },
                  { icon: Users, title: 'Training Integrated', desc: 'TVET partnerships and operator programs' },
                  { icon: TrendingUp, title: 'Revenue Generation', desc: 'Productive while training workers' }
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
                <h3 className="text-2xl font-bold text-white mb-8">Key Components</h3>
                <ul className="space-y-4">
                  {[
                    'State-of-the-art production equipment',
                    'Hands-on training workshops',
                    'Support service facilities',
                    'Professional management team',
                    'Quality assurance systems'
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

      {/* Center Types Section */}
      <section className="py-32 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Options</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Center Types</h2>
            <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Production Centers',
                description: 'Full-scale manufacturing facilities equipped for volume production and commercial operations',
                features: ['Production line equipment', 'Quality control lab', 'Inventory management', 'Commercial operations'],
                Icon: Factory
              },
              {
                title: 'Training Centers',
                description: 'Facilities focused on skill development with training equipment and instructor stations',
                features: ['Training equipment', 'Practice stations', 'Instructor facilities', 'Certification programs'],
                Icon: GraduationCap
              },
              {
                title: 'Mixed-Use Centers',
                description: 'Combined production and training facilities that balance commercial and educational operations',
                features: ['Dual equipment setup', 'Flexible scheduling', 'Blended revenue models', 'Community benefit'],
                Icon: RotateCcw
              },
              {
                title: 'Regional Hubs',
                description: 'Networks of interconnected centers serving specific geographic regions or industry clusters',
                features: ['Multi-location coordination', 'Shared resources', 'Knowledge exchange', 'Regional impact'],
                Icon: Globe
              }
            ].map((type, idx) => (
              <div key={idx} className="group">
                <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2 h-full">
                  <div className="mb-4"><type.Icon className="text-red-400" size={36} /></div>
                  <h3 className="text-white text-xl font-semibold mb-3">{type.title}</h3>
                  <p className="text-white/70 text-sm mb-6 leading-relaxed">{type.description}</p>
                  <ul className="space-y-2">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500 text-lg mt-0">▸</span>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Progress Section */}
      <section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Status</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Projects in Progress</h2>
            <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { location: 'Location 1', status: 'Planning', progress: 30 },
              { location: 'Location 2', status: 'Site Preparation', progress: 60 },
              { location: 'Location 3', status: 'Equipment Installation', progress: 75 },
              { location: 'Location 4', status: 'Operational', progress: 100 }
            ].map((project, idx) => (
              <div key={idx} className="bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-white font-semibold text-lg">{project.location}</h3>
                  <span className="text-red-400 text-xs font-semibold bg-red-500/20 px-3 py-1 rounded-full border border-red-500/50">{project.status}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2 border border-white/10">
                  <div 
                    className="bg-linear-to-r from-red-600 to-red-500 h-2 rounded-full transition-all duration-500 shadow-lg shadow-red-600/50"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <p className="text-white/70 text-sm mt-4">{project.progress}% complete</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              <div key={idx} className="group">
                <div className="absolute inset-0 bg-linear-to-br from-red-600/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2 text-center">
                  <div className="mb-4"><benefit.Icon className="text-red-400" size={40} /></div>
                  <h3 className="text-white font-semibold mb-3 text-lg">{benefit.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
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
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Explore Modular Centers?</h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Learn how an Industrial Modular Center can transform your region's manufacturing capacity and create sustainable economic growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-xl hover:shadow-red-600/50 hover:-translate-y-1" to="/contact">
              Request Concept Pack
              <ArrowRight size={20} />
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 font-semibold rounded-lg hover:bg-white/20 hover:border-white transition-all duration-300 hover:-translate-y-1" to="/gallery">
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
