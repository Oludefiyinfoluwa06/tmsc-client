import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'

export default function MachineExchangeProgramHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white pt-20 overflow-hidden" style={{ paddingTop: '15px' }}>
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1766813852/WhatsApp_Video_2025-12-22_at_9.17.20_PM_am07yf.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-red-900/50 to-blue-900/70 z-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>

      <div className="relative z-20 w-full mx-auto px-6 md:px-8 text-left mt-30">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur">
          <Zap size={16} className="text-red-400" />
          <span className="text-red-300 text-sm font-semibold">Industrial Transformation</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 animate-fade-in-up">
          Machine Exchange <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-emerald-400 to-cyan-400">Program</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Connect manufacturers with the industrial equipment they need to scale production across Africa. Vetted suppliers, flexible financing, technical support.
        </p>

        <div className="flex gap-4 flex-wrap mb-22 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-linear-to-r from-red-600 to-red-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-red-500 hover:to-red-400" to="/contact">
            Request Machine Access
            <ArrowRight size={20} />
          </Link>
          <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base bg-white/10 text-white border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1" to="/partners">
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  )
}
