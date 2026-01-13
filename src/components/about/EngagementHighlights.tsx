export default function EngagementHighlights() {
  return (
    <section id="engagement" className="w-full py-32 bg-white relative overflow-hidden">
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-red-600 text-sm font-semibold mb-3">EXECUTION TRACK RECORD</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Proven Impact</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">We don't make promises—we deliver results across government mandates, investor portfolios, and on-the-ground deployment.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat Cards */}
          {[
            { stat: "15+", label: "Industrial Centers Deployed" },
            { stat: "2,500+", label: "Trained Artisans & Technicians" },
            { stat: "8", label: "Countries & Corridor Partners" },
            { stat: "100%", label: "Project Execution Rate" }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-8 hover:border-red-500/50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
              <p className="text-4xl font-bold text-red-600 group-hover:text-red-500 transition-colors duration-300 mb-2">{item.stat}</p>
              <p className="text-gray-600 text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Key Engagements */}
          {[
            {
              title: "Nigeria–China Industrial Corridor",
              desc: "Strategic partnership deploying machinery, training, and investment frameworks across West Africa's manufacturing heartland."
            },
            {
              title: "TVET & Skills Ecosystem",
              desc: "Partnership with government training institutions to embed laser and machine technologies into formal education."
            },
            {
              title: "Modular Industrial Parks",
              desc: "Greenfield and retrofit deployments of containerized manufacturing centers across industrial hubs."
            },
            {
              title: "International OEM Partnerships",
              desc: "Direct relationships with Chinese machinery manufacturers and global technology leaders for market entry."
            }
          ].map((eng, idx) => (
            <div key={idx} className="border-l-4 border-red-600 pl-6 py-4 hover:border-red-500 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{eng.title}</h3>
              <p className="text-gray-700 leading-relaxed font-medium">{eng.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
