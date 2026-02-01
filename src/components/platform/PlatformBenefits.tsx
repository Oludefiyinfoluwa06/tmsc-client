import { Eye, Zap, Lock, Users, CreditCard, Globe } from 'lucide-react';

export default function PlatformBenefits() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Advantages</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Platform Benefits</h2>
          <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Transparency', description: 'Clear pricing, specifications, and terms for all transactions', Icon: Eye },
            { title: 'Efficiency', description: 'Streamlined process from browsing to delivery', Icon: Zap },
            { title: 'Trust', description: 'Vetted suppliers and secure transactions', Icon: Lock },
            { title: 'Support', description: 'Installation and technical assistance included', Icon: Users },
            { title: 'Financing', description: 'Integrated flexible payment and financing options', Icon: CreditCard },
            { title: 'Scale', description: 'Access to equipment across Africa and beyond', Icon: Globe }
          ].map((benefit, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="shrink-0">
                <div className="flex items-center justify-center h-14 w-14 rounded-lg bg-linear-to-br from-red-600/20 to-red-600/5 border border-red-600/30">
                  <benefit.Icon className="text-red-400" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 text-lg">{benefit.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
