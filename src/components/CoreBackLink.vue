<template>
    <back-link :href="$static.corePackage.versions.current.path" label="Back to Core Docs" />
</template>

<static-query>
query {
    corePackage: package(id: "Vendr") {
        versions {
            current {
                path
            }
        }
    }
}
</static-query>

<script>
import BackLink from '../components/BackLink'

export default {
    components: { BackLink },
}
</script>