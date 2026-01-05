import { CheckCircle, Building2, Users, TrendingUp } from 'lucide-react'

export default function ModularCentersOverview() {
  return (
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
  )
}
