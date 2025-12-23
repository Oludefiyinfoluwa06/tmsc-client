import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import aboutImage from '../../assets/about.jpeg'

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Us</h2>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Empowering Artisans, <br />Transforming Industries
            </h3>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                The Machine and Skills Company Ltd is a trailblazer in industrial machine training, dedicated to reshaping the manufacturing sector with innovative solutions and unparalleled expertise. As pioneers in modern fabrication techniques, we are committed to equipping artisans with cutting-edge skills to thrive in today's dynamic industrial landscape.
              </p>

              <p>
                Our mission is to bridge the gap between traditional craftsmanship and advanced technology, fostering a new era of industry innovation. With comprehensive training programs and state-of-the-art technologies, we empower individuals and organizations to excel, unlocking endless possibilities for growth and success.
              </p>
            </div>

            <Link to="/about" className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors mt-8">
              Read More
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="About Us"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
