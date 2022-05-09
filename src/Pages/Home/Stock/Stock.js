import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import useProducts from '../../../Hooks/useProducts';

const Stock = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='container'>
            <div className='mb-4'>
                <h2 className='text-center my-3'>Product Quantity Chart</h2>
                <div className='row row-cols-1 row-cols-lg-2 pt-4'>
                    <div>
                        <h3 className='mt-4'>Check out which products are stocked in what quantity.</h3>
                    </div>
                    <BarChart width={400} height={350} data={products} margin={{ left: 10, }} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar stackId="a" dataKey="quantity" stroke="#82ca9d" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Stock;