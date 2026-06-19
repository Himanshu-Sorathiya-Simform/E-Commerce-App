import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { useSearchParams } from "react-router";
import { fetchProducts } from "../services/productApi.ts";
import type { DetailedProduct } from "../types/product.types.ts";

interface ProductsProviderProps {
	children: ReactNode;
}

interface ProductsContext {
	products: DetailedProduct[];
	isLoading: boolean;
}

const ProductsContext = createContext<ProductsContext>({
	products: [],
	isLoading: false,
});

function ProductsProvider({ children }: ProductsProviderProps) {
	const [searchParams] = useSearchParams();
	const selectedCategory = searchParams.get("category") ?? undefined;

	const [products, setProducts] = useState<DetailedProduct[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function loadProducts() {
			const products = await fetchProducts({ category: selectedCategory });

			setProducts(products);
			setIsLoading(false);
		}

		loadProducts();
	}, [selectedCategory]);

	const ctxValue = { products, isLoading };

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
