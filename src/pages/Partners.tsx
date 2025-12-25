import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Handshake, Settings, CreditCard, Building2, Wrench, Globe, Briefcase, BarChart3, GraduationCap, Building } from 'lucide-react'

export default function Partners() {
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
            <Handshake size={16} className="text-red-400" />
            <span className="text-red-300 text-sm font-semibold">Strategic Partnerships</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 animate-fade-in-up">
            Partner With <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-emerald-400 to-cyan-400">The Machine Exchange</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Join us in building Africa's industrial future. We're looking for strategic partners to expand our impact and transform manufacturing.
          </p>

          <div className="flex gap-4 flex-wrap mb-22 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-linear-to-r from-red-600 to-red-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-red-500 hover:to-red-400" to="/contact">
              Partner With Us
              <ArrowRight size={20} />
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base bg-white/10 text-white border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1" to="/contact">
              Get More Info
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Opportunities</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Partnership Opportunities</h2>
            <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Equipment Suppliers',
                description: 'OEM manufacturers and equipment suppliers looking to expand African market reach',
                benefits: [
                  'Access to pre-qualified buyers',
                  'Verified customer database',
                  'Marketing support',
                  'Financing facilitation',
                  'After-sales support integration'
                ],
                Icon: Settings
              },
              {
                title: 'Financial Services',
                description: 'Banks, fintech companies, and financing institutions offering flexible payment options',
                benefits: [
                  'Vetted customer access',
                  'High transaction volume',
                  'Risk mitigation support',
                  'Portfolio growth opportunity',
                  'Platform integration'
                ],
                Icon: CreditCard
              },
              {
                title: 'Government & Policy',
                description: 'Government agencies seeking to build industrial capacity and skills development',
                benefits: [
                  'Industrial infrastructure',
                  'Skills development programs',
                  'Economic development impact',
                  'TVET integration',
                  'Regional capacity building'
                ],
                Icon: Building2
              },
              {
                title: 'Installation & Services',
                description: 'Service providers offering installation, training, and maintenance services',
                benefits: [
                  'Steady project pipeline',
                  'Certification support',
                  'Training programs',
                  'Quality assurance',
                  'Revenue opportunities'
                ],
                Icon: Wrench
              }
            ].map((partnership, idx) => (
              <div key={idx} className="group">
                <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2">
                  <div className="mb-4"><partnership.Icon className="text-red-400" size={36} /></div>
                  <h3 className="text-white text-xl font-semibold mb-3">{partnership.title}</h3>
                  <p className="text-white/70 mb-6 text-sm leading-relaxed">{partnership.description}</p>
                  <div className="space-y-3">
                    {partnership.benefits.map((benefit: any, i: number) => (
                      <div key={i} className="flex gap-2 items-start">
                        <CheckCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
                        <span className="text-white/80 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-32 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Value Proposition</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Why Partner With Us?</h2>
            <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: Globe,
                title: 'Pan-African Reach',
                description: 'Access markets across Africa with established networks and infrastructure'
              },
              {
                Icon: Briefcase,
                title: 'Established Network',
                description: 'Partner with governments, enterprises, training centers, and financial institutions'
              },
              {
                Icon: BarChart3,
                title: 'Scalable Operations',
                description: 'Grow from pilot programs to regional and continental scale'
              },
              {
                Icon: GraduationCap,
                title: 'Skills Integration',
                description: 'Combine commercial operations with workforce development programs'
              },
              {
                Icon: Building,
                title: 'Infrastructure',
                description: 'Deploy through our modular centers and established facilities'
              },
              {
                Icon: Handshake,
                title: 'Collaborative Model',
                description: 'Work together with shared goals of industrial transformation'
              }
            ].map((reason, idx) => (
              <div key={idx} className="group">
                <div className="absolute inset-0 bg-linear-to-br from-red-600/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2 text-center">
                  <div className="mb-6"><reason.Icon className="text-red-400" size={48} /></div>
                  <h3 className="text-white font-semibold mb-3 text-lg">{reason.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
      <section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-20">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Journey</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">How to Partner</h2>
            <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Initial Conversation',
                description: 'Meet to understand mutual goals, capabilities, and partnership potential'
              },
              {
                step: '2',
                title: 'Partnership Proposal',
                description: 'Define partnership terms, roles, responsibilities, and success metrics'
              },
              {
                step: '3',
                title: 'Pilot Program',
                description: 'Launch a pilot project to test integration and validate business model'
              },
              {
                step: '4',
                title: 'Scale & Grow',
                description: 'Expand partnership based on pilot success and market demand'
              }
            ].map((step, idx) => (
              <div key={step.step} className="relative group">
                {/* Connection Line */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-24 left-full w-8 h-0.5 bg-linear-to-r from-red-600/60 to-transparent"></div>
                )}
                
                <div className="bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2 h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-linear-to-br from-red-600 to-red-700 text-white font-bold text-lg mb-6 shadow-lg group-hover:shadow-red-600/50 transition-all duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-white font-semibold mb-3 text-lg">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners Section */}
      <section className="py-32 bg-black/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">Our Partners</h2>
          <p className="text-white/70 text-center mb-20 max-w-2xl mx-auto text-lg">
            We work with leading organizations across government, industry, and finance to transform African manufacturing.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
              <div key={idx} className="bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 flex items-center justify-center h-32 group hover:-translate-y-2">
                <p className="text-white/50 text-center text-sm">Partner Logo {idx}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-32 bg-linear-to-b from-black to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-r from-red-600/10 via-transparent to-blue-600/10"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Collaborate?</h2>
          <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can work together to expand industrial capacity and create opportunity across Africa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-xl hover:shadow-red-600/50 hover:-translate-y-1" to="/contact">
              Contact Us
              <ArrowRight size={20} />
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 font-semibold rounded-lg hover:bg-white/20 hover:border-white transition-all duration-300 hover:-translate-y-1" to="/contact">
              Schedule Call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
