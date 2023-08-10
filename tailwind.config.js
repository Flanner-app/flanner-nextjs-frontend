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
      '8xl': '2.25rem', // 36px
      '9xl': '2.375rem', // 38px
      '10xl': '2.5rem', // 40px
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
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        rubik: ['var(--font-rubik)', ...defaultTheme.fontFamily.sans],
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
