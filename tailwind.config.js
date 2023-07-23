const BLOG = require('./blog.config')
const { fontFamilies } = require('./lib/font')

module.exports = {
  content: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './themes/**/*.js'],
  darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    fontFamily: fontFamilies,
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
        }
      },
      maxWidth: {
        side: '14rem',
        '9/10': '90%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
