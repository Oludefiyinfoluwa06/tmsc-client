import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AudiencePathwaysSection() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-red-600 text-sm font-semibold mb-3">YOUR PATHWAY</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Which Solution Are You?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              audience: "Government",
              focus: "Industrialization, skills, local employment",
              products: ["MODOOLA", "Machine Exchange"],
              link: "/for-governments"
            },
            {
              audience: "Investor",
              focus: "Deal structure, capital deployment, returns",
              products: ["Machine Exchange", "Titanium Laser"],
              link: "/for-investors"
            },
            {
              audience: "OEM",
              focus: "Market entry, partner ecosystem, volumes",
              products: ["Machine Exchange", "MODOOLA"],
              link: "/for-oems"
            },
            {
              audience: "Local Industry",
              focus: "Access to machines, training, scaling",
              products: ["Titanium Laser", "Machine Exchange"],
              link: "/for-local"
            }
          ].map((item, idx) => (
            <Link key={idx} to={item.link} className="group bg-white/5 border border-white/10 rounded-xl p-8 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300 no-underline">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">{item.audience}</h3>
              <p className="text-white/70 text-sm mb-4">{item.focus}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {item.products.map((prod, i) => (
                  <span key={i} className="text-xs font-semibold text-red-600 bg-red-600/10 px-3 py-1 rounded-full">
                    {prod}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all duration-300">
                Explore <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
