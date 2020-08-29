<template lang="pug">
        .container.mx-auto.px-4

          UserHeader
          section(class="py-12 px-4")
            h2(class="text-3xl text-center mb-8 font-heading") Latest Courses
            
            div(class="flex flex-wrap mx-4")
              div(class="w-full lg:w-1/3 px-4 mb-8 lg:mb-0")
                div(class="h-full pb-8 rounded shadow-md")
                    img(src="@/assets/images/Snow_Dots_Blue_Desktop_Wallpaper.png" class="mb-4" alt="Course Thumbnail")
                    div(class="px-6")
                      small 22 August 2020 | By Elang
                      h3(class="text-xl my-3 font-heading") Course name
                      p(class="text-gray-500") Course Desc
            Footer

</template>
<script>
export default {
  data() {
    return {
      courses: [
        {
          id: '1',
          name: 'Intro to Theology',
          posted: '20 August 2020',
          user: 'Ambrosious',
          description: 'Theology 101 by Ambrosious, Phd ',
          imagePost: '@/assets/images/Snow_Dots_Blue_Desktop_Wallpaper.png',
        },
        {
          id: '2',
          name: 'Intro to Islamic Theology',
          posted: '19 August 2020',
          user: 'Emberman',
          description: '101 by Anonymous Author Mr.Emberman,M.Div,Phd',
          imagePost: '',
        },
        {
          id: '3',
          name: 'Fiqh',
          posted: '23 August 2020',
          user: 'Dosier',
          description: 'Seriously my friend this is an irony',
          imagePost: '',
        },
      ],
    }
  },
  computed: {},
}
</script>
