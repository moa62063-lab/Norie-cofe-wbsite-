/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF8',
          100: '#FAF7F2',
          200: '#F4EFE6',
          300: '#EAE2D5',
          400: '#DFD5C4',
          500: '#C8B9A6',
        },
        espresso: {
          900: '#1C130D',
          800: '#2A1D15',
          700: '#3D2A1F',
          600: '#523A2C',
        },
        taupe: {
          600: '#685A50',
          500: '#7B6D63',
          400: '#94877D',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
        looser: '0.15em',
      }
    },
  },
  plugins: [],
};
