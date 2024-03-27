<script lang="ts" setup>

    import type { Product } from '~/schemas';
    import type { FormSubmitEvent } from "#ui/types"
    import { z } from 'zod'
    import getProducts from '~/assets/functions/getProducts';

    const emit = defineEmits(['closeEditingModal'])
    const products = useProducts()
    const { t } = useI18n()
    const toast = useToast()
    const updatingProduct = ref(false)
    const runtimeConfig = useRuntimeConfig();
    const apiUri = runtimeConfig.public.AWS_API_GATEWAY_URL
    const productGridKey = useProductGridKey()

    const schema = z.object({
        name: z.string().min(1, t("EditForm.name")),
        price: z.number().min(1, t("EditForm.price")),
        tags: z.string().regex(/^\s*([a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?:\s*,\s*[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*)\s*$/, t("EditForm.tagsFormatError"))
    })

    type Schema = z.output<typeof schema>

    const props = defineProps<{
        product: Product,
        editingProduct: boolean
    }>()

    const state = reactive({
        name: props.product.name,
        price: props.product.price,
        tags: props.product.tags.join(",")
    })

    async function onSubmit(event: FormSubmitEvent<Schema>) {
        try {

            updatingProduct.value = true

            const response = await fetch(apiUri + "updateAProduct", {
                method: 'put',
                body: JSON.stringify({
                    _id: props.product._id,
                    ...event.data,
                    tags: event.data.tags.split(",")
                })
            })

            if(!response.ok) throw new Error(t("Notifications.fetch.updateError"))

            // products.value = await getProducts(apiUri + "getProducts", t("Notifications.fetch.getError"))

            updatingProduct.value = false

            emit('closeEditingModal')

            productGridKey.value = Math.random() * 1000

            toast.add({
                id: "update_product_success",
                title: t("Notifications.updateProductSuccess"),
            })

        }
        catch(err) {

            console.log({err})

            updatingProduct.value = false

            toast.add({
                id: "update_product_error",
                title: t("Notifications.updateProductError"),
                description: t("Notifications.updateProductErrorDescription")
            })
        }
    }

</script>
<template>
    <UModal v-model="props.editingProduct" prevent-close>
        <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                  {{ $t("ProductCard.isEditingProduct") }}: <span class="text-blue-munsell">{{ props.product.name }}</span>
                </h3>
                <UButton :disabled="updatingProduct" color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="$emit('closeEditingModal')" />
              </div>
            </template>
            <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup name="name" :label="$t('EditForm.inputs.name')" required>
                    <UInput :autofocus="true" v-model="state.name" />
                </UFormGroup>

                <UFormGroup name="price" :label="$t('EditForm.inputs.price')" required>
                    <UInput v-model="state.price" type="number" />
                </UFormGroup>

                <UFormGroup name="tags" :label="$t('EditForm.inputs.tags')" required>
                    <UInput v-model="state.tags" />
                </UFormGroup>

                <section class="flex justify-end">
                    <UButton type="submit" :loading="updatingProduct">
                        {{  $t("EditForm.submitButton") }}
                    </UButton>
                </section>
            </UForm>
        </UCard>
    </UModal>
</template>