/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a2b6b',
        secondary: '#093fb4',
        accent: '#0d3dff',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, rgba(9, 63, 180, 0.1) 0%, transparent 70%)',
      },
      fontSize: {
        clamp: 'clamp(1.8rem, 5vw, 3rem)',
      },
      zIndex: {
        100: '100',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out both',
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
        'slide-in-left': 'slideInLeft 0.7s ease-out both',
        'slide-in-right': 'slideInRight 0.7s ease-out both',
        'slide-in-top': 'slideInTop 0.7s ease-out both',
        'scale-in': 'scaleIn 0.6s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInTop: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

