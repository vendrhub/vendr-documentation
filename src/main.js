import '~/main.css'
import '~/css/vendor/prism-vscodedark.css'

import DefaultLayout from '~/layouts/Layout.vue'
import MessageBox from '~/components/MessageBox.vue'
import Changelog from '~/components/Changelog.vue'
import ChangelogGroup from '~/components/ChangelogGroup.vue'
import TableOfContents from '~/components/TableOfContents.vue'
import Tip from '~/components/Tip.vue' 
import WorkInProgressMessageBox from '~/components/WorkInProgressMessageBox.vue' 
import Badge from '~/components/Badge.vue' 

export default function (Vue, { router, head, isClient }) {

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Red+Hat+Display:400,400i,500,500i,700,700i,900,900i&display=swap'
  })

  head.script.push({
    src: 'https://cdn.polyfill.io/v2/polyfill.min.js'
  })

  head.meta.push({
    name: 'theme-color',
    content: '249bff'
  })

  head.meta.push({
    name: 'manifest',
    content: '/manifest.json'
  })

  head.htmlAttrs = { class: 'doc' }
  head.bodyAttrs = { class: 'doc font-brand-body text-gray-700 leading-normal antialiased' }

  Vue.component('MessageBox', MessageBox)
  Vue.component('Changelog', Changelog)
  Vue.component('ChangelogGroup', ChangelogGroup)
  Vue.component('Toc', TableOfContents)
  Vue.component('Tip', Tip)
  Vue.component('WorkInProgress', WorkInProgressMessageBox)
  Vue.component('Badge', Badge)
  Vue.component('Layout', DefaultLayout)
}
