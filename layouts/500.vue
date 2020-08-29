<template lang="pug">
    .container.mx-auto.px-4
        client-only
            Header
            section(class="py-12 px-4")
                div(class="flex flex-wrap items-center max-w-4xl mx-auto text-center lg:text-center")
                    div(class="items-center mx-auto")
                        h2(class="text-4xl mb-4 font-heading") Internal Server Error
                        p(class="mb-6 text-gray-500") Please refresh this page, if it still doesn't work please try again later.
                        nuxt-link(to="/" class="text-lg text-blue-700 hover:underline" ) Go to the homepage &raquo;
            Footer
</template>
