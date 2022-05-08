import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, description, price, img, supplierName } = product;
    const navigate = useNavigate();
    const navigateToDetails = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='product col'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>{price}</p>
                <h4>{supplierName}</h4>
                <button onClick={() => navigateToDetails(_id)}>Manage</button>
            </div>
        </div>
    );
};

export default Product;