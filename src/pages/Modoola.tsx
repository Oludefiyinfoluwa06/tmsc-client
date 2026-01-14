import { ArrowRight, Building2, Users, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductGrid } from '../components/products'
import { useEffect, useState } from 'react'
import { fetchAllProducts } from '../api'
import type { ProductCardProps } from '../components/products/ProductCard'

export default function Modoola() {
  const [products, setProducts] = useState<ProductCardProps[]>([])

  useEffect(() => {
    let mounted = true
    const API_BASE = (import.meta as any).env.VITE_API_BASE_URL || ''

    function resolveImage(img: string | undefined) {
      if (!img) return undefined
      return img.startsWith('http') ? img : `${API_BASE}${img.startsWith('/') ? '' : '/'}${img}`
    }

    fetchAllProducts()
      .then((data: any[]) => {
        if (!mounted) return
        const slug = 'MODOOLA'
        const filtered = (data || []).filter((p: any) => {
          const s = String(p.slug || p.productType || p.type || '').toUpperCase()
          return s === slug
        })
        const mapped = filtered.map((p: any) => ({
          id: p._id || p.id || String(p.id || p._id || Math.random()),
          name: p.title || p.name || 'Product',
          description: p.description || '',
          image: resolveImage(Array.isArray(p.images) ? (p.images[0]?.url || p.images[0]) : p.image || p.imageUrl),
        }))
        setProducts(mapped)
      })
      .catch(() => { if (mounted) setProducts([]) })

    return () => { mounted = false }
  }, [])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden" style={{ paddingTop: '15px' }}>
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://res.cloudinary.com/dlpbzlmix/video/upload/v1766446396/hero-vid_oj6v2d.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 via-red-900/50 to-blue-900/70 z-10"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl z-0"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"></div>

        <div className="relative z-20 w-full mx-auto px-6 md:px-8 text-left pt-20">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur">
            <Building2 size={16} className="text-red-400" />
            <span className="text-red-300 text-sm font-semibold">Modular Industrial Centers</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
            MODOOLA <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-red-400 via-emerald-400 to-cyan-400">Infrastructure</span>
          </h1>

          <p className="text-base md:text-lg text-white/90 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            Deployable modular centers that bring industrial capacity and training closer to demand across Africa.
          </p>

          <div className="flex gap-4 flex-wrap mb-22 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <Link className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white bg-linear-to-r from-red-600 to-red-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:from-red-500 hover:to-red-400" to="/contact">
              Host a modular center
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'Modular Design',
                description: 'Scalable, deployable infrastructure that adapts to local needs and can be rapidly established.'
              },
              {
                icon: Users,
                title: 'Skills Integration',
                description: 'TVET partnerships and comprehensive training programs embedded in each center.'
              },
              {
                icon: MapPin,
                title: 'Regional Hubs',
                description: 'Strategic placement across Africa for maximum accessibility and economic impact.'
              }
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="bg-gray-50 border border-gray-800 rounded-lg p-8 hover:border-red-500/50 transition-all">
                  <Icon className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                  <p className="text-black">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* Products (loaded from API) */}
      <ProductGrid
        products={products}
        title="Modular Center Solutions"
        description="Choose the modular center package that fits your manufacturing needs"
      />
    </div>
  )
}
