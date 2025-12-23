import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter, Instagram, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-white mt-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>

      <div className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand & About */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-lg font-bold uppercase tracking-widest text-white mb-2">Machine & Skills</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Industrial Capacity Engine</p>
              </div>
              <p className="text-white/80 leading-relaxed mb-8 text-sm">
                Integrating modular industrial centers, machinery trading corridors, and advanced laser ecosystems to build Africa's manufacturing future.
              </p>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg text-white/70 transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1">
                  <Facebook size={18} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg text-white/70 transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1">
                  <Twitter size={18} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg text-white/70 transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1">
                  <Linkedin size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg text-white/70 transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-1">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-white">Solutions</h4>
              <ul className="list-none p-0 m-0 space-y-3">
                <li><Link to="/for-governments" className="text-white/80 no-underline text-sm transition-all duration-300 hover:text-white inline-flex items-center gap-1">For Governments <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/for-investors" className="text-white/80 no-underline text-sm transition-all duration-300 hover:text-white inline-flex items-center gap-1">For Investors <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/for-oems" className="text-white/80 no-underline text-sm transition-all duration-300 hover:text-white inline-flex items-center gap-1">For OEMs <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/for-local" className="text-white/80 no-underline text-sm transition-all duration-300 hover:text-white inline-flex items-center gap-1">For Local Industry <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-white">Products</h4>
              <ul className="list-none p-0 m-0 space-y-3">
                <li><Link to="/products/modoola" className="text-white/80 no-underline text-sm transition-all duration-300 hover:text-white inline-flex items-center gap-1">MODOOLA <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/products/exchange" className="text-white/80 no-underline text-sm transition-all duration-300 hover:text-white inline-flex items-center gap-1">Machine Exchange <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/products/titanium" className="text-white/80 no-underline text-sm transition-all duration-300 hover:text-white inline-flex items-center gap-1">Titanium Laser <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-white">Get in Touch</h4>
              <div className="flex flex-col gap-4">
                <a href="mailto:info@machineandskills.com" className="flex items-start gap-3 text-white/80 no-underline text-sm transition-all duration-300 hover:text-white">
                  <Mail size={18} className="shrink-0 mt-0.5" />
                  <span>info@machineandskills.com</span>
                </a>
                <a href="tel:+234800000000" className="flex items-start gap-3 text-white/80 no-underline text-sm transition-all duration-300 hover:text-white">
                  <Phone size={18} className="shrink-0 mt-0.5" />
                  <span>+234 903 021 5252</span>
                </a>
                <div className="flex items-start gap-3 text-white/80 text-sm cursor-default">
                  <MapPin size={18} className="shrink-0 mt-0.5" />
                  <span>3a Rudolf Close, off Katsina-ala crescent, Maitama, Abuja</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="py-12 border-t border-white/10">
            <div className="bg-linear-to-r from-primary/10 to-blue-600/10 border border-white/10 rounded-2xl p-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Ready to build African industrial capacity?</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">Let's discuss your mandate, investment, or partnership opportunity.</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:bg-blue-900">
                  Book Strategy Call
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-semibold text-sm transition-all duration-300 hover:bg-white/20 hover:border-white/40">
                  Submit Mandate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/10 py-8 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center flex-wrap gap-8 md:flex-row flex-col md:text-left text-center">
            <p className="text-white/60 text-sm m-0">
              &copy; {currentYear} Machine & Skills. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:w-auto w-full md:justify-end justify-center flex-wrap">
              <Link to="/privacy" className="text-white/60 no-underline text-sm transition-colors duration-300 hover:text-white">Privacy Policy</Link>
              <span className="text-white/20">•</span>
              <Link to="/terms" className="text-white/60 no-underline text-sm transition-colors duration-300 hover:text-white">Terms of Service</Link>
              <span className="text-white/20">•</span>
              <Link to="/contact" className="text-white/60 no-underline text-sm transition-colors duration-300 hover:text-white">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
