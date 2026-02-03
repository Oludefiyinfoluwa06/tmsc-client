import MachineExchangeSummary from '../components/platform/MachineExchangeSummary'

export default function MachineExchangePlatform() {
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
            <span className="text-red-300 text-xs font-semibold tracking-widest uppercase">Data Solutions</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Provision of Data Capturing Machines</h1>
          <p className="text-white/90 text-base leading-relaxed font-light max-w-3xl">Harnessing the power of technology, we provide state-of-the-art data capturing machines to enhance operational efficiency and precision across industries. Using the Industrial Training Fund (ITF) as a benchmark, our offerings ensure that organizations stay ahead in today's data-driven world.</p>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Key Features</h2>
            <p className="text-gray-600 text-lg">Advanced technology solutions tailored for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all">
              <h4 className="text-lg font-bold text-red-600 mb-3">Advanced Solutions</h4>
              <p className="text-gray-700">From biometric systems to inventory tracking, designed for accuracy and reliability across diverse applications.</p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all">
              <h4 className="text-lg font-bold text-red-600 mb-3">Seamless Integration</h4>
              <p className="text-gray-700">Integrate our data solutions into your existing workflows for improved productivity and minimal disruption.</p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all">
              <h4 className="text-lg font-bold text-red-600 mb-3">Customizable</h4>
              <p className="text-gray-700">Tailored solutions for specific industry requirements ensuring maximum relevance and effectiveness.</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-lg font-bold text-red-600 mb-3">Data Accuracy</h4>
                <p className="text-gray-700">Minimize errors and inconsistencies in your data collection processes.</p>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-lg font-bold text-red-600 mb-3">Operational Efficiency</h4>
                <p className="text-gray-700">Streamline workflows and reduce manual effort with automated solutions.</p>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-lg">
                <h4 className="text-lg font-bold text-red-600 mb-3">Data Security</h4>
                <p className="text-gray-700">Built-in safeguards protect sensitive information at every stage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MachineExchangeSummary />
    </>
  )
}
