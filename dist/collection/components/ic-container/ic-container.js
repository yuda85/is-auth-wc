import { Host, h } from "@stencil/core";
export class IcContainer {
  render() {
    return (h(Host, null, h("ic-login", null)));
  }
  static get is() { return "ic-container"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["ic-container.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["ic-container.css"]
    };
  }
}
//# sourceMappingURL=ic-container.js.map
