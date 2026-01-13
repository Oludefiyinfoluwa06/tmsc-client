import { Target, Compass, Lightbulb, Award, Users, Leaf } from 'lucide-react'

export default function VisionMission() {
  return (
    <section className="py-32 bg-linear-to-b from-black to-black/80">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-20 text-center">Our Vision and Mission</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Vision */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-10 border border-white/20 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-red-400" size={32} />
                <h3 className="text-2xl font-bold text-white">Vision</h3>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                Premier hub for industrial training and innovation.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-10 border border-white/20 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <Compass className="text-emerald-400" size={32} />
                <h3 className="text-2xl font-bold text-white">Mission</h3>
              </div>
              <ul className="space-y-3 text-white/90 text-sm">
                <li className="flex gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>World-class training combined with hands-on experience.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>Modern fabrication and innovation.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>Career advancement through skill enhancement.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">•</span>
                  <span>Sustainable manufacturing practices.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Core Values */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-red-600/20 to-blue-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative bg-linear-to-br from-white/10 to-white/5 rounded-2xl p-10 border border-white/20 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-cyan-400" size={32} />
                <h3 className="text-2xl font-bold text-white">Core Values</h3>
              </div>
              <ul className="space-y-4 text-white/90 text-sm">
                <li className="flex gap-3">
                  <Lightbulb className="text-red-400 shrink-0" size={20} />
                  <div>
                    <span className="font-semibold text-white block">Innovation</span>
                    <span className="text-white/70">Leveraging latest technologies to stay ahead.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Award className="text-emerald-400 shrink-0" size={20} />
                  <div>
                    <span className="font-semibold text-white block">Excellence</span>
                    <span className="text-white/70">Setting the gold standard in training.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Users className="text-cyan-400 shrink-0" size={20} />
                  <div>
                    <span className="font-semibold text-white block">Empowerment</span>
                    <span className="text-white/70">Equipping artisans with future skills.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Leaf className="text-green-400 shrink-0" size={20} />
                  <div>
                    <span className="font-semibold text-white block">Sustainability</span>
                    <span className="text-white/70">Promoting responsible resource use.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
