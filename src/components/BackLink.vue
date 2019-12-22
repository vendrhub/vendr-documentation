<template>
    <g-link :to="href" class="block border-b-2 border-gray-200 px-2 -mx-2 mb-6 pb-4 font-medium text-gray-500 text-base flex items-center lg:text-sm">
        <span class="pr-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current h-5 w-5" style="transform: rotate(90deg);"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
        </span>
        <span>{{label}}</span>
    </g-link>
</template>

<script>
// block bg-gray-200 p-4 -mx-6 -mt-6 mb-6 font-medium text-gray-500 text-base flex items-center  lg:text-sm lg:-mx-8 lg:-mt-8 lg:mb-8
export default {
    props: ['label', 'href']
}
</script>