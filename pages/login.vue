<template lang="pug">
        .container.mx-auto.px-4

            Header
            section(class="w-full max-w-sm mx-auto py-10")
                form(name="Login" method="POST" data-netlify="true")
                    div(class="mb-4")
                        label(for="email" class="text-gray-700 text-sm font-bold") Email:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="email" type="text")
                    div(class="mb-4")
                        label(for="password" class="text-gray-700 text-sm font-bold") Password:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="password" type="password" autocomplete="on")
                    div(class="mb-6")
                            button(class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" ) Login
                    p(class="text-center")
                            nuxt-link(to="register" class="text-blue-700 hover:underline") or sign up &raquo;
            Footer
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'LoginPage',
})
</script>
