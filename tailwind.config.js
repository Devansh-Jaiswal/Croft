/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neubrutalism Candy Palette
        brutal: {
          bg: '#F5F5F5',
          black: '#000000',
          pink: '#FF6B6B',
          blue: '#3B82F6',
          yellow: '#FFCA28',
          green: '#4ADE80',
          white: '#FFFFFF',
        },
        neutral: {
          50: '#F5F5F5',
          100: '#EBEBEB',
          200: '#D6D6D6',
          300: '#B8B8B8',
          400: '#8A8A8A',
          500: '#6B6B6B',
          600: '#525252',
          700: '#3D3D3D',
          800: '#262626',
          900: '#171717',
        },
      },
      boxShadow: {
        'brutal': '6px 6px 0 #000',
        'brutal-sm': '4px 4px 0 #000',
        'brutal-lg': '8px 8px 0 #000',
        'brutal-pink': '6px 6px 0 #FF6B6B',
        'brutal-blue': '6px 6px 0 #3B82F6',
        'brutal-yellow': '6px 6px 0 #FFCA28',
        'brutal-green': '6px 6px 0 #4ADE80',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      borderRadius: {
        'brutal': '24px',
        'brutal-lg': '32px',
      },
      animation: {
        'spin': 'spin 1s linear infinite',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'slideUp': 'slideUp 0.5s ease-out forwards',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
};
