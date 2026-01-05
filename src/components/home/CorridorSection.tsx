import { Building2, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CorridorSection() {
  return (
    <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Nigeria–China Industrial Corridor</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Machines, skills, and money moving in one direction — from policy to deployment to execution.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="bg-white/10 border border-white/20 backdrop-blur px-8 py-12 rounded-2xl text-center transition-all duration-300 hover:bg-white/15 hover:border-white/40 hover:-translate-y-2 animate-slide-in-left" style={{ animationDelay: '0s' }}>
            <div className="flex justify-center mb-6 text-white/90">
              <Building2 size={40} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Policy & Mandates</h4>
            <p className="text-gray-300 text-sm">Government industrialisation programs & national directives</p>
          </div>

          <div className="hidden md:flex justify-center">
            <ArrowRight size={32} className="text-white/40" />
          </div>

          <div className="bg-white/10 border border-white/20 backdrop-blur px-8 py-12 rounded-2xl text-center transition-all duration-300 hover:bg-white/15 hover:border-white/40 hover:-translate-y-2 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-6 text-white/90">
              <Lightbulb size={40} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Design & Deployment</h4>
            <p className="text-gray-300 text-sm">MODOOLA centers & Machine Exchange platforms</p>
          </div>

          <div className="hidden md:flex justify-center">
            <ArrowRight size={32} className="text-white/40" />
          </div>

          <div className="bg-white/10 border border-white/20 backdrop-blur px-8 py-12 rounded-2xl text-center transition-all duration-300 hover:bg-white/15 hover:border-white/40 hover:-translate-y-2 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center mb-6 text-white/90">
              <CheckCircle2 size={40} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Execution</h4>
            <p className="text-gray-300 text-sm">Training, machinery installation & measurable results</p>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white cursor-pointer bg-red-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-red-700">
            Join the Corridor
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
