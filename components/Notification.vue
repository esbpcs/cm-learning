<template lang="pug">
.text-center.py-3(class='lg:px-4')
	.p-2.bg-indigo-500.items-center.text-indigo-100.leading-none.flex(
		class='lg:rounded-full lg:inline-flex',
		role='alert'
	)
		span.flex.rounded-full.bg-indigo-700.uppercase.px-2.py-1.text-xs.font-bold.mr-3 Info
		span.font-semibold.mr-2.text-left.flex-auto {{ $t("indexPage.notification") }}
		svg.fill-current.opacity-75.h-4.w-4(
			xmlns='http://www.w3.org/2000/svg',
			viewBox='0 0 20 20',
			path,
			d='M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z'
		)
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
