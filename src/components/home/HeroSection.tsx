import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Partner logo imports
import nnpc from '../../assets/partners/nnpc.png'
import nnpc2 from '../../assets/partners/nnpc2.png'
import ccnl from '../../assets/partners/ccnl.png'
import hongniu from '../../assets/partners/hongniu.png'
import itf from '../../assets/partners/itf.jpeg'
import naf from '../../assets/partners/naf.png'
import nigeriapresidentseal from '../../assets/partners/nigeriapresidentseal.png'
import npa from '../../assets/partners/npa.webp'
import rif from '../../assets/partners/rif.png'
import south from '../../assets/partners/south.png'

const partners = [nnpc, ccnl, hongniu, itf, naf, nnpc2, nigeriapresidentseal, npa, rif, south]

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
        <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1766446396/hero-vid_oj6v2d.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900/60 via-primary/50 to-blue-900/60 z-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl -z-10"></div>

      <div className="relative z-20 w-full mx-auto px-6 md:px-8 text-left mt-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
          Africa's Industrial <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 via-blue-400 to-cyan-400">Capacity Engine</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          From policy to welded steel. We deploy capacity, not PowerPoints. Integrating modular centers, machinery trading corridors, and advanced laser ecosystems.
        </p>

        <div className="flex gap-4 flex-wrap mb-22 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <Link className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-white cursor-pointer bg-red-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:bg-red-700" to="/contact">
            Book Strategy Call
            <ArrowRight size={18} />
          </Link>
          <Link className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-base cursor-pointer bg-transparent text-white border-2 border-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-1" to="/contact">
            Submit Mandate
          </Link>
        </div>
      </div>

      {/* Partner Logos Scroll Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full bg-linear-to-t from-black/80 to-transparent pt-12 pb-8 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-white/70 text-sm font-semibold uppercase tracking-widest mb-6">Trusted by leading organizations</p>
          <div className="overflow-hidden">
            <div className="flex gap-12 animate-scroll whitespace-nowrap">
              {/* Partner logos - repeat for continuous scroll */}
              <div className="flex gap-12 min-w-max">
                {partners.map((partner, idx) => (
                  <img 
                    key={idx} 
                    src={partner} 
                    alt={`Partner ${idx + 1}`}
                    className="h-12 w-32 object-contain shrink-0"
                  />
                ))}
              </div>
              <div className="flex gap-12 min-w-max">
                {partners.map((partner, idx) => (
                  <img 
                    key={`repeat-${idx}`} 
                    src={partner} 
                    alt={`Partner ${idx + 1}`}
                    className="h-12 w-32 object-contain shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
