---
title: Versions
description: Index of the past, present and future versions of the documentation
---

<!-- vale off -->
import VersionsList from '~/components/VersionsList.vue'
<!-- vale on -->

## Next Version
<template v-if="$page.doc.package && $page.doc.package.docVersions.next">

Next version of the Vendr Reviews documentation

<versions-list :versions="[$page.doc.package.docVersions.next]" />

</template>
<template v-else>

There is currently no next version of the Vendr Reviews documentation available

</template>

## Current Version
Current version of the Vendr Reviews documentation 

<versions-list :versions="[$page.doc.package.docVersions.current]"
    :next-version="$page.doc.package.packageVersion"
    :next-version-inclusive="true" />


## Previous Versions
<template v-if="$page.doc.package && $page.doc.package.docVersions.previous && $page.doc.package.docVersions.previous.length > 0">

Previous versions of the Vendr Reviews documentation

<versions-list :versions="$page.doc.package.docVersions.previous"
    :next-version="$page.doc.package.docVersions.current.name" />

</template>
<template v-else>

There are currently no previous versions of the Vendr Reviews documentation available

</template>