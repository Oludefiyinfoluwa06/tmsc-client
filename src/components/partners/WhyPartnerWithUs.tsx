import { Globe, Briefcase, BarChart3, GraduationCap, Building, Handshake } from 'lucide-react'

export default function WhyPartnerWithUs() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">Value Proposition</p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Why Partner With Us?</h2>
          <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-600 to-transparent mx-auto"></div>
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
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-red-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-red-500/30 transition-all duration-300 group-hover:-translate-y-2 text-center flex items-center justify-center flex-col shadow-sm hover:shadow-lg">
                <div className="mb-6"><reason.Icon className="text-red-600" size={48} /></div>
                <h3 className="text-gray-900 font-semibold mb-3 text-lg">{reason.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
