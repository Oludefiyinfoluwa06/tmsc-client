import { CheckCircle, Building2, Users, TrendingUp } from 'lucide-react'

export default function ModularCentersOverview() {
  return (
    <section className="py-32 bg-white">
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
  )
}
