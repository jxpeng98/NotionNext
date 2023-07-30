const purgeJs = require('purgecss-from-js')
const purgeHTML = require('purgecss-from-html')
// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {}
//   }
// }

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
              './lib/**/*.{js,jsx,ts,tsx}'
            ],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            extractors: [
              {
                extractor: purgeJs,
                extensions: ['js']
              },
              {
                extractor: purgeHTML,
                extensions: ['html']
              }
            ],
            safelist: {
              standard: ['random', 'yep', 'button', /^nav-/],
              deep: [],
              greedy: [],
              keyframes: [],
              variables: []
            }
          }
        : false
    ]
  ]
}
