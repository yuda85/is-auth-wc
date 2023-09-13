import type { Components, JSX } from "../types/components";

interface IcContainer extends Components.IcContainer, HTMLElement {}
export const IcContainer: {
  prototype: IcContainer;
  new (): IcContainer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
