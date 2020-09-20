<template lang="pug">
    .container.mx-auto.px-4
        client-only
            Header
            section(class="py-12 px-4")
                div(class="flex flex-wrap items-center max-w-4xl mx-auto text-center lg:text-center")
                    div(class="items-center mx-auto")
                        h2(v-if="error.statusCode === 404" class="text-4xl mb-4 font-heading") Sorry, we can't find the pages you want go to.
                        h2(v-else) An error has been occured, Please try again later.
                        nuxt-link(to="/" class="text-lg text-blue-700 hover:underline" ) Go to the homepage &raquo;
            Footer
</template>
<script lang="ts">
export default {
	// eslint-disable-next-line vue/require-prop-types
	props: ['error'],
}
</script>
