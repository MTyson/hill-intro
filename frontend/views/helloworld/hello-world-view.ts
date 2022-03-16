import '@vaadin/button';
import '@vaadin/notification';
import { Notification } from '@vaadin/notification';
import '@vaadin/grid/vaadin-grid';
import '@vaadin/text-field';
import { html } from 'lit';
import { customElement,property } from 'lit/decorators.js';
import { View } from '../../views/view';
import { foo, getNovels } from 'Frontend/generated/MyEndpoint';

@customElement('hello-world-view')
export class HelloWorldView extends View {
  name = '';

  @property()
  myString: string = "";

  @property()
  novels: object = {};

  constructor() {
    super();
    this.getStrings();
    this.initNovels();
//    this.myString="";
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('flex', 'p-m', 'gap-m', 'items-end');
  }

  render() {
    return html`
      <vaadin-grid .items="${this.novels}" theme="row-stripes">
        <vaadin-grid-column path="title"></vaadin-grid-column>
        <vaadin-grid-column path="author"></vaadin-grid-column>
      </vaadin-grid>
    `;
  }

  nameChanged(e: CustomEvent) {
    this.name = e.detail.value;
  }

  sayHello() {
    Notification.show(`Hello ${this.name}`);
  }
  async getStrings() {
      //const s = await foo();
      this.myString = await foo();
      //console.log("s: " + s);
  }
  async initNovels(){
      const baz = await getNovels();
      this.novels = baz;
      //this.novels = [{"author":"foo","title":"bar"}];
  }

}
