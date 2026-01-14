import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface PrimaryButtonProps {
  to: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

/**
 * Primary CTA Button Component
 * 
 * Specifications:
 * - Solid red-600 fill color (exclusive to primary buttons)
 * - High contrast white text
 * - Larger padding (px-8 py-4)
 * - Prominent shadow and hover effects
 * 
 * Usage: One per page above the fold
 */
export default function PrimaryButton({
  to,
  children,
  className = '',
  onClick
}: PrimaryButtonProps) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        px-8 py-4
        rounded-lg font-semibold text-base
        text-white
        bg-red-600
        shadow-lg
        transition-all duration-300
        hover:bg-red-700
        hover:shadow-xl
        hover:-translate-y-1
        ${className}
      `}
    >
      {children}
    </Link>
  )
}
