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

If you would like to help improve our documentation, contributions via pull request are our preferred method. A guide for which follows:

### Code of Conduct

All contributions / contributors are expected to abide by our [Code of Conduct](https://www.contributor-covenant.org/version/1/1/0/code-of-conduct.html)

### Getting Setup

1. Fork this repository on GitHub.
2. Clone your forked repository (not our original one) to your hard drive with git clone https://github.com/YOURUSERNAME/vendr-documentation.git
3. Open the `vendr-documentation` directory
4. Make content changes as required
5. Submit changes back as a Pull Request

### Preparing a Pull Request

1. Create a branch in your local repository
2. Make the changes you'd like to submit
3. Commit you changes locally
4. Push your changes to your GitHub repository
5. Submit your changes as a [Pull Request](https://help.github.com/articles/creating-a-pull-request/) to our GitHub repository

**NB** A Pull Request should only contain changes for a single "logical group" of changes. If you have multiple changes to make, you should create branches / Pull Request for each set of changes.

### Writing Documentation

When writing documentation there are a number of principles that should be followed. These principles are documented below.

#### Markdown

Documentation files are written using markdown. If you need something more complex than is possible with markdown, you can write bespoke HTML instead, however, you should aim to write as much as you can in the markdown format.

#### Content Files

All the source content files for the documentation site are located in the `content` folder. The core Vendr documentation is located in the `content/core` folder with supplementary package docs being located in `content/packages/{package-name}` and payment provider docs being located in `content/payment-providers/{payment-provider-name}`.

#### Media Files

Media assets linked to in the documentation should be stored in the `media` folder in the root of the repository.

#### Versioning

This repository contains documentation for multiple versions of Vendr and it's sub packages. Versioned docs are located in numbered directories inside each packages folder. When making changes, you should ensure you are updating the correct version before you commit your changes. 

If your changes affect multiple versions, you should update the files in each version the change is required in.

## License

This project is licensed under the terms of the [MIT license](LICENSE.md).
