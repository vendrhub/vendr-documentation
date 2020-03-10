<template>
    <ClientOnly>
        <vue-scrollactive active-class="otp-active" :offset="0">
            <div class="mb-8  border-l border-gray-300 pl-6 overflow-x-hidden" v-if="subtitles.length > 0 && subtitles[0].depth !== 3">
                <h5 class="text-brand-blue-light uppercase tracking-wide font-black text-sm lg:text-xs">On this page</h5> 
                <ul class="mt-2" v-if="subtitles.length">
                    <li class="mb-0" :class="'ml-' + ((subtitle.depth - 2) * 4)" v-for="subtitle in subtitles" :key="subtitle.value">
                        <a :href="subtitle.anchor" class="group scrollactive-item block py-1 hover:text-gray-900 text-gray-500"><span class="inline-block max-w-full overflow-wrap-break transition group-hover:translate-r-5px">{{ subtitle.value }}</span></a>
                    </li>
                </ul>
            </div>
        </vue-scrollactive>
    </ClientOnly>
</template>

<script>
import VueScrollactive from 'vue-scrollactive/src/scrollactive.vue'

export default {
    components: {
        VueScrollactive
    },
    props: {
        subtitles: { type: Array, default: () => [] },
    }
}
</script>