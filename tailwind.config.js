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
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.375rem', // 22px
        '3xl': '1.5rem', // 24px
        '4xl': '1.625rem', // 26px
        '4.5xl': '1.685rem', // 27px
        '5xl': '1.75rem', // 28px
        '5.5xl': '1.875rem', // 30px
        '6xl': '2rem', // 32px
        '7xl': '2.125rem', // 34px
        '8xl': '2.25rem', // 36px
        '9xl': '2.375rem', // 38px
        '10xl': '2.5rem', // 40px
        '10.5xl': '2.56rem', // 41px
        '11xl': '2.625rem', // 42px
        '12xl': '2.75rem', // 44px
        '13xl': '3rem', // 48px
        '14xl': '3.25rem', // 52px
        '15xl': '3.375rem', // 54px
        '16xl': '3.5rem', // 56px
        '17xl': '3.75rem', // 60px
        '18xl': '4.25rem', // 68px
        '19xl': '4.5rem', // 72px
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
