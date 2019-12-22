<template>
    <a :href="editLink" target="_blank" class="inline-flex items-center transition font-medium text-brand-blue-light hover:text-brand-blue-dark">
        <github-logo class="mr-2" />
        <span>Edit this page on GitHub</span>
    </a>
</template>

<static-query>
query {
    metadata {
      githubUrl
    }
}
</static-query>

<script>
import GithubLogo from '../assets/images/github-logo.svg'

export default {
    components: { GithubLogo },
    props: ['path'],
    computed: {
        editLink() {
            return `${this.$static.metadata.githubUrl}/edit/master/content/${this.path}`
        }
    }
}
</script>