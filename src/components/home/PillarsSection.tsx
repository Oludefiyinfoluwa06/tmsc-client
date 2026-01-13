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
    description: 'Deployable industrial centers.',
    features: [
      'TVET partnerships',
      'Regional training hubs'
    ],
    link: '/products/modoola',
    linkText: 'Learn more'
  },
  {
    id: 2,
    number: '02',
    title: 'Machine Exchange',
    image: machineExchangeImg,
    description: 'Machinery trading & financing corridor.',
    features: [
      'Structured financing',
      'Volume deployment'
    ],
    link: '/products/exchange',
    linkText: 'Learn more'
  },
  {
    id: 3,
    number: '03',
    title: 'TITANIUM LASER',
    image: titaniumLaserImg,
    description: 'Advanced laser systems with training.',
    features: [
      'Operator training included',
      'Technical support'
    ],
    link: '/products/titanium',
    linkText: 'Learn more'
  }
]

export default function PillarsSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">Three Pillars</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Integrated solutions for industrial capacity.</p>
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

              {/* Number - visible on desktop, hidden on mobile */}
              <div className="absolute top-8 right-8 text-6xl font-bold text-white/20 hidden md:block md:group-hover:opacity-0 transition-opacity duration-300">
                {pillar.number}
              </div>

              {/* Content - visible on mobile, hidden on desktop by default */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
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
