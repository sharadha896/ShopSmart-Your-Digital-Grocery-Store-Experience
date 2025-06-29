document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { name: "Smartphone", price: "$499", image: "https://via.placeholder.com/150" },
    { name: "T-shirt", price: "$19", image: "https://via.placeholder.com/150" },
    { name: "Shoes", price: "$89", image: "https://via.placeholder.com/150" }
  ];

  const productList = document.getElementById('product-list');
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `<img src="${p.image}" alt="${p.name}"><h3>${p.name}</h3><p>${p.price}</p>`;
    productList.appendChild(card);
  });
});