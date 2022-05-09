import React from 'react';
import useProducts from '../../../Hooks/useProducts';

const Low = () => {
    const [products, setProducts] = useProducts();

    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-center my-3'>Low and High Stocked Products in Inventory</h2>
            <div>
                <h3 className='fw-bold my-2'>Low Stocked Product</h3>
                {
                    products.map(product => {
                        if (product.quantity < 5) {
                            return <li style={{ listStyle: 'none' }}><h5>{product.name}</h5></li>
                        }
                    }

                    )
                }
            </div>
            <div>
                <h3 className='fw-bold my-2'>High Stocked Product</h3>
                {
                    products.map(product => {
                        if (product.quantity > 20) {
                            return <li style={{ listStyle: 'none' }}><h5>{product.name}</h5></li>
                        }
                    }

                    )
                }
            </div>
        </div>
    );
};

export default Low;