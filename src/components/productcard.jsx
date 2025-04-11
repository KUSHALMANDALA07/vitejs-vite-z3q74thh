import React from 'react';
import ViewProductButton from './button.jsx';

const Productcard = () => {
    // Static product details
    const productImage = 'https://shubhra.madmarketer.in/wp-content/uploads/2024/11/photo-1651241680016-cc9e407e7dc3-scaled.jpeg';
    const productName = 'Macbook Air M4';
    const productPrice = '₹73,990.00 INR';
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', width: '300px', textAlign: 'center' }}>
            <img src={productImage} alt={productName} style={{ width: '100%', height: '400px', marginBottom: '16px' }} />
            <h2>{productName}</h2>
            <p style={{ fontSize: '18px', fontWeight: 'bold' }}>{productPrice}</p>
            <ViewProductButton />
        </div>
    );
};

export default Productcard;
