import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand & About */}
            <div className="footer-section">
              <h3 className="footer-title">Machine & Skills</h3>
              <p className="footer-description">
                Africa's industrial capacity engine. Deploying capacity, not PowerPoints.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-subtitle">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/for-governments">For Governments</Link></li>
                <li><Link to="/for-investors">For Investors</Link></li>
                <li><Link to="/for-oems">For OEMs</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div className="footer-section">
              <h4 className="footer-subtitle">Products</h4>
              <ul className="footer-links">
                <li><Link to="/products/modoola">MODOOLA</Link></li>
                <li><Link to="/products/exchange">Machine Exchange</Link></li>
                <li><Link to="/products/titanium">Titanium Laser</Link></li>
                <li><Link to="/projects">Projects</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="footer-subtitle">Get in Touch</h4>
              <div className="contact-info">
                <a href="mailto:info@machineandskills.com" className="contact-item">
                  <Mail size={18} />
                  <span>info@machineandskills.com</span>
                </a>
                <a href="tel:+234800000000" className="contact-item">
                  <Phone size={18} />
                  <span>+234 800 000 0000</span>
                </a>
                <div className="contact-item no-hover">
                  <MapPin size={18} />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Machine & Skills. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="divider">•</span>
              <Link to="/terms">Terms of Service</Link>
              <span className="divider">•</span>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
