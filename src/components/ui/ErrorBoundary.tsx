import { Button, Empty, Flex } from "antd";
import React, { type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
	fallback: ReactNode;
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	errorMessage: string;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
	}

	override state = { hasError: false, errorMessage: "" };

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, errorMessage: error.message };
	}

	override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.log(error, errorInfo);
	}

	reset = () => {
		this.setState({ hasError: false, errorMessage: "" });
	};

	override render() {
		if (this.state.hasError) {
			return (
				<Flex
					align="center"
					justify="center"
					style={{
						height: "100%",
						width: "100%",
					}}
				>
					<Empty
						description={
							this.state.errorMessage || "An unknown Error occurred"
						}
					>
						<Button
							type="primary"
							onClick={this.reset}
						>
							Retry
						</Button>
					</Empty>
				</Flex>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
