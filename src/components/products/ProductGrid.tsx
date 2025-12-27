import ProductCard, { type ProductCardProps } from './ProductCard'

export interface ProductGridProps {
  products: ProductCardProps[]
  title?: string
  description?: string
  columns?: number
}

export default function ProductGrid({
  products,
  title,
  description,
  columns = 3
}: ProductGridProps) {
  const gridColsClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  }[columns] || 'md:grid-cols-3'

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Product Grid */}
        <div className={`grid grid-cols-1 ${gridColsClass} gap-8`}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No products available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  )
}
