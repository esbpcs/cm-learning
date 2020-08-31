<template lang="pug">
    .container.mx-auto.px-4
    
            Header
            section(class="py-12 px-4")
            
                Notification

                div(class="flex flex-wrap items-center text-center lg:text-left -mx-2")
                    div(class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none")
                        h2(class="text-5xl mb-6 leading-tight font-heading") CM Online Learning Platform
                        p(class="mb-8 text-gray-700 leading-relaxed")
                            | CM Media Online Learning Platform created for helping the people to learn more about the Islam more deeper and help increase our faith to Allah and prepare us to meet him later.
                        div
                            nuxt-link(class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow", to="register") Sign up
                    div(class="lg:w-1/2 px-2")
                        img(src="@/assets/placeholders/pictures/certificate.svg", alt="Certificate Stock Image")
            Footer
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'IndexPage',
})
</script>
