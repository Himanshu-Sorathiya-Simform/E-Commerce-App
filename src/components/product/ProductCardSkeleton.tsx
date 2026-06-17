import { Flex, Skeleton } from "antd";

function ProductCardSkeleton() {
	return (
		<div
			style={{
				flex: 1,
				minWidth: 250,
				width: "100%",
				backgroundColor: "white",
				border: "1px solid #f0f0f0",
				boxSizing: "border-box",
				overflow: "hidden",
				borderRadius: 24,
			}}
		>
			<Flex
				justify="center"
				align="center"
				style={{
					width: "100%",
					display: "block",
					padding: 12,
					textAlign: "center",
				}}
			>
				<Skeleton.Image
					active
					style={{
						borderRadius: 16,
						width: "250px",
						height: "250px",
					}}
				/>
			</Flex>

			<Flex
				vertical
				gap={10}
				style={{ padding: "0px 12px 12px" }}
			>
				<Skeleton
					active
					paragraph={{ rows: 0 }}
					style={{
						marginBottom: "0.25rem",
					}}
					title={{
						width: "90%",
					}}
					styles={{
						title: { height: "32px" },
						paragraph: { margin: 0, padding: 0 },
					}}
				/>

				<Flex
					vertical
					gap={8}
				>
					<Flex vertical>
						<Skeleton.Input
							active
							size="small"
							style={{ width: "20%", height: 14, marginBottom: 4 }}
						/>

						<Flex
							gap="middle"
							align="center"
						>
							<Skeleton
								active
								paragraph={{ rows: 0 }}
								style={{
									marginBottom: "0.25rem",
								}}
								title={{
									width: "100%",
								}}
								styles={{
									title: { height: "32px" },
									paragraph: { margin: 0, padding: 0 },
								}}
							/>

							<Skeleton
								active
								paragraph={{ rows: 0 }}
								style={{
									marginBottom: "0.25rem",
								}}
								title={{
									width: "100%",
								}}
								styles={{
									title: { height: "22px" },
									paragraph: { margin: 0, padding: 0 },
								}}
							/>
						</Flex>
					</Flex>

					<Flex vertical>
						<Skeleton
							active
							paragraph={{ rows: 0 }}
							style={{
								marginBottom: "0.25rem",
							}}
							title={{
								width: "100%",
							}}
							styles={{
								title: { height: "16px" },
								paragraph: { margin: 0, padding: 0 },
							}}
						/>
						<Skeleton
							active
							paragraph={{ rows: 0 }}
							style={{
								marginBottom: "0.25rem",
							}}
							title={{
								width: "100%",
							}}
							styles={{
								title: { height: "16px" },
								paragraph: { margin: 0, padding: 0 },
							}}
						/>
						<Skeleton
							active
							paragraph={{ rows: 0 }}
							style={{
								marginBottom: "0.25rem",
							}}
							title={{
								width: "100%",
							}}
							styles={{
								title: { height: "16px" },
								paragraph: { margin: 0, padding: 0 },
							}}
						/>
					</Flex>

					<Skeleton.Input
						active
						size="small"
						style={{ width: "55%", height: 18 }}
					/>

					<Skeleton.Button
						active
						shape="round"
						size="large"
						style={{ width: 145, height: 40 }}
					/>
				</Flex>
			</Flex>
		</div>
	);
}

export default ProductCardSkeleton;
