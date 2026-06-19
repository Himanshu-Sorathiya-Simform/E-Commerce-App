import { Flex, Layout, Modal } from "antd";
import { useState } from "react";
import { useCart } from "../../context/cartContext.tsx";
import { useProducts } from "../../context/productsContext.tsx";
import type { DetailedProduct } from "../../types/product.types.ts";
import DetailedProductModal from "../product/DetailedProductModal.tsx";
import ProductCard from "../product/ProductCard.tsx";
import ProductCardSkeleton from "../product/ProductCardSkeleton.tsx";

const { Content: ContentAntD } = Layout;

function Content() {
	const [selectedItem, setSelectedItem] = useState<DetailedProduct | undefined>(
		undefined,
	);

	const { products, isLoading } = useProducts();
	const { cart, addToCart } = useCart();

	function selectItem(data: DetailedProduct) {
		setSelectedItem(data);
	}

	function closeModal() {
		setSelectedItem(undefined);
	}

	return (
		<>
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
									onSelectItem={selectItem}
									addToCart={addToCart}
								/>
							);
						})
					}
				</Flex>
			</ContentAntD>

			<Modal
				footer={null}
				width="70%"
				centered
				open={Boolean(selectedItem)}
				onCancel={closeModal}
				mask={{ blur: true }}
				style={{
					maxHeight: "80vh",
					overflow: "hidden",
				}}
				destroyOnHidden
			>
				<DetailedProductModal product={selectedItem} />
			</Modal>
		</>
	);
}

export default Content;
