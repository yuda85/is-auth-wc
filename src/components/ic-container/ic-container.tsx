import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ic-container',
  styleUrl: 'ic-container.css',
  shadow: true,
})
export class IcContainer {
  render() {
    return (
      <Host>
        <ic-login></ic-login>
      </Host>
    );
  }
}
