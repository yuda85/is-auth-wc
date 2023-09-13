import { newSpecPage } from "@stencil/core/testing";
import { IcContainer } from "../ic-container";
describe('ic-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IcContainer],
      html: `<ic-container></ic-container>`,
    });
    expect(page.root).toEqualHtml(`
      <ic-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ic-container>
    `);
  });
});
//# sourceMappingURL=ic-container.spec.js.map
