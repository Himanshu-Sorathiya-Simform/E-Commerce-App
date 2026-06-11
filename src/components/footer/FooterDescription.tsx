import { ShoppingCartOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Paragraph } = Typography;

function FooterDescription() {
	return (
		<div style={{ maxWidth: 384 }}>
			<div>
				<ShoppingCartOutlined />
			</div>

			<Paragraph
				style={{
					fontSize: 14,
					color: "#4b5563",
				}}
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro autem
				et delectus? Illo nam vel mollitia, quaerat repellendus qui nesciunt
				ullam! Cupiditate ipsum, possimus provident, ut officia itaque beatae
				ad odit, alias inventore reprehenderit. Quo vitae recusandae nihil
				autem necessitatibus repellat minima saepe beatae illum. Dolorum eum
				laborum sint quas.
			</Paragraph>
		</div>
	);
}

export default FooterDescription;
