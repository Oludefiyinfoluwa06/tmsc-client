import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 animate-fade-in-up">
        <div className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10"></div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Ready to Deploy Capacity?</h2>
          <p className="text-white/80 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            From policy to welded steel. Let's discuss your mandate, investment, or partnership. We're here to turn ambitions into industrial reality.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base cursor-pointer bg-red-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-red-700 animate-slide-in-left" to="/contact">
              Partner with us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
