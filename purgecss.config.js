class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-z0-9-:\\/]+/g)
    }
}

module.exports = {
    content: [
        './src/**/*.vue',
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.html',
        './src/**/*.pug',
        './../content/**/*.md',
    ],
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
    ],
    extractors: [
        {
            extractor: TailwindExtractor,
            extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
        },
    ],
}