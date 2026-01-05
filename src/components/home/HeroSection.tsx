import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'

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
        <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1766446396/hero-vid_oj6v2d.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-red-900/50 to-blue-900/70 z-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>

      <div className="relative z-20 w-full mx-auto px-6 md:px-8 text-left mt-30">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur animate-fade-in-up">
          <Zap size={16} className="text-red-400" />
          <span className="text-red-300 text-sm font-semibold">Industrial Transformation Initiative</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 animate-fade-in-up">
          Connect Your Industrial <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-emerald-400 to-cyan-400">Capacity Today</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Trade machines, access modular centers, and scale production across Africa through the Machine Exchange Program.
        </p>

        <div className="flex gap-4 flex-wrap mb-40 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-linear-to-r from-red-600 to-red-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-red-500 hover:to-red-400" to="/machine-exchange-program">
            Explore Program
            <ArrowRight size={20} />
          </Link>
          <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base bg-white/10 text-white border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-1" to="/contact">
            Get Started
          </Link>
        </div>
      </div>

      {/* Partner Logos Scroll Section */}
      <div className="absolute bottom-0 left-0 right-0 w-full bg-linear-to-t from-black/90 via-black/60 to-transparent pt-20 pb-8 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="overflow-hidden">
            <div className="flex gap-12 animate-scroll whitespace-nowrap">
              {/* Partner logos - repeat for continuous scroll */}
              <div className="flex gap-12 min-w-max">
                {partners.map((partner, idx) => (
                  <img 
                    key={idx} 
                    src={partner} 
                    alt={`Partner ${idx + 1}`}
                    className="h-12 w-32 object-contain shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                ))}
              </div>
              <div className="flex gap-12 min-w-max">
                {partners.map((partner, idx) => (
                  <img 
                    key={`repeat-${idx}`} 
                    src={partner} 
                    alt={`Partner ${idx + 1}`}
                    className="h-12 w-32 object-contain shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
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
