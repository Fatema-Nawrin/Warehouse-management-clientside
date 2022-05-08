import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, description, price, img, supplierName } = product;
    return (
        <div className='product col'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p>{price}</p>
                <button>Details</button>
            </div>
        </div>
    );
};

export default Product;