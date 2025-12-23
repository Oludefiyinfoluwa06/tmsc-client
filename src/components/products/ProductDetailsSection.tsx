import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import modoolaImg from '../../assets/modoola.jpeg';
import machineExchangeImg from '../../assets/machine-exchange.jpeg';
import titaniumLaserImg from '../../assets/titanium-laser.jpeg';

const products = [
  {
    id: 1,
    number: "01",
    title: "MODOOLA",
    subtitle: "Modular Industrial & Training Centers",
    shortDesc: "Deployable, integrated, scalable infrastructure for industrial training and manufacturing.",
    image: modoolaImg,
    features: [
      "Containerized modular design for rapid deployment",
      "Fully equipped training & fabrication labs",
      "Adaptable for TVET, industrial parks, or training centers",
      "Local assembly & customization capability",
      "Power, water, connectivity integrated"
    ],
    useCases: [
      "Government-mandated TVET expansion",
      "Industrial park anchor infrastructure",
      "Private training center deployments",
      "Skills development ecosystems"
    ],
    deployment: "8–12 weeks from order to operational center",
    cta: "Request Concept Pack",
    link: "/contact"
  },
  {
    id: 2,
    number: "02",
    title: "Machine Exchange Platform",
    subtitle: "Machinery Trading & Financing Corridor",
    shortDesc: "Direct access to Chinese machinery inventory with integrated financing and logistics.",
    image: machineExchangeImg,
    features: [
      "Direct sourcing from vetted Chinese manufacturers",
      "Flexible lease, rent-to-own, and purchase models",
      "Integrated trade finance from DFI partners",
      "Last-mile logistics & installation support",
      "Warranty, spare parts, and after-sales service"
    ],
    useCases: [
      "Government machinery procurement programs",
      "Investor portfolio deployment",
      "OEM market entry partnerships",
      "Private sector capacity building"
    ],
    deployment: "Deal structure: 2–4 weeks. Delivery: 6–12 weeks from payment.",
    cta: "Submit Mandate",
    link: "/contact"
  },
  {
    id: 3,
    number: "03",
    title: "Titanium Laser",
    subtitle: "Advanced Laser Cutting, Welding & Training Ecosystem",
    shortDesc: "World-class laser systems with comprehensive training and after-sales support.",
    image: titaniumLaserImg,
    features: [
      "Cutting-edge laser technology (CO2 and fiber systems)",
      "Cutting, welding, marking, and cleaning capabilities",
      "On-site operator and maintenance training included",
      "Flexible financing models available",
      "24/7 technical support and spare parts availability"
    ],
    useCases: [
      "Artisan & SME upskilling",
      "Industrial manufacturing hubs",
      "Training center integration",
      "Private sector competitiveness"
    ],
    deployment: "Installation: 2–3 weeks. Training: 2-week intensive program.",
    cta: "Request Titanium Pack",
    link: "/contact"
  }
];

export default function ProductDetailsSection() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {products.map((product, idx) => (
          <div key={product.id} className="mb-24 last:mb-0">
            {/* Product Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-baseline gap-4 mb-4">
                  <p className="text-red-600 text-6xl font-bold opacity-30">{product.number}</p>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">{product.title}</h2>
                <p className="text-lg text-red-600 font-semibold mb-4">{product.subtitle}</p>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">{product.shortDesc}</p>

                <div className="mb-8">
                  <h3 className="text-white font-semibold mb-4 text-lg">Key Capabilities</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white/50 text-xs uppercase font-semibold mb-2">Typical Use Cases</p>
                    <ul className="space-y-1">
                      {product.useCases.map((useCase, i) => (
                        <li key={i} className="text-white/80 text-sm">• {useCase}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white/50 text-xs uppercase font-semibold mb-2">Deployment Timeline</p>
                    <p className="text-white/80 text-sm">{product.deployment}</p>
                  </div>
                </div>

                <Link to={product.link} className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 no-underline">
                  {product.cta}
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Image */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative h-100 rounded-2xl overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Divider */}
            {idx < products.length - 1 && (
              <div className="h-px bg-linear-to-r from-transparent via-red-600/50 to-transparent my-16"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
