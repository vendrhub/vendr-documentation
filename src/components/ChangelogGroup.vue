<template>
    <tr class="changelog__row">
        <td class="changelog__category" :class="'changelog__category--' + category.toLowerCase()"><span>{{category}}</span></td>
        <td class="changelog__changes">
            <slot />
        </td>
    </tr>
</template>

<script>
export default {
    props: ['category']
}
</script>