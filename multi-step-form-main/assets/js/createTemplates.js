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

customElements.define(
  "step-button",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const stepButton = document.getElementById("step-button").content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(stepButton.cloneNode(true));
    }
  }
);

customElements.define(
  "plan-card",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const planCard = document.getElementById("plan-card").content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(planCard.cloneNode(true));
    }
  }
);

customElements.define(
  "addon-name",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const addOnName = document.getElementById("addon-name").content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(addOnName.cloneNode(true));
    }
  }
);

customElements.define(
  "addon-info",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const addOnInfo = document.getElementById("addon-info").content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(addOnInfo.cloneNode(true));
    }
  }
);

customElements.define(
  "addon-price",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const addOnPrice = document.getElementById("addon-price").content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(addOnPrice.cloneNode(true));
    }
  }
);

customElements.define(
  "add-on",
  class extends HTMLElement {
    constructor() {
      super(); // Always call super first in constructor
      const addOn = document.getElementById("add-on").content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(addOn.cloneNode(true));
    }
  }
);
