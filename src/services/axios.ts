import type { AxiosInstance } from "axios";
import axios from "axios";

const api: AxiosInstance = axios.create({
	baseURL: "https://dummyjson.com",
	timeout: 5000,
});

export { api };
