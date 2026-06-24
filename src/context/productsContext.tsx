import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { useParams, useSearchParams } from "react-router";
import { fetchProducts } from "../services/productApi.ts";
import type { DetailedProduct } from "../types/product.types.ts";

interface ProductsProviderProps {
	children: ReactNode;
}

interface ProductsContext {
	products: DetailedProduct[];
	totalItems: number;
	isLoading: boolean;
}

const ProductsContext = createContext<ProductsContext>({
	products: [],
	totalItems: 0,
	isLoading: false,
});

function ProductsProvider({ children }: ProductsProviderProps) {
	const { category } = useParams();

	const [searchParams] = useSearchParams();
	const pageIndex = searchParams.get("pageIndex");
	const pageSize = searchParams.get("pageSize");
	const searchQuery = searchParams.get("searchQuery");

	const [products, setProducts] = useState<DetailedProduct[]>([]);
	const [totalItems, setTotalItems] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function loadProducts() {
			setIsLoading(true);

			const data = await fetchProducts({
				category,
				pageSize,
				pageIndex,
				searchQuery,
			});

			if (!data) return;

			const { totalItems, products } = data;

			setProducts(products);
			setTotalItems(totalItems);
			setIsLoading(false);
		}

		loadProducts();
	}, [category, pageIndex, pageSize, searchQuery]);

	const ctxValue = { products, isLoading, totalItems };

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
