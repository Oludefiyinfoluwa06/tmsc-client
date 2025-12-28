import { ArrowRight } from 'lucide-react';

export default function PlatformCTA() {
  return (
    <section className="py-32 bg-linear-to-br from-black via-black to-red-950">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Get Started</p>
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Join the Machine Exchange Platform</h2>
        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you're looking to buy, sell, or lease equipment, our platform connects you with opportunities and resources to grow your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/contact" className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2 group">
            Join
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
