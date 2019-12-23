const path = require('path')
const fs = require('fs-extra')
const yaml = require('js-yaml')
const glob = require('glob')

module.exports = function (api) {

    // Setup variables
    const packageNodes = [];
    const versionNodes = [];
    const subPackageNodes = [];

    // Define redirects
    // Will get generated into netlify + vue redirects
    const redirects = [
        { from: '/', to : '/core/' }
    ];

    api.loadSource(({ addCollection, getCollection, addMetadata, store, slugify }) => {
        
        // Add global metadata
        addMetadata('githubUrl', 'https://github.com/vendrhub/vendr-documentation')
        addMetadata('umbracoUrl', 'https://our.umbraco.com/packages/website-utilities/vendr')
        addMetadata('twitterUrl', 'https://twitter.com/heyvendr')

        // Setup variables
        const contentPath = path.join(__dirname, 'content')

        // Create collections
        const versionCollection = addCollection('Version')
        const packageCollection = addCollection('Package')
        const subPackageCollection = addCollection('SubPackage')

        // Process packages
        const packagePathPattern = path.join(contentPath, '**/package.yml')
        const packageFiles = glob.sync(packagePathPattern)

        packageFiles.forEach((filePath, idx) => {

            let packageRaw = fs.readFileSync(filePath, 'utf8')
            let package = yaml.safeLoad(packageRaw)

            // Extract useful package info
            let packagePath = `/${path.relative(contentPath, path.dirname(filePath)).replace(/\\/g, '/')}/`
            let packageAllVersions = [package.versions.next,package.versions.current,...package.versions.previous].filter(v => v);
            
            // Process package versions
            packageAllVersions.forEach((v,i) => {

                // Create version node
                let versionNode = {
                    id: `${package.id}.${v}`,
                    path: `${packagePath}${slugify(v)}/`,
                    name: v
                }

                // Load version links
                let versionLinksPath = path.join(path.dirname(filePath), v, "links.yml")

                if (fs.existsSync(versionLinksPath)) {
                    let versionLinksRaw = fs.readFileSync(versionLinksPath, 'utf8')
                    let versionLinks = yaml.safeLoad(versionLinksRaw)
                    versionNode.links = versionLinks
                }

                // Load sub packages
                let subPackagesPath = path.join(path.dirname(filePath), v, "sub-packages.yml")

                if (fs.existsSync(subPackagesPath)) {
                    let subPackagesRaw = fs.readFileSync(subPackagesPath, 'utf8')
                    let subPackages = yaml.safeLoad(subPackagesRaw)
                    let subPackageRefs = [];

                    subPackages.forEach((subPackage, i) => {

                        // Create sub package node
                        let subPackageNode = {
                            id: `${versionNode.id}.${subPackage.alias}`,
                            path: `${versionNode.path}${subPackage.alias}/`,
                            name: subPackage.name,
                            alias: subPackage.alias
                        }

                        // Load sub-package links
                        let subPackageLinksPath = path.join(path.dirname(filePath), v, subPackage.alias, "links.yml")

                        if (fs.existsSync(subPackageLinksPath)) {
                            let subPackageLinksRaw = fs.readFileSync(subPackageLinksPath, 'utf8')
                            let subPackageLinks = yaml.safeLoad(subPackageLinksRaw)
                            subPackageNode.links = subPackageLinks
                        }

                        // Add sub package to collection
                        subPackageCollection.addNode(subPackageNode)

                        // Add sub package as reference
                        subPackageRefs.push(store.createReference('SubPackage', `${versionNode.id}.${subPackage.alias}`))

                        // Add to local sub package array
                        subPackageNodes.push(subPackageNode);
                    });

                    // Add sub package references to version node
                    versionNode.subPackages = subPackageRefs;

                    // Define sub package redirect
                    if (subPackageRefs.length > 0) {
                        let firstSubPackageNode = subPackageNodes.find(p => p.id === subPackageRefs[0].id)
                        redirects.push({ from: versionNode.path, to: firstSubPackageNode.path })
                    }

                }

                // Add version to collection
                versionCollection.addNode(versionNode)

                // Add to local version nodes array
                versionNodes.push(versionNode)

            });
            
            // Create package node
            let packageNode = {
                path: `${packagePath}`,
                ...package,
            }

            // Convert version info to references
            if (package.versions.next)
                packageNode.versions.next = store.createReference('Version', `${package.id}.${package.versions.next}`)

            packageNode.versions.current = store.createReference('Version', `${package.id}.${package.versions.current}`)

            if (package.versions.previous) 
                packageNode.versions.previous = package.versions.previous.map((v) => store.createReference('Version', `${package.id}.${v}`))

            packageNode.versions.all = [packageNode.versions.next,packageNode.versions.current,...packageNode.versions.previous].filter(v => v)

            // Define current version redirect
            let currentVersionNode = versionNodes.find(v => v.id === packageNode.versions.current.id)
            redirects.push({ from: packagePath, to: currentVersionNode.path })

            // Add package to collection
            packageCollection.addNode(packageNode)

            // Add to local package nodes array
            packageNodes.push(packageNode)

        });

        // Sort redirects by 'from' URL
        redirects.sort((a, b) => (a.from > b.from) ? 1 : -1)

        // Prefix paths
        // if (pathPrefix) {
        //     redirects.forEach((r) => {
        //         if (r.from.startsWith('/'))
        //             r.from = pathPrefix + r.from
        //         if (r.to.startsWith('/'))
        //             r.to = pathPrefix + r.to
        //     })
        // }

        // Pass redirects to front end for registering with VueRouter
        api.setClientOptions({
            redirects: redirects
        })

        // Inject package / version information into docs pages
        const docNodes = getCollection('DocPage').data();
        docNodes.forEach((n, i) => {
            let packageNode = packageNodes.find(p => n.path.startsWith(p.path))
            if (packageNode) {
                n.package = packageNode.id

                let versionNode = versionNodes.find(v => n.path.startsWith(v.path))
                if (versionNode) {
                    n.version = versionNode.id

                    let subPackageNode = subPackageNodes.find(p => n.path.startsWith(p.path))
                    if (subPackageNode) {
                        n.subPackage = subPackageNode.id
                    }
                }
            }
        });

    })

    // Write Netlify redirects
    api.afterBuild(function() {
        let redirectsPath = path.join(__dirname, 'dist', '_redirects')            
        redirects.forEach((r,i) => {
            fs.appendFileSync(redirectsPath, `${r.from} ${r.to} 302\n`)
        })
    })
}
