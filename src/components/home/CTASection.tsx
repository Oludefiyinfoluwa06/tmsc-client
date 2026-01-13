import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 animate-fade-in-up">
        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -z-10"></div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Ready to Scale?</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            Discuss your capacity and investment needs with us.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base cursor-pointer bg-red-600 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-red-700 animate-slide-in-left" to="/contact">
              Start Skill Program
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
