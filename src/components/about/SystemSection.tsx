export default function SystemSection() {
  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-red-600 text-sm font-semibold mb-3">THE SYSTEM</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">Integrated model connecting policy, capital, machinery, and skills.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              num: "01",
              title: "MODOOLA",
              desc: "Deployable modular training and industrial centers."
            },
            {
              num: "02",
              title: "Machine Exchange",
              desc: "Trading and financing corridor for machinery."
            },
            {
              num: "03",
              title: "Titanium Laser",
              desc: "Advanced cutting, welding, and training systems."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-8 hover:border-red-500/30 transition-all duration-300 group shadow-sm hover:shadow-lg">
              <p className="text-5xl font-bold text-red-600 group-hover:text-red-600/20 transition-colors duration-300 mb-4">{item.num}</p>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-red-100 rounded-xl p-12 text-center">
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            These three pillars work together to create a complete industrial ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
