<template>
    <message-box type="info" heading="Work in Progress">
        <p>More detailed documentation is coming soon.</p>
        <p>If you would like to help write the documentation for this section, you can find details on how to contribute over on our <a :href="$static.metadata.githubUrl" target="_blank" class="font-medium text-brand-blue-light hover:text-brand-blue-dark hover:underline">GitHub repository</a>.</p>
    </message-box>
</template>

<static-query>
query {
    metadata {
      githubUrl
    }
}
</static-query>

<script>
import MessageBox from '../components/MessageBox'

export default {
    components: { MessageBox }
}
</script>