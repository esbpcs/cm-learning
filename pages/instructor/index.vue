<template lang="pug">
.container.mx-auto.px-4
	InstructorHeader
	section.py-8.px-4
		h2.text-3xl.mb-2.font-heading.font-semibold List of the Courses
		.flex.flex-wrap.-mx-4.mb-8
			.w-full.px-4.mb-6(class='lg:w-1/4 lg:mb-0')
				.h-full
					.text-center.p-4.mb-2.bg-blue-500.text-white.rounded
						h3.text-3xl.leading-tight.font-heading.font-semibold 1
						span.leading-none Total Courses
			.w-full.px-4.mb-6(class='lg:w-1/4 lg:mb-0')
				.h-full
					.text-center.p-4.mb-2.bg-red-500.text-white.rounded
						h3.text-3xl.leading-tight.font-heading.font-semibold 1
						span.leading-none Created
			.w-full.px-4.mb-6(class='lg:w-1/4 lg:mb-0')
				.h-full
					.text-center.p-4.mb-2.bg-green-500.text-white.rounded
						h3.text-3xl.leading-tight.font-heading.font-semibold 1
						span.leading-none Watched
			.w-full.px-4.mb-6(class='lg:w-1/4 lg:mb-0')
				.h-full
					.text-center.p-4.mb-2.bg-gray-800.text-white.rounded
						h3.text-3xl.leading-tight.font-heading.font-semibold 0
						span.leading-none Pending
		table.w-full.table-auto
			thead
				tr
					th.border-t.px-2.py-2(scope='col') ID #
					th.border-t.px-2.py-2(scope='col') Created By
					th.border-t.px-2.py-2(scope='col') User Email
					th.border-t.px-2.py-2(scope='col') Title
					th.text-center.border-t.px-2.py-2(scope='col') Status
					th.text-center.border-t.px-2.py-2(scope='col') Category
					th.text-center.border-t.px-2.py-2(scope='col') Date
					th.text-center.border-t.px-2.py-2(scope='col') Action
			tbody
				tr.text-center(v-for='course in courseList', :key='course.id')
					td.border-t.px-2.py-2 {{ course.id }}
					td.border-t.px-2.py-2 {{ course.user }}
					td.border-t.px-2.py-2 {{ course.email }}
					td.border-t.px-2.py-2 {{ course.title }}
					td.text-center.border-t.px-2.py-2
						span.inline-block.text-sm.py-1.px-3.rounded-full.text-white.bg-blue-500 {{ course.status }}
					td.text-center.border-t.px-2.py-2 {{ course.category }}
					td.text-center.border-t.px-2.py-2 {{ course.posted }}
					td.text-center.border-t.px-2.py-2
						a.text-blue-700.mx-1(class='hover:underline', href='editPost') Edit
						a.text-blue-700(class='hover:underline', href='deletePost') Delete
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
