import { Card, Flex, Typography } from "antd";

const { Title, Text, Paragraph } = Typography;

interface ProductCardProps {
	product: {
		title: string;
		description: string;
		thumbnail: string;
		price: number;
		discountPercentage: number;
	};
}

function ProductCard({ product }: ProductCardProps) {
	return (
		<Card
			style={{ width: 250 }}
			hoverable
			cover={
				<img
					height={250}
					width={250}
					draggable={false}
					alt={product.title}
					src={product.thumbnail}
				/>
			}
		>
			<Card.Meta
				title={
					<Title
						level={5}
						style={{ margin: 0 }}
					>
						{product.title}
					</Title>
				}
				description={
					<Flex
						vertical
						gap={8}
					>
						<Paragraph className="line-clamp-3">
							{product.description}
						</Paragraph>

						<Text delete>Price: {product.price}</Text>

						<Text
							strong
							style={{ color: "#16a34a" }}
						>
							Discount: {product.discountPercentage}%
						</Text>

						<Text
							strong
							style={{
								marginTop: "auto",
								fontSize: 18,
							}}
						>
							Discounted Price:{" "}
							{(
								product.price
								* (1 - product.discountPercentage / 100)
							).toFixed(2)}
						</Text>
					</Flex>
				}
			/>
		</Card>
	);
}

export default ProductCard;
