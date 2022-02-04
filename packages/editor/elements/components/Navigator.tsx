import React from "react";
import { gray300, gray700, gray800, gray800Hover, spacing20 } from "../consts";
import { Header } from "./Header";
import { Element } from "./Element";
import { Controls } from "./Controls";
import { RectIcon } from "./RectIcon";
import { useHover } from "./useHover";
import { DropIcon } from "./DropIcon";

const maxControlsWidth = "40px";

const styles: { [key: string]: React.CSSProperties } = {
	navigator: {
		display: "flex",
		backgroundColor: gray700,
		color: gray300,
		flexDirection: "column",
		fontFamily: "sans-serif",
		// TO BE REMOVED
		width: "15rem", // width: 100%
	},
	main: {
		display: "flex",
		width: "100%",
	},
	elements: {
		display: "flex",
		flexDirection: "column",
		overflow: "auto",
		flexGrow: 1,
		flexShrink: 1,
	},
	controls: {
		display: "flex",
		flexDirection: "column",
		width: maxControlsWidth,
		overflow: "hidden",
		alignItems: "flex-end",
	},
};

function calcSpacing(tabs: number) {
	return parseFloat(spacing20) * tabs + "rem";
}

const widgets = [
	{
		name: "Body",
		ID: "1",
		icon: RectIcon,
		leftMargin: calcSpacing(1),
		hasChild: true,
	},
	{
		name: "Div Block 1",
		ID: "2",
		icon: RectIcon,
		leftMargin: calcSpacing(2),
		hasChild: true,
	},
	{
		name: "Text Block 1",
		ID: "3",
		icon: RectIcon,
		leftMargin: calcSpacing(3),
		hasChild: false,
	},
	{
		name: "Div Block 2",
		ID: "4",
		icon: RectIcon,
		leftMargin: calcSpacing(3),
		hasChild: true,
	},
	{
		name: "Text Block 3",
		ID: "5",
		icon: RectIcon,
		leftMargin: calcSpacing(4),
		hasChild: false,
	},
];

export const Navigator: React.FC = () => {
	const [widgetsWithListeners, showHoverFor, showSelectedFor] =
		useHover(widgets);
	return (
		<div style={styles.navigator}>
			<Header />
			{widgetsWithListeners ? (
				<div style={styles.main}>
					<div style={styles.elements}>
						{widgetsWithListeners.map((widget) => {
							return (
								<Element
									name={widget.name}
									icon={widget.icon}
									leftMargin={widget.leftMargin}
									onMouseEnter={widget.onMouseEnter}
									onMouseLeave={widget.onMouseLeave}
									onMouseDown={widget.onMouseDown}
									key={widget.ID}
									background={
										showHoverFor === widget.ID
											? gray800Hover
											: showSelectedFor === widget.ID
											? gray800
											: ""
									}
								></Element>
							);
						})}
					</div>
					<div style={styles.controls}>
						{widgetsWithListeners.map((widget) => {
							return (
								<Controls
									controls={
										widget.hasChild
											? [
													{
														name: "drop",
														icon: DropIcon,
														onClick: () => {},
													},
											  ]
											: []
									}
									key={widget.ID}
									onMouseEnter={widget.onMouseEnter}
									onMouseLeave={widget.onMouseLeave}
									background={
										showHoverFor === widget.ID
											? gray800Hover
											: showSelectedFor === widget.ID
											? gray800
											: ""
									}
								/>
							);
						})}
					</div>
				</div>
			) : null}
		</div>
	);
};
