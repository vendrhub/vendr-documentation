---
title: Home Page
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

import PackageList from '~/components/PackageList'
import PaymentProviderList from '~/components/PaymentProviderList'

<static-query>
query {
   corePackage: package(id: "Vendr") {
        docVersions {
            current {
                path
            }
        }
    }
}
</static-query>

<!-- Header -->
<div class="absolute top-0 left-0 w-full pt-16 pb-20 flex flex-col justify-center" style="background-image: linear-gradient(90deg, rgb(36, 155, 255), rgb(0, 235, 113)); height: 500px;">
    <div>
        <h1 class="text-center text-white text-4xl font-bold font-brand-display leading-tight tracking-tighter md:text-6xl md:max-w-4xl md:mx-auto">What would you like to learn about today?</h1>
        <div class="mt-0 font-medium  text-center text-white " >Please choose an area of documentation from the list below</div>
    </div>
</div>

<!-- Header Spacer -->
<div style="height: 500px"></div>

<!-- Links -->
<div class="relative z-10 pb-8">
    <g-link :to="$static.corePackage.docVersions.current.path" class="tile bg-white flex flex-col text-center max-w-2xl mx-auto mb-10 -mt-20">
        <span class="block text-center my-6"><g-image src="~/assets/images/logos/vendr.png" class="mx-auto h-12 w-auto g-image--plain" immediate="true" /></span>
        <hr class="my-6" />
        <span class="tile__heading text-xl font-bold">Vendr</span>
        <span class="tile__body ">Documentation for the core Vendr product</span>
    </g-link>
    <h2 class="text-center mb-10">Packages</h2>
    <package-list />
    <h2 class="text-center mb-10">Payment Providers</h2>
    <payment-provider-list />
</div>

<!-- Footer -->

---

<div class="md:max-w-4xl md:mx-auto py-10">
<h2 class="mb-10">Getting Help</h2>


If you require further assistance, or if you are having a particular issue you can't find an answer to, you can get community support via our support forum over on the [Umbraco developer portal](https://our.umbraco.com/packages/website-utilities/vendr/vendr-support/).

<h2 class="mb-10 ">About Vendr</h2>

Vendr is the eCommerce solution for Umbraco v8+ created by Outfield Digital, the team behind Tea Commerce for Umbraco v7. Vendr is the successor to Tea Commerce and follows much of the same principles but has been vastly improved for use on Umbraco v8+.

</div>

---

<p class="text-center mt-10 text-sm text-gray-500">Site + logo design &copy; {{ new Date().getFullYear() }} Outfield Digital Ltd. Content contributions licensed under MIT.<br />Vendr&reg; is a Registered Trademark of Outfield Digital Ltd.</p>
                    