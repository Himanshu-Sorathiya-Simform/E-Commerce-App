import {
	type ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { fetchCategories } from "../api/categoryApi.ts";

interface CategoriesProviderProps {
	children: ReactNode;
}

interface CategoriesContext {
	categories: string[];
	isLoading: boolean;
}

const CategoriesContext = createContext<CategoriesContext>({
	categories: [],
	isLoading: false,
});

function CategoriesProvider({ children }: CategoriesProviderProps) {
	const [categories, setCategories] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		async function loadCategories() {
			setIsLoading(true);
			const categories = await fetchCategories();

			setCategories(categories);
			setIsLoading(false);
		}

		loadCategories();
	}, []);

	const ctxValue = { categories, isLoading };

	return <CategoriesContext value={ctxValue}>{children}</CategoriesContext>;
}

function useCategories() {
	const context = useContext(CategoriesContext);

	if (!context)
		throw new Error("useCategories must be called inside CategoriesProvider.");

	return context;
}

export default CategoriesProvider;
export { useCategories };
