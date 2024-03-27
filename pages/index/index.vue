<script lang="ts" setup>

    const keyProductGrid = useProductGridKey()

</script>
<template>
    <section class="p-5 md:p-10">
        <section class="mb-2 text-sm md:text-xl">
            {{  $t("Home.description1") }}
        </section>
        <section class="mb-2 text-sm md:text-xl">
            {{  $t("Home.description2") }}
        </section>
        <section class="mb-2 text-sm md:text-xl">
            {{  $t("Home.description3") }}
        </section>
        <section class="mt-6 flex justify-end">
            <UButton to="#manage-products">{{ $t("Home.mainButton") }}</UButton>
        </section>
    </section>
    <section class="p-5 md:p-10">
        <section class="border border-bottom-white">
        </section>
    </section>
    <section class="p-4 md:p-10">
        <h1 id="manage-products" class="text-3xl font-bold">{{ $t("Home.products") }}</h1>
        <section class="p-2 md:p-3">
            <ProductGrid :key="keyProductGrid" />
        </section>
    </section>
</template>