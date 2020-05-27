module.exports = {

  purge: {
    content: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.html',
        './src/**/*.pug',
        './content/**/*.md',
    ],
    options: {
      whitelist: [
          'body',
          'html',
          'img',
          'a',
          'g-image',
          'g-image--lazy',
          'g-image--loaded',
          'ml-0', 'ml-4' // 'On this page' dynamic inset
      ],
      whitelistPatternsChildren: [
          /code/, /pre/, /language/, /token/, 
          /ul/, /ol/, /p/, /a/, /blockquote/,
          /sticky/, /not/
      ]
    }
  },

  theme: {

    fontWeight: {
      'normal' : 400,
      'medium' : 500, 
      'bold' : 700, 
      'black': 900
    },

    extend: {

      fontFamily: {
        'brand-display': ['Nexa', 'sans-serif'],
        'brand-body': ['Red Hat Display', 'sans-serif'],
      },

      colors: {
        'brand-blue-dark': '#141432',
        'brand-blue-mid': '#4930ff',
        'brand-blue-light': '#249bff',
        'brand-green': '#00eb71',
        'brand-pink': '#f300ee',
        'brand-orange': '#fea000',
        'brand-red': '#f53288',

        'blue-150': '#D5EEFC',

        'umbraco': '#ff6e00',
        'github': '#24292e',
        'twitter': '#1da1f2',
        'linkedin': '#0077b5',
      },

      height: {
        '1/2-screen': '50vh',
        '1/3-screen': '33.33333vh',
        '2/3-screen': '66.66667vh',
        '1/4-screen': '25vh',
        '3/4-screen': '75vh',
        '1/5-screen': '20vh',
        '2/5-screen': '40vh',
        '3/5-screen': '60vh',
        '4/5-screen': '80vh',
        '1/6-screen': '16.66667vh',
        '5/6-screen': '83.33333vh',
        'screen': '100vh'
      },
      
      spacing: {
        '7': '1.75rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '80': '20rem',
        '128': '32rem',
        '(screen-16)': 'calc(100vh - 4rem)',
      },

      inset: {
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
      },
      
      borderWidth: {
        '6': '6px',
      },
      
      maxWidth: theme => {
        return {
          'container': '1450px',
          'screen-xl': theme('screens.xl'),
        }
      },
      
      maxHeight: {
        'xs': '20rem',
        'sm': '30rem',
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      
      boxShadow: {
        'md-light': '0 0 12px 8px rgb(255,255,255)'
      },
      
      zIndex: {
        '90': '90',
        '100': '100',
      }
    }

  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus'],
    fontWeight: ['responsive', 'hover', 'focus'],
    shadow: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textStyle: ['responsive', 'hover', 'focus'],
    margin: ['responsive', 'group-hover'],
    borderWidth: ['responsive', 'group-hover']
  },
  plugins: [
    require('./src/css/plugins/ratio')({
      ratios: {
        'square': 1,
        '32/27': 32/27,
        '24/9': 24/9,
        '16/9': 16/9,
        '9/16': 9/16,
        '8/9': 8/9,
        '6/3': 6/3,
        '4/3': 4/3,
        '2/3': 2/3
      },
      variants: ['responsive'],
    })
  ]
}