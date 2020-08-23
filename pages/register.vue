<template lang="pug">
    head
        title Account Registration
        meta(charset="utf-8")
        meta(name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no")
        meta(name="description" content="Register Page")
        meta(name="author" content="CM Media Team")
        link(rel="icon" href="favicon.ico")
        link(rel="icon" type="image/png" sizes="16x16" href="favicon.png")
        body.bg-body.text-body.font-body
        .container.mx-auto.px-4

            <Header></Header>

            section(class="w-full max-w-sm mx-auto py-10")
                form
                    div(class="mb-4")
                        label(for="firstName" class="text-gray-700 text-sm font-bold") First Name:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="firstName" type="text")
                    div(class="mb-4")
                        label(for="lastName" class="text-gray-700 text-sm font-bold") Last Name:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="lastName" type="text")
                    div(class="mb-4")
                        label(for="gender" class="text-gray-700 text-sm font-bold") Gender:
                            select(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="gender")
                                option(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none")
                                option(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="male") Ikhwan
                                option(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="female") Akhwat
                    div(class="mb-4")
                        label(for="email" class="text-gray-700 text-sm font-bold") Email:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="email" type="text")
                    div(class="mb-4")
                        label(for="password" class="text-gray-700 text-sm font-bold") Password:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="password" type="password")
                    div(class="mb-4")
                        label(for="phoneNumber" class="text-gray-700 text-sm font-bold") Phone Number:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="phoneNumber" type="text")
                    div(class="mb-4")
                        label(for="roles" class="text-gray-700 text-sm font-bold") Roles:
                            select(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="roles")
                                option(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none")
                                option(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="student") Student
                                option(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="instructor") Instructor
                    div(class="mb-6")
                            button(class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" ) Sign up
                    p(class="text-center")
                            a(href="login" class="text-blue-700 hover:underline") or sign in &raquo;

            <Footer></Footer>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
