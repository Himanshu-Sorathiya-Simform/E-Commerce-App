import { useProducts } from "@/context/productsContext.tsx";
import { Flex, Row } from "antd";
import { useParams } from "react-router";
import Breadcrumb from "../ui/Breadcrumb.tsx";
import ProductDetailsContainer from "./ProductDetailsContainer.tsx";
import ProductImageContainer from "./ProductImageContainer.tsx";

function DetailedProductPage() {
	const { productId } = useParams();
	const { products } = useProducts();

	if (!productId) return;

	const product = products.find((p) => p.id === +productId);

	if (!product) return;

	return (
		<Flex
			vertical
			gap="medium"
			style={{ padding: "16px" }}
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

export default DetailedProductPage;
