import axios from "axios";
import type { ApiError } from "../types/axios.types.ts";
import type { DetailedProduct } from "../types/product.types.ts";
import { api } from "./axios.ts";

type FetchProductResponse = DetailedProduct;

interface FetchProductsResponse {
	limit: number;
	products: DetailedProduct[];
	skip: number;
	total: number;
}

async function fetchProduct(productId: string) {
	try {
		const res = await api.get<FetchProductResponse>(`/products/${productId}`);

		const { data } = res;

		return data;
	} catch (error) {
		if (axios.isAxiosError<ApiError>(error)) {
			console.error(error.response?.data.message);
			console.error(error.response?.status);

			return null;
		} else {
			throw error;
		}
	}
}

async function fetchProducts(filterOptions?: { category: string | undefined }) {
	const category = filterOptions?.category;

	const url =
		category ? `/products/category/${category}?limit=10` : "/products?limit=10";

	try {
		const res = await api.get<FetchProductsResponse>(url);

		const {
			data: { products },
		} = res;

		return products;
	} catch (error) {
		if (axios.isAxiosError<ApiError>(error)) {
			console.error(error.response?.data.message);
			console.error(error.response?.status);

			return [];
		} else {
			throw error;
		}
	}
}

export { fetchProduct, fetchProducts };
