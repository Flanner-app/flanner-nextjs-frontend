/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
    },
  },
  plugins: [],
}
