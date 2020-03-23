<template>
    <layout>
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
        { name: 'twitter:title', content: metaTitle }
      ],
      link: [
        { rel: 'canonical', href: `${this.$static.metadata.siteUrl}${this.$url(this.$page.doc.path)}` }
      ]
    }
  }
}
</script>
