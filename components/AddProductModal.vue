<script lang="ts" setup>

    import type { Product } from '~/schemas';
    import type { FormSubmitEvent } from "#ui/types"
    import { z } from 'zod'
    import getProducts from '~/assets/functions/getProducts';

    const emit = defineEmits(['closeCreatingModal'])
    const products = useProducts()
    const { t } = useI18n()
    const toast = useToast()
    const creatingProduct = ref(false)
    const runtimeConfig = useRuntimeConfig();
    const apiUri = runtimeConfig.public.AWS_API_GATEWAY_URL

    const schema = z.object({
        name: z.string().min(1, t("EditForm.name")),
        price: z.number().min(1, t("EditForm.price")),
        tags: z.string().regex(/^\s*([a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?:\s*,\s*[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*)\s*$/, t("EditForm.tagsFormatError"))
    })

    type Schema = z.output<typeof schema>

    const props = defineProps<{
        creatingProduct: boolean
    }>()

    const state = reactive({
        name: "",
        price: 0,
        tags: ""
    })

    async function onSubmit(event: FormSubmitEvent<Schema>) {
        try {

            creatingProduct.value = true

            const response = await fetch(apiUri + "addAProduct", {
                method: 'post',
                body: JSON.stringify({
                    ...event.data,
                    tags: event.data.tags.split(",")
                })
            })

            if(!response.ok) throw new Error(t("Notifications.fetch.createError"))

            products.value = await getProducts(apiUri + "getProducts", t("Notifications.fetch.getError"))

            creatingProduct.value = false

            state.name = ""
            state.price = 0
            state.tags = ""

            emit('closeCreatingModal')

            toast.add({
                id: "update_product_success",
                title: t("Notifications.createProductSuccess"),
            })

        }
        catch(err) {

            console.log({err})

            creatingProduct.value = false

            toast.add({
                id: "update_product_error",
                title: t("Notifications.createProductError"),
                description: t("Notifications.createProductErrorDescription")
            })
        }
    }

</script>
<template>
    <UModal v-model="props.creatingProduct" prevent-close>
        <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                  {{ $t("ProductGrid.creatingNewProduct") }}
                </h3>
                <UButton :disabled="creatingProduct" color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="$emit('closeCreatingModal')" />
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
                    <UButton type="submit" :loading="creatingProduct">
                        {{  $t("ProductGrid.submitButton") }}
                    </UButton>
                </section>
            </UForm>
        </UCard>
    </UModal>
</template>