import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axios.ts";
import {
	type FetchCategoriesResponse,
	buildCategoriesRequest,
} from "./categoryApi.ts";
import {
	type FetchProductResponse,
	type FetchProductsResponse,
	type FilterOptions,
	buildProductRequest,
	buildProductsRequest,
} from "./productApi.ts";

const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: axiosBaseQuery(),
	endpoints: (build) => ({
		getProducts: build.query<FetchProductsResponse, FilterOptions>({
			query: (filterOptions) => buildProductsRequest(filterOptions),
		}),
		getProduct: build.query<FetchProductResponse, string>({
			query: (productId) => buildProductRequest(productId),
		}),
		getCategories: build.query<FetchCategoriesResponse, void>({
			query: () => buildCategoriesRequest(),
		}),
	}),
});

export { apiSlice };
export const { useGetProductsQuery, useGetProductQuery, useGetCategoriesQuery } =
	apiSlice;
