export default function SystemSection() {
  return (
    <section className="w-full py-20 bg-linear-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-red-600 text-sm font-semibold mb-3">THE SYSTEM</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Our integrated model connects policy, capital, machinery, and skills in a closed loop.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              num: "01",
              title: "MODOOLA",
              desc: "Modular training & industrial centers—deployable, scalable, integrated with local ecosystems."
            },
            {
              num: "02",
              title: "Machine Exchange",
              desc: "Trading & financing corridor connecting Chinese machinery to African manufacturers at scale."
            },
            {
              num: "03",
              title: "Titanium Laser",
              desc: "Advanced cutting, welding, and training systems with full after-sales ecosystem."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 group">
              <p className="text-5xl font-bold text-red-600/30 group-hover:text-red-600/50 transition-colors duration-300 mb-4">{item.num}</p>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-linear-to-r from-red-600/20 to-blue-600/20 border border-red-500/30 rounded-xl p-12 text-center">
          <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
            These three pillars move in tandem: MODOOLA creates the physical infrastructure, Machine Exchange brings the capital and machinery, and Titanium Laser ensures competitive, world-class capabilities. The result: a complete industrial ecosystem that works.
          </p>
        </div>
      </div>
    </section>
  );
}
