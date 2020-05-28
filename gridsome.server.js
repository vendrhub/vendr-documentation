const path = require('path')
const fs = require('fs-extra')
const yaml = require('js-yaml')
const glob = require('glob')

module.exports = function (api) {

    // Setup variables
    const packageNodes = [];
    const subPackageNodes = [];
    const docVersionNodes = [];

    // Define redirects
    // Will get generated into netlify + vue redirects
    const redirects = [
        //{ from: '/', to : '/core/' }
    ];

    api.createSchema(({ addSchemaTypes }) => {

        // Define DocVersions to ensure there are always
        // fields of the right type for the various versions
        addSchemaTypes(`
            type Package_DocVersions {
                next: DocVersion,
                current: DocVersion,
                previous: [DocVersion]!,
                all: [DocVersion]!
            }
            type Package implements Node @infer {
                docVersions: Package_DocVersions,
                type: String
            }
        `)

      });

    api.loadSource(({ addCollection, getCollection, addMetadata, store, schema, slugify }) => {
        
        // Add global metadata
        addMetadata('githubUrl', 'https://github.com/vendrhub/vendr-documentation')
        addMetadata('umbracoUrl', 'https://our.umbraco.com/packages/website-utilities/vendr')
        addMetadata('twitterUrl', 'https://twitter.com/heyvendr')

        // Setup variables
        const docsContentPath = path.join(__dirname, 'content/docs')

        // Create collections
        const docVersionCollection = addCollection('DocVersion')
        const packageCollection = addCollection('Package')
        const subPackageCollection = addCollection('SubPackage')

        // Process packages
        const packagePathPattern = path.join(docsContentPath, '**/package.yml')
        const packageFiles = glob.sync(packagePathPattern)

        packageFiles.forEach((filePath, idx) => {

            let packageRaw = fs.readFileSync(filePath, 'utf8')
            let package = yaml.safeLoad(packageRaw)

            // Extract useful package info
            let packagePath = `/${path.relative(docsContentPath, path.dirname(filePath)).replace(/\\/g, '/')}/`
            let packageAllDocsVersions = [package.docVersions.next,package.docVersions.current,...(package.docVersions.previous || [])].filter(v => v);
            


            // Process package doc versions
            packageAllDocsVersions.forEach((v,i) => {

                // Create doc version node
                let docVersionNode = {
                    id: `${package.id}.${v}`,
                    path: `${packagePath}${slugify(v)}/`,
                    name: v
                }

                // Load doc version links
                let docVersionLinksPath = path.join(path.dirname(filePath), v, "links.yml")

                if (fs.existsSync(docVersionLinksPath)) {
                    let docVersionLinksRaw = fs.readFileSync(docVersionLinksPath, 'utf8')
                    let docVersionLinks = yaml.safeLoad(docVersionLinksRaw)
                    docVersionNode.links = docVersionLinks
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
                            id: `${docVersionNode.id}.${subPackage.alias}`,
                            path: `${docVersionNode.path}${subPackage.alias}/`,
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
                        subPackageRefs.push(store.createReference('SubPackage', `${docVersionNode.id}.${subPackage.alias}`))

                        // Add to local sub package array
                        subPackageNodes.push(subPackageNode);
                    });

                    // Add sub package references to docs version node
                    docVersionNode.subPackages = subPackageRefs;

                    // Define sub package redirect
                    if (subPackageRefs.length > 0) {
                        let firstSubPackageNode = subPackageNodes.find(p => p.id === subPackageRefs[0].id)
                        redirects.push({ from: docVersionNode.path, to: firstSubPackageNode.path })
                    }

                }

                // Add docs version to collection
                docVersionCollection.addNode(docVersionNode)

                // Add to local version nodes array
                docVersionNodes.push(docVersionNode)

            });
            
            // Create package node
            let packageNode = {
                path: `${packagePath}`,
                docVersions: {},
                ...package,
            }

            // Convert version info to references
            if (package.docVersions.next)
                packageNode.docVersions.next = store.createReference('DocVersion', `${package.id}.${package.docVersions.next}`)

            packageNode.docVersions.current = store.createReference('DocVersion', `${package.id}.${package.docVersions.current}`)

            if (package.docVersions.previous) 
                packageNode.docVersions.previous = package.docVersions.previous.map((v) => store.createReference('DocVersion', `${package.id}.${v}`))

            packageNode.docVersions.all = [packageNode.docVersions.next,packageNode.docVersions.current,...(packageNode.docVersions.previous || [])].filter(v => v)

            // Define current version redirect
            let currentDocVersionNode = docVersionNodes.find(v => v.id === packageNode.docVersions.current.id)
            redirects.push({ from: packagePath, to: currentDocVersionNode.path })

            // Add package to collection
            packageCollection.addNode(packageNode)

            // Add to local package nodes array
            packageNodes.push(packageNode)

        });

        // Sort redirects by 'from' URL
        redirects.sort((a, b) => (a.from > b.from) ? 1 : -1)

        // Pass redirects to front end for registering with VueRouter
        api.setClientOptions({
            redirects: redirects
        })

        // Inject package / version information into docs pages
        const docNodes = getCollection('DocPage').data();
        const docRefNodes = getCollection('DocRefPage').data();
        [...docNodes, ...docRefNodes].forEach((n, i) => {
            let packageNode = packageNodes.find(p => n.path.startsWith(p.path))
            if (packageNode) {
                n.package = packageNode.id

                let docVersionNode = docVersionNodes.find(v => n.path.startsWith(v.path))
                if (docVersionNode) {
                    n.docVersion = docVersionNode.id

                    let subPackageNode = subPackageNodes.find(p => n.path.startsWith(p.path))
                    if (subPackageNode) {
                        n.subPackage = subPackageNode.id
                    }
                }
            }
        });

    })

    // Write Netlify redirects
    api.afterBuild(function(options) {
        let redirectsPath = path.join(__dirname, 'dist', '_redirects')
        if (fs.existsSync(redirectsPath))
            fs.unlinkSync(redirectsPath)

        let pathPrefix = options.config.pathPrefix || ''
        if (pathPrefix !== '') {
            fs.appendFileSync(redirectsPath, `/ ${pathPrefix}/ 302\n`)
        }

        redirects.forEach((r,i) => {
            fs.appendFileSync(redirectsPath, `${pathPrefix}${r.from} ${pathPrefix}${r.to} 302\n`)
        })

        // if (pathPrefix !== '') {
        //     fs.appendFileSync(redirectsPath, `/core/* ${pathPrefix}/core/:splat 301\n`)
        //     fs.appendFileSync(redirectsPath, `/packages/* ${pathPrefix}/packages/:splat 301\n`)
        //     fs.appendFileSync(redirectsPath, `/payment-providers/* ${pathPrefix}/payment-providers/:splat 301\n`)
        // }
    })
}
