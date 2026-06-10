import { Button, Flex, Layout } from "antd";
import type { Dispatch } from "react";
import { productsData } from "../../data/data.ts";
import ProductCard from "../product/ProductCard.tsx";

const { Content: ContentAntD } = Layout;

interface ContentProps {
	setCollapsed: Dispatch<React.SetStateAction<boolean>>;
}

function Content({ setCollapsed }: ContentProps) {
	return (
		<ContentAntD style={{ width: "100%", backgroundColor: "white" }}>
			<Button
				type="text"
				onClick={() => setCollapsed((prev) => !prev)}
			>
				Collapse
			</Button>

			<div></div>

			<Flex
				wrap
				gap="medium"
			>
				{productsData.products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</Flex>
		</ContentAntD>
	);
}

export default Content;
