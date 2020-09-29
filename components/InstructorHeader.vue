<template lang="pug">
nav.flex.flex-wrap.items-center.justify-between.p-4
	.flex.justify-center.p-5.w-auto(class='lg:order-2 lg:text-center')
		a.text-xl.text-indigo-500.font-semibold
			img(src='@/assets/images/esbpcs-logo.png', alt='CM Learning', width='85')
	.block(class='lg:hidden')
		button.navbar-burger.flex.items-center.py-2.px-3.text-indigo-500.rounded.border.border-indigo-500
	.navbar-menu.hidden.w-full(class='lg:order-1 lg:block lg:w-2/5')
		nuxt-link.block.mt-4.mr-10.text-blue-900(
			class='lg:inline-block lg:mt-0 hover:text-blue-700',
			to='#'
		) Home
		nuxt-link.block.mt-4.mr-10.text-blue-900(
			class='lg:inline-block lg:mt-0 hover:text-blue-700',
			to='#'
		) Courses List
	.navbar-menu.hidden.w-full(class='lg:order-3 lg:block lg:w-2/5 lg:text-right')
		nuxt-link.block.mt-4.mr-10.text-blue-900(
			class='lg:inline-block lg:mt-0 hover:text-blue-700',
			to='blog'
		) Blog
		nuxt-link.block.mt-4.mr-10.text-blue-900(
			class='lg:inline-block lg:mt-0 hover:text-blue-700',
			to='faq'
		) FAQ
		nuxt-link.block.mt-4.text-blue-900(
			class='lg:inline-block lg:mt-0 hover:text-blue-700',
			to='contact'
		) Contact
</template>
