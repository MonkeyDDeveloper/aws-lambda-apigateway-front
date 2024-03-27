import type { Product } from "~/schemas"

export const useEditingProduct = () => useState("editing-product", () => false)
export const useProducts = () => useState("global-products", ():Product[] => [])