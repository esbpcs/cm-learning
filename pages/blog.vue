<template lang="pug">
    .container.mx-auto.px-4

        UserHeader
        section(class="py-12 px-4")
            h2(class="text-3xl text-center mb-8 font-heading" ) Latest posts
            div(class="flex flex-wrap mx-4")
            div(class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0")
                div(class="h-full pb-8 rounded shadow-md")
                a(href="#")
                img(src="@/assets/placeholders/pictures/work.jpg" class="mb-4" alt="" )
                div(class="px-6")
                    small 22 Oct 2019 | By Michael Scott
                    h3(class="text-xl my-3 font-heading" ) Being world’s best boss
                    p(class="text-gray-500" ) The wise man once said: "Friend first, boss second, entertainer third". That man was me
        Footer

</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Blog',
})
</script>
