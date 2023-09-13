import { newSpecPage } from '@stencil/core/testing';
import { IcLogin } from '../ic-login';

describe('ic-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IcLogin],
      html: `<ic-login></ic-login>`,
    });
    expect(page.root).toEqualHtml(`
      <ic-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ic-login>
    `);
  });
});
