customElements.define(
  "step-heading",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const stepHeading = document.getElementById("step-heading").content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(stepHeading.cloneNode(true));
    }
  }
);
