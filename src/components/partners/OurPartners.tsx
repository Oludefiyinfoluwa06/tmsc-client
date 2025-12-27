export default function OurPartners() {
  return (
    <section className="py-32 bg-black/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center">Our Partners</h2>
        <p className="text-white/70 text-center mb-20 max-w-2xl mx-auto text-lg">
          We work with leading organizations across government, industry, and finance to transform African manufacturing.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
            <div key={idx} className="bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 flex items-center justify-center h-32 group hover:-translate-y-2">
              <p className="text-white/50 text-center text-sm">Partner Logo {idx}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
