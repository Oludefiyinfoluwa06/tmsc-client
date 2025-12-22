import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="brand">
          <span className="brand-text">Machine & Skills</span>
        </Link>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`main-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMobileMenu}>Home</Link>
          <Link to="/about" onClick={closeMobileMenu}>About</Link>
          <Link to="/products/modoola" onClick={closeMobileMenu}>Products</Link>
          <Link to="/projects" onClick={closeMobileMenu}>Projects</Link>
          <Link to="/contact" className="nav-cta" onClick={closeMobileMenu}>Contact</Link>
        </nav>
      </div>
    </header>
  )
}
