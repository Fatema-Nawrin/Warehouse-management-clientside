import React from 'react';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='w-full m-4'>
            <div className='products-container'>
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        product={product}>

                    </Product>)
                }
            </div>
        </div>
    );
};

export default Products;