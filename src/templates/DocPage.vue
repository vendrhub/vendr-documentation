<template>
  <layout :page-title="$page.doc.title" :page-description="$page.doc.description">

    <VueRemarkContent class="markdown" />

    <p class="mt-8">
      <edit-on-github-link :path="$page.doc.fileInfo.path" />
    </p>

    <nav class="flex flex-col-reverse border-t-2 border-gray-200 items-stretch w-full pt-6 mt-8 sm:flex-row" v-if="previousPage || nextPage">
      <div class="flex-1 sm:mt-0" v-if="previousPage" :class="{ 'mt-2': nextPage, 'sm:mr-2': nextPage }">
        <g-link exact class="group rounded transition shadow-md flex items-center w-full h-full border border-gray-300 px-4 py-3 hover:shadow-lg hover:border-brand-blue-light" :to="previousPage.link">
          <span class="pr-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="text-gray-500 w-8 h-8 stroke-current group-hover:text-brand-blue-light" fill="none" stroke-width="1"><g><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></g></svg>
          </span>
          <span class="flex-1 text-right">
            <span class="block text-gray-500 text-xs font-bold transition group-hover:text-brand-blue-light">{{ previousPage.group }}</span>
            <span class="block text-md">{{ previousPage.title }}</span>
          </span>
        </g-link>
      </div>
      <div class="flex-1 sm:mb-0" v-if="nextPage" :class="{ 'mb-2': nextPage, 'sm:ml-2': previousPage }">
        <g-link exact class="group rounded transition shadow-md flex items-center w-full h-full border border-gray-300 px-4 py-3 hover:shadow-lg hover:border-brand-blue-light" :to="nextPage.link">
          <span class="flex-1 text-left">
            <span class="block text-gray-500 text-xs font-bold transition group-hover:text-brand-blue-light">{{ nextPage.group }}</span>
            <span class="block text-md">{{ nextPage.title }}</span>
          </span>
          <span class="pl-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="text-gray-500 w-8 h-8 stroke-current group-hover:text-brand-blue-light" fill="none" stroke-width="1"><g><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></g></svg>
          </span>
        </g-link>
      </div>
    </nav>

    <template slot="page-top" v-if="$page.doc.docVersion && $page.doc.docVersion.name != $page.doc.package.docVersions.current.name">
      <version-message-box :package-info="$page.doc.package" :doc-version-info="$page.doc.docVersion" />
    </template>

    <template slot="sidebar">
      <package-info :package-info="$page.doc.package" 
        :doc-version-info="$page.doc.docVersion"
        :sub-package-info="$page.doc.subPackage" />
      <sub-package-switcher 
          v-if="$page.doc.docVersion && $page.doc.docVersion.subPackages && $page.doc.docVersion.subPackages.length > 1"
          :sub-packages="$page.doc.docVersion.subPackages"
          :current-sub-package="$page.doc.subPackage" />
      <grouped-links-list :groups="links" :active-link="items[currentIndex]" v-if="links && links.length > 0" />
    </template>

    <template slot="aside">
      <on-this-page :subtitles="subtitles" />
    </template>

  </layout>
</template>

