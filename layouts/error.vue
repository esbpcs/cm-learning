<template lang="pug">
.container.mx-auto.px-4
	client-only
		Header
		section.py-12.px-4
			.flex.flex-wrap.items-center.max-w-4xl.mx-auto.text-center(class='lg:text-center')
				.items-center.mx-auto
					h2.text-4xl.mb-4.font-heading(v-if='error.statusCode === 404') Sorry, we can't find the pages you want go to.
					h2(v-else) An error has been occured, Please try again later.
					nuxt-link.text-lg.text-blue-700(to='/', class='hover:underline') Go to the homepage &raquo;
		Footer
</template>
<script lang="ts">
export default {
	// eslint-disable-next-line vue/require-prop-types
	props: ['error'],
}
</script>
