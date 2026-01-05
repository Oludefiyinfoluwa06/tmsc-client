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

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">Industrial Training and Equipment Exchange Centre</h1>
          <p className="text-base md:text-lg text-white/90 mb-6 max-w-3xl leading-relaxed font-light">The hub of innovation and skill development — practical training and access to modern machinery for artisans and industry.</p>
          <p className="text-xs md:text-sm text-white/70 mb-10 font-light tracking-widest uppercase">Hands-on training • Equipment access • Career pathways</p>

          <div className="flex gap-3 flex-wrap mb-8">
            <Link to="/machine-exchange-program" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-linear-to-r from-red-600 to-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/40 hover:-translate-y-0.5 text-sm">Join Equipment Exchange</Link>
            <Link to="/about" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-white/15 border border-white/40 transition-all duration-300 hover:bg-white/25 hover:border-white/60 hover:-translate-y-0.5 text-sm">Learn More</Link>
          </div>
        </div>
      </section>

      <PillarsSection />
      <CredibilitySection />
      <CTASection />
    </div>
  )
}
