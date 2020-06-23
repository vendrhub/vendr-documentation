const tailwind = require('tailwindcss')

// Global settings
const isProduction = process.env.NODE_ENV === 'production'

const siteUrl = !isProduction
  ? "http://localhost:8080"
  : "https://vendr.net";

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

const baseSrcOpts = {
  plugins: [
    'od-remark-youtube-embed',
    '@gridsome/remark-prismjs',
    'od-remark-responsive-tables'
  ],
  remark: {
    plugins: [
      'od-remark-youtube-embed',
      '@gridsome/remark-prismjs',
      'od-remark-responsive-tables'
    ],
    autolinkHeadings: {
      content: {
        type: 'text',
        value: '#'
      }
    }
  }
}

// Export
module.exports = {
  siteName: 'Vendr Documentation',
  siteDescription: 'eCommerce for Umbraco v8+ with Simplicity at Heart',
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
  prefetch: { mask: '^$', },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
    
    config.resolve.alias.set('@images', '@/assets/images')
    config.resolve.alias.set('@logos', '@/assets/images/logos')
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        index: ['README'],
        baseDir: './content/home/',
        typeName: 'HomePage',
        template: './src/templates/HomePage.vue',
        ...baseSrcOpts
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        index: ['README'],
        baseDir: './content/docs/',
        typeName: 'DocPage',
        template: './src/templates/DocPage.vue',
        refs: {
          package: 'Package',
          docVersion: 'DocVersion',
          subPackage: 'SubPackage',
        },
        ignore: [
          "**/core/*/reference/**/*.md"
        ],
        ...baseSrcOpts
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        index: ['README'],
        baseDir: './content/docs/',
        path: '**/core/*/reference/**/*.md',
        typeName: 'DocRefPage',
        template: './src/templates/DocRefPage.vue',
        refs: {
          package: 'Package',
          docVersion: 'DocVersion',
          subPackage: 'SubPackage',
        },
        ...baseSrcOpts
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
