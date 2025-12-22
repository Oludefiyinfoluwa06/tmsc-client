import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-100 border-b border-gray-100 backdrop-blur-xl bg-white/95">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="no-underline transition-opacity duration-300 flex items-center hover:opacity-80">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">Machine & Skills</span>
              <span className="text-xs text-gray-500">Industrial Capacity Engine</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-sm font-semibold text-gray-700 no-underline transition-colors duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300">Home</Link>
            <Link to="/about" className="text-sm font-semibold text-gray-700 no-underline transition-colors duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300">About</Link>
            
            {/* Solutions Dropdown */}
            <div className="group relative">
              <button className="text-sm font-semibold text-gray-700 flex items-center gap-1 transition-colors duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 group-hover:after:w-full after:transition-all after:duration-300">
                Solutions
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50">
                <Link to="/for-governments" className="block px-4 py-3 text-sm text-gray-700 no-underline hover:bg-gray-50 hover:text-primary transition-colors duration-300 font-medium">For Governments</Link>
                <Link to="/for-investors" className="block px-4 py-3 text-sm text-gray-700 no-underline hover:bg-gray-50 hover:text-primary transition-colors duration-300 font-medium">For Investors</Link>
                <Link to="/for-oems" className="block px-4 py-3 text-sm text-gray-700 no-underline hover:bg-gray-50 hover:text-primary transition-colors duration-300 font-medium">For OEMs</Link>
                <Link to="/for-local" className="block px-4 py-3 text-sm text-gray-700 no-underline hover:bg-gray-50 hover:text-primary transition-colors duration-300 font-medium">For Local Industry</Link>
              </div>
            </div>

            <Link to="/projects" className="text-sm font-semibold text-gray-700 no-underline transition-colors duration-300 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-300">Projects</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="text-sm font-semibold text-gray-700 no-underline px-4 py-2 border border-gray-200 rounded-lg transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5">Contact</Link>
            <Link to="/contact" className="text-sm font-semibold text-black hover:text-white no-underline px-5 py-2.5 bg-primary rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-blue-900">Book Call</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden bg-transparent border-none cursor-pointer text-black transition-colors duration-300 p-2 hover:text-primary"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-gray-100">
            <div className="flex flex-col gap-1 py-4">
              <Link to="/" onClick={closeMobileMenu} className="text-sm font-semibold text-gray-700 no-underline px-4 py-3 hover:bg-gray-50 hover:text-primary transition-colors duration-300 rounded-lg">Home</Link>
              <Link to="/about" onClick={closeMobileMenu} className="text-sm font-semibold text-gray-700 no-underline px-4 py-3 hover:bg-gray-50 hover:text-primary transition-colors duration-300 rounded-lg">About</Link>
              <Link to="/for-governments" onClick={closeMobileMenu} className="text-sm font-semibold text-gray-700 no-underline px-4 py-3 hover:bg-gray-50 hover:text-primary transition-colors duration-300 rounded-lg ml-2">For Governments</Link>
              <Link to="/for-investors" onClick={closeMobileMenu} className="text-sm font-semibold text-gray-700 no-underline px-4 py-3 hover:bg-gray-50 hover:text-primary transition-colors duration-300 rounded-lg ml-2">For Investors</Link>
              <Link to="/for-oems" onClick={closeMobileMenu} className="text-sm font-semibold text-gray-700 no-underline px-4 py-3 hover:bg-gray-50 hover:text-primary transition-colors duration-300 rounded-lg ml-2">For OEMs</Link>
              <Link to="/for-local" onClick={closeMobileMenu} className="text-sm font-semibold text-gray-700 no-underline px-4 py-3 hover:bg-gray-50 hover:text-primary transition-colors duration-300 rounded-lg ml-2">For Local Industry</Link>
              <Link to="/projects" onClick={closeMobileMenu} className="text-sm font-semibold text-gray-700 no-underline px-4 py-3 hover:bg-gray-50 hover:text-primary transition-colors duration-300 rounded-lg">Projects</Link>
            </div>
            <div className="flex flex-col gap-2 pt-4 px-4 border-t border-gray-100">
              <Link to="/contact" onClick={closeMobileMenu} className="text-sm font-semibold text-gray-700 no-underline px-4 py-2.5 border border-gray-200 rounded-lg transition-all duration-300 hover:border-primary hover:text-primary text-center">Contact</Link>
              <Link to="/contact" onClick={closeMobileMenu} className="text-sm font-semibold text-white no-underline px-4 py-2.5 bg-primary rounded-lg transition-all duration-300 hover:bg-blue-900 text-center">Book Call</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
