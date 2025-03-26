import "./style.css";
import { decimalToBinary } from "./converter";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
    <h1>Decimal to Binary Converter</h1>
    <input type="number" id="decimalInput" placeholder="Enter decimal number" />
    <button id="convertBtn">Convert</button>
    <p>Binary: <span id="binaryOutput">-</span></p>
  `;

  const decimalInput = document.querySelector<HTMLInputElement>("#decimalInput");
  const convertBtn = document.querySelector<HTMLButtonElement>("#convertBtn");
  const binaryOutput = document.querySelector<HTMLSpanElement>("#binaryOutput");

  convertBtn?.addEventListener("click", () => {
    if (decimalInput && binaryOutput) {
      const decimal = parseInt(decimalInput.value, 10);
      binaryOutput.textContent = decimalToBinary(decimal);
    }
  });
}
