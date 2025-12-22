import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white pt-20 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/src/assets/hero-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900/60 via-primary/50 to-blue-900/60 z-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl -z-10"></div>

      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-5 py-3 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 animate-fade-in">
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Industrial capacity platform
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
          Africa's <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-blue-400 to-cyan-400">Industrial Capacity Engine</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          From policy to welded steel. We deploy capacity, not PowerPoints. Integrating modular centers, machinery trading corridors, and advanced laser ecosystems.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <Link className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-black cursor-pointer bg-white text-primary transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1" to="/contact">
            Book Strategy Call
            <ArrowRight size={18} />
          </Link>
          <Link className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-base cursor-pointer bg-transparent text-white border-2 border-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1" to="/contact">
            Submit Mandate
          </Link>
        </div>
      </div>
    </section>
  )
}
