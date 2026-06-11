async function fetchCategories(): Promise<string[]> {
	const res = await fetch("https://dummyjson.com/products/category-list");

	const data = await res.json();

	return data;
}

export { fetchCategories };
