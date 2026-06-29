import { type FilterConfig, useFilter } from "@himanshu-sorathiya/react-kit";
import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { fetchProducts } from "../services/productApi.ts";
import type { DetailedProduct } from "../types/product.types.ts";

interface ProductsProviderProps {
	children: ReactNode;
}

interface ProductsContext {
	products: DetailedProduct[];
	setFilters: (filters: FilterConfig[]) => void;
	isLoading: boolean;
}

const ProductsContext = createContext<ProductsContext>({
	products: [],
	isLoading: false,
	setFilters: () => {},
});

function ProductsProvider({ children }: ProductsProviderProps) {
	const [products, setProducts] = useState<DetailedProduct[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const { filteredItems, setFilters } = useFilter(products);

	useEffect(() => {
		async function loadProducts() {
			const products = await fetchProducts();

			setProducts(products);
			setIsLoading(false);
		}

		loadProducts();
	}, []);

	const ctxValue = { products: filteredItems, setFilters, isLoading };

	return <ProductsContext value={ctxValue}>{children}</ProductsContext>;
}

function useProducts() {
	const context = useContext(ProductsContext);

	if (!context)
		throw new Error("useProducts must be called inside ProductsProvider.");

	return context;
}

export default ProductsProvider;
export { useProducts };
