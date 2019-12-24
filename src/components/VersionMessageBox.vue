<template>
    <message-box type="warn" :heading="docVersionTense + ' Docs Version'">
        <p>The documentation you are viewing is for a {{ docVersionTense.toLowerCase() }} version of Vendr. <g-link :to="packageInfo.docVersions.current.path" class="font-bold hover:underline">Click here</g-link> to jump to the current stable version.</p>
    </message-box>
</template>

<script>
import MessageBox from '../components/MessageBox'

export default {
    components: { MessageBox },
    props: {
        packageInfo: Object,
        docVersionInfo: Object
    },
    computed: {
        docVersionTense () {
            if (this.packageInfo.docVersions.next && this.docVersionInfo.name == this.packageInfo.docVersions.next.name)
                return "Future"
            return "Previous"
        }
    },
}
</script>