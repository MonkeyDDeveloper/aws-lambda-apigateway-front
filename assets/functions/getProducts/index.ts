import type { Product } from "~/schemas";

export default function getProducts(uri: string, localeErrorMessage: string, filter?: {productId: string}): Promise<Product[]> {
    return new Promise(async (res, rej) => {
        try {

            const response = await fetch(uri)

            if(!response.ok) throw new Error(localeErrorMessage)

            const { allProducts } = await response.json()

            res(allProducts as Product[])
        }
        catch(err) {
            rej(err)
        }
    })
}