import { newE2EPage } from '@stencil/core/testing';

describe('ic-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ic-container></ic-container>');

    const element = await page.find('ic-container');
    expect(element).toHaveClass('hydrated');
  });
});
