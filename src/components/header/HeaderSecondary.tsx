import { PlusOutlined } from "@ant-design/icons";
import { Flex, Typography } from "antd";
import { languageOptions } from "../../constants/dropdownOptions.ts";
import Dropdown from "../dropdown/Dropdown.tsx";

const { Text } = Typography;

function HeaderSecondary() {
	return (
		<div
			style={{
				backgroundColor: "var(--color-primary)",
				width: "100%",
			}}
		>
			<Flex
				justify="space-between"
				align="center"
				gap={8}
				style={{
					maxWidth: 1152,
					margin: "0 auto",
					padding: "8px 16px",
				}}
			>
				<Text style={{ color: "#fff", fontSize: 14 }}>
					<PlusOutlined style={{ marginRight: 4 }} />

					<span>91 6355573856</span>
				</Text>

				<Text style={{ color: "#fff" }}>
					Get 50% discount on every item ...
				</Text>

				<Dropdown
					items={languageOptions ?? []}
					initialSelected="1"
					defaultLabel="Select Language"
				/>
			</Flex>
		</div>
	);
}

export default HeaderSecondary;
