import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import logo from '../../../images/google-logo.png';
import './Social.css'

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
    if (loading) {
        return <Loading></Loading>
    }

    let errorDiv;
    if (error) {
        errorDiv = <div>
            <p className='text-danger'>Error:{error?.message}</p>
        </div>
    }
    return (
        <div className='w-75 text-center mb-5'>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '2px' }} className='bg-dark w-50'></div>
                <p className='mt-3 px-1'> or </p>
                <div style={{ height: '2px' }} className='bg-dark w-50'></div>
            </div>
            {errorDiv}
            <button onClick={() => signInWithGoogle()} className='px-4 py-2 google-button'>Continue With Google
                <img
                    className='px-1'
                    style={{ width: '30px' }}
                    src={logo} alt="" />
            </button>
        </div>
    );
};

export default Social;