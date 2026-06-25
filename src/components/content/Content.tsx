import { useAppSelector } from "@/hooks/hooks.ts";
import { useGetProductsQuery } from "@/services/apiSlice.ts";
import { type PaginationProps, Flex, Layout, Pagination } from "antd";
import { useNavigate, useParams, useSearchParams } from "react-router";
import ProductCard from "../product/ProductCard.tsx";
import ProductCardSkeleton from "../product/ProductCardSkeleton.tsx";
import ContentHeader from "./ContentHeader.tsx";

const { Content: ContentAntD } = Layout;

function Content() {
	const navigate = useNavigate();
	const { category } = useParams();

	const [searchParams, setSearchParams] = useSearchParams();
	const pageIndex = searchParams.get("pageIndex");
	const pageSize = searchParams.get("pageSize");
	const searchQuery = searchParams.get("searchQuery");

	const { cart } = useAppSelector((state) => state.cart);

	const { data, isFetching } = useGetProductsQuery({
		category,
		pageSize,
		pageIndex,
		searchQuery,
	});

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
			}}
		>
			<Flex
				gap="large"
				vertical
				style={{
					height: "100%",
					overflowY: "scroll",
					padding: "1rem 3rem 0rem",
				}}
			>
				<ContentHeader />

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
						gap: "16px",
						position: "relative",
					}}
				>
					{isFetching ?
						Array.from({ length: pageSize ? +pageSize : 20 }).map(
							(_, i) => <ProductCardSkeleton key={i} />,
						)
					:	data
						&& data.products.map((product) => {
							const cartItem = cart.find(
								(c) => c.productId === product.id,
							);

							return (
								<ProductCard
									key={product.id}
									product={product}
									cartQuantity={cartItem?.quantity ?? 0}
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
					total={(data && data.total) ?? 0}
					style={{
						marginTop: "auto",
						padding: "0rem 3rem 1rem",
					}}
					onChange={onPaginationChange}
				/>
			</Flex>
		</ContentAntD>
	);
}

export default Content;
