/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'
import scrollbar from 'tailwind-scrollbar'

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      transparent: 'transparent',
      yellow: {
        light: '#F8F2E1',
        regular: '#FFC800',
        hover: '#FFDE66',
        dark: '#FFEAB9',
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
      tones: {
        yellow: '#FDFCDC',
        coral: '#FFE4D3',
        rose: '#FED3DC',
        lavender: '#EDDFFE',
        babyBlue: '#A6E2E3',
        powderBlue: '#D0E2DC',
        mint: '#E5FDE2',
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
      '10xl': '2.5rem', // 40px
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        rubik: ['var(--font-rubik)', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        4.5: '1.125rem',
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
  plugins: [scrollbar({ nocompatible: true })],
}
