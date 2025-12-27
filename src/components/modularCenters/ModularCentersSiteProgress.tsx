export default function ModularCentersSiteProgress() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Status</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Projects in Progress</h2>
          <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { location: 'Location 1', status: 'Planning', progress: 30 },
            { location: 'Location 2', status: 'Site Preparation', progress: 60 },
            { location: 'Location 3', status: 'Equipment Installation', progress: 75 },
            { location: 'Location 4', status: 'Operational', progress: 100 }
          ].map((project, idx) => (
            <div key={idx} className="bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-white font-semibold text-lg">{project.location}</h3>
                <span className="text-red-400 text-xs font-semibold bg-red-500/20 px-3 py-1 rounded-full border border-red-500/50">{project.status}</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 border border-white/10">
                <div 
                  className="bg-linear-to-r from-red-600 to-red-500 h-2 rounded-full transition-all duration-500 shadow-lg shadow-red-600/50"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <p className="text-white/70 text-sm mt-4">{project.progress}% complete</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
