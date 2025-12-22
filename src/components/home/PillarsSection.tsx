import { Link } from 'react-router-dom'
import { Factory, BarChart3, Zap, CheckCircle2, ArrowRight } from 'lucide-react'

export default function PillarsSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Industrial Integration</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">Three Integrated Pillars</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Modular centers, machinery corridors, and laser ecosystems working as one system.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MODOOLA */}
          <div className="bg-white rounded-2xl p-10 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden group animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Factory size={32} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <span className="text-6xl font-bold text-gray-200 leading-none">01</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 uppercase tracking-wider">MODOOLA</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">Modular industrial & training centers — deployable capacity close to demand.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">TVET integration & partnerships</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Industrial park deployment</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Regional training hubs</span>
              </li>
            </ul>
            <Link to="/products/modoola" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:translate-x-1 transition-transform">
              Request Concept Pack <ArrowRight size={16} />
            </Link>
          </div>

          {/* Machine Exchange Platform */}
          <div className="bg-white rounded-2xl p-10 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden group animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <BarChart3 size={32} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <span className="text-6xl font-bold text-gray-200 leading-none">02</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 uppercase tracking-wider">Machine Exchange</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">Machinery trading & financing corridor — connecting suppliers to deployers globally.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Structured financing options</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Vetted OEM suppliers</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Volume deployment support</span>
              </li>
            </ul>
            <Link to="/products/exchange" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:translate-x-1 transition-transform">
              Submit Mandate <ArrowRight size={16} />
            </Link>
          </div>

          {/* Titanium Laser */}
          <div className="bg-white rounded-2xl p-10 border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden group animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center justify-between mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                <Zap size={32} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <span className="text-6xl font-bold text-gray-200 leading-none">03</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 uppercase tracking-wider">TITANIUM LASER</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">Advanced laser machinery with comprehensive training and after-sales ecosystem.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Cutting, welding, marking, cleaning</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Full operator training program</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm">Lifetime technical support</span>
              </li>
            </ul>
            <Link to="/products/titanium" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:translate-x-1 transition-transform">
              Request Titanium Pack <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
