import { useEffect, useState } from "react";

export const useHover = (
	widgets: {
		name: string;
		icon: React.FC<{}>;
		leftMargin: string;
		ID: string;
		hasChild: boolean;
	}[]
): [
	(
		| {
				name: string;
				icon: React.FC<{}>;
				leftMargin: string;
				ID: string;
				hasChild: boolean;
				onMouseEnter: () => void;
				onMouseLeave: () => void;
		  }[]
		| undefined
	),
	string | undefined
] => {
	const [showHoverFor, setShowHoverFor] = useState<string | undefined>();
	const [widgetsWithListeners, setWidgetsWithListeners] = useState<
		{
			name: string;
			icon: React.FC<{}>;
			leftMargin: string;
			ID: string;
			hasChild: boolean;
			onMouseEnter: () => void;
			onMouseLeave: () => void;
		}[]
	>();
	useEffect(() => {
		setWidgetsWithListeners(
			widgets.map((widget) => {
				return {
					...widget,
					onMouseEnter: () => {
						setShowHoverFor(widget.ID);
					},
					onMouseLeave: () => {
						setShowHoverFor(undefined);
					},
				};
			})
		);
	}, [setShowHoverFor, setWidgetsWithListeners]);
	return [widgetsWithListeners, showHoverFor];
};
