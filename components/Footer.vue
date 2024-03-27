<template>
    <section class="bg-gray-900 text-white text-center p-10">
        <p class="py-2 text-sm">{{ $t("Footer.p1") }}</p>
        <p class="py-2 font-extrabold text-xl text-blue-munsell">Javier Fray (MonkeyDDeveloper)</p>
        <p class="py-2 text-sm">{{ $t("Footer.p2") }}</p>
        <NuxtLink class="py-2 font-extrabold text-xl text-blue-munsell" to="https://wa.me/593988433654">
            +593 988433654
        </NuxtLink>
        <p class="py-2 text-sm">{{ $t("Footer.p3") }}</p>
        <NuxtLink class="py-2 text-xl font-extrabold text-blue-munsell" to="mailto:fraydeveloper@gmail.com" target="_parent">
            fraydeveloper@gmail.com
        </NuxtLink>
    </section>
</template>