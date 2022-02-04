import React from "react";
import { spacing10, spacing25 } from "../consts";

export interface ElementProps {
	icon: React.FC<any>;
	name: string;
	leftMargin: string;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
	onMouseDown: () => void;
	background: string;
}

export const style: { [key: string]: React.CSSProperties } = {
	main: {
		display: "flex",
		fontSize: spacing10,
		height: spacing25,
		alignItems: "center",
	},
	img: {
		marginRight: spacing10,
	},
	name: {
		flexGrow: "1",
		flexShrink: "1",
	},
};

export const Element: React.FC<ElementProps> = React.memo((props) => {
	console.log(`rendered ${props.name}`);
	return (
		<div
			style={{
				...style.main,
				paddingLeft: props.leftMargin,
				background: props.background,
			}}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			onMouseDown={props.onMouseDown}
		>
			<div style={{ ...style.img }}>
				<props.icon />
			</div>
			<div style={style.name}>{props.name}</div>
		</div>
	);
});
