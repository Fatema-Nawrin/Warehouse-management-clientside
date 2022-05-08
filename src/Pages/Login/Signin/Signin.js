import { async } from '@firebase/util';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import Social from '../Social/Social';

const Signin = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(
        auth
    );
    if (sending || loading) {
        return <Loading></Loading>
    }

    let errorDiv;
    if (error) {
        errorDiv = <div>
            <p className='text-danger'>Error:{error?.message}</p>
        </div>
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        navigate('/home')
    }
    return (
        <div className='container form'>
            <h2 className='m-md-3 my-lg-5'>Sign Up Here</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Name' required />
                <br />
                <input type="email" name="email" id="" placeholder='Email address' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input className='submit-button' type="submit" value="Sign In" />
                {errorDiv}
                <p>Already have an acoount?
                    <Link className='text-decoration-none' to='/login'> Go to Login Page</Link>
                </p>
            </form>
            <ToastContainer></ToastContainer>
            <Social></Social>
        </div>
    );
};

export default Signin;