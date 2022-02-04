import React from "react";
import {
	DesignElement,
	RenderProps,
	SimpleComponent,
	SimpleDragComponent,
} from "atri-editor";

import { Navigator } from "./components/Navigator";

export const nav = React.forwardRef<HTMLDivElement, RenderProps>(
	(props, ref) => {
		return (
			<div
				ref={ref}
				style={
					{
						/** DO NOT REMOVE devStyle **/
					}
				}
			>
				<Navigator />
			</div>
		);
	}
);

const manifest: DesignElement = {
	key: "nav",
	comp: SimpleComponent,
	props: { name: "nav" },
	ondragComp: SimpleDragComponent,
	ondragProps: { name: "nav" },
	renderComp: nav,
	renderCompProps: {},
	decorators: [],
};

export default manifest;
