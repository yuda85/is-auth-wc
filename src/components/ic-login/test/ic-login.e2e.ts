import { newE2EPage } from '@stencil/core/testing';

describe('ic-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ic-login></ic-login>');

    const element = await page.find('ic-login');
    expect(element).toHaveClass('hydrated');
  });
});
