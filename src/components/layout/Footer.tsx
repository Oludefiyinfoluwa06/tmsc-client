import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 text-gray-900 mt-32 relative overflow-hidden border-t border-gray-200">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>

      <div className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            {/* Brand & About */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-lg font-bold uppercase tracking-widest text-primary mb-2">Machine & Skills</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Industrial Capacity Engine</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-8 text-sm">
                Integrating modular industrial centers, machinery trading corridors, and advanced laser ecosystems to build Africa's manufacturing future.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-gray-900">Company</h4>
              <ul className="list-none p-0 m-0 space-y-3">
                <li><Link to="/" className="text-gray-600 no-underline text-sm transition-all duration-300 hover:text-primary inline-flex items-center gap-1">Home <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/about" className="text-gray-600 no-underline text-sm transition-all duration-300 hover:text-primary inline-flex items-center gap-1">About <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/machine-exchange-program" className="text-gray-600 no-underline text-sm transition-all duration-300 hover:text-primary inline-flex items-center gap-1">Programs <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/modular-centers" className="text-gray-600 no-underline text-sm transition-all duration-300 hover:text-primary inline-flex items-center gap-1">Centers <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/platform" className="text-gray-600 no-underline text-sm transition-all duration-300 hover:text-primary inline-flex items-center gap-1">Platform <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/gallery" className="text-gray-600 no-underline text-sm transition-all duration-300 hover:text-primary inline-flex items-center gap-1">Gallery <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/partners" className="text-gray-600 no-underline text-sm transition-all duration-300 hover:text-primary inline-flex items-center gap-1">Partners <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-gray-900">Get in Touch</h4>
              <div className="flex flex-col gap-4">
                <Link to="mailto:coco@machineandskills.com" className="flex items-start gap-3 text-gray-600 no-underline text-sm transition-all duration-300 hover:text-primary">
                  <Mail size={18} className="shrink-0 mt-0.5" />
                  <span>coco@machineandskills.com</span>
                </Link>
                <Link to="tel:+2349030215252" className="flex items-start gap-3 text-gray-600 no-underline text-sm transition-all duration-300 hover:text-primary">
                  <Phone size={18} className="shrink-0 mt-0.5" />
                  <span>+234 903 021 5252</span>
                </Link>
                <div className="flex items-start gap-3 text-gray-600 text-sm cursor-default">
                  <MapPin size={18} className="shrink-0 mt-0.5" />
                  <span>3a Rudolf Close, off Katsina-ala crescent, Maitama, Abuja</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 py-8 bg-gray-100/50">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex justify-between items-center flex-wrap gap-8 md:flex-row flex-col md:text-left text-center">
            <p className="text-gray-500 text-sm m-0">
              &copy; {currentYear} Machine & Skills. All rights reserved.
            </p>
            <div className="flex items-center gap-4 md:w-auto w-full md:justify-end justify-center flex-wrap">
              <Link to="/privacy" className="text-gray-500 no-underline text-sm transition-colors duration-300 hover:text-primary">Privacy Policy</Link>
              <span className="text-gray-300">•</span>
              <Link to="/terms" className="text-gray-500 no-underline text-sm transition-colors duration-300 hover:text-primary">Terms of Service</Link>
              <span className="text-gray-300">•</span>
              <Link to="/contact" className="text-gray-500 no-underline text-sm transition-colors duration-300 hover:text-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
