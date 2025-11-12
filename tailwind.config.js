/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        's24Ultra1': {raw: '(min-width: 375px) and (orientation: portrait)'},
        's24Ultra2': {raw: '(min-height: 915px) and (orientation: landscape)'},
        'landscape': {raw: '(orientation: landscape)' },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      aspectRatio: {
        'card': '4/3',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

