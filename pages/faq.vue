<template lang="pug">
.container.mx-auto.px-4
	UserHeader
	section.py-12.px-4
		.max-w-3xl.mx-auto
			h2.text-4xl.text-center.mb-4.font-heading Frequently Asked Questions

			.p-4.mb-2.border-b
				button.flex.w-full.text-left
					span.flex-grow.font-semibold How does Dunder Mifflin paper differ from other products?
					img.w-12(src='@/assets/placeholders/icons/angle-bottom.svg', alt='')
				p.mt-1 Paper produced with love, devotion, passion - is not the same paper. Our supplies are extra strong, and you’re going to need the paper-tear up-master to destroy just one sheet. It’s also suited for every available printer.

			.p-4.mb-2.border-b
				button.flex.w-full.text-left
					span.flex-grow.font-semibold Why choose Dunder Mifflin instead of some huge paper producer?
					img.w-12(src='@/assets/placeholders/icons/angle-bottom.svg', alt='')
				p.hidden.mt-1 it is what it is

			.p-4.mb-2.border-b
				button.flex.w-full.text-left
					span.flex-grow.font-semibold When I will receive the products?
					img.w-12(src='@/assets/placeholders/icons/angle-bottom.svg', alt='')
				p.hidden.mt-1 If you buy one of our business plans, you will receive the supplies every first Monday of the month. However, you can also purchase paper separately. Our employees will make sure that you will receive the products in the next business days.

			.p-4.mb-2.border-b
				button.flex.w-full.text-left
					span.flex-grow.font-semibold How long does it take to finalize the deal?
					img.w-12(src='@/assets/placeholders/icons/angle-bottom.svg', alt='')
				p.hidden.mt-1 The whole process depends on your decision. If you sign the contract immediately, we can start official cooperation in the next two business days.
	Footer
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'FAQ',
})
</script>
