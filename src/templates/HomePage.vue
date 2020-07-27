<template>
    <layout current-package="Vendr" :current-version="$static.corePackage.docVersions.current.name">
      <VueRemarkContent class="markdown" />
    </layout>
</template>

<page-query>
query HomePage($id: ID!) {
  doc: homePage(id: $id) {
    id,
    path,
    title,
    description
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteDescription,
    siteUrl
  },
  corePackage: package(id: "Vendr") {
    docVersions {
      current {
        name
      }
    }
  }
}
</static-query>

<script>
import Layout from '../layouts/Layout'

export default {
  components: { Layout },
  metaInfo () {
    const metaTitle = this.$static.metadata.siteName + " - " + this.$static.metadata.siteDescription
    return {
      title: metaTitle,
      meta: [
        { name: 'twitter:title', content: metaTitle },
        { name: 'twitter:description', content: this.$page.doc.description },
        { key: 'description', name: 'description', content: this.$page.doc.description },
        { name: 'docsearch:version', content: this.$static.corePackage.docVersions.current.name },
        { name: 'docsearch:package', content: 'Vendr' }
      ],
      link: [
        { rel: 'canonical', href: `${this.$static.metadata.siteUrl}${this.$url(this.$page.doc.path)}` }
      ]
    }
  }
}
</script>
