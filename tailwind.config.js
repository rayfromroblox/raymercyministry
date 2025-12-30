/**
 * Tailwind config with type hints for better editor help.
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FDFCF8',
        surface: '#FFFFFF',
        primary: {
          50: '#FDF5F4',
          100: '#FBE9E6',
          200: '#F7D6D0',
          300: '#EFB7AC',
          400: '#E18878',
          500: '#D15F4C',
          600: '#B55D4C', // Main Terracotta
          700: '#9B4C3E',
          800: '#7E3E33',
          900: '#68332A',
        },
        secondary: {
          50: '#F7F8F6',
          100: '#EFF1ED',
          200: '#D9DED4',
          300: '#BDBEAF',
          400: '#9EA08E',
          500: '#8A9A84', // Main Sage
          600: '#717E6B',
          700: '#5A6455',
          800: '#454D41',
          900: '#343A31',
        },
        accent: {
          50: '#FFFDF9',
          100: '#FEF9F0',
          200: '#FDF1DE',
          300: '#FCE6C1',
          400: '#FAD593',
          500: '#F7C168', // Warm Gold
          600: '#E0AC54',
          700: '#B58B44',
          800: '#8F6E35',
          900: '#755B2C',
        },
        text: {
          primary: '#2D2D2D',
          secondary: '#5A5A5A',
          muted: '#8E8E8E',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.05em',
      },
      lineHeight: {
        tight: '1.2',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '1.75',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}

