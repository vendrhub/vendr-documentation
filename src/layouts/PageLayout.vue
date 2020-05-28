<template>
  <layout>
    <div class="lg:flex -mx-6">
    
        <!-- Sidebar -->
        <div id="sidebar" class="hidden fixed inset-0 border-gray-300 pt-16 h-full bg-white z-90 w-full border-b lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 lg:border-r xl:w-1/5 ">
            <div id="navWrapper" class="h-full overflow-y-auto scrolling-touch lg:h-auto lg:block lg:relative lg:sticky lg:pt-16 lg:top-0 bg-white lg:bg-transparent">
            <nav id="nav" class="overflow-x-hidden px-6 pt-6 overflow-y-auto lg:py-8 lg:pl-6 lg:pr-8 sticky?lg:h-(screen-16)">
                <slot name="sidebar" />              
            </nav>
            </div>
        </div>
        
        <!-- Main content -->
        <div id="content-wrapper" class="w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5 ">
            <div id="content">

                <div class="pt-24 pb-16 w-full">

                    <!-- Intro -->
                    <div class="mb-6 px-6 mx-auto lg:ml-0 lg:mr-auto xl:mx-0 lg:px-12 xl:w-3/4">
                    <slot name="page-top" />
                    <h1 class=" text-5xl font-black text-brand-blue-dark font-brand-display leading-none tracking-tighter break-words mb-3">{{pageTitle}}</h1>
                    <div class="mt-0 mb-4 font-medium break-words" v-if="pageDescription">{{pageDescription}}</div>
                    <hr class="my-8 border-b-2 border-gray-200">
                    </div>

                    <!-- Body -->
                    <div class="flex">
                    <div class="px-6 lg:px-12 w-full mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4">
                        <slot />
                        <p class="text-center mt-10 text-sm text-gray-500">Site + logo design &copy; {{ new Date().getFullYear() }} Outfield Digital Ltd. Content contributions licensed under MIT.<br />Vendr&reg; is a Registered Trademark of Outfield Digital Ltd.</p>
                    </div>
                    <div class="hidden xl:text-sm xl:block xl:w-1/4 xl:px-6">
                        <div class="flex flex-col justify-between overflow-y-auto sticky top-16 max-h-(screen-16) pt-12 pb-4 -mt-12">
                        <slot name="aside" />
                        </div>
                    </div>
                    </div>

                </div>
            
            </div>
        </div>

    </div>
  </layout>
</template>

<script>
import Layout from './Layout'

export default {
  components: { Layout },
  props: {
    pageTitle: { type: String },
    pageDescription: { type: String }
  }
}

</script>
