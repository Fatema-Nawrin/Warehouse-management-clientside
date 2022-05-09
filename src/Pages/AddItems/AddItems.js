import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';

const AddItems = () => {
    const user = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://agile-lowlands-07365.herokuapp.com/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }
    return (
        <div className='container my-5' style={{ height: '100vh' }}>
            <div className='w-75 mx-auto'>
                <h2 className='text-center my-5'>Fill this form to add new item in stock</h2>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='my-2 py-lg-2' value={user[0].email} {...register("email")} />
                    <input className='my-2 py-lg-2' placeholder='Product Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='my-2' placeholder='Description' {...register("description")} />
                    <input className='my-2 py-lg-2' placeholder='Price' type="number" {...register("price")} />
                    <input className='my-2 py-lg-2' placeholder='Quantity' type="number"{...register("quantity")} />
                    <input className='my-2 py-lg-2' placeholder='Image URL' type="text" {...register("img")} />
                    <input className='my-2 py-lg-2' placeholder='Supplier' type="text" {...register("supplierName")} />
                    <input className='manage-button my-2' type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;