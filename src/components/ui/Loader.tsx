import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function Loader() {
	return (
		<Spin
			indicator={
				<LoadingOutlined
					style={{ fontSize: 48 }}
					spin
				/>
			}
		/>
	);
}

export default Loader;
