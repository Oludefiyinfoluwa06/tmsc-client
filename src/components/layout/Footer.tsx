import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 mt-12 border-t border-gray-200">
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase">MACHINE & SKILLS</h3>
              <p className="mt-3 text-sm text-gray-700">Standardized skills-and-production environments.</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">About</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link to="/digital-production-nodes" className="text-gray-600 hover:text-gray-900">Digital Production Nodes</Link></li>
                <li><Link to="/partners" className="text-gray-600 hover:text-gray-900">Partners</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-6 uppercase tracking-wider text-gray-900">Contact</h4>
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
                  <span>Maitama, Abuja</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
