import PillarsSection from '../components/home/PillarsSection'
import CredibilitySection from '../components/home/CredibilitySection'
import CTASection from '../components/home/CTASection'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div className="w-full">
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden" style={{ paddingTop: '15px' }}>
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1766446396/hero-vid_oj6v2d.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-red-900/50 to-blue-900/70 z-10"></div>

        <div className="relative z-20 w-full mx-auto px-6 md:px-12 text-left pt-20 max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-full backdrop-blur">
            <span className="text-red-300 text-xs font-semibold tracking-widest uppercase">Excellence in Industrial Training</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">Industrial Training & Equipment Exchange</h1>
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-3xl leading-relaxed font-light">Practical training and machinery access for artisans and manufacturers across Africa.</p>

          <div className="flex gap-3 flex-wrap mb-8">
            <Link to="/machine-exchange-program" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/40 hover:-translate-y-0.5 text-base shadow-lg hover:bg-red-700">Register for Training</Link>
            <Link to="/about" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white/90 bg-transparent border border-white/40 transition-all duration-300 hover:bg-white/10 hover:border-white/60 hover:-translate-y-0.5 text-sm">View Training Modules</Link>
          </div>
        </div>
      </section>

      <PillarsSection />
      <CredibilitySection />
      <CTASection />
    </div>
  )
}
