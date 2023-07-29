const purgeJs = require('purgecss-from-js')
const purgeHtml = require('purgecss-from-html')

module.exports = {
  plugins: [
    'postcss-flexbugs-fixes',
    ['postcss-preset-env', {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3,
      features: {
        'custom-properties': false
      }
    }],
    'tailwindcss',
    'autoprefixer',
    ['@fullhuman/postcss-purgecss',
      process.env.NODE_ENV === 'production'
        ? {
            content: [
              './pages/**/*.{js,jsx,ts,tsx}',
              './components/**/*.{js,jsx,ts,tsx}',
              './lib/**/*.{js,jsx,ts,tsx}',
              './themes/**/*.{js,jsx,ts,tsx}',
              '.html'
            ],
            extractors: [
              {
                extractor: purgeJs,
                extensions: ['js']
              },
              {
                extractor: purgeHtml,
                extensions: ['html']
              }
            ],
            safelist: ['html', 'body']
          }
        : false,
      {
        content: [
          './pages/**/*.{js,jsx,ts,tsx}',
          './components/**/*.{js,jsx,ts,tsx}',
          './lib/**/*.{js,jsx,ts,tsx}',
          './themes/**/*.{js,jsx,ts,tsx}'
        ],
        extractors: [
          {
            extractor: purgeJs,
            extensions: ['js']
          },
          {
            extractor: purgeHtml,
            extensions: ['html']
          }
        ],
        safelist: ['html', 'body']
      }
    ]
  ]
}
