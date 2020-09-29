<template lang="pug">
.container.mx-auto.px-4
	UserHeader
	section.py-12.px-4
		h2.text-3xl.text-center.mb-8.font-heading Support and Inquiry
		.flex.flex-wrap.items-center.mx-6
			.w-full.px-6.mb-8(class='lg:w-1/2 lg:px-24 lg:mb-0')
				img(src='@/assets/placeholders/pictures/new_ideas.svg', alt='')
			.w-full.px-6(class='lg:w-1/2')
				h3.text-2xl.mb-2.font-heading CM Media HQ
				ul
					li.mb-2
						img.inline-block.w-8.h-8.pr-2(
							src='@/assets/placeholders/icons/home.svg',
							alt=''
						)
						span Ruko XXX
					li.mb-2
						img.inline-block.w-8.h-8.pr-2(
							src='@/assets/placeholders/icons/mobile.svg',
							alt=''
						)
						span +6289528418383
					li.mb-2
						img.inline-block.w-8.h-8.pr-2(
							src='@/assets/placeholders/icons/message.svg',
							alt=''
						)
						span inquiry@esbpcs.me
	Footer
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'ContactPage',
})
</script>
