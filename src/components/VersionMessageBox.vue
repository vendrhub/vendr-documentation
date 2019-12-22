<template>
    <message-box type="warn" :heading="versionTense + ' Docs Version'">
        <p>The documentation you are viewing is for a {{ versionTense.toLowerCase() }} version of Vendr. <g-link :to="packageInfo.versions.current.path" class="font-bold hover:underline">Click here</g-link> to jump to the current stable version.</p>
    </message-box>
</template>

<script>
import MessageBox from '../components/MessageBox'

export default {
    components: { MessageBox },
    props: {
        packageInfo: Object,
        versionInfo: Object
    },
    computed: {
        versionTense () {
            if (this.packageInfo.versions.next && this.versionInfo.name == this.packageInfo.versions.next.name)
                return "Future"
            return "Previous"
        }
    },
}
</script>