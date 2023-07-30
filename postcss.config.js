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
              './lib/**/*.{js,jsx,ts,tsx}',
              './themes/**/*.{js,jsx,ts,tsx}',
              './public/**/*.{js,jsx,ts,tsx,html}',
              '/./styles/**/*.{css,scss,sass,less,styl}'
            ],
            extractors: [
              {
                extractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                extensions: ['html', 'js'] // file extensions this extractor should be applied to
              },
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
              standard: ['body', 'html',],
              deep: [/white$/, /black$/, /gray$/, /red$/, /yellow$/, /indigo$/],
              greedy: [/yellow$/, /indigo$/, /post$/],
              keyframes: [],
              variables: []
            }
          }
        : false
    ]
  ]
}
