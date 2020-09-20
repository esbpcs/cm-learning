<template lang="pug">
        .container.mx-auto.px-4

            Header
            section(class="w-full max-w-sm mx-auto py-10")
                form(name="Register" method="POST" @submit="Register")
                    div(class="mb-4")
                        label(for="firstName" class="text-gray-700 text-sm font-bold") First Name:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="firstName" type="text" v-model="register.firstName")
                    div(class="mb-4")
                        label(for="lastName" class="text-gray-700 text-sm font-bold") Last Name:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="lastName" type="text" v-model="register.lastName")
                    div(class="mb-4")
                        label(for="gender" class="text-gray-700 text-sm font-bold") Gender:
                            select(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="gender" v-model="register.gender")
                                option(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none")
                                option(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="male") Ikhwan
                                option(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="female") Akhwat
                    div(class="mb-4")
                        label(for="email" class="text-gray-700 text-sm font-bold") Email:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="email" type="text" v-model="register.email")
                    div(class="mb-4")
                        label(for="password" class="text-gray-700 text-sm font-bold") Password:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="password" type="password" v-model="register.password" autocomplete="off")
                    div(class="mb-4")
                        label(for="password" class="text-gray-700 text-sm font-bold") Confirm Password:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="newPassword" type="password" autocomplete="off")
                    div(class="mb-4")
                        label(for="phoneNumber" class="text-gray-700 text-sm font-bold") Phone Number:
                            input(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="phoneNumber" v-model="register.phoneNumber" type="text")
                    div(class="mb-4")
                        label(for="roles" class="text-gray-700 text-sm font-bold") Roles:
                            select(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="roles" v-model="register.roles")
                                option(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none")
                                option(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="student") Student
                                option(class="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" id="instructor") Instructor
                    .mb-4
                    div(class="mb-6")
                            button(class="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow" type="submit") Sign up
                    p(class="text-center")
                            nuxt-link(to="login" class="text-blue-700 hover:underline") or sign in &raquo;
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
