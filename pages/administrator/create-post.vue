<template lang="pug">
    .container.mx-auto.px-4

        Header
        form(class="w-full max-w-sm mx-auto py-10" action="#" method="post"  )

                .mb-4
                    label(for="" class="block text-gray-700 text-sm font-bold mb-2") Post Title
                    input(type="text" name="field-name" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none")

                .mb-4
                    label(for="" class="block text-gray-700 text-sm font-bold mb-2") Post Content
                    textarea(name="field-name" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" rows="3")

                .mb-4
                    label(for="" class="block text-gray-700 text-sm font-bold mb-2") Category
                    .relative
                        select(name="field-name" class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none")
                            option
                            option Mock 1
                            option Mock 2
                            option Mock 3
                            option Mock 4
                        div(class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700")
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                            </svg>
                div(class="flex flex-wrap items-center mx-auto justify-between")
                    button(type="submit" class="inline-block w-auto mx-0 py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow") Submit
                    button(type="submit" class="inline-block w-auto py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" ) Cancel
        Footer
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CreatePostPage',
})
</script>
