<template lang="pug">
footer.p-5
	.flex.flex-col.items-center(class='lg:flex-row')
		.w-full.text-center(class='lg:w-auto lg:mr-auto lg:text-left') &copy; CM Media Team &amp; Icons by Icons8 LLC.
		.flex.justify-center.items-center.mt-4(class='lg:mt-0')
			img.w-5.h-5(src='@/assets/images/icons8-important-mail-24.png', alt='Email')
			img.w-5.h-5.mx-5(src='@/assets/images/icons8-website-24.png', alt='Website')
			img.w-5.h-5(
				src='@/assets/images/icons8-telegram-app-24.png',
				alt='Telegram'
			)
			img.w-5.h-5.mx-5(
				src='@/assets/images/icons8-instagram-24.png',
				alt='Instagram'
			)
		LocaleSwitcher
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
