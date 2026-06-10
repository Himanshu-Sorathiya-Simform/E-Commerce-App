import { Image } from "antd";

function ProductCard({ product }: { product: any }) {
	return (
		<div className="flex flex-col gap-1 max-w-64 items-center p-2 bg-gray-100 rounded-lg">
			<Image
				width={200}
				alt={product?.title}
				src={`${product?.thumbnail}`}
			/>

			<h2 className="font-semibold text-lg">{product?.title}</h2>

			<span className="text-sm">{product?.description}</span>

			<span className="text-sm line-through">Price: {product?.price}</span>

			<span className="font-semibold text-green-600">
				Discount: {product?.discountPercentage}%
			</span>

			<span className="font-bold  text-lg">
				Discounted Price:{" "}
				{product
					&& (
						product.price
						- product.price / product.discountPercentage
					).toFixed(2)}
			</span>
		</div>
	);
}

export default ProductCard;
