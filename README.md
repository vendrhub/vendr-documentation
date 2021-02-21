<div align="center">

<a href="https://vendr.net" target="_blank"><img src="assets/vendr.png" alt="Vendr" width="250"/></a>

# Vendr Documentation

This repository contains the raw source files for the documentation of [Vendr](https://vendr.net), the eCommerce solution for Umbraco v8+.
The live version of these docs can be found at [https://vendr.net/docs/](https://vendr.net/docs/).

</div>

<a href="https://vendr.net/docs/" target="_blank">
    <img src="assets/vendr-docs-home.png?v=1" alt="Screenshot" style />
</a>

## Contributing

If you would like to help improve our documentation, contributions via pull request are our preferred method. I guide for which follows:

### Code of Conduct

All contributions / contributors are expected to abide by our [Code of Conduct](https://www.contributor-covenant.org/version/1/1/0/code-of-conduct.html)

### Prerequisites

* **Yarn** - [Yarn](https://yarnpkg.com/en/docs/install) is our preferred package installer so contributors should make sure Yarn has been installed globally on your machine

* **Gridsome** - [Gridsome](https://gridsome.org/docs/#how-to-install) the Vendr documentation site is powered by Gridsome, a Vue.js based static site generator.

### Getting Setup

1. Fork this repository on GitHub.
2. Clone your forked repository (not our original one) to your hard drive with git clone https://github.com/YOURUSERNAME/vendr-documentation.git
3. Open the `vendr-documentation` directory
4. If **Gridsome** is not installed, it can be installed via:

````bash
yarn global add @gridsome/cli
````

5. Open a command window and start a local instance of the site via:

````bash
yarn install
gridsome develop
````

6. Launch http://localhost:8080 in a browser to view the site

### Preparing a Pull Request

1. Create a branch in your local repository
2. Make the changes you'd like to submit
3. Commit you changes locally
4. Push your changes to your GitHub repository
5. Submit your changes as a [Pull Request](https://help.github.com/articles/creating-a-pull-request/) to our GitHub repository

**NB** A Pull Request should only contain changes for a single "logical group" of changes. If you have multiple changes to make, you should create branches / Pull Request for each set of changes.

### Writing Documentation

When writing documentation there are a number of principles that should be followed. These principles are documented below.

#### Gridsome

The Vendr documentation site is powered by Gridsome, a Vue.js based static site generator. You should read up on the basics of [Gridsome](https://gridsome.org/docs/) to get an understanding of the available features.

#### Markdown

Documentation files are written using markdown. If you need something more complex than is possible with markdown, you can write bespoke HTML instead, however, you should aim to write as much as you can in the markdown format.

#### Tailwind CSS

The Vendr documentation site makes use of Tailwind CSS for all of it's styling needs. You should read up on the basics of [Tailwind CSS](https://tailwindcss.com/) to get an understanding of this utility first approach to styling.

If you need to create any custom CSS styles not supported by Tailwind, these should be added to the `src/css` folder, in the relevant sub folder and then included in the `src/main.css` file to make the available.

#### Custom Vue Components

As we are using Gridsome, you can also create custom Vue components should you need to add some new functionality. Components should be placed in the `src/components` directory. To make this component globally accessible, you should register it in the `src/main.js` file using the `Vue.component('MyComponent', MyComponent)` syntax.

You should check beforehand before creating any custom components to ensure the new behaviour is desired.

#### Content Files

All the source content files for the documentation site are located in the `content/docs` folder. The core Vendr documentation is located in the `content/docs/core` folder with supplementary package docs being located in `content/docs/packages/{package-name}` and payment provider docs being located in `content/docs/payment-providers/{payment-provider-name}`.

#### Versioning

This repository contains documentation for multiple versions of Vendr and it's sub packages. Versioned docs are located in numbered directories inside the `docs` folder. When making changes, you should ensure you are updating the correct version before you commit your changes. 

If your changes affect multiple versions, you should update the files in each version the change is required in.

## License

This project is licensed under the terms of the [MIT license](LICENSE.md).
