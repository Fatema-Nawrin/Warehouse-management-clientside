import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='container'>
            <h2 className='text-center my-4'>Inventory</h2>
            <div className='products-container'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}>

                    </Product>)
                }
            </div>
            <div className='text-center my-5'>
                <button className='manage-button'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Products;