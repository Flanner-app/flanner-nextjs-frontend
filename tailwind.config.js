/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      yellow: {
        light: '#F8F2E1',
        regular: '#FFC800',
        hover: '#FFDE66',
        dark: '#FFEDBA',
      },
      black: {
        default: '#000000',
        regular: '#151515',
        hover: '#444444',
      },
      utility: {
        error: '#d0011b',
        success: '#5fb846',
      },
    },
    extend: {
      fontFamily: {
        heebo: ['var(--font-heebo)', ...defaultTheme.fontFamily.sans],
        archivo: ['var(--font-archivo)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
