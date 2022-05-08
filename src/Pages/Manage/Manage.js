import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import './Manage.css'

const Manage = () => {
    const { productId } = useParams();
    const [products, setProducts] = useProducts();
    const headers = ['Product Name', 'Price', 'Quantity', 'Supplier Name', 'Delete', 'Update'];
    const navigate = useNavigate();
    const navigateToDetails = id => {
        navigate(`/inventory/${id}`)
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure about deleting this product?')
        if (proceed) {
            const url = `https://agile-lowlands-07365.herokuapp.com/product/${productId}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remain = products.filter(product => product._id !== id);
                    setProducts(remain);
                })
        }
    }
    return (
        <div className='container'>
            <h2 className='text-center my-5'>Manage Inventory</h2>
            <Table responsive>
                <thead>
                    <tr>

                        {Array.from({ length: 6 }).map((_, index) => (
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
                                <td><button className='manage-button' onClick={() => navigateToDetails(product._id)}>Update</button></td>
                            </tr>)
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default Manage;