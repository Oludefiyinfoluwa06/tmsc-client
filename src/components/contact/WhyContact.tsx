import { Zap, Clock, Users, Headphones } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'Our team responds within 24 hours to all inquiries',
  },
  {
    icon: Clock,
    title: 'Flexible Timeline',
    description: 'We work with your schedule and timeframe requirements',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Access to our network of equipment and financing experts',
  },
  {
    icon: Headphones,
    title: '24/7 Assistance',
    description: 'Dedicated support throughout your sourcing journey',
  },
]

export default function WhyContact() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Contact Us?
          </h2>
          <p className="text-gray-400 text-lg">
            We're committed to helping you find the right equipment and solutions for your manufacturing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="group bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-red-500/50 hover:bg-gray-900/80 transition-all"
              >
                <Icon className="w-8 h-8 text-red-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
