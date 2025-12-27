import type { MachineCategory } from "./types";

interface MachineCategoriesProps {
  categories: MachineCategory[];
}

export default function MachineCategories({ categories }: MachineCategoriesProps) {
  return (
    <div id="machine-categories" className="mt-32 pt-32 border-t border-white/10">
      <div className="mb-16">
        <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Equipment By Type</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Machine Categories</h2>
        <p className="text-white/70 text-lg">Browse our extensive catalog organized by equipment type</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="group">
            <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative">
              {/* Category Header */}
              <div className="bg-linear-to-br from-white/10 to-white/5 rounded-t-2xl p-6 border-t border-l border-r border-white/20 backdrop-blur-xl group-hover:border-red-600/50 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{category.name}</h3>
                    <p className="text-white/70 text-sm">{category.images.length} items</p>
                  </div>
                  <category.Icon className="text-red-400" size={32} />
                </div>
              </div>

              {/* Category Images */}
              <div className="grid grid-cols-2 gap-3 p-4 bg-linear-to-br from-white/5 to-white/2 rounded-b-2xl border-b border-l border-r border-white/20 backdrop-blur-xl group-hover:border-red-600/50 transition-all duration-300">
                {category.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden rounded-lg h-32 cursor-pointer group/image"
                  >
                    <img
                      src={image}
                      alt={`${category.name} ${idx + 1}`}
                      className="w-full h-full object-cover group-hover/image:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
