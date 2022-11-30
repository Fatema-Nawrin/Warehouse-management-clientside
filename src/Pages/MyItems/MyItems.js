import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    console.log(user.email)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const email = user?.email;
        fetch(`https://warehouse-management-serverside-production.up.railway.app/myproduct?email=${email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const headers = ['Product Name', 'Price', 'Quantity', 'Supplier Name', 'Delete'];

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure about deleting this product?');
        if (proceed) {
            const url = `https://warehouse-management-serverside-production.up.railway.app/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log('delete')
                    const remain = products.filter(product => product._id !== id);
                    setProducts(remain);
                })
        }
    }
    return (
        <div className='container' style={{ height: '100vh' }}>
            <h2 className='text-center my-5'>My Items</h2>
            <Table responsive>
                <thead>
                    <tr>

                        {Array.from({ length: 5 }).map((_, index) => (
                            <th key={index}>{headers[index]}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.supplierName}</td>
                                <td><button className='delete-button' onClick={() => handleDelete(product._id)}>Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default MyItems;