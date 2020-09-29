<template lang="pug">
#locale-switcher
	nuxt-link(
		v-for='locale in availableLocales',
		:key='locale.code',
		:to='switchLocalePath(locale.code)'
	) {{ locale.name }}
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
	computed: {
		availableLocales() {
			return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
		},
	},
})
</script>
