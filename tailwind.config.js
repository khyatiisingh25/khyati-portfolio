/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08070a',
          900: '#0c0b0e',
          850: '#121013',
          800: '#181518',
          750: '#1e1a1d',
          700: '#27222a',
          600: '#332d36',
          500: '#453e49',
          400: '#5e5662',
          300: '#827b88',
          200: '#b0a9b5',
          100: '#d8d3da',
          50: '#f2eff3',
        },
        rose: {
          50: '#fdf5f7',
          100: '#f9e8ee',
          200: '#f0d0db',
          300: '#e3adbf',
          400: '#d27ea0',
          500: '#bf5c84',
          600: '#a94470',
          700: '#8c3660',
          800: '#722e51',
          900: '#5e2845',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Clash Display"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 12vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        'section': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'label': ['clamp(0.7rem, 1vw, 0.85rem)', { lineHeight: '1.4', letterSpacing: '0.15em' }],
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        pulseSoft: { '0%, 100%': { opacity: 0.3 }, '50%': { opacity: 0.7 } },
        drift: { '0%': { transform: 'translate(0,0)' }, '100%': { transform: 'translate(40px,-30px)' } },
      },
    },
  },
  plugins: [],
};
