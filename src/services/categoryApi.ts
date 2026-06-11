import axios from "axios";
import type { ApiError } from "../types/axios.types.ts";
import type { Category } from "../types/category.types.ts";
import { api } from "./axios.ts";

async function fetchCategories() {
	try {
		const res = await api.get<Category[]>("/products/category-list");

		const { data } = res;

		return data;
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

export { fetchCategories };
