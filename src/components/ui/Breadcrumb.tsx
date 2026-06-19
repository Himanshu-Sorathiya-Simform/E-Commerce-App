import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb as BreadcrumbAntD, Button } from "antd";
import { useNavigate, useSearchParams } from "react-router";
import { categoryIconMap } from "../../constants/categoryIcons.ts";
import type { Category } from "../../types/category.types.ts";
import { formatCategory } from "../../utils/categoryUtils.ts";

interface BreadcrumbProps {
	category: Category;
	title: string;
}

function Breadcrumb({ category, title }: BreadcrumbProps) {
	const navigate = useNavigate();

	const Icon = categoryIconMap[category] ?? categoryIconMap["fallback"];

	const [, setSearchParams] = useSearchParams();

	function handleCategoryClick() {
		navigate(`/`);
		setSearchParams((prev) => ({ ...prev, category: category }));
	}

	return (
		<BreadcrumbAntD
			separator={
				<span style={{ fontSize: "16px", verticalAlign: "middle" }}>/</span>
			}
			items={[
				{
					title: (
						<Button
							size="small"
							type="text"
							onClick={() => navigate(`/`)}
						>
							<HomeOutlined
								style={{
									verticalAlign: "middle",
									fontSize: "16px",
									color: "#555555",
								}}
							/>
						</Button>
					),
				},
				{
					title: (
						<>
							<Button
								size="small"
								type="text"
								onClick={handleCategoryClick}
							>
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
							</Button>
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
