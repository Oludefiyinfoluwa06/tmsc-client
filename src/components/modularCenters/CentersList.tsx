import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'
import { fetchCenters } from '../../api'

type Center = {
  id: string
  name: string
  location?: string
  description?: string
  imageUrl?: string
  training?: { title?: string; schedule?: string; details?: string }
}

export default function CentersList() {
  const [items, setItems] = useState<Center[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let mounted = true
    fetchCenters()
    .then((data: any[]) => {
        setLoading(true)
        if (!mounted) return
      const mapped = (Array.isArray(data) ? data : []).map((c: any) => {
          const baseUrl = import.meta.env.VITE_API_BASE_URL.replace(/\/$/, '')

          const rawImageUrl =
            (Array.isArray(c.images)
              ? c.images[0]?.imageUrl
              : undefined)

          const imageUrl = rawImageUrl
            ? rawImageUrl.startsWith('http')
              ? rawImageUrl
              : `${baseUrl}/${rawImageUrl.replace(/^\//, '')}`
            : undefined

          return {
            id: c._id || c.id || String(c.id || c._id || Math.random()),
            name: c.name || c.title || 'Center',
            location: c.location || '',
            description: c.description || '',
            imageUrl,
          }
        })

        setItems(mapped)
      })
      .catch(() => setItems([]))
      .finally(() => setLoading(false))

    return () => { mounted = false }
  }, [])

  if (loading) return <div className="py-16 text-center text-gray-400 text-lg">Loading nodes...</div>
  if (items.length === 0) return <div className="py-16 text-center text-gray-400 text-lg">No nodes available.</div>

  return (
    <section className="py-20 bg-linear-to-b from-slate-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Digital Production Nodes</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Explore our deployable production infrastructure across Africa</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <article key={c.id} className="group bg-linear-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-red-500/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1">
              {c.imageUrl ? (
                <div className="w-full h-48 bg-gray-800 overflow-hidden relative">
                  <img src={c.imageUrl} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent"></div>
                </div>
              ) : (
                <div className="w-full h-48 bg-linear-to-br from-gray-700 to-gray-800 flex items-center justify-center text-gray-500">
                  <svg className="w-12 h-12 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
              )}

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold text-white leading-snug">{c.name}</h3>
                </div>

                {c.location && (
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin size={16} className="text-red-400 shrink-0" />
                    <span className="text-sm font-medium">{c.location}</span>
                  </div>
                )}

                {c.description && (
                  <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">{c.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
