import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../../assets/logo.jpeg';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-6 left-6 right-6 z-100 border border-white/20 backdrop-blur-xl bg-white/10 rounded-[50px] mx-auto">
      <div className="px-6 md:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="no-underline transition-opacity duration-300 flex items-center hover:opacity-80">
            <img src={logo} alt="The Machine and Skill Company" className="w-40" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-sm font-semibold text-white no-underline transition-colors duration-300 hover:text-white/80 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:w-0 hover:after:w-full after:transition-all after:duration-300">Home</Link>
            <Link to="/about" className="text-sm font-semibold text-white no-underline transition-colors duration-300 hover:text-white/80 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:w-0 hover:after:w-full after:transition-all after:duration-300">About</Link>
            <Link to="/products" className="text-sm font-semibold text-white no-underline transition-colors duration-300 hover:text-white/80 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:w-0 hover:after:w-full after:transition-all after:duration-300">Products</Link>
            <Link to="/solutions" className="text-sm font-semibold text-white no-underline transition-colors duration-300 hover:text-white/80 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:w-0 hover:after:w-full after:transition-all after:duration-300">Solutions</Link>

            {/* Solutions Dropdown */}
            {/* <div className="group relative">
              <button className="text-sm font-semibold text-white flex items-center gap-1 transition-colors duration-300 hover:text-white/80 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-500 after:w-0 group-hover:after:w-full after:transition-all after:duration-300">
                Solutions
                <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-black/90 border border-white/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50 backdrop-blur">
                <Link to="/for-governments" className="block px-4 py-3 text-sm text-white no-underline hover:bg-white/10 hover:text-white transition-colors duration-300 font-medium">For Governments</Link>
                <Link to="/for-investors" className="block px-4 py-3 text-sm text-white no-underline hover:bg-white/10 hover:text-white transition-colors duration-300 font-medium">For Investors</Link>
                <Link to="/for-oems" className="block px-4 py-3 text-sm text-white no-underline hover:bg-white/10 hover:text-white transition-colors duration-300 font-medium">For OEMs</Link>
                <Link to="/for-local" className="block px-4 py-3 text-sm text-white no-underline hover:bg-white/10 hover:text-white transition-colors duration-300 font-medium">For Local Industry</Link>
              </div>
            </div> */}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/contact" className="text-sm font-semibold text-white no-underline px-4 py-2 border border-white/30 rounded-lg transition-all duration-300 hover:border-white hover:text-white hover:bg-white/10">Contact</Link>
            <Link to="/contact" className="text-sm font-semibold text-white no-underline px-5 py-2.5 bg-red-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-red-700">Book Call</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-transparent border-none cursor-pointer text-white transition-colors duration-300 p-2 hover:text-white/80"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 border-t border-white/20 bg-black/80">
            <div className="flex flex-col gap-1 py-4">
              <Link to="/" onClick={closeMobileMenu} className="text-sm font-semibold text-white no-underline px-4 py-3 hover:bg-white/10 hover:text-white transition-colors duration-300 rounded-lg">Home</Link>
              <Link to="/about" onClick={closeMobileMenu} className="text-sm font-semibold text-white no-underline px-4 py-3 hover:bg-white/10 hover:text-white transition-colors duration-300 rounded-lg">About</Link>
              <Link to="/for-governments" onClick={closeMobileMenu} className="text-sm font-semibold text-white no-underline px-4 py-3 hover:bg-white/10 hover:text-white transition-colors duration-300 rounded-lg ml-2">For Governments</Link>
              <Link to="/for-investors" onClick={closeMobileMenu} className="text-sm font-semibold text-white no-underline px-4 py-3 hover:bg-white/10 hover:text-white transition-colors duration-300 rounded-lg ml-2">For Investors</Link>
              <Link to="/for-oems" onClick={closeMobileMenu} className="text-sm font-semibold text-white no-underline px-4 py-3 hover:bg-white/10 hover:text-white transition-colors duration-300 rounded-lg ml-2">For OEMs</Link>
              <Link to="/for-local" onClick={closeMobileMenu} className="text-sm font-semibold text-white no-underline px-4 py-3 hover:bg-white/10 hover:text-white transition-colors duration-300 rounded-lg ml-2">For Local Industry</Link>
              <Link to="/projects" onClick={closeMobileMenu} className="text-sm font-semibold text-white no-underline px-4 py-3 hover:bg-white/10 hover:text-white transition-colors duration-300 rounded-lg">Projects</Link>
            </div>
            <div className="flex flex-col gap-2 pt-4 px-4 border-t border-white/20">
              <Link to="/contact" onClick={closeMobileMenu} className="text-sm font-semibold text-white no-underline px-4 py-2.5 border border-white/30 rounded-lg transition-all duration-300 hover:border-white hover:text-white hover:bg-white/10 text-center">Contact</Link>
              <Link to="/contact" onClick={closeMobileMenu} className="text-sm font-semibold text-white no-underline px-4 py-2.5 bg-red-600 rounded-lg transition-all duration-300 hover:bg-red-700 text-center">Book Call</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
