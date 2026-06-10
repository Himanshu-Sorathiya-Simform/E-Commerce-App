import {
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Menu } from "antd";
import Sider from "antd/es/layout/Sider";

interface SidebarProps {
	collapsed: boolean;
}

function Sidebar({ collapsed }: SidebarProps) {
	return (
		<Sider
			style={{
				backgroundColor: "var(--color-muted)",
			}}
			trigger={null}
			collapsible
			collapsed={collapsed}
		>
			<ConfigProvider
				theme={{
					components: {
						Menu: {
							itemHoverBg: "rgba(0,0,0,0.5)",
							itemSelectedBg: "rgba(0,61,41,0.3)",
							itemColor: "black",
							itemSelectedColor: "var(--color-primary)",
							itemHoverColor: "white",
							fontSize: 16,
						},
					},
				}}
			>
				<Menu
					className="h-full"
					defaultSelectedKeys={["1"]}
					tooltip={{ placement: "right" }}
					items={[
						{
							key: "1",
							icon: <UserOutlined />,
							label: "nav 1 asdjikwls aojesdn m weadj mn adjn m",
						},
						{
							key: "2",
							icon: <VideoCameraOutlined />,
							label: "nav 2",
						},
						{
							key: "3",
							icon: <UploadOutlined />,
							label: "nav 3",
						},
					]}
				/>
			</ConfigProvider>
		</Sider>
	);
}

export default Sidebar;
