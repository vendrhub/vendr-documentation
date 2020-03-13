<template>
  <div class="">
    <site-header />
    <div class="w-full max-w-container mx-auto px-6">
      <slot />  
    </div>
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader'

export default {
  components: { SiteHeader }
}
</script>
