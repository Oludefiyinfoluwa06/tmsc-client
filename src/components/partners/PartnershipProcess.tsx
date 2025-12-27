export default function PartnershipProcess() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Journey</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">How to Partner</h2>
          <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '1',
              title: 'Initial Conversation',
              description: 'Meet to understand mutual goals, capabilities, and partnership potential'
            },
            {
              step: '2',
              title: 'Partnership Proposal',
              description: 'Define partnership terms, roles, responsibilities, and success metrics'
            },
            {
              step: '3',
              title: 'Pilot Program',
              description: 'Launch a pilot project to test integration and validate business model'
            },
            {
              step: '4',
              title: 'Scale & Grow',
              description: 'Expand partnership based on pilot success and market demand'
            }
          ].map((step, idx) => (
            <div key={step.step} className="relative group">
              {/* Connection Line */}
              {idx < 3 && (
                <div className="hidden lg:block absolute top-24 left-full w-8 h-0.5 bg-linear-to-r from-red-600/60 to-transparent"></div>
              )}
              
              <div className="bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2 h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-linear-to-br from-red-600 to-red-700 text-white font-bold text-lg mb-6 shadow-lg group-hover:shadow-red-600/50 transition-all duration-300">
                  {step.step}
                </div>
                <h3 className="text-white font-semibold mb-3 text-lg">{step.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
