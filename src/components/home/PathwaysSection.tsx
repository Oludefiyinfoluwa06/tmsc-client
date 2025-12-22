import { Link } from 'react-router-dom'
import { Building2, TrendingUp, Factory, Wrench, ArrowRight } from 'lucide-react'

export default function PathwaysSection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Four Entry Points</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">Choose Your Industrial Path</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Direct routes for governments, investors, OEMs, and local industry.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/for-governments" className="group relative bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary hover:-translate-y-2 overflow-hidden animate-slide-in-left" style={{ animationDelay: '0s' }}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Building2 size={28} className="text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">For Governments</h3>
            <p className="text-gray-600 text-sm mb-6">Industrialisation, skills development, visible impact, and execution capacity.</p>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Explore <ArrowRight size={16} />
            </span>
          </Link>

          <Link to="/for-investors" className="group relative bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary hover:-translate-y-2 overflow-hidden animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <TrendingUp size={28} className="text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">For Investors</h3>
            <p className="text-gray-600 text-sm mb-6">Structured deals, risk-managed portfolios, national programs, and returns.</p>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Explore <ArrowRight size={16} />
            </span>
          </Link>

          <Link to="/for-oems" className="group relative bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary hover:-translate-y-2 overflow-hidden animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Factory size={28} className="text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">For OEMs</h3>
            <p className="text-gray-600 text-sm mb-6">Market entry, trusted deployments, partner ecosystem, and scale.</p>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Explore <ArrowRight size={16} />
            </span>
          </Link>

          <Link to="/for-local" className="group relative bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:border-primary hover:-translate-y-2 overflow-hidden animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Wrench size={28} className="text-primary group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">For Local Industry</h3>
            <p className="text-gray-600 text-sm mb-6">Access to machinery, training programs, and fabrication support.</p>
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Explore <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
