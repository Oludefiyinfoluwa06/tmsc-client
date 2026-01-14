import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface SecondaryButtonProps {
  to: string
  children: ReactNode
  className?: string
  onClick?: () => void
  variant?: 'outline' | 'dark'
}

export default function SecondaryButton({
  to,
  children,
  className = '',
  onClick,
  variant = 'outline'
}: SecondaryButtonProps) {
  const variants = {
    outline: `
      bg-transparent
      text-white
      border border-white/40
      hover:bg-white/10
      hover:border-white/60
    `,
    dark: `
      bg-transparent
      text-white/90
      border border-gray-600
      hover:bg-gray-900
      hover:border-gray-500
    `
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        px-6 py-3
        rounded-lg font-semibold text-sm
        transition-all duration-300
        hover:-translate-y-1
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </Link>
  )
}
