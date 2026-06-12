import { Flex, Image } from "antd";
import { useState } from "react";
import type { DetailedProduct } from "../../types/product.types.ts";
import Breadcrumb from "../ui/Breadcrumb.tsx";

interface DetailedProductModalProps {
	product: DetailedProduct | undefined;
}

function DetailedProductModal({ product }: DetailedProductModalProps) {
	const [selectedImageUrl, setSelectedImageUrl] = useState<string>(
		product?.images?.[0] ?? "",
	);

	if (!product) return;

	console.log(product);

	return (
		<Flex
			vertical
			gap="medium"
		>
			<Breadcrumb
				category={product.category}
				title={product.title}
			></Breadcrumb>

			<Flex gap="large">
				<Flex
					vertical
					gap="large"
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

					<Flex gap="middle">
						{product.images.map((img) => (
							<>
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
							</>
						))}
					</Flex>
				</Flex>

				<Image
					style={{
						borderRadius: 16,
						backgroundColor: "rgba(0,0,0,0.1)",
						objectFit: "cover",
						display: "inline-block",
						width: "45%",
						aspectRatio: 1,
					}}
					preview={false}
					alt={product.title}
					src={product.images[0] ?? ""}
					loading="lazy"
				/>
			</Flex>
		</Flex>
	);
}

export default DetailedProductModal;
