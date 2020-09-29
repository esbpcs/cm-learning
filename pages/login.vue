<template lang="pug">
.container.mx-auto.px-4
	Header
	section.w-full.max-w-sm.mx-auto.py-10
		form(name='Login', method='POST', @submit='Login')
			.mb-4
				label.text-gray-700.text-sm.font-bold(for='email') Email:
					input#email.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
						class='focus:bg-white focus:border-gray-500 focus:outline-none',
						type='text',
						v-model='login.email'
					)
			.mb-4
				label.text-gray-700.text-sm.font-bold(for='password') Password:
					input#password.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
						class='focus:bg-white focus:border-gray-500 focus:outline-none',
						type='password',
						v-model='login.password',
						autocomplete='on'
					)
			.mb-6
				button.inline-block.w-full.py-4.px-8.leading-none.text-white.bg-indigo-500.rounded.shadow(
					class='hover:bg-indigo-600',
					type='submit'
				)
			.mb-6
				firebaseUI-signin
			p.text-center
				nuxt-link.text-blue-700(to='register', class='hover:underline') {{ $t("signForm.register") }} &raquo;
	Footer
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'LoginPage',
	data() {
		return {
			login: [
				{
					email: '',
					password: '',
				},
			],
		}
	},
	methods: {
		async Login() {},
	},
})
</script>
