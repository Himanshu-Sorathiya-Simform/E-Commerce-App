import { type AxiosRequestConfig } from "axios";
import type { DetailedProduct } from "../types/product.types.ts";

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

function buildProductRequest(productId: string): AxiosRequestConfig {
	return {
		url: `/products/${productId}`,
		method: "GET",
	};
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
	type FetchProductResponse,
	type FetchProductsResponse,
	type FilterOptions,
	buildProductRequest,
	buildProductsRequest,
};
