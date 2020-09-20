<template lang="pug">
    .container.mx-auto.px-4

        UserHeader
        section(class="py-12 px-4")
                div(class="max-w-3xl mx-auto")
                    h2(class="text-4xl text-center mb-4 font-heading" ) Frequently Asked Questions

                    div(class="p-4 mb-2 border-b")
                        button(class="flex w-full text-left")
                            span(class="flex-grow font-semibold" ) How does Dunder Mifflin paper differ from other products?
                            img(src="@/assets/placeholders/icons/angle-bottom.svg" alt="" class="w-12" )
                        p(class="mt-1" ) Paper produced with love, devotion, passion - is not the same paper. Our supplies are extra strong, and you’re going to need the paper-tear up-master to destroy just one sheet. It’s also suited for every available printer.

                    div(class="p-4 mb-2 border-b")
                        button(class="flex w-full text-left")
                            span(class="flex-grow font-semibold" ) Why choose Dunder Mifflin instead of some huge paper producer?
                            img(src="@/assets/placeholders/icons/angle-bottom.svg" alt="" class="w-12" )
                        p(class="hidden mt-1") it is what it is

                    div(class="p-4 mb-2 border-b")
                        button(class="flex w-full text-left")
                            span(class="flex-grow font-semibold" ) When I will receive the products?
                            img(src="@/assets/placeholders/icons/angle-bottom.svg" alt="" class="w-12" )
                        p(class="hidden mt-1" ) If you buy one of our business plans, you will receive the supplies every first Monday of the month. However, you can also purchase paper separately. Our employees will make sure that you will receive the products in the next business days.

                    div(class="p-4 mb-2 border-b")
                        button(class="flex w-full text-left")
                            span(class="flex-grow font-semibold" ) How long does it take to finalize the deal?
                            img(src="@/assets/placeholders/icons/angle-bottom.svg" alt="" class="w-12" )
                        p(class="hidden mt-1" ) The whole process depends on your decision. If you sign the contract immediately, we can start official cooperation in the next two business days.
        Footer

</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'FAQ',
})
</script>
