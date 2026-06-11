import type { DetailedProduct } from "../../types/product.types.ts";
import Breadcrumb from "../ui/Breadcrumb.tsx";

interface DetailedProductModalProps {
	product: DetailedProduct | undefined;
}

function DetailedProductModal({ product }: DetailedProductModalProps) {
	if (!product) return;

	console.log(product);

	return (
		<Breadcrumb
			category={product.category}
			title={product.title}
		></Breadcrumb>
	);
}

export default DetailedProductModal;
