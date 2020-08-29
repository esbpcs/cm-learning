<template lang="pug">
    head
        title Create Course
        meta(charset="utf-8")
        meta(name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no")
        meta(name="description" content="Create Course Form")
        meta(name="author" content="CM Media Team")
        link(rel="icon" href="favicon.ico")
        link(rel="icon" type="image/png" sizes="16x16" href="favicon.png")
        body.bg-body.text-body.font-body
        .container.mx-auto.px-4

        Header
        form(class="w-full max-w-sm mx-auto py-10" action="#" method="post"  )

                .mb-4
                    label(for="" class="block text-gray-700 text-sm font-bold mb-2") Course Title
                    input(type="text" name="field-name" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none")

                .mb-4
                    label(for="" class="block text-gray-700 text-sm font-bold mb-2") Course Description
                    textarea(name="field-name" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" rows="3")

                .mb-4
                    label(for="" class="block text-gray-700 text-sm font-bold mb-2") Course Video
                    input(type="text" name="field-name" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none")

                .mb-4
                    label(for="" class="block text-gray-700 text-sm font-bold mb-2") Category
                    .relative
                        select(name="field-name" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none")
                            option
                            option Tawheed
                            option Fiqh
                            option Madzhab
                            option Hajj
                        div(class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700")
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                            </svg>
                .mb-6
                    button(type="submit" class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow"  ) Submit
        Footer
</template>
<script lang="ts"></script>
