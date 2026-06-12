import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Card, Flex, Image, Typography } from "antd";
import type { DetailedProduct } from "../../types/product.types.ts";
import StarRating from "../ui/StarRating.tsx";

const { Title, Text, Paragraph } = Typography;

interface ProductCardProps {
	product: DetailedProduct;
	cartQuantity: number;
	onSelectItem: (data: DetailedProduct) => void;
	addToCart: (productId: number) => void;
}

function ProductCard({
	product,
	cartQuantity,
	onSelectItem,
	addToCart,
}: ProductCardProps) {
	return (
		<Card
			className="line-clamp-3"
			style={{ flex: 1, minWidth: 250 }}
			hoverable
			onClick={() => onSelectItem(product)}
			cover={
				<Flex
					justify="center"
					align="center"
					style={{ width: "100%", display: "block", textAlign: "center" }}
				>
					<Image
						style={{
							borderRadius: 16,
							backgroundColor: "rgba(0,0,0,0.1)",
							objectFit: "cover",
							display: "inline-block",
							width: "100%",
							aspectRatio: 1,
						}}
						preview={false}
						alt={product.title}
						src={product.thumbnail}
						loading="lazy"
					/>
				</Flex>
			}
		>
			<Card.Meta
				title={
					<Title
						level={5}
						style={{
							overflow: "hidden",
							textOverflow: "ellipsis",
							whiteSpace: "nowrap",
							margin: 0,
						}}
						ellipsis={{
							tooltip: product.title,
						}}
					>
						{product.title}
					</Title>
				}
				description={
					<Flex
						vertical
						gap={8}
					>
						<Flex vertical>
							<Text
								strong
								style={{
									fontSize: 14,
									color: "#3dd629",
								}}
							>
								{product.discountPercentage}% off
							</Text>

							<Flex
								gap="middle"
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
										fontSize: 16,
										color: "#888",
										textDecoration: "line-through",
									}}
								>
									${product.price}
								</Text>
							</Flex>
						</Flex>

						<Paragraph
							style={{
								fontWeight: "400",
							}}
							className="line-clamp-3"
						>
							{product.description}
						</Paragraph>

						<StarRating
							rating={product.rating}
							reviewsCount={product.reviews.length}
							size="small"
						/>

						<Badge
							count={cartQuantity}
							overflowCount={10}
						>
							<Button
								size="large"
								shape="round"
								onClick={(e) => {
									e.stopPropagation();

									addToCart(product.id);
								}}
							>
								Add to Cart <ShoppingCartOutlined />
							</Button>
						</Badge>
					</Flex>
				}
			/>
		</Card>
	);
}

export default ProductCard;
