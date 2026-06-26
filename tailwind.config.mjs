/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          darkest: '#0A0A0A',
          dark: '#1A1A1A',
          purple: '#8B5CF6',
          purpleLight: '#A78BFA',
          green: '#39FF14',
          greenLight: '#6BFF47',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
