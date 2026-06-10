import { Card } from "antd";
import { Meta } from "antd/es/list/Item";

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
					alt={product?.title}
					src={product?.thumbnail}
				/>
			}
		>
			<Meta
				title={<p className="font-bold text-lg">{product?.title}</p>}
				description={
					<div className="flex flex-col  gap-2">
						<span className="text-sm line-clamp-3">
							{product?.description}
						</span>

						<span className="text-sm line-through">
							Price: {product?.price}
						</span>

						<span className="font-semibold  text-green-600">
							Discount: {product?.discountPercentage}%
						</span>

						<span className="font-bold mt-auto text-lg">
							Discounted Price:{" "}
							{product
								&& (
									product.price
									- product.price / product.discountPercentage
								).toFixed(2)}
						</span>
					</div>
				}
			/>
		</Card>
	);
}

export default ProductCard;
