<template>
    <div class="flex bg-black-80 text-center ">
      
      <div class="flex-1 relative">
        <g-link v-if="canPrev" :to="prevUrl" class="block text-white hover:bg-green trans-bg trans-fast p-6 md:p-8 lg:p-12 xl:p-24">
            <prev-icon />
        </g-link>
        <span v-else class="block text-white-20 p-6 md:p-8 lg:p-12 xl:p-24">
            <prev-icon />
        </span>
      </div>
      <div class="flex-1 relative">
        <g-link v-if="canNext" :to="nextUrl" class="block text-white hover:bg-green trans-bg trans-fast p-6 md:p-8 lg:p-12 xl:p-24 ">
            <next-icon />
        </g-link>
        <span v-else class="block text-white-20 p-6 md:p-8 lg:p-12 xl:p-24">
            <next-icon />
        </span>
      </div>

    </div>
</template>

<script>
import PrevIcon from './icons/PrevIcon';
import NextIcon from './icons/NextIcon';

export default {
    props: {
        baseUrl: String,
        pageNumber: Number,
        totalPages: Number
    },
    components: {
        PrevIcon, NextIcon
    },
    computed: {
        canPrev () {
            return this.pageNumber > 1;
        },
        prevUrl () {
            if (this.pageNumber === 2) return this.baseUrl;
            return this.baseUrl + (this.pageNumber - 1) + '/';
        },
        canNext () {
            return this.pageNumber < this.totalPages;
        },
        nextUrl () {
            return this.baseUrl + (this.pageNumber + 1) + '/';
        },
        commonClasses() {
            return 
        }
    }
}
</script>
