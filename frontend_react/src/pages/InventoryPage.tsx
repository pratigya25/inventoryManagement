// src/pages/InventoryPage.tsx
import React, { useState } from 'react';

import ProductList from '../components/ProductList';
import AddProduct from '../components/AddProduct';
import './styling.css';

const InventoryPage: React.FC = () => {
  // State to hold products, you may want to modify this to match your data structure
  const [products, setProducts] = useState<{ id: number; name: string; description: string; price: number; stock: number; }[]>([]);

  const handleAddProduct = (newProduct: { name: string; price: number }) => {
    const productId = products.length + 1; // Simplistic way to assign an ID
    const newProductWithId = {
      id: productId,
      name: newProduct.name,
      description: '', // You can add logic to include a description
      price: newProduct.price,
      stock: 0 // Default stock value, modify as needed
    };
    setProducts([...products, newProductWithId]); // Add the new product to the state
  };

  return (
    <div>
      <div style={{ height: '50px' }}></div>
      <div className="inventory-container">
        <AddProduct onAddProduct={handleAddProduct} />
        <ProductList products={products} setProducts={setProducts} /> {/* Pass setProducts here */}
      </div>
    </div>
  );
};

export default InventoryPage;
