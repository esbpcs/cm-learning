<template lang="pug">
    .container.mx-auto.px-4
        client-only
            Header
            section(class="py-12 px-4")
                div(class="flex flex-wrap items-center max-w-4xl mx-auto text-center lg:text-center")
                    div(class="items-center mx-auto")
                        h2(class="text-4xl mb-4 font-heading") Unauthorized
                        p(class="mb-6 text-gray-500") You don't have authorization to accessing this page !
                        nuxt-link(to="/" class="text-lg text-blue-700 hover:underline" ) Go to the homepage &raquo;
            Footer
</template>
