<template lang="pug">
    .container.mx-auto.px-4

        UserHeader
        section(class="py-12 px-4")
            h2(class="text-3xl text-center mb-8 font-heading" ) Latest posts

            div(class="flex flex-wrap mx-4")
             div(v-for="blog in blogs" :key="blog.key" class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0")
                div(class="h-full pb-8 rounded shadow-md")
                    a(href="#")
                    img(v-bind:src="blog.postThumbnail" class="mb-4 ml-1" alt="Blog Post Thumbnail" )
                    div(class="px-6")
                        small {{ blog.posted }} | By {{ blog.user }}
                        h3(class="text-xl my-3 font-heading" ) {{ blog.postName }}
                        p(class="text-gray-500" ) {{ blog.description }}
        Footer

</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'BlogPage',
	data() {
		return {
			blogs: [
				{
					id: '1',
					postName: 'Chips',
					posted: '31 August 2020',
					user: 'User 1',
					description: 'Ahoy',
					postThumbnail: 'images/img1.png',
				},
				{
					id: '2',
					postName: 'Dare ni makenai kara',
					posted: '31 August 2020',
					user: 'User 2',
					description: 'Yo',
					postThumbnail: 'images/office_square.jpg',
				},
				{
					id: '3',
					postName: 'Generic Post #3',
					posted: '31 August 2020',
					user: 'User 3',
					description: 'Oh Irony',
					postThumbnail: 'images/work.jpg',
				},
			],
		}
	},
})
</script>
