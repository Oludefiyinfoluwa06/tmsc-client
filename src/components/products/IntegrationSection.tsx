export default function IntegrationSection() {
  return (
    <section className="w-full py-20 bg-linear-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-red-600 text-sm font-semibold mb-3">INTEGRATED SYSTEM</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">How They Work Together</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            These three products don't exist in isolation—they form a complete ecosystem where policy, infrastructure, machinery, and training reinforce each other.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "MODOOLA Provides",
                items: ["Physical hubs", "Training capacity", "Local deployment points"]
              },
              {
                title: "Machine Exchange Supplies",
                items: ["Capital & machinery", "Financing models", "International sourcing"]
              },
              {
                title: "Titanium Laser Enables",
                items: ["Competitive skills", "Advanced capabilities", "Global-standard operations"]
              }
            ].map((item, idx) => (
              <div key={idx}>
                <h3 className="text-white font-semibold mb-4 text-lg">{item.title}</h3>
                <ul className="space-y-2">
                  {item.items.map((sub, i) => (
                    <li key={i} className="text-white/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-white/70 text-center leading-relaxed">
              <span className="text-white font-semibold">Result:</span> A closed-loop industrial capacity system that governments fund, investors finance, OEMs trust, and local manufacturers scale through.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
