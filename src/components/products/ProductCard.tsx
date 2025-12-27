import { MessageCircle } from 'lucide-react'
import { sendWhatsAppMessage, craftProductMessage } from '../../utils/whatsapp'

export interface ProductCardProps {
  id: string
  name: string
  description: string
  price?: string
  image?: string
  features?: string[]
  onOrderClick?: () => void
}

export default function ProductCard({
  name,
  description,
  price,
  image,
  features = [],
  onOrderClick
}: ProductCardProps) {
  const handleOrderClick = () => {
    const message = craftProductMessage(name, description)
    
    if (onOrderClick) {
      onOrderClick()
    } else {
      sendWhatsAppMessage({ message })
    }
  }

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-red-500/50 transition-all group">
      {/* Product Image */}
      {image && (
        <div className="w-full h-48 bg-linear-to-br from-red-500/10 to-blue-500/10 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
        
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Features List */}
        {features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {features.map((feature, idx) => (
              <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                <span className="text-red-400 mt-1">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Price */}
        {price && (
          <div className="mb-4 pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-500">Price</p>
            <p className="text-2xl font-bold text-red-400">{price}</p>
          </div>
        )}

        {/* Order Button */}
        <button
          onClick={handleOrderClick}
          className="w-full py-3 bg-linear-to-r from-green-600 to-green-500 text-white font-semibold rounded-lg hover:from-green-700 hover:to-green-600 transition-all flex items-center justify-center gap-2 group/btn"
        >
          <MessageCircle className="w-4 h-4" />
          Order via WhatsApp
        </button>
      </div>
    </div>
  )
}
