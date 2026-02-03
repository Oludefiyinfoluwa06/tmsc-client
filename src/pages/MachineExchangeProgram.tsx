export default function MachineExchangeProgram() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden" style={{ paddingTop: '15px' }}>
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1770150721/tmsc-hero_ttnulb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-red-900/50 to-blue-900/70 z-10"></div>

        <div className="relative z-20 w-full mx-auto px-6 md:px-12 text-left pt-20 max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-full backdrop-blur">
            <span className="text-red-300 text-xs font-semibold tracking-widest uppercase">Equipment Exchange</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Equipment Exchange Program</h1>
          <h2 className="text-base md:text-lg text-red-300 font-light mb-6 tracking-wider">Bridging the Technology Gap</h2>

          <p className="text-white/90 text-base leading-relaxed font-light max-w-3xl">Our Equipment Exchange Program enables artisans and businesses to upgrade their tools and machinery efficiently. By trading in old equipment, participants gain access to modern alternatives, boosting productivity and quality.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">How it Works</h2>
            <p className="text-gray-600 text-lg">A seamless process designed for your convenience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
              <h4 className="text-lg font-bold mb-2">Assessment</h4>
              <p className="text-gray-700">Evaluation of your existing equipment and specific needs.</p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mb-4">2</div>
              <h4 className="text-lg font-bold mb-2">Consultation</h4>
              <p className="text-gray-700">Expert guidance on suitable upgrades and options.</p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
              <h4 className="text-lg font-bold mb-2">Exchange</h4>
              <p className="text-gray-700">Affordable exchange tailored to your specific needs.</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-lg font-bold text-red-600 mb-3">Advanced Technology</h4>
                <p className="text-gray-700">Access to cutting-edge machinery and tools.</p>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-lg font-bold text-red-600 mb-3">Cost-Effective</h4>
                <p className="text-gray-700">Affordable upgrade options that fit your budget.</p>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-lg font-bold text-red-600 mb-3">Productivity Boost</h4>
                <p className="text-gray-700">Enhanced efficiency and output quality.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-linear-to-r from-red-50 to-red-100 border border-red-200 rounded-lg">
            <p className="text-lg text-gray-800 leading-relaxed"><strong>Our Equipment Exchange Program</strong> empowers artisans and businesses to access advanced tools, driving productivity, quality, and competitiveness in manufacturing and fabrication.</p>
          </div>
        </div>
      </section>
    </>
  )
}
