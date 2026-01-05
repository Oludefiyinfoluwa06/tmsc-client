import EngagementHighlights from '../components/about/EngagementHighlights';
import SystemSection from '../components/about/SystemSection';
import CTASection from '../components/about/CTASection';

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
          <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1766446396/hero-vid_oj6v2d.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-red-900/50 to-blue-900/70 z-10"></div>

        <div className="relative z-20 w-full mx-auto px-6 md:px-12 text-left pt-20 max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-full backdrop-blur">
            <span className="text-red-300 text-xs font-semibold tracking-widest uppercase">Our Story</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">About Us</h1>
          <h2 className="text-base md:text-lg text-red-300 font-light mb-6 tracking-wider">Empowering Artisans, Transforming Industries</h2>

          <p className="text-white/90 text-base mb-4 leading-relaxed font-light max-w-3xl">The Machine and Skills Company Ltd is a trailblazer in industrial machine training, dedicated to reshaping the manufacturing sector with innovative solutions and unparalleled expertise. As pioneers in modern fabrication techniques, we are committed to equipping artisans with cutting-edge skills to thrive in today's dynamic industrial landscape.</p>

          <p className="text-white/90 text-base leading-relaxed font-light max-w-3xl">Our mission is to bridge the gap between traditional craftsmanship and advanced technology, fostering a new era of industry innovation. With comprehensive training programs and state-of-the-art technologies, we empower individuals and organizations to excel, unlocking endless possibilities for growth and success.</p>
        </div>
      </section>

      <section className="py-20 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Why Choose TMSC?</h2>
            <p className="text-gray-600 text-lg">Industry-leading training and equipment solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-red-500/30 hover:shadow-lg transition-all duration-300">
              <h4 className="text-red-600 font-bold text-lg mb-3">State-of-the-Art Equipment</h4>
              <p className="text-gray-700 leading-relaxed">Our training centers are equipped with modern tools and machines that replicate real-world industrial environments.</p>
            </div>

            <div className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-red-500/30 hover:shadow-lg transition-all duration-300">
              <h4 className="text-red-600 font-bold text-lg mb-3">Expert Trainers</h4>
              <p className="text-gray-700 leading-relaxed">Learn from seasoned professionals with years of experience in industrial fabrication and machine operation.</p>
            </div>

            <div className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-red-500/30 hover:shadow-lg transition-all duration-300">
              <h4 className="text-red-600 font-bold text-lg mb-3">Hands-On Learning</h4>
              <p className="text-gray-700 leading-relaxed">Practical sessions make up a significant portion of our programs, ensuring skills are immediately applicable.</p>
            </div>

            <div className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-red-500/30 hover:shadow-lg transition-all duration-300">
              <h4 className="text-red-600 font-bold text-lg mb-3">Industry Partnerships</h4>
              <p className="text-gray-700 leading-relaxed">We collaborate with leading manufacturers and organizations to provide opportunities for internships and placements.</p>
            </div>

            <div className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-red-500/30 hover:shadow-lg transition-all duration-300">
              <h4 className="text-red-600 font-bold text-lg mb-3">Global Standards</h4>
              <p className="text-gray-700 leading-relaxed">Our training and methodologies align with international best practices, ensuring global relevance and competitiveness.</p>
            </div>

            <div className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-red-500/30 hover:shadow-lg transition-all duration-300">
              <h4 className="text-red-600 font-bold text-lg mb-3">Career Pathways</h4>
              <p className="text-gray-700 leading-relaxed">Structured pathways for career advancement through continued training and skill development.</p>
            </div>
          </div>
        </div>
      </section>

      <EngagementHighlights />
      <SystemSection />
      <CTASection />
    </>
  );
}
