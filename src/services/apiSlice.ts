import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axios.ts";
import {
	type FetchProductsResponse,
	type FilterOptions,
	buildProductsRequest,
} from "./productApi.ts";

const apiSlice = createApi({
	baseQuery: axiosBaseQuery(),
	endpoints: (build) => ({
		getProducts: build.query<FetchProductsResponse, FilterOptions>({
			query: (filterOptions) => buildProductsRequest(filterOptions),
		}),
	}),
});

export { apiSlice };
