<template>
    <back-link :href="$static.corePackage.docVersions.current.path" label="Back to Core Docs" />
</template>

<static-query>
query {
    corePackage: package(id: "Vendr") {
        docVersions {
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