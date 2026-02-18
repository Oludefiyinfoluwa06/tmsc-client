import { Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ContactHero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden" style={{ paddingTop: '40px' }}>
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1771450258/tmsc-hero_pguscb.mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-gray-900/80 via-red-900/50 to-blue-900/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-6">
          <Mail className="w-4 h-4 text-red-400" />
          <span className="text-sm font-medium text-red-300">Get in Touch</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Let's Connect
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Reach out to discuss partnerships and solutions.
        </p>

        {/* Quick Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-white/40 transition-colors">
            <Mail className="w-6 h-6 text-red-400 mx-auto mb-3" />
            <p className="text-gray-300 text-sm mb-2">Email</p>
            <Link to="mailto:coco@machineandskills.com" className="text-white font-medium hover:text-red-300 transition-colors">
              coco@machineandskills.com
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-white/40 transition-colors">
            <Phone className="w-6 h-6 text-red-400 mx-auto mb-3" />
            <p className="text-gray-300 text-sm mb-2">Phone</p>
            <Link to="tel:+2349030215252" className="text-white font-medium hover:text-red-300 transition-colors">
              +234 903 021 5252
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:border-white/40 transition-colors">
            <MapPin className="w-6 h-6 text-red-400 mx-auto mb-3" />
            <p className="text-gray-300 text-sm mb-2">Location</p>
            <p className="text-white font-medium">3a Rudolf Close, off Katsina-ala crescent, Maitama, Abuja</p>
          </div>
        </div>
      </div>
    </section>
  )
}
