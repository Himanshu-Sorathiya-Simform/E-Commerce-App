import axios from "axios";
import type { ApiError } from "../types/axios.types.ts";
import type { DetailedProduct } from "../types/product.types.ts";
import { api } from "./axios.ts";

interface FetchProductResponse {
	limit: number;
	products: DetailedProduct[];
	skip: number;
	total: number;
}

async function fetchProducts() {
	try {
		const res = await api.get<FetchProductResponse>("/products?limit=10");

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

export { fetchProducts };
