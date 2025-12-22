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
    },
  },
  plugins: [],
}

