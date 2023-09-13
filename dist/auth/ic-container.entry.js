import { r as registerInstance, h, a as Host } from './index-edfa97ae.js';

const icContainerCss = ":host{display:block}";

const IcContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("ic-login", null)));
  }
};
IcContainer.style = icContainerCss;

export { IcContainer as ic_container };

//# sourceMappingURL=ic-container.entry.js.map