import { Link } from 'react-router-dom'

export default function Engagement() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Engagement</h2>
        <p className="text-base text-gray-700 mb-6">Engagement pathways are defined by use case and deployment context.</p>

        <div className="flex gap-3 flex-wrap">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition">Discuss Deployment</Link>
          <Link to="/training" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition">Access Training & Use</Link>
        </div>
      </div>
    </section>
  )
}
