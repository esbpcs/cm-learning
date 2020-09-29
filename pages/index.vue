<template lang="pug">
.container.mx-auto.px-4
	Header
	section.py-12.px-4
		Notification

		.flex.flex-wrap.items-center.text-center.-mx-2(class='lg:text-left')
			.px-2.mt-10.order-1(class='lg:w-1/2 lg:pr-10 lg:mt-0 lg:order-none')
				h2.text-5xl.mb-6.leading-tight.font-heading CM Online Learning Platform
				p.mb-8.text-gray-700.leading-relaxed
					| {{ $t("indexPage.intro") }}
				div
					nuxt-link.inline-block.py-4.px-8.mr-6.leading-none.text-white.bg-indigo-500.rounded.shadow(
						class='hover:bg-indigo-600',
						to='register'
					) {{ $t("signForm.register") }}
			.px-2(class='lg:w-1/2')
				img(
					src='@/assets/placeholders/pictures/certificate.svg',
					alt='Certificate Stock Image'
				)
	Footer
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'IndexPage',
})
</script>
