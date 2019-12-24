<template>
    <div>
        <table class="mb-8 -mt-4">
            <tr v-for="(version, idx) in versions" :key="version.id">
                <td class="border p-3 font-bold">{{ versionRange(idx) }}</td>
                <td class="border p-3"><g-link :to="version.path" class="text-brand-blue-light hover:text-brand-blue-mid hover:underline">Docs</g-link></td>
            </tr>
        </table>
    </div>
</template>

<script>
//const semver = require('semver')

export default {
    props: ['versions', 'nextVersion', 'nextVersionInclusive'],
    methods: {
        versionRange(index) {
            let version = this.versions[index].name;
            let nextVersion = index > 0 ? this.versions[index-1].name : this.nextVersion;
            let nextVersionPrefix = this.nextVersionInclusive ? '' : '<';
            if (nextVersion && this.isRange(version, nextVersion)) {
                return `${version} - ${nextVersionPrefix}${nextVersion}`
            } else {
                return `${version}`
            }
        },
        isRange(prevVersion, nextVersion){
            return prevVersion != nextVersion;
            //let diff = semver.diff(prevVersion, nextVersion)
            //let prevNextVersion = semver.inc(prevVersion, diff)
            //return semver.neq(prevNextVersion, nextVersion)
        }
    }
}
</script>