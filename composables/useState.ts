import type { Product } from "~/schemas"

export const useEditingProduct = () => useState("editing-product", () => false)
export const useProducts = () => useState("global-products", ():Product[] => [])
export const useProductGridKey = () => useState("product-grid-key", () => Math.random() * 1000)