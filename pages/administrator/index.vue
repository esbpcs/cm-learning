<template lang="pug">
.container.mx-auto.px-4
	AdminHeader
	section.py-8.px-4
		h2.text-3xl.mb-2.font-heading.font-semibold List of the Blog Post
		table.w-full.table-auto
			thead
				tr
					th.border-t.px-2.py-2(scope='col') ID #
					th.border-t.px-2.py-2(scope='col') Created By
					th.border-t.px-2.py-2(scope='col') User Email
					th.border-t.px-2.py-2(scope='col') Post Title
					th.text-center.border-t.px-2.py-2(scope='col') Status
					th.text-center.border-t.px-2.py-2(scope='col') Category
					th.text-center.border-t.px-2.py-2(scope='col') Date
					th.text-center.border-t.px-2.py-2(scope='col') Action
			tbody
				tr.text-center(v-for='post in postList', :key='post.id')
					td.border-t.px-2.py-2 {{ post.id }}
					td.border-t.px-2.py-2 {{ post.user }}
					td.border-t.px-2.py-2 {{ post.email }}
					td.border-t.px-2.py-2 {{ post.title }}
					td.text-center.border-t.px-2.py-2
						span.inline-block.text-sm.py-1.px-3.rounded-full.text-white.bg-blue-500 {{ post.status }}
					td.text-center.border-t.px-2.py-2 {{ post.category }}
					td.text-center.border-t.px-2.py-2 {{ post.posted }}
					td.text-center.border-t.px-2.py-2
						nuxt-link.text-blue-700.mx-1(class='hover:underline', to='editPost') Edit
						nuxt-link.text-blue-700(class='hover:underline', to='deletePost') Delete
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
