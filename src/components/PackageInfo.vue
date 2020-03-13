<template>
    <div class="mb-8" v-if="packageInfo">
        <span class="block items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium text-gray-900 border-b-2 border-gray-200">
            <span class="text-lg flex w-full items-end pb-6">
                <g-link :to="packageLink" class="font-bold mr-2">{{ packageInfo.name }}</g-link>
                <g-link :to="packageInfo.path + '/versions/'" class="text-gray-400 text-base" v-if="docVersionInfo">v{{docVersionInfo.name}}</g-link>
            </span>
            <span class="block font-normal text-gray-400 text-xs -mt-6 pb-6" v-if="packageInfo.type != 'Product'">{{ packageInfo.id }}</span>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        packageInfo: Object,
        docVersionInfo: Object,
        subPackageInfo: Object
    },
    computed: {
        packageLink() {
            if (this.subPackageInfo)
                return this.subPackageInfo.path;

            if (this.docVersionInfo)
                return this.docVersionInfo.path;

            return this.packageInfo.docVersions.current.path
        }
    }
}
</script>