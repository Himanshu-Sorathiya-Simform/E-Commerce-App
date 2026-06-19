import { type PaginationProps, Flex, Layout, Pagination } from "antd";
import { useNavigate, useSearchParams } from "react-router";
import { useCart } from "../../context/cartContext.tsx";
import { useProducts } from "../../context/productsContext.tsx";
import ProductCard from "../product/ProductCard.tsx";
import ProductCardSkeleton from "../product/ProductCardSkeleton.tsx";

const { Content: ContentAntD } = Layout;

function Content() {
	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();
	const pageIndex = searchParams.get("pageIndex");
	const pageSize = searchParams.get("pageSize");

	const { products, isLoading, totalItems } = useProducts();
	const { cart, addToCart } = useCart();

	const onPaginationChange: PaginationProps["onChange"] = (
		pageIndex,
		pageSize,
	) => {
		setSearchParams((prev) => ({ ...prev, pageIndex, pageSize }));
	};

	return (
		<ContentAntD
			style={{
				width: "100%",
				height: "100%",
				position: "relative",
				backgroundColor: "#f2f2f2",
				padding: "2rem 0rem",
			}}
		>
			<Flex
				gap="large"
				vertical
				style={{
					height: "100%",
					overflowY: "scroll",
					padding: "0rem 3rem",
				}}
			>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
						gap: "16px",
						position: "relative",
					}}
				>
					{isLoading ?
						Array.from({ length: pageSize ? +pageSize : 20 }).map(
							(_, i) => <ProductCardSkeleton key={i} />,
						)
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
				</div>

				<Pagination
					align="center"
					showSizeChanger
					current={pageIndex ? +pageIndex : 0}
					pageSize={pageSize ? +pageSize : 20}
					total={totalItems}
					style={{
						marginTop: "auto",
					}}
					onChange={onPaginationChange}
				/>
			</Flex>
		</ContentAntD>
	);
}

export default Content;
