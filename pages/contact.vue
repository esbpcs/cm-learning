<template lang="pug">
    .container.mx-auto.px-4

        UserHeader
        section(class="py-12 px-4")
                h2(class="text-3xl text-center mb-8 font-heading") Support and Inquiry
                div(class="flex flex-wrap items-center mx-6")
                    div(class="w-full lg:w-1/2 px-6 lg:px-24 mb-8 lg:mb-0")
                        img(src="@/assets/placeholders/pictures/new_ideas.svg", alt="")
                    div(class="w-full lg:w-1/2 px-6")
                        h3(class="text-2xl mb-2 font-heading") CM Media HQ
                        ul
                            li(class="mb-2")
                                img(class="inline-block w-8 h-8 pr-2", src="@/assets/placeholders/icons/home.svg", alt="")
                                span Ruko XXX
                            li(class="mb-2")
                                img(class="inline-block w-8 h-8 pr-2", src="@/assets/placeholders/icons/mobile.svg", alt="")
                                span +6289528418383
                            li(class="mb-2")
                                img(class="inline-block w-8 h-8 pr-2", src="@/assets/placeholders/icons/message.svg", alt="")
                                span inquiry@esbpcs.me
        Footer
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ContactPage',
})
</script>
