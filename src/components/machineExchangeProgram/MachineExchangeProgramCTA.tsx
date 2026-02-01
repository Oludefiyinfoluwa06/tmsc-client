import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function MachineExchangeProgramCTA() {
  return (
    <section className="py-32 bg-linear-to-b from-black to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-r from-red-600/10 via-transparent to-blue-600/10"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Scale Your Production</h2>
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Discuss your equipment needs and access flexible financing.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-xl hover:shadow-red-600/50 hover:-translate-y-1" to="/contact">
           Contact
            <ArrowRight size={20} />
          </Link>
          <Link className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white border border-white/40 font-semibold rounded-lg hover:bg-white/10 hover:border-white/60 transition-all duration-300 hover:-translate-y-1" to="/contact">
            View Curriculum
          </Link>
        </div>
      </div>
    </section>
  )
}
