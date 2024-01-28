/** @type {import('tailwindcss').Config} */

import scrollbar from 'tailwind-scrollbar'
import defaultTheme from 'tailwindcss/defaultTheme'
import { generateRandomBgColorsSafelist } from './src/utils/colors'

const generateSafelist = () => {
  return [...generateRandomBgColorsSafelist()]
}

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: generateSafelist(),
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
      accent: {
        purple: '#C4A1FF',
        green: '#D0EE30',
        red: '#FF5E65',
        blue: '#2FD5EA',
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
      '13xl': '3rem', // 48px
      '17xl': '3.75rem', // 60px
      '19xl': '4.5rem', // 72px
    },
    extend: {
      screens: {
        xs: '375px',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
        rubik: ['var(--font-rubik)', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        4.5: '1.125rem',
        21.5: '5.375rem',
      },
      width: (theme) => ({
        ...theme('spacing'),
      }),
      minWidth: (theme) => ({
        ...theme('spacing'),
      }),
      maxWidth: (theme) => ({
        ...theme('width'),
        ...theme('spacing'),
      }),
      minHeight: (theme) => ({
        ...theme('spacing'),
      }),
      maxHeight: (theme) => ({
        ...theme('spacing'),
        400: '400px',
        600: '600px',
        800: '800px',
      }),
      borderWidth: {
        6: '6px',
        12: '12px',
      },
      boxShadow: {
        outlined: '0 0 10px 2px rgba(0,0,0,0.1)',
        brutalism: '3px 3px 0px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [scrollbar({ nocompatible: true })],
}
