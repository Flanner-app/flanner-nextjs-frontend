/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      yellow: {
        regular: '#F8F2E1',
        dark: '#FFEDBA',
      },
      primary: {
        light: '#d1beda',
        dark: '#490572',
        hover: '#693589',
        regular: '#983794',
      },
      secondary: {
        dark: '#351D4F',
        light: '#eeebf8',
      },
      gray: {
        100: '#f8f8f8',
        200: '#DDDDDD',
        300: '#AAAAAA',
        400: '#737373',
        500: '#444444',
        600: '#222222',
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
