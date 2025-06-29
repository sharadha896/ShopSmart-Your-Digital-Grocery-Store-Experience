import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Grocery Items</h2>
      <ul>
        {products.map(prod => (
          <li key={prod._id}>
            {prod.name} - ₹{prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
