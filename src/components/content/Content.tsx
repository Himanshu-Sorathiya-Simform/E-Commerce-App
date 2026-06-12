import { Button, Flex, Layout, Modal } from "antd";
import { type Dispatch, useState } from "react";
import { useCart } from "../../context/cartContext.tsx";
import { useProducts } from "../../context/productsContext.tsx";
import type { DetailedProduct } from "../../types/product.types.ts";
import DetailedProductModal from "../product/DetailedProductModal.tsx";
import ProductCard from "../product/ProductCard.tsx";
import Loader from "../ui/Loader.tsx";

const { Content: ContentAntD } = Layout;

interface ContentProps {
	setCollapsed: Dispatch<React.SetStateAction<boolean>>;
}

function Content({ setCollapsed }: ContentProps) {
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
					backgroundColor: "white",
					overflowY: "scroll",
				}}
			>
				<Button
					type="text"
					onClick={() => setCollapsed((prev) => !prev)}
				>
					Collapse
				</Button>

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
						<Loader />
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
