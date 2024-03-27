<script lang="ts" setup>

    const { setLocale, locale } = useI18n();

    const languages = ["en", "es"];
    const currentLanguage = ref(locale);

    const savedLang = useCookie("lang");

    watch(currentLanguage, (newLanguage) => {
        if (savedLang.value != newLanguage) savedLang.value = newLanguage;
    });

    const changeLanguage = async (newLocale: string) => {
        await setLocale(newLocale);
    };

</script>
<template>
    <section class="p-5 md:p-10 flex justify-between">
        <NuxtLinkLocale to="/">
            <h2 class="capitalize font-extrabold text-2xl text-mint md:text-3xl">{{ $t("Navigation.title") }}</h2>
        </NuxtLinkLocale>
        <section class="w-auto">
            <USelectMenu
              color="white"
              variant="outline"
              @change="changeLanguage"
              v-model="currentLanguage"
              :options="languages"
            />
        </section>
    </section>
</template>