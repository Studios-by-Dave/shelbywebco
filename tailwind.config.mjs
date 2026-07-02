/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#0A0A0A',
          dark: '#1A1A1A',
          blue: '#1D4ED8',
          blueDark: '#1E3A8A',
          blueLight: '#3B82F6',
          cyan: '#22D3EE',
          cyanLight: '#67E8F9',
          sky: '#38BDF8',
          glow: '#22D3EE',
          accent: '#84CC16',
          accentLight: '#A3E635',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        nav: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'flash-subtle': 'flash-subtle 1s infinite',
        'shine': 'shine 6s infinite linear',
      },
      keyframes: {
        'flash-subtle': {
          '0%, 100%': { opacity: 1, textShadow: '0 2px 4px rgba(0,0,0,0.8)' },
          '50%': { opacity: 0.2, textShadow: '0 0 20px rgba(34,211,238,1)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        }
      }
    },
  },
  plugins: [],
}