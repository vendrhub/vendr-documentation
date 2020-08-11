<template>  
  <div class="flex flex-wrap justify-center mb-10 -mt-3 -mx-3">
    <div class="tile-grid__cell p-3 w-full md:w-1/2 lg:w-1/3" v-for="edge in $static.paymentProviders.edges" :key="edge.node.id">
          <g-link :to="edge.node.docVersions.current.path" class="tile flex flex-col text-center items-stretch h-full relative">
            <template v-if="edge.node.logo">
                <span class="block text-center my-6"><g-image :src="require(`!!assets-loader!@logos/${edge.node.logo}`)" :alt="edge.node.name" class="mx-auto h-12 w-auto g-image--plain" immediate="true" style="max-width: 60%;" /></span>
                <hr class="my-6" />
            </template>
            <span class="tile__heading text-xl font-bold">{{ edge.node.name }}</span>
            <span class="block text-gray-500 font-normal">{{ edge.node.id }}</span>
            <span class="tile__body">Documentation for the {{ edge.node.name }} payment provider</span>
            <contrib-badge class="absolute top-0 right-0 mt-4 mr-4 tooltip--tm" v-if="edge.node.supportedBy == 'community'" />
          </g-link>
    </div>
  </div>
</template>

<static-query>
query PackageInfo {
  paymentProviders: allPackage(filter: { type: { eq: "PaymentProvider" } }, sortBy: "name", order: ASC) {
    edges {
      node {
        id,
        name,
        logo,
        type,
        supportedBy,
        docVersions {
          current {
            path
          }
        }
      }
    }
  }
}
</static-query>

<script>
import ContribBadge from './ContribBadge.vue'

export default {
  components: { ContribBadge }
}
</script>