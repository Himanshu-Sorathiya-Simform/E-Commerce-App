import { Button, Flex, Layout } from "antd";
import type { Dispatch } from "react";
import { useProducts } from "../../context/productsContext.tsx";
import ProductCard from "../product/ProductCard.tsx";
import Loader from "../ui/Loader.tsx";

const { Content: ContentAntD } = Layout;

interface ContentProps {
	setCollapsed: Dispatch<React.SetStateAction<boolean>>;
}

function Content({ setCollapsed }: ContentProps) {
	const { products, isLoading } = useProducts();

	return (
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
			>
				{isLoading ?
					<Loader />
				:	products.map((product) => (
						<ProductCard
							key={product.id}
							product={product}
						/>
					))
				}
			</Flex>
		</ContentAntD>
	);
}

export default Content;
