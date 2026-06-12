import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Flex, Image, Row, Space, Typography } from "antd";
import { useState } from "react";
import type { DetailedProduct } from "../../types/product.types.ts";
import Breadcrumb from "../ui/Breadcrumb.tsx";
import StarRating from "../ui/StarRating.tsx";

const { Paragraph, Title, Text } = Typography;

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

			<Row gutter={24}>
				<Col span={9}>
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
				</Col>

				<Col span={15}>
					<Flex
						gap="medium"
						vertical
					>
						<Flex vertical>
							<Title>{product.title}</Title>

							<Paragraph>{product.description}</Paragraph>

							<StarRating
								rating={product.rating}
								reviewsCount={product.reviews.length}
								size="medium"
							/>
						</Flex>

						<Divider />

						<Flex
							gap="small"
							align="center"
						>
							<Text
								strong
								style={{
									fontSize: 24,
								}}
							>
								$
								{(
									product.price
									* (1 - product.discountPercentage / 100)
								).toFixed(2)}
							</Text>

							<Text
								strong
								style={{
									fontSize: 14,
									color: "#888",
									textDecoration: "line-through",
								}}
							>
								${product.price}
							</Text>
						</Flex>

						<Divider />

						<Flex
							gap="large"
							align="center"
						>
							<Space.Compact>
								<Button
									style={{
										borderStartStartRadius: "9999px",
										borderEndStartRadius: "9999px",
									}}
									icon={<MinusOutlined />}
								/>
								<Button
									disabled
									style={{ color: "#000", cursor: "default" }}
								>
									0
								</Button>
								<Button
									style={{
										borderStartEndRadius: "9999px",
										borderEndEndRadius: "9999px",
									}}
									icon={<PlusOutlined />}
								/>
							</Space.Compact>

							<Flex vertical>
								<Text>
									Only{" "}
									<Text
										style={{
											fontWeight: "bold",
										}}
									>
										{product.stock} items
									</Text>{" "}
									left ...
								</Text>

								<Text>Don't miss out!</Text>
							</Flex>
						</Flex>

						<Flex gap="middle">
							<Button
								size="large"
								shape="round"
								type="primary"
							>
								Buy Now
							</Button>

							<Button
								size="large"
								shape="round"
							>
								Add to Cart
							</Button>
						</Flex>
					</Flex>
				</Col>
			</Row>
		</Flex>
	);
}

export default DetailedProductModal;
