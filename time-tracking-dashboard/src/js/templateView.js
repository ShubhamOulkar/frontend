export class CardElement extends HTMLElement {
  constructor() {
    super();
    const temEle = document.getElementById("card-container").content;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(temEle.cloneNode(true));
  }

  // Expose a method to set the background color
  setBackgroundColor(color) {
    this.shadowRoot
      .querySelector(".card-container")
      .style.setProperty("background-color", `var(--${color})`);
  }
}
