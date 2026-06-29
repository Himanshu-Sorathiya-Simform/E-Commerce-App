import { type AxiosRequestConfig } from "axios";
import type { Category } from "../types/category.types.ts";

type FetchCategoriesResponse = Category[];

function buildCategoriesRequest(): AxiosRequestConfig {
	return {
		url: "/products/category-list",
		method: "GET",
	};
}

export { type FetchCategoriesResponse, buildCategoriesRequest };
