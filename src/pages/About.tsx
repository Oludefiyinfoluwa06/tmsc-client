import SystemSection from '../components/about/SystemSection';
import CTASection from '../components/about/CTASection';
import aboutImg from '../assets/about.jpeg';

export default function About() {
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
            <span className="text-red-300 text-xs font-semibold tracking-widest uppercase">Our Story</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 tracking-tight">About Machine & Skills</h1>

          <div className="space-y-6">
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-light max-w-3xl">The Machine and Skills Company Ltd builds modular production platforms that function as working factories.</p>

            <p className="text-white/90 text-base md:text-lg leading-relaxed font-light max-w-3xl">Each deployment combines industrial-grade machines with structured skills transfer embedded in live production, so people learn by producing real outputs rather than through classroom simulation.</p>

            <p className="text-white/90 text-base md:text-lg leading-relaxed font-light max-w-3xl">The same node design, machine logic, and operating model are deployed repeatedly across locations.</p>

            <p className="text-white/90 text-base md:text-lg leading-relaxed font-light max-w-3xl">We focus on standardisation, execution, and outcomes that are repeatable and consistent.</p>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-12 md:p-16 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              {/* Text Content */}
              <div>
                <h2 className="text-4xl font-bold mb-12">
                  What We Do
                </h2>

                <ul className="space-y-6">
                  {[
                    "We design and deploy standardised modular skills-and-production platforms.",
                    "We integrate industrial-grade machines into live production environments.",
                    "We operate each deployment as a functional production facility, not a simulation.",
                    "Our work is focused on deployment, repeatability, and execution at scale."
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="mt-2 w-2 h-2 rounded-full bg-red-600 shrink-0"></span>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {bullet}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="relative w-full h-100 rounded-xl overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Industrial production and skills training"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* <EngagementHighlights /> */}
      <SystemSection />
      <CTASection />
    </>
  );
}
