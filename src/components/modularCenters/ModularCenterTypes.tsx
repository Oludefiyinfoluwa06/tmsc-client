import { Factory, GraduationCap, RotateCcw, Globe } from 'lucide-react'

export default function ModularCenterTypes() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">Options</p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Center Types</h2>
          <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-600 to-transparent mx-auto"></div>
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
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-red-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-red-500/30 transition-all duration-300 group-hover:-translate-y-2 h-full shadow-sm hover:shadow-lg">
                <div className="mb-4"><type.Icon className="text-red-600" size={36} /></div>
                <h3 className="text-gray-900 text-xl font-semibold mb-3">{type.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-red-600 text-lg mt-0">▸</span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
