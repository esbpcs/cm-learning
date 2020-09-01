<template lang="pug">
    .container.mx-auto.px-4

        AdminHeader
        section(class="py-8 px-4")
                h2(class="text-3xl mb-2 font-heading font-semibold") List of the Blog Post
                table(class="w-full table-auto")
                    thead
                        tr
                            th(class="border-t px-2 py-2", scope="col") ID #
                            th(class="border-t px-2 py-2", scope="col") Created By
                            th(class="border-t px-2 py-2", scope="col") User Email
                            th(class="border-t px-2 py-2", scope="col") Post Title
                            th(class="text-center border-t px-2 py-2", scope="col") Status
                            th(class="text-center border-t px-2 py-2", scope="col") Category
                            th(class="text-center border-t px-2 py-2", scope="col") Date
                            th(class="text-center border-t px-2 py-2", scope="col") Action
                    tbody
                        tr(v-for="post in postList" :key="post.id" class="text-center")
                            td(class="border-t px-2 py-2") {{post.id}}
                            td(class="border-t px-2 py-2") {{post.user}}
                            td(class="border-t px-2 py-2") {{post.email}}
                            td(class="border-t px-2 py-2") {{post.title}}
                            td(class="text-center border-t px-2 py-2")
                                span(class="inline-block text-sm py-1 px-3 rounded-full text-white bg-blue-500") {{post.status}}
                            td(class="text-center border-t px-2 py-2") {{post.category}}
                            td(class="text-center border-t px-2 py-2") {{post.posted }}
                            td(class="text-center border-t px-2 py-2")
                                nuxt-link(class="text-blue-700 hover:underline mx-1", to="editPost") Edit
                                nuxt-link(class="text-blue-700 hover:underline", to="deletePost") Delete
        Footer
</template>
<script lang="ts">
import Vue from 'vue'
// import Gravatar from 'vue-gravatar'
export default Vue.extend({
  name: 'AdministratorDashboard',
  data() {
    return {
      postList: [
        {
          id: '1',
          user: 'elangsbp',
          email: 'elangsbp@mock.net',
          title: 'How to Create a Website',
          status: 'Published',
          category: 'Web Development',
          posted: '31 August 2020',
        },
        {
          id: '2',
          user: 'emily',
          email: 'emily@mock.net',
          title: 'How to Create a Vue.js',
          status: 'Published',
          category: 'Web Development',
          posted: '31 August 2020',
        },
      ],
    }
  },
})
</script>
