import { Flex, Row } from "antd";
import type { DetailedProduct } from "../../types/product.types.ts";
import Breadcrumb from "../ui/Breadcrumb.tsx";
import ProductDetailsContainer from "./ProductDetailsContainer.tsx";
import ProductImageContainer from "./ProductImageContainer.tsx";

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

			<Row gutter={24}>
				<ProductImageContainer product={product} />

				<ProductDetailsContainer product={product} />
			</Row>
		</Flex>
	);
}

export default DetailedProductModal;
