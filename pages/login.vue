<template lang="pug">
    head
        title Login
        meta(charset="utf-8")
        meta(name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no")
        meta(name="description" content="Login Page")
        meta(name="author" content="CM Media Team")
        link(rel="icon" href="favicon.ico")
        link(rel="icon" type="image/png" sizes="16x16" href="favicon.png")
        body.bg-body.text-body.font-body
        .container.mx-auto.px-4

            <Header></Header>

            section(class="w-full max-w-sm mx-auto py-10")
                form
                    div(class="mb-4")
                        label(for="email" class="text-gray-700 text-sm font-bold") Email:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="email" type="text")
                    div(class="mb-4")
                        label(for="password" class="text-gray-700 text-sm font-bold") Password:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="password" type="password")
                    div(class="mb-6")
                            button(class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" ) Login
                    p(class="text-center")
                            a(href="register" class="text-blue-700 hover:underline") or sign up &raquo;

            <Footer></Footer>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
