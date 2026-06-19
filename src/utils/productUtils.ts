import type { DetailedProduct } from "@/types/product.types.ts";

function filterProductsByCategory(products: DetailedProduct[], category) {
	if (!category) return products;

	return products.filter((product) => product.category === category);
}

export { filterProductsByCategory };