<page-query>
query DocPage($id: ID!) {
  doc: docPage(id: $id) {
    id,
    path,
    title,
    description,
    content,
    fileInfo {
      path
    },
    headings (depth: h1) {
      value
    }
    subtitles: headings {
      depth
      value
      anchor
    },
    package {
      id,
      name,
      path,
      type,
      supportedBy,
      links {
        title,
        link
      },
      packageVersion,
      docVersions {
        next {
          id,
          name,
          path
        },
        current {
          id,
          name,
          path
        },
        previous {
          id,
          name,
          path
        }
      }
    },
    docVersion {
      id,
      name,
      path,
      links {
        title,
        items {
          title,
          link
        }
      },
      subPackages {
        name,
        alias,
        path
      }
    }
    subPackage {
      name,
      alias,
      path,
      links {
        title,
        items {
          title,
          link
        }
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteDescription,
    siteUrl
  }
}
</static-query>

<script>
import Layout from '../layouts/PageLayout'
import CoreBackLink from '../components/CoreBackLink'
import PackageInfo from '../components/PackageInfo'
import SubPackageSwitcher from '../components/SubPackageSwitcher'
import GroupedLinksList from '../components/GroupedLinksList'
import OnThisPage from '../components/OnThisPage'
import VersionMessageBox from '../components/VersionMessageBox'
import EditOnGithubLink from '../components/EditOnGithubLink'

export default {
  components: { Layout, CoreBackLink, PackageInfo, SubPackageSwitcher, GroupedLinksList, OnThisPage, VersionMessageBox, EditOnGithubLink },
  computed: {
    subtitles() {
      // Remove h1, h4, h5, h6 titles
      let subtitles = this.$page.doc.subtitles.filter(function(value, index, arr){
        return [2,3].includes(value.depth)
      })
      return subtitles
    },
    links() {

      // Try sub-package links
      if (this.$page.doc.subPackage && this.$page.doc.subPackage.links) {
        return this.$page.doc.subPackage.links.map(g => {
          return {
            title: g.title,
            items: g.items.map(i => {
              return {
                title: i.title,
                link: this.$page.doc.subPackage.path + i.link.substr(1)
              }
            })
          }
        })
      }

      // Try doc version links
      if (this.$page.doc.docVersion && this.$page.doc.docVersion.links) {
        return this.$page.doc.docVersion.links.map(g => {
          return {
            title: g.title,
            items: g.items.map(i => {
              return {
                title: i.title,
                link: this.$page.doc.docVersion.path + i.link.substr(1)
              }
            })
          }
        })
      }
      
      // Try package links
      if (this.$page.doc.package && this.$page.doc.package.links) {
        return [{
          title: this.$page.doc.package.name,
          items: this.$page.doc.package.links.map(i => {
            return {
              title: i.title,
              link: this.$page.doc.package.path + i.link.substr(1)
            }
          })
        }]
      }

      // Well, we tried
      return [];

    },
    items () {
      return this.links.reduce((acc, group) => {
        // First item
        // if (group.items.length > 0) {
        //   acc.push({ title: group.title + ' - ' + group.items[0].title, link: group.items[0].link})
        //   if (group.items.length > 2) {
        //     // Mid items
        //     acc.push(...group.items.slice(1, group.items.length - 1))
        //   }
        //   if (group.items.length > 1) {
        //     // Last item
        //     var lastItem = group.items[group.items.length - 1];
        //     acc.push({ title: group.title + ' - ' + lastItem.title, link: lastItem.link})
        //   }
        // }
        acc.push(...group.items.map((i) => { return { title: i.title, link: i.link, group: group.title} }))
        return acc
      }, [])
    },
    currentIndex () {
      var idx =  this.items.findIndex(item => {
        return item.link.replace(/\/$/, '') === this.$route.path.replace(/\/$/, '')
      })
      if (idx == -1) {
        idx = this.items.slice().reverse().findIndex(item => {
          return this.$route.path.replace(/\/$/, '').startsWith(item.link.replace(/\/$/, ''))
        })
        var count = this.items.length - 1
        idx = idx >= 0 ? count - idx : idx;
      }
      return idx;
    },
    nextPage () {
      return this.items[this.currentIndex + 1]
    },
    previousPage () {
      return this.items[this.currentIndex - 1]
    }
  },
  metaInfo () {
    const { title, headings } = this.$page.doc
    let metaTitle = (title || (headings.length ? headings[0].value : undefined))
    if (this.$page.doc.subPackage && this.$page.doc.subPackage.path.replace(/\/$/, '') !== this.$route.path.replace(/\/$/, ''))
    {
      metaTitle += " - " + this.$page.doc.subPackage.name
    }
    if (this.$page.doc.package) {
      metaTitle += " - " + this.$page.doc.package.name
    }
    return {
      title: metaTitle,
      meta: [
        { name: 'twitter:title', content: metaTitle },
        { name: 'twitter:description', content: this.$page.doc.description },
        { key: 'description', name: 'description', content: this.$page.doc.description }
      ],
      link: [
        { rel: 'canonical', href: `${this.$static.metadata.siteUrl}${this.$url(this.$page.doc.path)}` }
      ]
    }
  }
}
</script>
