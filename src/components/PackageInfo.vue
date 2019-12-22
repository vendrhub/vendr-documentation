<template>
    <div class="mb-8" v-if="packageInfo">
        <span class="block items-center px-2 -mx-2 py-1 hover:text-gray-900 font-medium text-gray-900 border-b-2 border-gray-200">
            <span class="text-lg flex w-full items-end pb-6">
                <g-link :to="versionInfo ? versionInfo.path : packageInfo.versions.current.path" class="font-bold mr-2">{{ packageInfo.name }}</g-link>
                <g-link :to="packageInfo.path + '/versions/'" class="text-gray-400 text-base" v-if="versionInfo">v{{versionInfo.name}}</g-link>
            </span>
            <span class="block font-normal text-gray-400 text-xs -mt-6 pb-6" v-if="packageInfo.type == 'PaymentProvider'">{{ packageInfo.id }}</span>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        packageInfo: Object,
        versionInfo: Object
    }
}
</script>