import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-poppins)', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'box-shadow': '0 0.2rem 0.5rem var(--shadow-color)',
      },
      colors: {
        'color-bg': '#FDFDFD',
        'color-text': '#333',
        'main-color': '#754EF9',
        'white-color': '#FDFDFD',
        'shadow-color': 'rgba(0, 0, 0, .2)',
      },
    },
  },
  plugins: [],
} satisfies Config
