<template>
  <layout :title="$page.doc.title" :description="$page.doc.description">

    <VueRemarkContent class="markdown" />

    <p class="mt-8">
      <edit-on-github-link :path="$page.doc.fileInfo.path" />
    </p>

    <nav class="border-t-2 border-gray-200 flex justify-between pt-6 mt-8" v-if="previousPage || nextPage">
      <div>
        <g-link v-if="previousPage" exact class="rounded transition inline-block border border-gray-300 px-6 py-2 hover:bg-brand-blue-light hover:text-white hover:border-brand-blue-light" :to="previousPage.link">
          &larr; {{ previousPage.title }}
        </g-link>
      </div>
      <div class="text-right">
        <g-link v-if="nextPage" exact class="rounded transition inline-block border border-gray-300 px-6 py-2 hover:bg-brand-blue-light hover:text-white hover:border-brand-blue-light" :to="nextPage.link">
          {{ nextPage.title }} &rarr;
        </g-link>
      </div>
    </nav>

    <template slot="page-top" v-if="$page.doc.version && $page.doc.version.name != $page.doc.package.versions.current.name">
      <version-message-box :package-info="$page.doc.package" :version-info="$page.doc.version" />
    </template>

    <template slot="sidebar">
      <core-back-link v-if="$page.doc.package && $page.doc.package.type == 'PaymentProvider'" />
      <package-info :package-info="$page.doc.package" 
        :version-info="$page.doc.version"
        :sub-package-info="$page.doc.subPackage" />
      <sub-package-switcher 
          v-if="$page.doc.version && $page.doc.version.subPackages"
          :sub-packages="$page.doc.version.subPackages"
          :current-sub-package="$page.doc.subPackage" />
      <grouped-links-list :groups="links" v-if="links && links.length > 0" />
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
      links {
        title,
        link
      },
      versions {
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
    version {
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

<script>
import Layout from '../layouts/Layout'
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

      // Try version links
      if (this.$page.doc.version && this.$page.doc.version.links) {
        return this.$page.doc.version.links.map(g => {
          return {
            title: g.title,
            items: g.items.map(i => {
              return {
                title: i.title,
                link: this.$page.doc.version.path + i.link.substr(1)
              }
            })
          }
        })
      }
      
      // Now try package links
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
      return this.links.reduce((acc, group) => (acc.push(...group.items), acc), [])
    },
    currentIndex () {
      return this.items.findIndex(item => {
        return item.link.replace(/\/$/, '') === this.$route.path.replace(/\/$/, '')
      })
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
    return {
      title: title || (headings.length ? headings[0].value : undefined)
    }
  }
}
</script>
