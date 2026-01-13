import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ModularCentersCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-r from-red-600/10 via-transparent to-blue-600/10"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center">
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-12 md:p-16 shadow-lg">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Ready to Explore Modular Centers?</h2>
          <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Learn how an Industrial Modular Center can transform your region's manufacturing capacity and create sustainable economic growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:-translate-y-1" to="/contact">
              Host a modular center
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
