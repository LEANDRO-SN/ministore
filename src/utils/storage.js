// src/utils/storage.js
export function getProducts() {
    return JSON.parse(localStorage.getItem("products") || "[]");
  }
  
  export function saveProduct(product) {
    const products = getProducts();
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
  }
  
  export function getProductById(id) {
    return getProducts().find(p => p.id === id);
  }
  