export default function (Vue, options, context) {

    // Register VueRouter redirects passed from gridsome.server.js
    if (options.redirects) {
        context.router.addRoutes(options.redirects.map(r => {
            return { path: r.from, redirect: r.to }
        }))
    }

}