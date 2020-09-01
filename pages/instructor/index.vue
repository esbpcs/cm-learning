<template lang="pug">
    .container.mx-auto.px-4

        InstructorHeader
        section(class="py-8 px-4")
                h2(class="text-3xl mb-2 font-heading font-semibold") List of the Courses
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
                        tr(v-for="course in courseList" :key="course.id" class="text-center")
                            td(class="border-t px-2 py-2") {{course.id}}
                            td(class="border-t px-2 py-2") {{course.user}}
                            td(class="border-t px-2 py-2") {{course.email}}
                            td(class="border-t px-2 py-2") {{course.title}}
                            td(class="text-center border-t px-2 py-2")
                                span(class="inline-block text-sm py-1 px-3 rounded-full text-white bg-blue-500") {{course.status}}
                            td(class="text-center border-t px-2 py-2") {{course.category}}
                            td(class="text-center border-t px-2 py-2") {{course.posted}}
                            td(class="text-center border-t px-2 py-2")
                                a(class="text-blue-700 hover:underline mx-1", href="editPost") Edit
                                a(class="text-blue-700 hover:underline", href="deletePost") Delete
        Footer
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'InstructorDashboard',
  data() {
    return {
      courseList: [
        {
          id: '1',
          user: 'elangsbp',
          email: 'elangsbp@mock.net',
          title: 'How to Create a Website',
          status: 'Published',
          category: 'Web Development',
          posted: '01 September 2020',
        },
        {
          id: '2',
          user: 'Test',
          email: 'test@mock.net',
          title: 'How to Create a Nuxt.js App',
          status: 'Published',
          category: 'Web Development',
          posted: '01 September 2020',
        },
      ],
    }
  },
  computed: {},
})
</script>
