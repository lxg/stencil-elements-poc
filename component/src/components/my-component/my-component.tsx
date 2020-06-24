import { Component, ComponentInterface, Host, h } from '@stencil/core'
import { UiButton } from "elements-poc/dist/prod/index.js"

customElements.define('component1-ui-button', UiButton);

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent implements ComponentInterface {
  render() {
    return (
        <Host>
            <div>
                Here’s the button!

                <component1-ui-button>Voilà</component1-ui-button>

                <slot></slot>
            </div>
        </Host>
    );
  }
}
