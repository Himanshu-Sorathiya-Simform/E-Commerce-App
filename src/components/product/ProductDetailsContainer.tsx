import {
	SecurityScanOutlined,
	TruckOutlined,
	UndoOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Flex, Typography } from "antd";
import { useCart } from "../../context/cartContext.tsx";
import type { DetailedProduct } from "../../types/product.types.ts";
import CartHandler from "../cart/CartHandler.tsx";
import StarRating from "../ui/StarRating.tsx";

const { Paragraph, Title, Text } = Typography;

interface ProductDetailsContainerProps {
	product: DetailedProduct;
}

interface ProductHeaderProps {
	product: DetailedProduct;
}

interface ProductPricingInformationProps {
	product: DetailedProduct;
}

interface ProductActionsProps {
	product: DetailedProduct;
}

interface ProductExtraInformationProps {
	product: DetailedProduct;
}

function ProductDetailsContainer({ product }: ProductDetailsContainerProps) {
	return (
		<Col span={14}>
			<Flex vertical>
				<ProductHeader product={product} />

				<Divider />

				<ProductPricingInformation product={product} />

				<Divider />

				<ProductActions product={product} />

				<Divider />

				<ProductExtraInformation product={product} />
			</Flex>
		</Col>
	);
}

function ProductHeader({ product }: ProductHeaderProps) {
	return (
		<Flex vertical>
			<Title>{product.title}</Title>

			<Paragraph>{product.description}</Paragraph>

			<StarRating
				rating={product.rating}
				reviewsCount={product.reviews.length}
				size="medium"
			/>
		</Flex>
	);
}

function ProductPricingInformation({ product }: ProductPricingInformationProps) {
	return (
		<Flex
			vertical
			gap="small"
		>
			<Text
				strong
				style={{
					padding: "0.5rem 1rem",
					fontSize: 16,
					backgroundColor: "#ddd",
					borderRadius: "9999px",
					alignSelf: "start",
				}}
			>
				{product.discountPercentage}% off
			</Text>

			<Flex
				gap="small"
				align="center"
			>
				<Text
					strong
					style={{
						fontSize: 24,
					}}
				>
					$
					{(
						product.price
						* (1 - product.discountPercentage / 100)
					).toFixed(2)}
				</Text>

				<Text
					strong
					style={{
						fontSize: 14,
						color: "#888",
						textDecoration: "line-through",
					}}
				>
					${product.price}
				</Text>
			</Flex>
		</Flex>
	);
}

function ProductActions({ product }: ProductActionsProps) {
	const { cart } = useCart();

	const productCartQuantity =
		cart.find((c) => c.productId === product.id)?.quantity ?? 0;

	return (
		<Flex
			vertical
			gap="middle"
		>
			<Flex
				gap="large"
				align="center"
			>
				<CartHandler
					product={product}
					productCartQuantity={productCartQuantity}
				/>

				<Flex vertical>
					<Text>
						Only{" "}
						<Text
							style={{
								fontWeight: "bold",
							}}
						>
							{product.stock} items
						</Text>{" "}
						left ...
					</Text>

					<Text>Don't miss out!</Text>
				</Flex>
			</Flex>

			<Flex gap="middle">
				<Button
					size="large"
					shape="round"
					type="primary"
					style={{
						fontWeight: "500",
					}}
				>
					Buy Now
				</Button>
			</Flex>
		</Flex>
	);
}

function ProductExtraInformation({ product }: ProductExtraInformationProps) {
	return (
		<Flex gap="large">
			<Flex
				vertical
				align="center"
				gap="small"
				style={{
					border: "1px solid #ccc",
					padding: "0.5rem 1rem",
					borderRadius: "1rem",
					flex: "1",
				}}
			>
				<SecurityScanOutlined
					style={{ fontSize: "25px", color: "#1677ff" }}
				/>

				<Text>{product.warrantyInformation}</Text>

				<Text
					style={{
						fontSize: "14px",
						color: "#888",
					}}
				>
					Get {product.warrantyInformation} on this product.
				</Text>
			</Flex>

			<Flex
				vertical
				align="center"
				gap="small"
				style={{
					border: "1px solid #ccc",
					padding: "0.5rem 1rem",
					borderRadius: "1rem",
					flex: "1",
				}}
			>
				<TruckOutlined style={{ fontSize: "25px", color: "#52c41a" }} />

				<Text>Free Express Shipping</Text>

				<Text
					style={{
						fontSize: "14px",
						color: "#888",
					}}
				>
					Your product {product.shippingInformation}.
				</Text>
			</Flex>

			<Flex
				vertical
				align="center"
				gap="small"
				style={{
					border: "1px solid #ccc",
					padding: "0.5rem 1rem",
					borderRadius: "1rem",
					flex: "1",
				}}
			>
				<UndoOutlined style={{ fontSize: "25px", color: "#ff4d4f" }} />

				<Text>{product.returnPolicy}</Text>

				<Text
					style={{
						fontSize: "14px",
						color: "#888",
					}}
				>
					Return service available.
				</Text>
			</Flex>
		</Flex>
	);
}

export default ProductDetailsContainer;
