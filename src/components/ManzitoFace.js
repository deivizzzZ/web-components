class ManzitoFace extends HTMLElement {
  constructor() {
    super();
    const name = this.getAttribute("name");
    const size = this.getAttribute("size") || 16;

    const EMOJIS = {
      happy: "😀",
      sad: "😭",
      sunglasses: "😎",
      heart: "🥰",

    };
    const selectedEmoji = EMOJIS[name] || "😶";

    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = /* html */ `
      <style>
      .emoji {
        font-size: ${size}px;
      }
    </style>
    <div class="emoji">${selectedEmoji}</div>
    `;
  }
}
customElements.define("manzito-face", ManzitoFace);
