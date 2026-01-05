export default function PlatformHowItWorks() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Browse', description: 'Find equipment or machines for sale' },
            { step: '2', title: 'Connect', description: 'Connect with The Machine and Skills Company' },
            { step: '3', title: 'Learn', description: 'Learn how to use purchased equipments and machines' }
          ].map((item, idx) => (
            <div key={item.step} className="relative group">
              {/* Connection Line */}
              {idx < 2 && (
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

        {/* Machine Exchange subsection */}
        <div className="mt-16 max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-semibold text-white">Machine Exchange</h3>
            <p className="text-white/70 mt-2">Acquire, upgrade and learn to operate industrial machinery with our tailored program.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-linear-to-br from-white/5 to-white/3 rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-2">1. Buying machines</h4>
              <p className="text-white/70 text-sm mb-3">Access vetted, new industrial equipment sourced for performance and reliability.</p>
              <ul className="text-white/70 text-sm space-y-2">
                <li>Assessment of existing equipment</li>
                <li>Consultation on suitable upgrades</li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-white/5 to-white/3 rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-2">2. Upgrading equipment</h4>
              <p className="text-white/70 text-sm mb-3">Trade in older machines for newer models with tailored upgrade options.</p>
              <ul className="text-white/70 text-sm space-y-2">
                <li>Affordable exchange options tailored to individual needs</li>
                <li>Custom upgrade pathways to fit your operations</li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-white/5 to-white/3 rounded-2xl p-6 border border-white/10">
              <h4 className="text-white font-semibold mb-2">3. Training & maintenance</h4>
              <p className="text-white/70 text-sm mb-3">Operator training and ongoing maintenance guidance to maximize uptime.</p>
              <ul className="text-white/70 text-sm space-y-2">
                <li>Hands-on operator training</li>
                <li>Maintenance and uptime best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
