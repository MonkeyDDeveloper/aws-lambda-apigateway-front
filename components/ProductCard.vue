<script lang="ts" setup>

    import type { Product } from "../schemas"
    import getProducts from "~/assets/functions/getProducts";

    const toast = useToast()
    const { t } = useI18n()
    const runtimeConfig = useRuntimeConfig()
    const apiUri = runtimeConfig.public.AWS_API_GATEWAY_URL
    const deletingProduct = ref(false)
    const openPopover = ref(false)
    const products = useProducts()
    const emit = defineEmits(['productDeleted'])

    const { product } = defineProps<{
        product: Product
    }>()

    const isEditingProduct = ref(false)
    let editingProduct: Product = {
        _id: "",
        price: 0,
        name: "",
        tags: []
    }

    function startEditingProduct(productProperties:Product) {

        editingProduct = productProperties
        
        isEditingProduct.value = true

    }

    async function deleteAProduct() {
        try {
            
            deletingProduct.value = true

            const response = await fetch(apiUri + "deleteAProduct" + "?productId=" + product._id, {
                method: 'delete',
            })

            console.log({response})

            if(!response.ok) throw new Error(t("Notifications.fetch.deleteError"))

            products.value = await getProducts(apiUri + "getProducts", t("Notifications.fetch.getError"))

            emit("productDeleted")

            deletingProduct.value = false

            openPopover.value = false

            toast.add({
                title: t("Notifications.deleteProductSuccess")
            })

        }
        catch(err) {

            console.log({err})

            deletingProduct.value = false

            openPopover.value = false

            toast.add({
                title: t("Notifications.deleteProductError"),
                description: t("Notifications.deleteProductErrorDescription")
            })
        }
    }

</script>
<template>
    <UCard>
        <template #header>
            <section class="font-bold text-xl text-carolina-blue text-center sm:text-start">
                {{ product.name }}
            </section>
        </template>

        <section>
            <p>{{ $t("ProductCard.price") }}: <span class="text-blue-munsell">${{ product.price }}</span></p>
        </section>

        <section>
            <p>{{  $t("ProductCard.tags") }}: <span class="text-blue-munsell">{{ product.tags.join(" - ") }}</span></p>
        </section>

        <template #footer>
            <section class="flex justify-end">
                <section class="mx-2">
                    <UButton @click="() => startEditingProduct(product)" color="cyan">{{ $t("ProductCard.edit") }}</UButton>
                </section>
                <section class="mx-2">
                    <UPopover overlay>
                        <UButton :loading="deletingProduct" @click="openPopover = true" color="red">
                            <span v-if="deletingProduct">
                                {{ $t("ProductCard.deleting") }}
                            </span>
                            <span v-else>
                                {{ $t("ProductCard.delete") }}
                            </span>
                        </UButton>
                        <template #panel>
                            <div class="p-4">
                                <UButton :loading="deletingProduct" @click="deleteAProduct" color="red">{{ $t("ProductCard.confirmDelete") }}: {{ product.name }}</UButton>
                            </div>
                        </template>
                    </UPopover>
                </section>
            </section>
        </template>
    </UCard>
    <EditProductModal @close-editing-modal="isEditingProduct = false" :editingProduct="isEditingProduct" :product="product" />
</template>