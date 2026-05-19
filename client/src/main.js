import "./styles/globals.css";
import { printProducts } from "./services/products.service.js";

const endpoint = "http://localhost:3000/productos";

async function getProducts() {
  try {
    const response = await fetch(endpoint);

    if (response.ok == false) {
      alert("Sistema temporalmente fuera de servicio");
    }

    const data = await response.json();
    printProducts(data);
  } catch (error) {
    alert("Sistema temporalmente fuera de servicio");
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getProducts();
});
