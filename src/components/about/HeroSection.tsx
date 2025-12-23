import { ArrowRight } from 'lucide-react';
import about from '../../assets/about.jpeg';

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-linear-to-b from-black via-black to-black relative overflow-hidden pt-32 pb-20">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-red-600 text-sm font-semibold mb-2">OUR STORY</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                Africa Builds Here
              </h1>
              <p className="text-xl text-white/70">
                Machine & Skills is building Africa's industrial capacity engine—integrating modular centers, machinery trading, and advanced laser ecosystems into one coherent system.
              </p>
            </div>

            <div className="flex flex-col gap-6 mt-6">
              <div className="border-l-4 border-red-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-white mb-2">Our Mission</h3>
                <p className="text-white/70">To deploy industrial capacity—not PowerPoints. We move machines, skills, and capital in one direction: forward.</p>
              </div>
              
              <div className="border-l-4 border-red-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-white mb-2">Our Philosophy</h3>
                <p className="text-white/70">From policy to welded steel. We don't consult; we execute. Our Nigeria–China industrial corridor proves that African manufacturing can compete globally.</p>
              </div>

              <div className="border-l-4 border-red-600 pl-6 py-2">
                <h3 className="text-lg font-semibold text-white mb-2">What We Do</h3>
                <p className="text-white/70">We integrate three core capabilities: modular training & industrial centers (MODOOLA), machinery trading & financing (Machine Exchange), and advanced laser systems (Titanium Laser).</p>
              </div>
            </div>

            <a href="#engagement" className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-500 transition-colors duration-300 mt-4">
              Learn about our track record
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right Image */}
          <div className="relative h-125 rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-red-500/20 to-blue-500/20 group-hover:from-red-500/30 group-hover:to-blue-500/30 transition-colors duration-300"></div>
            <img src={about} alt="About Us" className="w-full h-full object-cover object-center relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
