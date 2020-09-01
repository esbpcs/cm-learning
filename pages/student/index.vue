<template lang="pug">
        .container.mx-auto.px-4

          UserHeader
          section(class="py-12 px-4")
            h2(class="text-3xl text-center mb-8 font-heading") Latest Courses
            
            div(class="flex flex-wrap mx-4")
              div(v-for="course in courses" :key="course.id" class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0")
                div(class="h-full pb-8 rounded shadow-md")
                    img(v-bind:src="course.postThumbnail" class="mb-4" alt="Course Thumbnail")
                    div(class="px-6")
                      small {{ course.posted }} | By {{ course.user }}
                      h3(class="text-xl my-3 font-heading") {{ course.name }}
                      p(class="text-gray-500") {{ course.description }}
            Footer

</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      courses: [
        {
          id: '1',
          name: 'Intro to Theology',
          posted: '20 August 2020',
          user: 'Ambrosious',
          description: 'Theology 101 by Ambrosious, Phd ',
          postThumbnail: 'images/img1.png',
        },
        {
          id: '2',
          name: 'Intro to Islamic Theology',
          posted: '19 August 2020',
          user: 'Emberman',
          description: '101 by Anonymous Author Mr.Emberman, M.Div, Phd',
          postThumbnail: '',
        },
        {
          id: '3',
          name: 'Fiqh',
          posted: '23 August 2020',
          user: 'Dosier',
          description: 'Seriously my friend this is an irony',
          postThumbnail: '',
        },
      ],
    }
  },
})
</script>
