<template>
    <div class="message-box px-6 py-4 mb-8 border-l-4" :class="cssClasses">
        <p class="message-box__heading font-bold" v-if="heading">{{ heading }}</p> 
        <div class="message-box__body">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props: ['type', 'heading'],
    computed: {
        cssClasses() {
            switch(this.type) {
                case "warn":
                case "warning":
                    return "bg-yellow-200 border-yellow-400"
                case "info":
                case "information":
                case "help":
                    return "bg-blue-150 border-blue-400"
                case "success":
                    return "bg-green-200 border-green-400"
            }
        }
    }
}
</script>