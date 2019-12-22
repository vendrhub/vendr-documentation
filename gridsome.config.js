const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const copyPlugin = require('copy-webpack-plugin');
const slugify = require('@sindresorhus/slugify');
const path = require('path')
const fs = require('fs-extra')
const yaml = require('js-yaml')
const glob = require('glob')

// PostCSS config
const postcssPlugins = [
	tailwind(),
]

// if (process.env.NODE_ENV === 'production') {
//   postcssPlugins.push(purgecss())
// }

// Redirects config
function createVersionRedirects(buffer) {
  let content = buffer.toString()

  let contentPath = path.join(__dirname, 'content')
  let packagePathPattern = path.join(contentPath, '**/package.yml')
  let packageFiles = glob.sync(packagePathPattern)
  
  packageFiles.forEach((filePath, idx) => {
      let packagePath = `/${path.relative(contentPath, path.dirname(filePath)).replace(/\\/g, '/')}/`
      let packageRaw = fs.readFileSync(filePath, 'utf8')
      let package = yaml.safeLoad(packageRaw)
      let slugifiedCurrentVersion = slugify(package.versions.current)

      // Section to current version redirect
      content += `\n${packagePath} ${packagePath}${slugifiedCurrentVersion}/ 302`

      let allVersions = [package.versions.next,package.versions.current,...package.versions.previous].filter(v => v)
      
      allVersions.forEach((v, i) => {
        let sluggifiedVersion = slugify(v)
        let subPackagesPath = path.join(path.dirname(filePath), v, "sub-packages.yml")

        if (fs.existsSync(subPackagesPath)) {
          let subPackagesRaw = fs.readFileSync(subPackagesPath, 'utf8')
          let subPackages = yaml.safeLoad(subPackagesRaw)
          if (subPackages && subPackages.length > 0) {

            // Versiont to first sub package redirect
            content += `\n${packagePath}${sluggifiedVersion}/ ${packagePath}${sluggifiedVersion}/${subPackages[0].alias}/ 302`
          
          }
        }

      });
  });

  return content
}

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
  configureWebpack: {
    plugins: [
      new copyPlugin([
        {
          from: './_redirects',
          to: '.',
          transform(content, path) {
            return createVersionRedirects(content);
          }
        },
      ]),
    ],
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
