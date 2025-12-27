import { useNavigate } from 'react-router-dom';
import { Settings, Wrench, Zap, Lightbulb, Cpu, Flame, Scissors, Search, Package, Check, FlaskConical } from 'lucide-react';

export default function PlatformMachineCategories() {
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Browse</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Machine Categories</h2>
          <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 'fabrication', category: 'Fabrication Equipment', Icon: Settings },
            { id: 'manufacturing', category: 'Manufacturing Machinery', Icon: Wrench },
            { id: 'processing', category: 'Processing Equipment', Icon: Zap },
            { id: 'laser', category: 'Laser Systems', Icon: Lightbulb },
            { id: 'automation', category: 'Automation Equipment', Icon: Cpu },
            { id: 'welding', category: 'Welding Systems', Icon: Flame },
            { id: 'cutting', category: 'Cutting Machines', Icon: Scissors },
            { id: 'inspection', category: 'Inspection Equipment', Icon: Search },
            { id: 'material-handling', category: 'Material Handling', Icon: Package },
            { id: 'quality-control', category: 'Quality Control', Icon: Check },
            { id: 'test', category: 'Test Equipment', Icon: FlaskConical },
            { id: 'support', category: 'Support Equipment', Icon: Wrench }
          ].map((item, idx) => (
            <button
              key={idx}
              onClick={() => navigate(`/gallery?category=${item.id}`)}
              className="group relative text-left"
            >
              <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2">
                <div className="mb-4"><item.Icon className="text-red-400" size={32} /></div>
                <h3 className="text-white font-semibold group-hover:text-red-400 transition-colors">{item.category}</h3>
                <p className="text-white/70 text-sm mt-2">Browse equipment in this category</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
