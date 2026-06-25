import axios, { type AxiosRequestConfig } from "axios";
import type { ApiError } from "../types/axios.types.ts";
import type { DetailedProduct } from "../types/product.types.ts";
import { axiosInstance } from "./axios.ts";

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
		const res = await axiosInstance.get<FetchProductResponse>(
			`/products/${productId}`,
		);

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

function buildProductsRequest(filterOptions?: FilterOptions): AxiosRequestConfig {
	const category = filterOptions?.category;

	const limit = filterOptions?.pageSize ? +filterOptions.pageSize : 20;
	const index = filterOptions?.pageIndex ? +filterOptions.pageIndex : 1;
	const skip = (index - 1) * limit;

	const searchQuery = filterOptions?.searchQuery || "";

	let basePath = "/products";
	const params: Record<string, string | number> = { limit, skip };

	if (searchQuery) {
		basePath = "/products/search";

		params["q"] = searchQuery;
	} else if (category) {
		basePath = `/products/category/${category}`;
	}

	return {
		url: basePath,
		method: "GET",
		params: params,
	};
}

export {
	type FetchProductsResponse,
	type FilterOptions,
	buildProductsRequest,
	fetchProduct,
};
