/* eslint-disable no-unused-vars */
<template lang="pug">
  .container.mx-auto.px-4

    UserHeader
    section(class="py-12 px-4")
      div(class="max-w-3xl mx-auto text-center")
        h2(class="text-3xl mb-1" ) PowerPoint is boring
        p(class="mb-8 text-gray-500" ) People learn in a lot of different ways, but experience is the best teacher.
        div(class="relative" style="padding-bottom: 56.25%")
          iframe(src="https://www.youtube.com/embed/gO8N3L_aERg" frameborder="0" class="absolute w-full h-full" allow="accelerometer autoplay encrypted-media gyroscope picture-in-picture" allowfullscreen)
    Footer
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {},
}
</script>
