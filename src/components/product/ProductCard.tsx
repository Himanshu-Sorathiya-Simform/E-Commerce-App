import { Card, Flex, Image, Typography } from "antd";
import type { DetailedProduct } from "../../types/product.types.ts";
import StarRating from "../ui/StarRating.tsx";

const { Title, Text, Paragraph } = Typography;

interface ProductCardProps {
	product: DetailedProduct;
	onSelectItem: (data: DetailedProduct) => void;
}

function ProductCard({ product, onSelectItem }: ProductCardProps) {
	return (
		<Card
			className="line-clamp-3"
			style={{ width: 250 }}
			hoverable
			onClick={() => onSelectItem(product)}
			cover={
				<Image
					height={250}
					width={250}
					style={{ objectFit: "cover" }}
					preview={false}
					alt={product.title}
					src={product.thumbnail}
					loading="lazy"
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
						<Text
							strong
							style={{
								marginTop: "auto",
								fontSize: 20,
							}}
						>
							$
							{(
								product.price
								* (1 - product.discountPercentage / 100)
							).toFixed(2)}
						</Text>

						<Paragraph
							style={{
								fontWeight: "100",
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
					</Flex>
				}
			/>
		</Card>
	);
}

export default ProductCard;
