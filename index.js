class MyExample extends HTMLElement {
  connectedCallback() {
    this.innerText = "foo bar " + this.getAttribute("bar");
  }
}
window.customElements.define("my-example", MyExample);
