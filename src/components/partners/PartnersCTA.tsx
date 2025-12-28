import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function PartnersCTA() {
  return (
    <section className="py-32 bg-linear-to-b from-black to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-r from-red-600/10 via-transparent to-blue-600/10"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Collaborate?</h2>
        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how we can work together to expand industrial capacity and create opportunity across Africa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-red-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-xl hover:shadow-red-600/50 hover:-translate-y-1" to="/contact">
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
