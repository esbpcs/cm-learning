<template lang="pug">
    nav(class="flex flex-wrap items-center justify-between p-4")
                div(class="flex justify-center p-5 lg:order-2 w-auto lg:text-center")
                    a(class="text-xl text-indigo-500 font-semibold")
                        img(src="@/assets/images/esbpcs-logo.png", alt="CM Learning", width="85")
                div(class="block lg:hidden")
                    button(class="navbar-burger flex items-center py-2 px-3 text-indigo-500 rounded border border-indigo-500")
                div(class="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5")
                    nuxt-link(class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700", to="#") Home
                    nuxt-link(class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700", to="#") Planned
                div(class="navbar-menu hidden lg:order-3 lg:block w-full lg:w-2/5 lg:text-right")
                    nuxt-link(class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700", to="blog") Blog
                    nuxt-link(class="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-blue-700", to="faq") FAQ
                    nuxt-link(class="block lg:inline-block mt-4 lg:mt-0 text-blue-900 hover:text-blue-700", to="contact") Contact
</template>
