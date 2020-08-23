<template lang="pug">
    head
        title CM Learning
        meta(charset="utf-8")
        meta(name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no")
        meta(name="description" content="CM Online Learning Platform")
        meta(name="author" content="CM Media Team")
        link(rel="icon" href="favicon.ico")
        link(rel="icon" type="image/png" sizes="16x16" href="favicon.png")
        body.bg-body.text-body.font-body
        .container.mx-auto.px-4

            <Header></Header>

            section(class="py-12 px-4")
                div(class="flex flex-wrap items-center text-center lg:text-left -mx-2")
                    div(class="lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 order-1 lg:order-none")
                        h2(class="text-5xl mb-6 leading-tight font-heading") CM Online Learning Platform
                        p(class="mb-8 text-gray-500 leading-relaxed")
                            | CM Media Online Learning Platform created for helping the people to learn more about the Islam more deeper and help increase our faith to Allah and prepare us to meet him later.
                        div
                            a(class="inline-block py-4 px-8 mr-6 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow", href="register") Sign up
                    div(class="lg:w-1/2 px-2")
                        img(src="placeholders/pictures/certificate.svg", alt="Certificate Stock Image")

            <Footer></Footer>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
