import { useGetProductQuery } from "@/services/apiSlice.ts";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Row, Spin } from "antd";
import { useParams } from "react-router";
import Breadcrumb from "../ui/Breadcrumb.tsx";
import ProductDetailsContainer from "./ProductDetailsContainer.tsx";
import ProductImageContainer from "./ProductImageContainer.tsx";

function DetailedProductPage() {
	const { productId } = useParams();

	const { data: product, isFetching } = useGetProductQuery(productId ?? "");

	return (
		<Flex
			vertical
			gap="medium"
			style={{ padding: "16px", width: "100%" }}
		>
			{isFetching && (
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
