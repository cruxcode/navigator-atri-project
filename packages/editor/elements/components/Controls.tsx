import React from "react";
import { spacing20, spacing25 } from "../consts";

export interface ControlProps {
	controls: { name: string; icon: React.FC; onClick: () => void }[];
	onMouseEnter: () => void;
	onMouseLeave: () => void;
	background: string;
}

const styles: { [key: string]: React.CSSProperties } = {
	container: {
		display: "flex",
		height: spacing25,
		paddingRight: spacing20,
		alignItems: "center",
		width: "100%",
		boxSizing: "border-box",
		justifyContent: "flex-end",
	},
};

export const Controls: React.FC<ControlProps> = React.memo((props) => {
	return (
		<div style={{ ...styles.container, background: props.background }}>
			{props.controls.map((control) => {
				return <control.icon />;
			})}
		</div>
	);
});
