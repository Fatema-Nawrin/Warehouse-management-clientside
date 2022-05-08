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
                <h5>{name}</h5>
                <p>{description}</p>
                <p className='my-1'>Price:{price}</p>
                <p>Supplier: {supplierName}</p>
                <button className='manage-button' onClick={() => navigateToDetails(_id)}>Manage</button>
            </div>
        </div>
    );
};

export default Product;