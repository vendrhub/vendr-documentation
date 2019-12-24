<template>
    <div>
        <ul>
            <li v-for="edge in $static.paymentProviders.edges" :key="edge.node.id">
                <strong>{{ edge.node.name }} - v{{ edge.node.docVersions.current }}</strong>
            </li>
        </ul>
    </div>
</template>

<static-query>
query PackageInfo {
  paymentProviders: allPackageInfo(filter: { type: { eq: "PaymentProvider" } }, sortBy: "name", order: ASC) {
    edges {
      node {
        id,
        slug,
        name,
        type,
        docVersions {
          next,
          current,
          previous
        }
      }
    }
  }
}
</static-query>

<script>

</script>