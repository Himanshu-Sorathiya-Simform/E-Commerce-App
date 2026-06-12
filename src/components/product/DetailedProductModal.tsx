import { Flex } from "antd";
import type { DetailedProduct } from "../../types/product.types.ts";
import Breadcrumb from "../ui/Breadcrumb.tsx";

interface DetailedProductModalProps {
	product: DetailedProduct | undefined;
}

function DetailedProductModal({ product }: DetailedProductModalProps) {
	if (!product) return;

	console.log(product);

	return (
		<Flex
			vertical
			gap="medium"
		>
			<Breadcrumb
				category={product.category}
				title={product.title}
			></Breadcrumb>
		</Flex>
	);
}

export default DetailedProductModal;
