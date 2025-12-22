import { Link } from 'react-router-dom'
import {
  Building2,
  TrendingUp,
  Zap,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Factory,
  Users,
  Globe,
  Lightbulb
} from 'lucide-react'
import './pages.css'

export default function Homepage() {
  return (
    <div className="homepage">
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="https://media.w3.org/cc0-video/big_buck_bunny_720p_30mb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Industrial Capacity Platform
          </div>
          <h1>Africa's <span className="highlight">Industrial</span> Capacity Engine</h1>
          <p className="lede">From policy to welded steel. We deploy capacity, not PowerPoints.</p>
          <div className="hero-ctas">
            <Link className="btn primary" to="/contact">
              Book Strategy Call <ArrowRight size={18} />
            </Link>
            <Link className="btn secondary" to="/contact">
              Submit Mandate
            </Link>
          </div>
        </div>
      </section>

      <section className="solutions-intro">
        <div className="container">
          <div className="section-header">
            <h2>Choose your industrial path</h2>
            <p>Find the right entry point for your organization</p>
          </div>
          <div className="solutions-grid">
            <Link to="/for-governments" className="solution-card gov">
              <div className="solution-icon"><Building2 size={40} /></div>
              <h3>For Governments</h3>
              <p>Industrialisation, skills development, visible impact.</p>
              <span className="card-arrow"><ArrowRight size={16} /></span>
            </Link>
            <Link to="/for-investors" className="solution-card inv">
              <div className="solution-icon"><TrendingUp size={40} /></div>
              <h3>For Investors</h3>
              <p>Structured deals, risk-managed portfolios, returns.</p>
              <span className="card-arrow"><ArrowRight size={16} /></span>
            </Link>
            <Link to="/for-oems" className="solution-card oem">
              <div className="solution-icon"><Factory size={40} /></div>
              <h3>For OEMs</h3>
              <p>Market entry, trusted deployments, scale.</p>
              <span className="card-arrow"><ArrowRight size={16} /></span>
            </Link>
            <Link to="/for-local" className="solution-card local">
              <div className="solution-icon"><Wrench size={40} /></div>
              <h3>For Local Industry</h3>
              <p>Access to machines, training, fabrication support.</p>
              <span className="card-arrow"><ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><Globe size={32} /></div>
              <h4>3</h4>
              <p>Core Industrial Pillars</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Users size={32} /></div>
              <h4>4</h4>
              <p>Target Audiences</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Zap size={32} /></div>
              <h4>∞</h4>
              <p>Deployment Capacity</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Lightbulb size={32} /></div>
              <h4>100%</h4>
              <p>Execution Focus</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pillars-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Pillars</h2>
            <p>Integrated industrial systems for sustained capacity</p>
          </div>
          <div className="pillars">
            <div className="pillar-card">
              <div className="pillar-header">
                <div className="pillar-icon"><Factory size={36} /></div>
                <div className="pillar-number">01</div>
              </div>
              <h3>MODOOLA</h3>
              <p className="pillar-desc">Modular industrial & training centers — deployable capacity close to demand.</p>
              <ul className="pillar-benefits">
                <li><CheckCircle2 size={16} /> TVET integration</li>
                <li><CheckCircle2 size={16} /> Industrial parks</li>
                <li><CheckCircle2 size={16} /> Regional training hubs</li>
              </ul>
              <Link to="/products/modoola" className="cta-link">Request Concept Pack <ArrowRight size={14} /></Link>
            </div>
            <div className="pillar-card">
              <div className="pillar-header">
                <div className="pillar-icon"><Zap size={36} /></div>
                <div className="pillar-number">02</div>
              </div>
              <h3>Machine Exchange Platform</h3>
              <p className="pillar-desc">Machinery trading & financing corridor — connecting suppliers to deployers.</p>
              <ul className="pillar-benefits">
                <li><CheckCircle2 size={16} /> Structured financing</li>
                <li><CheckCircle2 size={16} /> Vetted suppliers</li>
                <li><CheckCircle2 size={16} /> Volume deployment</li>
              </ul>
              <Link to="/products/exchange" className="cta-link">Submit Mandate <ArrowRight size={14} /></Link>
            </div>
            <div className="pillar-card">
              <div className="pillar-header">
                <div className="pillar-icon"><Wrench size={36} /></div>
                <div className="pillar-number">03</div>
              </div>
              <h3>TITANIUM LASER</h3>
              <p className="pillar-desc">Advanced laser machinery with training and after-sales ecosystem.</p>
              <ul className="pillar-benefits">
                <li><CheckCircle2 size={16} /> Cutting, welding, marking</li>
                <li><CheckCircle2 size={16} /> Full training program</li>
                <li><CheckCircle2 size={16} /> Technical support</li>
              </ul>
              <Link to="/products/titanium" className="cta-link">Request Titanium Pack <ArrowRight size={14} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="corridor-section">
        <div className="container">
          <div className="section-header">
            <h2 style={{color: '#fff'}}>The Nigeria–China Industrial Corridor</h2>
            <p style={{color: 'rgba(255,255,255,0.9)'}}>Machines, skills, and money moving in one direction — from policy to deployment to execution.</p>
          </div>
          <div className="corridor-visual">
            <div className="corridor-flow">
              <div className="flow-item">
                <div className="flow-icon"><Building2 size={32} /></div>
                <p><strong>Policy & Mandates</strong><br/>Government industrialisation programs</p>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item">
                <div className="flow-icon"><Lightbulb size={32} /></div>
                <p><strong>Deployment Design</strong><br/>MODOOLA centers & exchange</p>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-item">
                <div className="flow-icon"><CheckCircle2 size={32} /></div>
                <p><strong>Execution</strong><br/>Training, machinery, results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-final">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to build African industrial capacity?</h2>
            <p>Let's talk about your mandate, investment, or partnership.</p>
            <div className="cta-buttons">
              <Link className="btn primary" to="/contact">Get in Touch</Link>
              <Link className="btn secondary" to="/about">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
