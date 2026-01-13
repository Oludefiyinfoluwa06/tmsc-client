import { Briefcase, Users, Globe, Zap } from 'lucide-react'

export default function CredibilitySection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why We Stand Out</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Delivering measurable impact across every dimension of industrial capacity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group h-full p-10 bg-gray-50 border border-gray-100 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-red-500/50 hover:bg-white animate-scale-in flex flex-col items-center text-center" style={{ animationDelay: '0s' }}>
            <div className="flex justify-center mb-6 h-16 w-16 rounded-xl bg-red-500/10 items-center group-hover:bg-red-500 group-hover:text-white transition-all">
              <Briefcase className="text-red-600 group-hover:text-white" size={32} />
            </div>
            <h4 className="text-5xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors leading-none">3</h4>
            <p className="text-gray-600 text-sm font-semibold group-hover:text-gray-900 transition-colors">Integrated Product Pillars</p>
          </div>

          <div className="group h-full p-10 bg-gray-50 border border-gray-100 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-red-500/50 hover:bg-white animate-scale-in flex flex-col items-center text-center" style={{ animationDelay: '0.1s' }}>
            <div className="flex justify-center mb-6 h-16 w-16 rounded-xl bg-red-500/10 items-center group-hover:bg-red-500 group-hover:text-white transition-all">
              <Users className="text-red-600 group-hover:text-white" size={32} />
            </div>
            <h4 className="text-5xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors leading-none">4</h4>
            <p className="text-gray-600 text-sm font-semibold group-hover:text-gray-900 transition-colors">Target Audience Pathways</p>
          </div>

          <div className="group h-full p-10 bg-gray-50 border border-gray-100 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-red-500/50 hover:bg-white animate-scale-in flex flex-col items-center text-center" style={{ animationDelay: '0.2s' }}>
            <div className="flex justify-center mb-6 h-16 w-16 rounded-xl bg-red-500/10 items-center group-hover:bg-red-500 group-hover:text-white transition-all">
              <Globe className="text-red-600 group-hover:text-white" size={32} />
            </div>
            <h4 className="text-5xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors leading-none">∞</h4>
            <p className="text-gray-600 text-sm font-semibold group-hover:text-gray-900 transition-colors">Deployment Capacity</p>
          </div>

          <div className="group h-full p-10 bg-gray-50 border border-gray-100 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-red-500/50 hover:bg-white animate-scale-in flex flex-col items-center text-center" style={{ animationDelay: '0.3s' }}>
            <div className="flex justify-center mb-6 h-16 w-16 rounded-xl bg-red-500/10 items-center group-hover:bg-red-500 group-hover:text-white transition-all">
              <Zap className="text-red-600 group-hover:text-white" size={32} />
            </div>
            <h4 className="text-5xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors leading-none">100%</h4>
            <p className="text-gray-600 text-sm font-semibold group-hover:text-gray-900 transition-colors">Execution Focus</p>
          </div>
        </div>
      </div>
    </section>
  )
}
