import { CheckCircle, Wrench, TrendingUp } from 'lucide-react'

export default function EquipmentExchangeProgram() {
  return (
    <section className="py-32 bg-black/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Equipment Exchange Program</h2>
              <p className="text-red-400 text-lg font-semibold mb-6">Bridging the Technology Gap</p>
            </div>

            <p className="text-white/90 text-lg leading-relaxed">
              Trade old equipment for modern alternatives and boost productivity.
            </p>

            <div className="space-y-8">
              {/* How it Works */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                  <Wrench className="text-red-400" size={28} />
                  How it Works
                </h3>
                <ul className="space-y-3 text-white/80">
                  {[
                    'Assessment of existing equipment.',
                    'Consultation on upgrades.',
                    'Affordable exchange options.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <CheckCircle className="text-emerald-400 shrink-0 mt-1" size={20} />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-5 flex items-center gap-3">
                  <TrendingUp className="text-emerald-400" size={28} />
                  Benefits
                </h3>
                <ul className="space-y-3 text-white/80">
                  {[
                    'Access to advanced technology.',
                    'Cost-effective upgrades.',
                    'Enhanced productivity and quality.'
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <CheckCircle className="text-cyan-400 shrink-0 mt-1" size={20} />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Decorative Section */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-linear-to-br from-red-600/30 to-orange-600/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-12 border border-white/20 backdrop-blur-xl h-96 flex items-center justify-center">
              <div className="text-center space-y-6">
                <Wrench className="text-red-400 mx-auto" size={64} />
                <p className="text-white/70 text-base leading-relaxed">
                  Modern equipment with expert guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
