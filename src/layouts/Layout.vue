<template>
  <div class="">
    <site-header :current-package="currentPackage" :current-version="currentVersion" />
    <div class="w-full max-w-container mx-auto px-6">
      <slot />  
    </div>
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader'

export default {
  components: { SiteHeader },
  props: {
    currentPackage: { type: String },
    currentVersion: { type: String }
  }
}
</script>
