<template>
    <layout :title="$page.doc.title" :description="$page.doc.description">
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

<script>
import Layout from '../layouts/Layout'

export default {
  components: { Layout },
}
</script>
