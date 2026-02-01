import { Shield, Users, Zap } from 'lucide-react';

export default function PlatformWhatIsSection() {
  return (
    <section className="py-32 bg-linear-to-b from-black to-black/80">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">About The Platform</p>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">What is the Platform?</h2>
              <div className="w-20 h-1 bg-linear-to-r from-red-600 to-transparent"></div>
            </div>

            <p className="text-white/80 text-lg leading-relaxed">
              The Machine Exchange Platform is a digital marketplace designed to make industrial equipment trading transparent, accessible, and efficient. It connects suppliers, buyers, and financing partners in one integrated system.
            </p>

            <div className="space-y-5">
              {[
                { icon: Zap, title: 'Equipment Listings', desc: 'Browse vetted machines from verified suppliers' },
                { icon: Shield, title: 'Financing Integration', desc: 'Access structured payment options directly' },
                { icon: Users, title: 'Support Services', desc: 'Installation and operational support included' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-linear-to-br from-red-600/20 to-red-600/5 border border-red-600/30 flex items-center justify-center group-hover:border-red-600/60 transition-all duration-300">
                    <item.icon className="text-red-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-8">For Everyone</h3>
              <div className="space-y-6">
                {[
                  { role: 'Suppliers', desc: 'Reach more buyers across Africa with verified credentials' },
                  { role: 'Manufacturers', desc: 'Find equipment that meets your needs with financing' },
                  { role: 'Enterprises', desc: 'Scale production with access to quality equipment' },
                  { role: 'Operational Partners', desc: 'Equip facilities with demonstration equipment' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <h4 className="text-red-400 font-semibold mb-2">{item.role}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
