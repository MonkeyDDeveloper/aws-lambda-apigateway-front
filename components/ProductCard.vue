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
    const productGridKey = useProductGridKey()
    const emit = defineEmits(['productDeleted'])

    const { product } = defineProps<{
        product: Product
    }>()

    const isEditingProduct = ref(false)
    const editingProduct = ref({
        _id: product._id,
        price: product.price,
        name: product.name,
        tags: product.tags
    })

    function startEditingProduct(productProperties:Product) {

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

            // products.value = await getProducts(apiUri + "getProducts", t("Notifications.fetch.getError"))

            emit("productDeleted")

            productGridKey.value = Math.random() * 1000

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
    <UCard class="bg-gray-900">
        <template #header>
            <section class="font-bold text-xl text-carolina-blue text-center sm:text-start">
                {{ product.name }}
            </section>
        </template>

        <section>
            <p class="text-white">{{ $t("ProductCard.price") }}: <span class="text-blue-munsell">${{ product.price }}</span></p>
        </section>

        <section>
            <p class="text-white">{{  $t("ProductCard.tags") }}: <span class="text-blue-munsell">{{ product.tags.join(" - ") }}</span></p>
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
    <EditProductModal @close-editing-modal="isEditingProduct = false" :editingProduct="isEditingProduct" :product="editingProduct" />
</template>