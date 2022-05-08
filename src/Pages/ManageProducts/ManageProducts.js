import React from 'react';
import { useParams } from 'react-router-dom';
import useDetails from '../../Hooks/useDetails';

const ManageProducts = () => {
    const { productId } = useParams();
    const [product] = useDetails(productId);
    return (
        <div className='container'>
            <h2>Inventory</h2>
            <div>
                <div>
                    <img src={product.img} alt="" />
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ManageProducts;