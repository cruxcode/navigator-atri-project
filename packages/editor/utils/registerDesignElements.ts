import { DesignElement } from "atri-editor";

export const registerDesignElements = (categories: {
  [category: string]: DesignElement[];
}) => {
  const newBatchEvent = new CustomEvent("newelementbatch", {
    detail: { categories },
  });
  window.dispatchEvent(newBatchEvent);
};
