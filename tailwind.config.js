/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      bg: 'rgba(248, 242, 225, 1)',
      primary: {
        light: '#d1beda',
        dark: '#490572',
        hover: '#693589',
        regular: '983794',
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
