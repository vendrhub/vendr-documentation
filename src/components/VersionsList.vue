<template>
    <div>
        <table class="mb-8 -mt-4">
            <tr v-for="version in versions" :key="version.id">
                <td class="border p-3 font-bold">{{ version.name }}</td>
                <td class="border p-3"><g-link :to="version.path" class="text-brand-blue-light hover:text-brand-blue-mid hover:underline">Docs</g-link></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: ['versions']
}
</script>