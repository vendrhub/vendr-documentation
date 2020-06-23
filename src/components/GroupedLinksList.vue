<template>
    <div class="mb-0 lg:-mb-8">
        <div class="mb-8" v-for="group in groups" :key="group.title">
            <h5 class="mb-3 lg:mb-2 text-brand-blue-light uppercase tracking-wide font-black text-sm lg:text-xs">{{ group.title }}</h5>
            <ul class="lg:-mr-8">
                <li class="mb-2 lg:mb-0" v-for="item in group.items" :key="item.title">
                    <g-link :to="item.link" class="px-2 -mx-2 py-1 transition tracking-wide relative block text-gray-500 group hover:translate-r-5px hover:text-gray-900 lg:pr-8 lg:text-sm" :class="isActive(item.link) ? activeCssClasses : ''" >
                        {{item.title}}
                    </g-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['groups','activeLink'],
    computed: {
        currentPath () {
            return this.$route.matched[0].path + '/'
        },
        items () {
            return this.groups.reduce((acc, group) => (acc.push(...group.items), acc), [])
        },
        activeItems () {
            let self = this
            return self.items.filter((v, i) => {
                return v.link.startsWith(self.currentPath)
            })
        },
        activeCssClasses () {
            return "font-bold bg-gray-200 rounded py-2 text-brand-blue-dark hover:translate-r-0 lg:rounded-r-none"
        }
    },
    methods: {
        isActive (path) {
            return this.activeLink && this.activeLink.link == path;
        }
    }
}
</script>