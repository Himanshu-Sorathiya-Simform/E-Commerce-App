import axios, {
	type AxiosInstance,
	type AxiosRequestConfig,
	AxiosError,
} from "axios";

const axiosInstance: AxiosInstance = axios.create({
	baseURL: "https://dummyjson.com",
	timeout: 5000,
});

function axiosBaseQuery() {
	return async function (args: AxiosRequestConfig) {
		try {
			const result = await axiosInstance(args);

			return { data: result.data };
		} catch (axiosError) {
			const err = axiosError as AxiosError;

			return {
				error: {
					status: err.response?.status,
					data: err.response?.data || err.message,
				},
			};
		}
	};
}

export { axiosBaseQuery, axiosInstance };
