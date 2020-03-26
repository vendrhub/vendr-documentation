<template>
    <header id="header">
      <div style="background-image: linear-gradient(90deg, #249bff, #00eb71);" class="flex bg-brand-blue-light fixed top-0 inset-x-0 z-100 h-16 items-center">
        <div class="w-full max-w-container relative mx-auto px-6">
          <div class="flex items-center -mx-6">

            <!-- Logo -->
            <div class="lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8">
              <div class="flex items-center">
                <g-link :to="'/'" class="block lg:mr-4 text-white">
                  <vendr-logo class="h-7 w-auto hidden md:block fill-current" />
                  <vendr-v class="h-7 w-auto block md:hidden fill-current" />
                </g-link>
              </div>
            </div>

            <div class="flex flex-grow lg:w-3/4 xl:w-4/5">

              <!-- Search -->
              <div class="w-full lg:px-12 xl:w-3/4">
                <div class="relative">
                  <input id="docsearch" class="transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-500 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal" type="text" placeholder="Search the docs (Press '/' to focus)">
                  <div class="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
                    <svg class="fill-current pointer-events-none text-gray-600 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
                  </div>
                </div>
              </div>

              <!-- Nav Toggle -->
              <button type="button" id="sidebar-open" class="flex px-6 items-center lg:hidden text-white focus:outline-none focus:text-gray-700" @click="openSidebar">
                <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>

              <button type="button" id="sidebar-close" class="hidden flex px-6 items-center lg:hidden text-white focus:outline-none focus:text-gray-700" @click="closeSidebar">
                <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
              </button>

              <!-- External Links -->              
              <div class="hidden lg:flex lg:items-center lg:justify-between xl:w-1/4 px-6 text-white">
                
                <div class="flex justify-end items-center w-full">
                  <a class="block flex items-center hover:text-brand-blue-dark mr-5" :href="$static.metadata.githubUrl" target="_blank">
                    <github-logo class="fill-current w-5 h-5" />
                  </a>
                  <a class="block flex items-center hover:text-brand-blue-dark mr-5" :href="$static.metadata.umbracoUrl" target="_blank">
                    <our-umbraco-logo class="fill-current w-5 h-5" />
                  </a>
                  <a class="block flex items-center hover:text-brand-blue-dark mr-5" :href="$static.metadata.twitterUrl" target="_blank">
                    <twitter-logo class="fill-current w-5 h-5" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </header>
</template>

<static-query>
query {
    corePackage: package(id: "Vendr") {
        docVersions {
          current {
              path
          }
        }
    },
    metadata {
      pathPrefix,
      githubUrl,
      umbracoUrl,
      twitterUrl
    }
}
</static-query>

<script>
import 'docsearch.js/dist/cdn/docsearch.min.css'

import Mousetrap from 'mousetrap'
import VendrLogo from '../assets/images/vendr-logo.svg'
import VendrV from '../assets/images/vendr-v.svg'
import GithubLogo from '../assets/images/github-logo.svg'
import OurUmbracoLogo from '../assets/images/our-umbraco-logo.svg'
import TwitterLogo from '../assets/images/twitter-logo.svg'

export default {
    components: { VendrLogo, VendrV, GithubLogo, OurUmbracoLogo, TwitterLogo },
    mounted () {

      var self = this;

      this.$ = require('cash-dom')
      this.docsearch = require('docsearch.js')

      Mousetrap.bind('/', function (e) {
        e.preventDefault()
        self.$('#docsearch').trigger("focus")
      })

      this.docsearch({
        apiKey: 'fb7197cd2b826ca6f0dc2b63f897a2c3',
        indexName: 'vendr',
        inputSelector: '#docsearch',
        autocompleteOptions: {

        },
        handleSelected: (input, event, suggestion) => {
          const { pathname, hash } = new URL(suggestion.url)
          const routepath = pathname.replace('/docs', '')
          this.$router.push({ path: routepath, hash: hash })
          input.setVal('')
        },
        debug: false // Set debug to true if you want to inspect the dropdown
      });

    },
    methods : {

      openSidebar() {
        if (this.$) {
          this.$('#sidebar-open').addClass('hidden')
          this.$('#sidebar').removeClass('hidden')
          this.$('#sidebar-close').removeClass('hidden')
          this.$('#content-wrapper').addClass('overflow-hidden max-h-screen fixed')
        }
      },

      closeSidebar() {
        if (this.$) {
          this.$('#sidebar').addClass('hidden')
          this.$('#sidebar-close').addClass('hidden')
          this.$('#sidebar-open').removeClass('hidden')
          this.$('#content-wrapper').removeClass('overflow-hidden max-h-screen fixed')
        }
      }

    },
    watch: {
      $route (to, from){
        this.closeSidebar();
      }
    }
}
</script>
