import template from "./header.html";

import styles from "./header.scss";

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = template;

    const indiv = this.shadowRoot.querySelector("div");
    indiv.style.width = "100vw";
    indiv.style.height = this.getAttribute("height");
    indiv.style.background = this.getAttribute("backgroundColor");
  }
}

customElements.get("main-header") ||
  customElements.define("main-header", Header);
