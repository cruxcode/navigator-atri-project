import { DesignElement } from "atri-editor";
import { registerDesignElements } from "./utils/registerDesignElements";
import Nav from "./elements/nav";
const designCategories: { [category: string]: DesignElement[] } = {
	// add your categroies here
	// categoryname: [elementManifest]
	// Example: custom: [ButtonManifest]
	custom: [Nav],
};

registerDesignElements(designCategories);
