import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SaleForm: React.FC = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products/')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/sales/', {
            product,
            quantity_sold: quantity
        })
        .then(() => {
            alert('Sale recorded successfully');
            setProduct('');
            setQuantity('');
        })
        .catch(err => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Record a Sale</h2>
            <select value={product} onChange={e => setProduct(e.target.value)}>
                <option value="">Select Product</option>
                {products.map((product: any) => (
                    <option key={product.id} value={product.id}>{product.name}</option>
                ))}
            </select>
            <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} placeholder="Quantity" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SaleForm;
