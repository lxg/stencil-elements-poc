import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'ui-button',
  styleUrl: 'ui-button.scss',
  shadow: true,
})
export class UiButton implements ComponentInterface {
  render() {
    return (
        <Host>
            <button>
                <slot></slot>
            </button>
        </Host>
    );
  }
}
