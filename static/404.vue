<template lang="pug">
    head
        title Page Not Found
        meta(charset="utf-8")
        meta(name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no")
        meta(name="description" content="HTTP 404")
        meta(name="author" content="CM Media Team")
        link(rel="icon" href="favicon.ico")
        link(rel="icon" type="image/png" sizes="16x16" href="favicon.png")
        body.bg-body.text-body.font-body
        .container.mx-auto.px-4

            <Header></Header>

            section(class="py-12 px-4")
                div(class="flex flex-wrap items-center max-w-4xl mx-auto text-center lg:text-center")
                    div(class="items-center mx-auto")
                        h2(class="text-4xl mb-4 font-heading") Page Not Found
                        p(class="mb-6 text-gray-500") Sorry we can't find the pages you want go to.
                        a(href="/" class="text-lg text-blue-700 hover:underline" ) Go to the homepage &raquo;

            <Footer></Footer>
</template>
