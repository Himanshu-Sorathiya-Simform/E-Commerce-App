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

type FilterOptions = {
	category?: string | null | undefined;
	pageSize?: string | null | undefined;
	pageIndex?: string | null | undefined;
	searchQuery?: string | null | undefined;
};

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

async function fetchProducts(filterOptions?: FilterOptions) {
	const category = filterOptions?.category;

	const limit = filterOptions?.pageSize ? +filterOptions?.pageSize : 20;
	const index = filterOptions?.pageIndex ? +filterOptions?.pageIndex : 1;
	const skip = (index - 1) * limit;

	const searchQuery = filterOptions?.searchQuery ? filterOptions.searchQuery : "";

	let basePath = "/products";
	if (searchQuery) {
		basePath = "/products/search";
	} else if (category) {
		basePath = `/products/category/${category}`;
	}

	let queryParams = `limit=${limit}&skip=${skip}`;
	if (searchQuery) {
		queryParams += `&q=${encodeURIComponent(searchQuery)}`;
	}

	const url = `${basePath}?${queryParams}`;

	try {
		const res = await api.get<FetchProductsResponse>(url);

		const {
			data: { products, total },
		} = res;

		return { products, totalItems: total };
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

export { fetchProduct, fetchProducts };
