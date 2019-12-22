<template>
    <div class="flex items-start mb-4">
        <component :is="icon" class="h-6 w-6 mr-2 flex-shrink-0" />
        <strong class="text-base font-semibold text-gray-800">{{ heading }}</strong>
    </div>
</template>

<script>
import GoodIcon from '../assets/images/good.svg'
import BadIcon from '../assets/images/bad.svg'

export default {
    components:{
        GoodIcon, BadIcon
    },
    props: ['heading', 'type'],
    computed: {
        icon() {
            switch(this.type) {
                case "good":
                    return GoodIcon
                case "bad":
                    return BadIcon
            }
        }
    }
}
</script>