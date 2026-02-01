import { CheckCircle, Settings, CreditCard, Building2, Wrench } from 'lucide-react'

export default function PartnershipOpportunities() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <p className="text-red-600 text-sm font-semibold uppercase tracking-widest mb-3">Opportunities</p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
          <div className="w-16 h-1 bg-linear-to-r from-red-600 via-emerald-600 to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: 'Equipment Suppliers',
              description: 'OEM manufacturers and equipment suppliers looking to expand African market reach',
              benefits: [
                'Access to pre-qualified buyers',
                'Verified customer database',
                'Marketing support',
                'Financing facilitation',
                'After-sales support integration'
              ],
              Icon: Settings
            },
            {
              title: 'Financial Services',
              description: 'Banks, fintech companies, and financing institutions offering flexible payment options',
              benefits: [
                'Vetted customer access',
                'High transaction volume',
                'Risk mitigation support',
                'Portfolio growth opportunity',
                'Platform integration'
              ],
              Icon: CreditCard
            },
            {
              title: 'Government & Policy',
              description: 'Government agencies seeking to build industrial capacity and skills development',
              benefits: [
                'Industrial infrastructure',
                'Skills development programs',
                'Economic development impact',
                'TVET integration',
                'Regional capacity building'
              ],
              Icon: Building2
            },
            {
              title: 'Installation & Services',
              description: 'Service providers offering installation and maintenance services',
              benefits: [
                'Steady project pipeline',
                'Certification support',
                'Operator enablement programs',
                'Quality assurance',
                'Revenue opportunities'
              ],
              Icon: Wrench
            }
          ].map((partnership, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-linear-to-br from-red-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-red-500/30 transition-all duration-300 group-hover:-translate-y-2 shadow-sm hover:shadow-lg">
                <div className="mb-4"><partnership.Icon className="text-red-600" size={36} /></div>
                <h3 className="text-gray-900 text-xl font-semibold mb-3">{partnership.title}</h3>
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">{partnership.description}</p>
                <div className="space-y-3">
                  {partnership.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <CheckCircle className="text-red-600 shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
