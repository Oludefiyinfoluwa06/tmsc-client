import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// Import pillar images (placeholders - update with your actual image paths)
import modoolaImg from '../../assets/modoola.jpeg'
import machineExchangeImg from '../../assets/machine-exchange.jpeg'
import titaniumLaserImg from '../../assets/titanium-laser.jpeg'

const pillars = [
  {
    id: 1,
    number: '01',
    title: 'MODOOLA',
    image: modoolaImg,
    description: 'Modular industrial & training centers — deployable capacity close to demand.',
    features: [
      'TVET integration & partnerships',
      'Industrial park deployment',
      'Regional training hubs'
    ],
    link: '/products/modoola',
    linkText: 'Request Concept Pack'
  },
  {
    id: 2,
    number: '02',
    title: 'Machine Exchange',
    image: machineExchangeImg,
    description: 'Machinery trading & financing corridor — connecting suppliers to deployers globally.',
    features: [
      'Structured financing options',
      'Vetted OEM suppliers',
      'Volume deployment support'
    ],
    link: '/products/exchange',
    linkText: 'Submit Mandate'
  },
  {
    id: 3,
    number: '03',
    title: 'TITANIUM LASER',
    image: titaniumLaserImg,
    description: 'Advanced laser machinery with comprehensive training and after-sales ecosystem.',
    features: [
      'Cutting, welding, marking, cleaning',
      'Full operator training program',
      'Lifetime technical support'
    ],
    link: '/products/titanium',
    linkText: 'Explore Solutions'
  }
]

export default function PillarsSection() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Three Integrated Pillars</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">Modular centers, machinery corridors, and laser ecosystems working as one system.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="group relative h-96 rounded-2xl overflow-hidden animate-slide-in-left shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
            >
              {/* Background Image */}
              <img
                src={pillar.image}
                alt={pillar.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-300"></div>

              {/* Number - visible on default state */}
              <div className="absolute top-8 right-8 text-6xl font-bold text-white/20 group-hover:opacity-0 transition-opacity duration-300">
                {pillar.number}
              </div>

              {/* Content - hidden by default, visible on hover */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white mb-3 uppercase tracking-wider">{pillar.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed text-sm">{pillar.description}</p>

                <ul className="space-y-2 mb-8">
                  {pillar.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-start gap-2 text-white/80 text-sm">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={pillar.link} className="inline-flex items-center gap-2 text-red-500 font-semibold text-sm hover:text-red-400 transition-colors w-fit">
                  {pillar.linkText} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
