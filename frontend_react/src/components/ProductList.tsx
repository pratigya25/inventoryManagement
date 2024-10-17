// ProductList.tsx
//export {}; // Make this file a module

import React, {useEffect} from 'react';
import axios from 'axios';
import './styleMyPage.css';

// Define the Product type
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
  }
  
  // Define the props type for the ProductList component
  interface ProductListProps {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  }
  
  const ProductList: React.FC<ProductListProps> = ({ products, setProducts }) => {

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products/')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    });

    return (
        <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default ProductList;
