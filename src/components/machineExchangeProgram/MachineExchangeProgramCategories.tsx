import { Settings, Wrench, Zap, Target, Plug, BookOpen } from 'lucide-react'

export default function MachineExchangeProgramCategories() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Available Equipment</p>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Machine Categories</h2>
          <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-400 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { category: 'Fabrication Equipment', examples: 'Welding machines, cutting tools, marking systems', Icon: Settings },
            { category: 'Manufacturing Machinery', examples: 'CNC machines, industrial presses, assembly systems', Icon: Wrench },
            { category: 'Processing Equipment', examples: 'Mills, lathes, drilling machines, grinding systems', Icon: Zap },
            { category: 'Specialized Systems', examples: 'Laser systems, automation equipment, testing machinery', Icon: Target },
            { category: 'Support Equipment', examples: 'Power supplies, hydraulic systems, tooling', Icon: Plug },
            { category: 'Training Equipment', examples: 'Demonstration units, practice stations, lab equipment', Icon: BookOpen }
          ].map((item, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:border-red-600/50 transition-all duration-300 group-hover:-translate-y-2">
                <div className="mb-4"><item.Icon className="text-red-400" size={32} /></div>
                <h3 className="text-white font-semibold text-lg mb-3">{item.category}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.examples}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
