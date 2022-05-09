import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ManageProducts.css'

const ManageProducts = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://agile-lowlands-07365.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [productId])

    const [quantity, setQuantity] = useState();
    useEffect(() => {
        const url = `https://agile-lowlands-07365.herokuapp.com/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setQuantity(data.quantity));
    }, [])

    // increase quantity
    const increaseQuantity = (event) => {
        event.preventDefault();
        const addedValue = parseInt(event.target.quantity.value);
        const newQuantity = parseInt(quantity) + addedValue;
        if (newQuantity < 0) { }
        else {
            const updatedQuantity = { newQuantity }
            const url = `https://agile-lowlands-07365.herokuapp.com/product/${productId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    event.target.reset();
                    setQuantity(newQuantity)
                })
        }
    };
    // decrease quantity
    const decreaseQuantity = () => {
        const newQuantity = parseInt(quantity) - 1;
        if (newQuantity < 0) { }
        else {
            const updatedQuantity = { newQuantity }
            const url = `https://agile-lowlands-07365.herokuapp.com/product/${productId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    setQuantity(newQuantity)
                })
        }
    };

    return (
        <div className='container'>
            <h2 className='m-5 text-center'>Product Details</h2>
            <div className='row row-cols-1 row-cols-md-2'>
                <div className='text-center mb-5'>
                    <img style={{ width: '70%', height: '500px' }} src={product.img} alt="" />
                </div>
                <div className='px-5 mt-lg-5'>
                    <h2 className='fw-bold'>{product.name}</h2>
                    <p>{product.description}</p>
                    <p> <span className='fw-bold'>Price:</span> ${product.price}</p>
                    <p> <span className='fw-bold'>Quantity:</span> {quantity}</p>
                    <p> <span className='fw-bold'>Supplier Name:</span> {product.supplierName}</p>
                    <button className='mb-3 update-button' onClick={decreaseQuantity}>Delivered</button>
                    <h5 className='fw-bold'>Update stock of product</h5>
                    <form className='qty-form mt-3' onSubmit={increaseQuantity}>
                        <input type="number" name="quantity" id="" placeholder='Enter Quantity' required />
                        <br />
                        <input className='update-button my-4' type="submit" value="Update" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;