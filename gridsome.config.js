const tailwind = require('tailwindcss')

// Global settings
const isProduction = process.env.NODE_ENV === 'production'

const siteUrl = !isProduction
  ? "http://localhost:8080"
  : "https://getvendr.net";

const pathPrefix = !isProduction
  ? ""
  : "/docs";

const outputDir = !isProduction
  ? "/dist"
  : "/dist/docs";

// PostCSS config
const postcssPlugins = [
	tailwind(),
]

// Export
module.exports = {
  siteName: 'Vendr Documentation',
  siteUrl: siteUrl,
  pathPrefix: pathPrefix,
  outputDir: outputDir,
  icon: {
    favicon: './src/favicon.png',
    touchicon: {
      src: './src/touchicon.png',
      precomposed: true
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        index: ['README'],
        baseDir: './content/',
        typeName: 'DocPage',
        template: './src/templates/DocPage.vue',
        refs: {
          package: 'Package',
          docVersion: 'DocVersion',
          subPackage: 'SubPackage',
        },
        plugins: [
          '@gridsome/remark-prismjs'
        ],
        remark: {
          autolinkHeadings: {
            content: {
              type: 'text',
              value: '#'
            }
          }
        }
      }
    }
  ],
  css: {
    loaderOptions: {
        postcss: {
            plugins: postcssPlugins,
        }
    }
  }
}
