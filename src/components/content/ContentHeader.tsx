import { Button, Flex, Typography } from "antd";
import { useState } from "react";

const { Title } = Typography;

function ContentHeader() {
	const [hasError, setHasError] = useState(false);

	if (hasError) throw new Error();

	return (
		<Flex
			vertical
			style={{
				padding: "2rem",
				backgroundColor: "white",
				width: "100%",
				borderRadius: "1rem",
			}}
		>
			<Title>Everything you want, right where you are.</Title>

			<Flex gap="middle">
				<Button
					type="default"
					style={{
						fontSize: "1.125rem",
						borderRadius: "6px",
						padding: "0.5rem 1rem",
					}}
				>
					Deals
				</Button>

				<Button
					type="default"
					style={{
						fontSize: "1.125rem",
						borderRadius: "6px",
						padding: "0.5rem 1rem",
					}}
				>
					What's New
				</Button>

				<Button
					type="primary"
					onClick={() => setHasError(true)}
					style={{
						fontSize: "1.125rem",
						borderRadius: "6px",
						padding: "0.5rem 1rem",
					}}
				>
					Generate Error
				</Button>
			</Flex>
		</Flex>
	);
}

export default ContentHeader;
