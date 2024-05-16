const BLOG = require('./blog.config')
const { fontFamilies } = require('./lib/font')

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './themes/**/*.js'],
  darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    fontFamily: fontFamilies,
    screens: {
      sm: '540px',
      // => @media (min-width: 576px) { ... }

      md: '720px',
      // => @media (min-width: 768px) { ... }

      lg: '960px',
      // => @media (min-width: 992px) { ... }

      xl: '1140px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1320px'
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      fontWeight: {
        light: 400
      },
      colors: {
        day: {
          DEFAULT: BLOG.BACKGROUND_LIGHT || '#ffffff'
        },
        night: {
          DEFAULT: BLOG.BACKGROUND_DARK || '#111827'
        },
        hexo: {
          'background-gray': '#f5f5f5',
          'black-gray': '#101414',
          'light-gray': '#e5e5e5'
        },
        // indigo: {
        //   50: '#fdf2f8', // This is the default pink-50 color in Tailwind CSS
        //   100: '#fce7f3', // This is the default pink-100 color in Tailwind CSS
        //   200: '#fbcfe8', // This is the default pink-200 color in Tailwind CSS
        //   300: '#f9a8d4', // This is the default pink-300 color in Tailwind CSS
        //   400: '#f472b6', // This is the default pink-400 color in Tailwind CSS
        //   500: '#ec4899', // This is the default pink-500 color in Tailwind CSS
        //   600: '#db2777', // This is the default pink-600 color in Tailwind CSS
        //   700: '#be185d', // This is the default pink-700 color in Tailwind CSS
        //   800: '#9d174d', // This is the default pink-800 color in Tailwind CSS
        //   900: '#831843' // This is the default pink-900 color in Tailwind CSS
        // },
        yellow: {
          50: '#F0F9FF', // This is the default sky-50 color in Tailwind CSS
          100: '#E0F2FE', // This is the default sky-100 color in Tailwind CSS
          200: '#BAE6FD', // This is the default sky-200 color in Tailwind CSS
          300: '#7DD3FC', // This is the default sky-300 color in Tailwind CSS
          400: '#38BDF8', // This is the default sky-400 color in Tailwind CSS
          500: '#0EA5E9', // This is the default sky-500 color in Tailwind CSS
          600: '#0284C7', // This is the default sky-600 color in Tailwind CSS
          700: '#0369A1', // This is the default sky-700 color in Tailwind CSS
          800: '#075985', // This is the default sky-800 color in Tailwind CSS
          900: '#0C4A6E' // This is the default sky-900 color in Tailwind CSS
        },
        // black: '#212b36',
        'dark-700': '#090e34b3',
        dark: {
          DEFAULT: '#111928',
          2: '#1F2A37',
          3: '#374151',
          4: '#4B5563',
          5: '#6B7280',
          6: '#9CA3AF',
          7: '#D1D5DB',
          8: '#E5E7EB'
        },
        primary: '#3758F9',
        'blue-dark': '#1B44C8',
        secondary: '#13C296',
        'body-color': '#637381',
        'body-secondary': '#8899A8',
        warning: '#FBBF24',
        stroke: '#DFE4EA',
        'gray-1': '#F9FAFB',
        'gray-2': '#F3F4F6',
        'gray-7': '#CED4DA'
      },
      maxWidth: {
        side: '14rem',
        '9/10': '90%'
      },
      boxShadow: {
        input: '0px 7px 20px rgba(0, 0, 0, 0.03)',
        form: '0px 1px 55px -11px rgba(0, 0, 0, 0.01)',
        pricing: '0px 0px 40px 0px rgba(0, 0, 0, 0.08)',
        'switch-1': '0px 0px 5px rgba(0, 0, 0, 0.15)',
        testimonial: '0px 10px 20px 0px rgba(92, 115, 160, 0.07)',
        'testimonial-btn': '0px 8px 15px 0px rgba(72, 72, 138, 0.08)',
        1: '0px 1px 3px 0px rgba(166, 175, 195, 0.40)',
        2: '0px 5px 12px 0px rgba(0, 0, 0, 0.10)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
