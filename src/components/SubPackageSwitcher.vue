<template>
  <div class="block border-b-2 border-gray-200 px-2 -mx-2 mb-6 pb-4 -mt-4 font-medium text-base flex items-center lg:text-sm"
      v-if="subPackages && subPackages.length > 0">
      <select class="block border border-gray-300 rounded p-2 -mx-2 font-medium text-base lg:text-sm" 
        style="max-width: calc(100% + 1rem);min-width: calc(100% + 1rem);"
        @change="switchSubPackage($event)">
        <option v-for="subPackage in subPackages" 
          :key="subPackage.alias" 
          :value="subPackage.path"
          :selected="isSelected(subPackage)">{{subPackage.name}}</option>
      </select>
    </div>
</template>

<script>
export default {
    props: ['subPackages', 'currentSubPackage'],
    methods: {
      isSelected(subPackage) {
        return subPackage.path === this.currentSubPackage.path
      },
      switchSubPackage(evt) {
        this.$router.push(evt.target.value)
        evt.target.blur()
      }
    }
}
</script>