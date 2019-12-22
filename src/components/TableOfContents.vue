<template>
    <ul v-if="subtitlesTree.length">
        <li v-for="l1 in subtitlesTree" :key="l1.value">
            <a :href="l1.anchor" class="">{{ l1.value }}</a>
            <ul v-if="l1.children.length">
                <li v-for="l2 in l1.children" :key="l2.value">
                    <a :href="l2.anchor" class="">{{ l2.value }}</a>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        subtitles: { type: Array },
    },
    computed: {
        subtitlesTree() {
            let tree = [];
            let parentItem = null;
            let subs = this.subtitles || this.$page.doc.subtitles
            subs.forEach((e, i) => {
                let c = Object.assign({ children:[] }, e);
                if (c.depth == 2) {
                    tree.push(c);
                    parentItem = c;
                } else {
                    parentItem.children.push(c);
                }
            });
            return tree;
        }
    }
}
</script>