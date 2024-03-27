<script lang="ts" setup>

    import type { Product } from "~/schemas"
    import getProducts from "~/assets/functions/getProducts"

    const { t } = useI18n()
    const toast = useToast()
    const gettingProducts = ref(true)
    const creatingProduct = ref(false)
    const runtimeConfig = useRuntimeConfig();
    const apiUri = runtimeConfig.public.AWS_API_GATEWAY_URL
    const productGrid = ref(null)
    const products = useProducts()

    onMounted(async () => {
        try {
            if(gettingProducts) {

                products.value = await getProducts(apiUri + "getProducts", t("Notifications.fetch.getError"))

                gettingProducts.value = false

            }
        }
        catch(err) {
            console.log({err})
            toast.add({
                id: "getProductError",
                title: t("Notifications.getProductError"),
                description: t("Notifications.getProductErrorDescription")
            })
        }
    })

    function startCreatingProduct() {

        creatingProduct.value = true

    }

    function focusGrid() {
        (productGrid.value as unknown as HTMLElement).focus()
    }

</script>
<template>
    <section class="p-2 mb-4 flex justify-between">
        <section class="w-auto">
            <span class="text-white" v-if="gettingProducts">
                <UIcon class="animate-spin" name="i-heroicons-arrow-path-20-solid" /> {{ $t("Notifications.loadingProducts") }}
            </span>
        </section>
        <section class="w-auto">
            <UButton @click="startCreatingProduct">
                {{  $t("ProductGrid.addProductButton") }}
            </UButton>
        </section>
    </section>
    <section ref="productGrid" tabindex="0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <section v-for="number in [1,2,3,4]" class="p-1 w-full h-40" v-if="gettingProducts">
            <USkeleton :ui="{background: 'bg-mint dark:bg-mint'}" class="w-full h-full"/>
        </section>
        <section v-else class="p-1 w-[100%]" v-for="product in products">
            <ProductCard @product-deleted="focusGrid" :product="product" />
        </section>
    </section>
    <AddProductModal @close-creating-modal="creatingProduct = false" :creating-product="creatingProduct" />
</template>~/assets/functions/getProducts/getProducts