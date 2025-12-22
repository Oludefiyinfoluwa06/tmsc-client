import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-8 animate-fade-in-up">
        <div className="bg-linear-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Build?</h2>
          <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your mandate, investment, or partnership. From policy to welded steel — we're here to deploy capacity.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base cursor-pointer bg-primary text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 animate-slide-in-left" to="/contact">
              Book Strategy Call
              <ArrowRight size={18} />
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base cursor-pointer bg-white text-primary border-2 border-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary/5 animate-slide-in-right" to="/contact">
              Submit Mandate
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
