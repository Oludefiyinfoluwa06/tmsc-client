import { Link } from 'react-router-dom'
import { Building2, TrendingUp, Factory, Wrench, ArrowRight } from 'lucide-react'

export default function PathwaysSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Your Industrial Path</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/for-governments" className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-red-500/50 hover:-translate-y-2 hover:bg-red-500/10 overflow-hidden animate-slide-in-left h-full flex flex-col" style={{ animationDelay: '0s' }}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Building2 size={28} className="text-red-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">For Governments</h3>
            <p className="text-white/70 text-sm mb-6 grow">Industrialization and skills development.</p>
            <span className="inline-flex items-center gap-2 text-white/80 font-semibold text-sm group-hover:text-white group-hover:translate-x-1 transition-all">
              See Programs <ArrowRight size={16} />
            </span>
          </Link>

          <Link to="/for-investors" className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-red-500/50 hover:-translate-y-2 hover:bg-red-500/10 overflow-hidden animate-slide-in-left h-full flex flex-col" style={{ animationDelay: '0.1s' }}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <TrendingUp size={28} className="text-red-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">For Investors</h3>
            <p className="text-white/70 text-sm mb-6 grow">Structured deals and portfolio returns.</p>
            <span className="inline-flex items-center gap-2 text-white/80 font-semibold text-sm group-hover:text-white group-hover:translate-x-1 transition-all">
              View Programs <ArrowRight size={16} />
            </span>
          </Link>

          <Link to="/for-oems" className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-red-500/50 hover:-translate-y-2 hover:bg-red-500/10 overflow-hidden animate-slide-in-left h-full flex flex-col" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Factory size={28} className="text-red-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">For OEMs</h3>
            <p className="text-white/70 text-sm mb-6 grow">Market entry and trusted deployments.</p>
            <span className="inline-flex items-center gap-2 text-white/80 font-semibold text-sm group-hover:text-white group-hover:translate-x-1 transition-all">
              View Modules <ArrowRight size={16} />
            </span>
          </Link>

          <Link to="/for-local" className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-red-500/50 hover:-translate-y-2 hover:bg-red-500/10 overflow-hidden animate-slide-in-left h-full flex flex-col" style={{ animationDelay: '0.3s' }}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-red-600 to-red-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Wrench size={28} className="text-red-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">For Local Industry</h3>
            <p className="text-white/70 text-sm mb-6 grow">Machinery access and enablement programs.</p>
            <span className="inline-flex items-center gap-2 text-white/80 font-semibold text-sm group-hover:text-white group-hover:translate-x-1 transition-all">
              View Curriculum <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
