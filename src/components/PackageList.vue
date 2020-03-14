<template>  
  <div class="flex flex-wrap justify-center mb-10 -mt-3 -mx-3">
    <div class="tile-grid__cell p-3 w-full md:w-1/2" v-for="edge in $static.paymentProviders.edges" :key="edge.node.id">
          <g-link :to="edge.node.docVersions.current.path" class="tile flex flex-col text-center items-stretch h-full">
            <template v-if="edge.node.logo">
                <span class="block text-center my-6"><g-image :src="require(`!!assets-loader!@logos/${edge.node.logo}`)" :alt="edge.node.name" class="mx-auto h-12 w-auto g-image--plain" immediate="true" /></span>
                <hr class="my-6" />
            </template>
            <span class="tile__heading text-xl font-bold">{{ edge.node.name }}</span>
            <span class="block text-gray-500 font-normal">{{ edge.node.id }}</span>
            <span class="tile__body">Documentation for the {{ edge.node.name }} package</span>
          </g-link>
    </div>
  </div>
</template>

<static-query>
query PackageInfo {
  paymentProviders: allPackage(filter: { type: { eq: "Package" } }, sortBy: "name", order: ASC) {
    edges {
      node {
        id,
        name,
        logo,
        type,
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
