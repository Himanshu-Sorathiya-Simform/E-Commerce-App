import { Col, Flex, Image } from "antd";
import { type Dispatch, useState } from "react";
import type { DetailedProduct } from "../../types/product.types.ts";

interface ProductImageContainerProps {
	product: DetailedProduct;
}

interface ProductImageGalleryProps {
	product: DetailedProduct;
	selectedImageUrl: string;
	setSelectedImageUrl: Dispatch<React.SetStateAction<string>>;
}

function ProductImageContainer({ product }: ProductImageContainerProps) {
	const [selectedImageUrl, setSelectedImageUrl] = useState<string>(
		product?.images?.[0] ?? "",
	);

	return (
		<Col span={10}>
			<Flex
				gap="middle"
				vertical
			>
				<Image
					style={{
						padding: "1rem",
						borderRadius: 16,
						backgroundColor: "rgba(0,0,0,0.1)",
						objectFit: "cover",
						display: "inline-block",
						width: "100%",
						aspectRatio: 1,
					}}
					preview={false}
					alt={product.title}
					src={selectedImageUrl}
					loading="lazy"
				/>

				<ProductImageGallery
					product={product}
					selectedImageUrl={selectedImageUrl}
					setSelectedImageUrl={setSelectedImageUrl}
				/>
			</Flex>
		</Col>
	);
}

function ProductImageGallery({
	product,
	selectedImageUrl,
	setSelectedImageUrl,
}: ProductImageGalleryProps) {
	return (
		<Flex gap="middle">
			{product.images.map((img) => (
				<Image
					key={img}
					width={75}
					style={{
						borderRadius: 16,
						padding: "0.5rem",
						backgroundColor: "rgba(0,0,0,0.05)",
						objectFit: "cover",
						display: "inline-block",
						aspectRatio: 1,
						cursor: "pointer",
						outline:
							img === selectedImageUrl ?
								"1px solid var(--color-primary)"
							:	"",
					}}
					preview={false}
					alt={product.title}
					src={img ?? ""}
					loading="lazy"
					onClick={() => setSelectedImageUrl(img)}
				/>
			))}
		</Flex>
	);
}

export default ProductImageContainer;
