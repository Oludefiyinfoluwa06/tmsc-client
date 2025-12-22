import { Briefcase, Users, Globe, Zap } from 'lucide-react'

export default function CredibilitySection() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0s' }}>
            <div className="flex justify-center mb-4">
              <Briefcase className="text-primary" size={32} />
            </div>
            <h4 className="text-5xl font-bold text-primary mb-2">3</h4>
            <p className="text-gray-600 text-sm font-semibold">Integrated Product Pillars</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex justify-center mb-4">
              <Users className="text-primary" size={32} />
            </div>
            <h4 className="text-5xl font-bold text-primary mb-2">4</h4>
            <p className="text-gray-600 text-sm font-semibold">Target Audience Pathways</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-4">
              <Globe className="text-primary" size={32} />
            </div>
            <h4 className="text-5xl font-bold text-primary mb-2">∞</h4>
            <p className="text-gray-600 text-sm font-semibold">Deployment Capacity</p>
          </div>

          <div className="text-center p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex justify-center mb-4">
              <Zap className="text-primary" size={32} />
            </div>
            <h4 className="text-5xl font-bold text-primary mb-2">100%</h4>
            <p className="text-gray-600 text-sm font-semibold">Execution Focus</p>
          </div>
        </div>
      </div>
    </section>
  )
}
