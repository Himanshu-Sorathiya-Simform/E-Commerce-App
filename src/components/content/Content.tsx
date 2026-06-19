import { Flex, Layout } from "antd";
import { useNavigate } from "react-router";
import { useCart } from "../../context/cartContext.tsx";
import { useProducts } from "../../context/productsContext.tsx";
import ProductCard from "../product/ProductCard.tsx";
import ProductCardSkeleton from "../product/ProductCardSkeleton.tsx";

const { Content: ContentAntD } = Layout;

function Content() {
	const navigate = useNavigate();

	const { products, isLoading } = useProducts();
	const { cart, addToCart } = useCart();

	return (
		<ContentAntD
			style={{
				width: "100%",
				height: "100%",
				position: "relative",
				backgroundColor: "#f2f2f2",
				overflowY: "scroll",
			}}
		>
			<Flex
				wrap
				gap="medium"
				justify="center"
				style={{
					position: "relative",
					padding: "2rem 3rem",
				}}
			>
				{isLoading ?
					Array.from({ length: 10 }).map((_, i) => (
						<ProductCardSkeleton key={i} />
					))
				:	products.map((product) => {
						const cartItem = cart.find(
							(c) => c.productId === product.id,
						);

						return (
							<ProductCard
								key={product.id}
								product={product}
								cartQuantity={cartItem?.quantity ?? 0}
								addToCart={addToCart}
								navigate={navigate}
							/>
						);
					})
				}
			</Flex>
		</ContentAntD>
	);
}

export default Content;
