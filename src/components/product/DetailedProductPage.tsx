import { fetchProduct } from "@/services/productApi.ts";
import type { DetailedProduct } from "@/types/product.types.ts";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Row, Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Breadcrumb from "../ui/Breadcrumb.tsx";
import ProductDetailsContainer from "./ProductDetailsContainer.tsx";
import ProductImageContainer from "./ProductImageContainer.tsx";

function DetailedProductPage() {
	const { productId } = useParams();

	const [product, setProduct] = useState<DetailedProduct | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function loadProduct() {
			if (!productId) return;

			const product = await fetchProduct(productId);

			setProduct(product);
			setIsLoading(false);
		}

		loadProduct();
	}, [productId]);

	return (
		<Flex
			vertical
			gap="medium"
			style={{ padding: "16px", width: "100%" }}
		>
			{isLoading && (
				<Flex
					align="center"
					justify="center"
					style={{ height: "100%" }}
				>
					<Spin
						indicator={
							<LoadingOutlined
								style={{ fontSize: 56 }}
								spin
							/>
						}
					/>
				</Flex>
			)}

			{product && (
				<>
					<Breadcrumb
						category={product.category}
						title={product.title}
					></Breadcrumb>

					<Row gutter={24}>
						<ProductImageContainer product={product} />

						<ProductDetailsContainer product={product} />
					</Row>
				</>
			)}
		</Flex>
	);
}

export default DetailedProductPage;
