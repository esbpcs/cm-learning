<template lang="pug">
    head
        title Dashboard
        meta(charset="utf-8")
        meta(name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no")
        meta(name="description" content="Admin Dashboard")
        meta(name="author" content="CM Media Team")
        link(rel="icon" href="favicon.ico")
        link(rel="icon" type="image/png" sizes="16x16" href="favicon.png")
        body.bg-body.text-body.font-body
        .container.mx-auto.px-4

        AdminHeader
        section(class="py-8 px-4")
                h2(class="text-3xl mb-2 font-heading font-semibold") List of the Blog Post
                div(class="flex flex-wrap -mx-4 mb-8")
                    div(class="w-full lg:w-1/4 px-4 mb-6 lg:mb-0")
                        div(class="h-full")
                            div(class="text-center p-4 mb-2 bg-blue-500 text-white rounded")
                                h3(class="text-3xl leading-tight font-heading font-semibold") 1
                                span(class="leading-none") Total Courses
                    div(class="w-full lg:w-1/4 px-4 mb-6 lg:mb-0")
                        div(class="h-full")
                            div(class="text-center p-4 mb-2 bg-red-500 text-white rounded")
                                h3(class="text-3xl leading-tight font-heading font-semibold") 1
                                span(class="leading-none") Created
                    div(class="w-full lg:w-1/4 px-4 mb-6 lg:mb-0")
                        div(class="h-full")
                            div(class="text-center p-4 mb-2 bg-green-500 text-white rounded")
                                h3(class="text-3xl leading-tight font-heading font-semibold") 1
                                span(class="leading-none") Watched
                    div(class="w-full lg:w-1/4 px-4 mb-6 lg:mb-0")
                        div(class="h-full")
                            div(class="text-center p-4 mb-2 bg-gray-800 text-white rounded")
                                h3(class="text-3xl leading-tight font-heading font-semibold") 0
                                span(class="leading-none") Pending
                table(class="w-full table-auto")
                    thead
                        tr
                            th(class="border-t px-2 py-2", scope="col") ID #
                            th(class="border-t px-2 py-2", scope="col") Created By
                            th(class="border-t px-2 py-2", scope="col") User Email
                            th(class="border-t px-2 py-2", scope="col") Title
                            th(class="text-center border-t px-2 py-2", scope="col") Status
                            th(class="text-center border-t px-2 py-2", scope="col") Category
                            th(class="text-center border-t px-2 py-2", scope="col") Date
                            th(class="text-center border-t px-2 py-2", scope="col") Action
                    tbody
                        tr
                            td(class="border-t px-2 py-2") 1
                            td(class="border-t px-2 py-2")
                                a(href="#")
                                    img(class="inline-block mr-2 rounded-full", src="@/assets/placeholders/pictures/male_avatar.svg", alt="", width="40", height="40")
                                    |  Elang Swa Buana Putra
                            td(class="border-t px-2 py-2") elangsbp@gmail.com
                            td(class="border-t px-2 py-2") Course #1
                            td(class="text-center border-t px-2 py-2")
                                span(class="inline-block text-sm py-1 px-3 rounded-full text-white bg-yellow-500") New
                            td(class="text-center border-t px-2 py-2") Study #1
                            td(class="text-center border-t px-2 py-2") 01-08-2020
                            td(class="text-center border-t px-2 py-2")
                                a(class="text-blue-700 hover:underline mx-1", href="#") Edit
                                a(class="text-blue-700 hover:underline", href="#") Delete
        Footer
</template>
<script lang="ts">
// import Vue from 'vue'
// import Gravatar from 'vue-gravatar'
// Vue.component('v-gravatar, Gravatar')
</script>
