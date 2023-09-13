import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ic-login2.js';

const icContainerCss = ":host{display:block}";

const IcContainer$1 = /*@__PURE__*/ proxyCustomElement(class IcContainer extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, null, h("ic-login", null)));
  }
  static get style() { return icContainerCss; }
}, [1, "ic-container"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["ic-container", "ic-login"];
  components.forEach(tagName => { switch (tagName) {
    case "ic-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, IcContainer$1);
      }
      break;
    case "ic-login":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const IcContainer = IcContainer$1;
const defineCustomElement = defineCustomElement$1;

export { IcContainer, defineCustomElement };

//# sourceMappingURL=ic-container.js.map