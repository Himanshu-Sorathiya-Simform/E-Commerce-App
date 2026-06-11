import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb as BreadcrumbAntD } from "antd";
import { categoryIconMap } from "../../constants/categoryIcons.ts";
import type { Category } from "../../types/category.types.ts";
import { formatCategory } from "../../utils/utils.ts";

interface BreadcrumbProps {
	category: Category;
	title: string;
}

function Breadcrumb({ category, title }: BreadcrumbProps) {
	const Icon = categoryIconMap[category] ?? categoryIconMap["fallback"];

	return (
		<BreadcrumbAntD
			separator={
				<span style={{ fontSize: "16px", verticalAlign: "middle" }}>/</span>
			}
			items={[
				{
					title: (
						<HomeOutlined
							style={{
								verticalAlign: "middle",
								fontSize: "16px",
								color: "#555555",
							}}
						/>
					),
				},
				{
					title: (
						<>
							<p style={{ fontSize: "16px", color: "#555555" }}>
								{Icon ?
									<Icon
										style={{
											fontSize: "16px",
											display: "inline-flex",
											alignItems: "center",
											gap: "6px",
										}}
									/>
								:	null}{" "}
								{formatCategory(category)}
							</p>
						</>
					),
				},
				{
					title: (
						<span
							style={{
								fontSize: "16px",
								verticalAlign: "middle",
								fontWeight: "600",
							}}
						>
							{title}
						</span>
					),
				},
			]}
		/>
	);
}

export default Breadcrumb;
