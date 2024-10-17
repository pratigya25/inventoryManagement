// AddProduct.tsx
import {useState} from 'react';
import './styleMyPage.css';
export {}; // Make this file a module

// Define the props type
interface AddProductProps {
    onAddProduct: (newProduct: { name: string; price: number }) => void;
  }
  
const AddProduct: React.FC<AddProductProps> = ({ onAddProduct }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newProduct = { name: productName, price: productPrice };
        onAddProduct(newProduct); // Call the prop function with the new product
        setProductName('');
        setProductPrice(0);
    };

    return (
        <form className="add-product-form" onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Product Price"
                value={productPrice}
                onChange={(e) => setProductPrice(Number(e.target.value))}
                required
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct; // Export the component
