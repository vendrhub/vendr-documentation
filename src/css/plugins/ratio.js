const _ = require('lodash');

module.exports = function({ ratios, options, variants }) {
    return function({ addUtilities, e }) {

        const opts = Object.assign({}, {
            orientedRatios: false,
            invertedRatios: false
        }, options);

        if (typeof opts.orientedRatios !== 'object' ) {
            opts.orientedRatios = {
                enabled: opts.orientedRatios
            }
        }

        if (typeof opts.invertedRatios !== 'object' ) {
            opts.invertedRatios = {
                enabled: opts.invertedRatios
            }
        }

        const base = {
            height: '0',
            width: '100%',
            position: 'relative',
            overflow: 'hidden'
        }

        const utilities = _.map(ratios, (value, name) => {
            let result = {};
            if (value != 1 && opts.orientedRatios.enabled) {
                let ls = value > 1 ? 100 / value : value * 100;
                let pt = value > 1 ? value * 100 : 100 / value;
                result[`.${e(`ratio-${name}-${opts.orientedRatios.landscapeSuffix || 'landscape'}`)}`] = Object.assign({}, base, {
                    paddingTop: `${ls.toFixed(2)}%`
                })
                result[`.${e(`ratio-${name}-${opts.orientedRatios.portraitSuffix || 'portrait'}`)}`] = Object.assign({}, base, {
                    paddingTop: `${pt.toFixed(2)}%`
                })
            } else {
                result[`.${e(`ratio-${name}`)}`] = Object.assign({}, base, {
                    paddingTop: `${( 100 / value ).toFixed(2)}%`
                })
                
                if (value != 1 && opts.invertedRatios.enabled) {
                    result[`.${e(`ratio-${name}-${opts.invertedRatios.suffix || 'inverted'}`)}`] = Object.assign({}, base, {
                        paddingTop: `${( value * 100 ).toFixed(2)}%`
                    })
                }
            }
            
            return result;
        })

        utilities.push({
            ['.ratio']: base  
        });

        addUtilities(utilities, variants)
    }
}