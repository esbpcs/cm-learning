<template lang="pug">
.container.mx-auto.px-4
	Header
	form.w-full.max-w-sm.mx-auto.py-10(action='#', method='post')
		.mb-4
			label.block.text-gray-700.text-sm.font-bold.mb-2(for='') Course Title
			input.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
				type='text',
				name='field-name',
				class='focus:bg-white focus:border-gray-500 focus:outline-none'
			)

		.mb-4
			label.block.text-gray-700.text-sm.font-bold.mb-2(for='') Course Description
			textarea.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
				name='field-name',
				class='focus:bg-white focus:border-gray-500 focus:outline-none',
				rows='3'
			)

		.mb-4
			label.block.text-gray-700.text-sm.font-bold.mb-2(for='') Course Video
			input.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
				type='text',
				name='field-name',
				class='focus:bg-white focus:border-gray-500 focus:outline-none'
			)

		.mb-4
			label.block.text-gray-700.text-sm.font-bold.mb-2(for='') Category
			.relative
				select.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
					name='field-name',
					class='focus:bg-white focus:border-gray-500 focus:outline-none'
				)
					option
					option Tawheed
					option Fiqh
					option Madzhab
					option Hajj
				.pointer-events-none.absolute.inset-y-0.right-0.flex.items-center.px-2.text-gray-700
					<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
					</svg>
		.mb-6
			button.inline-block.w-full.py-4.px-8.leading-none.text-white.bg-indigo-500.rounded.shadow(
				type='submit',
				class='hover:bg-indigo-600'
			) Submit
	Footer
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'CreateCoursePage',
})
</script>
