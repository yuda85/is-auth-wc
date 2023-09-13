import type { Components, JSX } from "../types/components";

interface IcLogin extends Components.IcLogin, HTMLElement {}
export const IcLogin: {
  prototype: IcLogin;
  new (): IcLogin;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
