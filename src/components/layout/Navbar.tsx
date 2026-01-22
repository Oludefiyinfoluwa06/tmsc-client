import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../../assets/logo.jpeg';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-6 left-6 right-6 z-100 border border-gray-200 backdrop-blur-xl bg-white/80 rounded-[50px] mx-auto shadow-sm">
      <div className="px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="no-underline transition-opacity duration-300 flex items-center hover:opacity-80">
            <img src={logo} alt="The Machine and Skill Company" className="w-40" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-semibold no-underline transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 ${isActive('/') ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'}`}>Home</Link>
            <Link to="/about" className={`text-sm font-semibold no-underline transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 ${isActive('/about') ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'}`}>About</Link>
            <Link to="/machine-exchange-program" className={`text-sm font-semibold no-underline transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 ${isActive('/machine-exchange-program') ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'}`}>Programs</Link>
            <Link to="/modular-centers" className={`text-sm font-semibold no-underline transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 ${isActive('/modular-centers') ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'}`}>Centers</Link>
            {/* <Link to="/platform" className={`text-sm font-semibold no-underline transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 ${isActive('/platform') ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'}`}>Platform</Link> */}
            <Link to="/gallery" className={`text-sm font-semibold no-underline transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 ${isActive('/gallery') ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'}`}>Gallery</Link>
            <Link to="/partners" className={`text-sm font-semibold no-underline transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 ${isActive('/partners') ? 'text-gray-900 after:w-full' : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'}`}>Partners</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="text-sm font-semibold text-white no-underline px-5 py-2.5 bg-red-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-red-700">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-transparent border-none cursor-pointer text-white transition-colors duration-300 p-2 hover:text-white/80"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} className="text-gray-900" /> : <Menu size={24} className="text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-gray-200 bg-white shadow-xl mb-4 rounded-lg">
            <div className="flex flex-col gap-1 py-4">
              <Link to="/" onClick={closeMobileMenu} className={`text-sm font-semibold no-underline px-4 py-3 transition-colors duration-300 rounded-lg ${isActive('/') ? 'text-red-600 bg-red-600/10' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}>Home</Link>
              <Link to="/about" onClick={closeMobileMenu} className={`text-sm font-semibold no-underline px-4 py-3 transition-colors duration-300 rounded-lg ${isActive('/about') ? 'text-red-600 bg-red-600/10' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}>About</Link>
              <Link to="/machine-exchange-program" onClick={closeMobileMenu} className={`text-sm font-semibold no-underline px-4 py-3 transition-colors duration-300 rounded-lg ${isActive('/machine-exchange-program') ? 'text-red-600 bg-red-600/10' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}>Programs</Link>
              <Link to="/modular-centers" onClick={closeMobileMenu} className={`text-sm font-semibold no-underline px-4 py-3 transition-colors duration-300 rounded-lg ${isActive('/modular-centers') ? 'text-red-600 bg-red-600/10' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}>Centers</Link>
              <Link to="/platform" onClick={closeMobileMenu} className={`text-sm font-semibold no-underline px-4 py-3 transition-colors duration-300 rounded-lg ${isActive('/platform') ? 'text-red-600 bg-red-600/10' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}>Platform</Link>
              <Link to="/gallery" onClick={closeMobileMenu} className={`text-sm font-semibold no-underline px-4 py-3 transition-colors duration-300 rounded-lg ${isActive('/gallery') ? 'text-red-600 bg-red-600/10' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}>Gallery</Link>
              <Link to="/partners" onClick={closeMobileMenu} className={`text-sm font-semibold no-underline px-4 py-3 transition-colors duration-300 rounded-lg ${isActive('/partners') ? 'text-red-600 bg-red-600/10' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}>Partners</Link>
            </div>
            <div className="flex flex-col gap-2 pt-4 px-4 border-t border-gray-200">
              <Link to="/contact" onClick={closeMobileMenu} className="text-sm font-semibold text-gray-700 no-underline px-4 py-2.5 border border-gray-300 rounded-lg transition-all duration-300 hover:border-gray-950 hover:text-gray-950 hover:bg-gray-50 text-center">Contact</Link>
              <Link to="/contact" onClick={closeMobileMenu} className="text-sm font-semibold text-white no-underline px-4 py-2.5 bg-red-600 rounded-lg transition-all duration-300 hover:bg-red-700 text-center">Join Waitlist</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
