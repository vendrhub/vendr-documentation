export default function (Vue, options, context) {

    // Register VueRouter redirects passed from gridsome.server.js
    if (options.redirects) {
        context.router.addRoutes(options.redirects.map(r => {
            return { path: r.from, redirect: r.to }
        }))
    }

    context.router.afterEach((to, from) => {
        if (to.hash) {
            setTimeout(function() {
                var top = document.getElementById(to.hash.substr(1)).offsetTop;
                window.scrollTo(0, top);   
            }, 100)  
        }
    })

}