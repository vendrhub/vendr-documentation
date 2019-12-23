const tailwind = require('tailwindcss')

// PostCSS config
const postcssPlugins = [
	tailwind(),
]

// Export
module.exports = {
  siteName: 'Vendr Documentation',
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
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        index: ['README'],
        baseDir: './content/',
        pathPrefix: '/',
        typeName: 'DocPage',
        template: './src/templates/DocPage.vue',
        refs: {
          package: 'Package',
          version: 'Version',
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
