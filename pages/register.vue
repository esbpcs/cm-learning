<template lang="pug">
.container.mx-auto.px-4
	Header
	section.w-full.max-w-sm.mx-auto.py-10
		form(name='Register', method='POST', @submit='Register')
			.mb-4
				label.text-gray-700.text-sm.font-bold(for='firstName') {{ $t("signForm.firstName") }}
					input#firstName.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
						class='focus:bg-white focus:border-gray-500 focus:outline-none',
						type='text',
						v-model='register.firstName'
					)
			.mb-4
				label.text-gray-700.text-sm.font-bold(for='lastName') {{ $t("signForm.lastName") }}
					input#lastName.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
						class='focus:bg-white focus:border-gray-500 focus:outline-none',
						type='text',
						v-model='register.lastName'
					)
			.mb-4
				label.text-gray-700.text-sm.font-bold(for='gender') {{ $t("gender.name") }}
					select#gender.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
						class='focus:bg-white focus:border-gray-500 focus:outline-none',
						v-model='register.gender'
					)
						option.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
							class='focus:bg-white focus:border-gray-500 focus:outline-none'
						)
						option#male.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
							class='focus:bg-white focus:border-gray-500 focus:outline-none',
							value='male'
						) {{ $t("gender.male") }}
						option#female.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
							class='focus:bg-white focus:border-gray-500 focus:outline-none',
							value='female'
						) {{ $t("gender.female") }}
			.mb-4
				label.text-gray-700.text-sm.font-bold(for='email') Email:
					input#email.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
						class='focus:bg-white focus:border-gray-500 focus:outline-none',
						type='text',
						v-model='register.email'
					)
			.mb-4
				label.text-gray-700.text-sm.font-bold(for='password') Password:
					input#password.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
						class='focus:bg-white focus:border-gray-500 focus:outline-none',
						type='password',
						v-model='register.password',
						autocomplete='off'
					)
			.mb-4
				label.text-gray-700.text-sm.font-bold(for='password') {{ $t("signForm.confirmPass") }}
					input#newPassword.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
						class='focus:bg-white focus:border-gray-500 focus:outline-none',
						type='password',
						autocomplete='off'
					)
			.mb-4
				label.text-gray-700.text-sm.font-bold(for='phoneNumber') {{ $t("signForm.phone") }}
					input#phoneNumber.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
						class='focus:bg-white focus:border-gray-500 focus:outline-none',
						v-model='register.phoneNumber',
						type='text'
					)
			.mb-4
				label.text-gray-700.text-sm.font-bold(for='roles') {{ $t("roles.name") }}
					select#roles.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
						class='focus:bg-white focus:border-gray-500 focus:outline-none',
						v-model='register.roles'
					)
						option.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
							class='focus:bg-white focus:border-gray-500 focus:outline-none'
						)
						option#student.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
							class='focus:bg-white focus:border-gray-500 focus:outline-none',
							value='student'
						) {{ $t("roles.student") }}
						option#instructor.appearance-none.block.w-full.py-3.px-4.leading-tight.text-gray-700.bg-gray-200.border.border-gray-200.rounded(
							class='focus:bg-white focus:border-gray-500 focus:outline-none',
							value='instructor'
						) {{ $t("roles.instructor") }}
			.mb-4
			.mb-6
				button.inline-block.w-full.py-4.px-8.leading-none.text-white.bg-indigo-500.rounded.shadow(
					class='hover:bg-indigo-600',
					type='submit'
				) {{ $t("signForm.register") }}
			p.text-center
				nuxt-link.text-blue-700(to='login', class='hover:underline') {{ $t("signForm.login") }} &raquo;
	Footer
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'RegisterPage',
	data() {
		return {
			register: [
				{
					firstName: '',
					lastName: '',
					gender: '',
					email: '',
					password: '',
					phoneNumber: '',
					roles: '',
				},
			],
		}
	},
	methods: {
		async Register() {},
	},
})
</script>
