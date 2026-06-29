import { Skeleton } from "antd";

function SidebarItemSkeleton() {
	return (
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
				title: { height: "2.5rem" },
				paragraph: { margin: 0, padding: 0 },
			}}
		/>
	);
}

export default SidebarItemSkeleton;
