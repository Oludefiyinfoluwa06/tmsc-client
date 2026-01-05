export default function MachineExchangeProgramHowItWorks() {
  return (
    <section className="py-32 bg-black/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Process</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">How It Works</h2>
          <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { step: '1', title: 'Submit Needs', description: 'Tell us what equipment you need and your training requirements' },
            { step: '2', title: 'Quote & Terms', description: 'Receive vetted equipment with training program options' },
            { step: '3', title: 'Approve & Finance', description: 'Accept terms, financing, and customized training plan' },
            { step: '4', title: 'Deploy & Train', description: 'Equipment delivered with expert training' }
          ].map((item, idx) => (
            <div key={item.step} className="relative group">
              {/* Connection Line */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-24 left-full w-8 h-0.5 bg-linear-to-r from-red-600/60 to-transparent"></div>
              )}

              <div className="bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-linear-to-br from-red-600 to-red-700 text-white font-bold text-lg mb-6 shadow-lg group-hover:shadow-red-600/50 transition-all duration-300">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-3 text-lg">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
