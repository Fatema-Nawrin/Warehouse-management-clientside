import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, name, description, price, quantity, img, supplierName } = product;
    const navigate = useNavigate();
    const navigateToDetails = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='product col'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='fs-4 fw-bold mb-1'>{name} <span className='float-end fs-4 fw-normal' style={{ color: 'rgb(250, 134, 51)' }}> ${price} </span>
                </h5>
                <small className='text-black-50'>Supplier: {supplierName}</small>
                <hr />
                <p>{description}</p>
                <p>
                    <span className='fs-5 fw-bolder'>{quantity}</span> <small>(in stock)</small>
                </p>

                <button className='manage-button text-uppercase' onClick={() => navigateToDetails(_id)}>Update</button>

            </div>
        </div >
    );
};

export default Product;