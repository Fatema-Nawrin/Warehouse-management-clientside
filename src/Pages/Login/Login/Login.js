import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import Social from '../Social/Social';
import './Login.css'


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    if (sending || loading) {
        return <Loading></Loading>
    }

    let errorDiv;
    if (error || error2) {
        errorDiv = <div>
            <p className='text-danger'>Error:{error?.message}</p>
        </div>
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Verification mail has been sent.')
        }
        else {
            toast('Email Address is required')
        }
    }
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container form'>
            <h2 className='my-md-3 my-lg-5'>Login here for stock management</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" ref={emailRef} name="email" id="" placeholder='Email address' required />
                <br />
                <input type="password" ref={passwordRef} name="password" id="" placeholder='Password' required />
                <br />
                <input className='submit-button' type="submit" value="Login" />
                {errorDiv}
                <p>New to the management site?
                    <Link className='text-decoration-none' to='/signin'> Sign Up Here</Link>
                </p>
                <p>Forgot Password?
                    <button className='text-decoration-none btn btn-link' onClick={resetPassword}>Reset Password</button>
                </p>
            </form>
            <Social></Social>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;