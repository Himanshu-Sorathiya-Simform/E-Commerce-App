import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Flex, Image, Skeleton, Typography } from "antd";
import type { NavigateFunction } from "react-router";
import type { DetailedProduct } from "../../types/product.types.ts";
import StarRating from "../ui/StarRating.tsx";

const { Title, Text, Paragraph } = Typography;

interface ProductCardProps {
	product: DetailedProduct;
	cartQuantity: number;
	addToCart: (productId: number) => void;
	navigate: NavigateFunction;
}

function ProductCard({
	product,
	cartQuantity,
	addToCart,
	navigate,
}: ProductCardProps) {
	return (
		<Card
			style={{
				flex: 1,
				minWidth: 250,
				borderRadius: 24,
				cursor: "pointer",
			}}
			onClick={() => navigate(`/${product.category}/${product.id}`)}
			cover={
				<Flex
					justify="center"
					align="center"
					style={{ width: "100%", padding: 12 }}
				>
					<Image
						styles={{
							root: {
								width: "100%",
								aspectRatio: 1,
								position: "relative",
								display: "block",
							},
						}}
						style={{
							borderRadius: 16,
							backgroundColor: "rgba(0,0,0,0.05)",
							objectFit: "cover",
							width: "100%",
							height: "100%",
						}}
						placeholder={
							<Skeleton.Image
								active
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									borderRadius: 16,
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							/>
						}
						preview={false}
						alt={product.title}
						src={product.thumbnail}
						loading="lazy"
					/>
				</Flex>
			}
			styles={{
				body: {
					padding: "0px 12px 12px",
				},
			}}
		>
			<Flex
				vertical
				gap="small"
			>
				<div>
					<Title
						level={5}
						style={{ margin: 0 }}
						ellipsis={{ tooltip: product.title }}
					>
						{product.title}
					</Title>
				</div>

				<Flex
					vertical
					gap={4}
				>
					<Text
						strong
						style={{ fontSize: 14, color: "#3dd629" }}
					>
						{product.discountPercentage}% off
					</Text>

					<Flex
						gap="middle"
						align="center"
					>
						<Text
							strong
							style={{ fontSize: 24 }}
						>
							$
							{(
								product.price
								* (1 - product.discountPercentage / 100)
							).toFixed(2)}
						</Text>

						<Text
							delete
							style={{ fontSize: 16, color: "#888" }}
						>
							${product.price}
						</Text>
					</Flex>
				</Flex>

				<Paragraph
					style={{ margin: 0, color: "#666" }}
					ellipsis={{ rows: 3 }}
				>
					{product.description}
				</Paragraph>

				<StarRating
					rating={product.rating}
					reviewsCount={product.reviews.length}
					size="small"
				/>

				<Flex
					justify="space-between"
					align="center"
					style={{ marginTop: 8 }}
				>
					<Badge
						count={cartQuantity}
						overflowCount={10}
					>
						<Button
							size="large"
							shape="round"
							icon={<ShoppingCartOutlined />}
							onClick={(e) => {
								e.stopPropagation();

								addToCart(product.id);
							}}
						>
							Add to Cart
						</Button>
					</Badge>
				</Flex>
			</Flex>
		</Card>
	);
}

export default ProductCard;
