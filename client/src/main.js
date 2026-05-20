import "./styles/globals.css";
import { printProducts } from "./services/products.service.js";
import { success } from "./utils/alerts.js";

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

const form = document.getElementById("product-form");
const nameProduct = document.getElementById("nombre");
const price = document.getElementById("precio");
const stock = document.getElementById("stock");
const descriptionProduct = document.getElementById("descripcion");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const productnew = {
    nombre: nameProduct.value.toLowerCase().trim(),
    precio: Number(price.value),
    stock: Number(stock.value),
    descripcion: descriptionProduct.value.toLowerCase().trim(),
  };

  addproducts(productnew);

  event.target.reset();
});

async function addproducts(productos) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productos),
  });

  if(response.ok){
    getProducts();
    success("Producto agregado exitosamente");
  }

}



document.addEventListener("DOMContentLoaded", () => {
  getProducts();
});
