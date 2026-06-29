import { ConfigProvider, Flex, Rate, Tooltip, Typography } from "antd";

interface StarRatingProps {
	rating: number;
	size?: "small" | "medium" | "large";
	reviewsCount?: number;
}

const { Text } = Typography;

function StarRating({ rating, reviewsCount = 0, size = "medium" }: StarRatingProps) {
	return (
		<ConfigProvider
			theme={{
				components: {
					Rate: {
						starBg: "#dddddd",
						starColor: "#3dd629",
						starSizeSM: 13,
					},
				},
			}}
		>
			<Tooltip
				title={
					<Flex vertical>
						<Text
							style={{
								fontSize: "12",
								color: "white",
							}}
						>
							Rating: {rating}
						</Text>

						<Text
							style={{
								fontSize: "12",
								color: "white",
							}}
						>
							Reviewers: {reviewsCount}
						</Text>
					</Flex>
				}
			>
				<Flex
					gap="small"
					align="center"
				>
					<Rate
						size={size}
						allowHalf
						disabled
						value={rating}
					/>

					<Text
						style={{
							fontSize: "12",
							color: "#555",
						}}
					>
						({reviewsCount})
					</Text>
				</Flex>
			</Tooltip>
		</ConfigProvider>
	);
}

export default StarRating;
