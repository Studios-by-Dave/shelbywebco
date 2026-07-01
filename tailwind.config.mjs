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
          blueLight: '#3B82F6',
          cyan: '#22D3EE',
          cyanLight: '#67E8F9',
          sky: '#38BDF8',
          glow: '#22D3EE',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        nav: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}