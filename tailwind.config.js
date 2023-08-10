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
      yellow: {
        regular: '#F8F2E1',
        dark: '#FFEDBA',
      },
      white: '#ffffff',
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
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.375rem', // 22px
      '3xl': '1.5rem', // 24px
      '4xl': '1.625rem', // 26px
      '5xl': '1.75rem', // 28px
      '6xl': '2rem', // 32px
      '7xl': '2.125rem', // 34px
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        rubik: ['var(--font-rubik)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
