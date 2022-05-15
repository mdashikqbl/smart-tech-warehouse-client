import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;
    if (error) {

        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }
    if (user) {
        navigate('/home')
    }
    return (
        <div>
            {errorElement}
            <div className='google-btn'>
                <div className='btn-img'>
                    <button onClick={() => signInWithGoogle()} ><img src="https://i.ibb.co/6YJNJwr/google-1.png" alt="" /> <p>Continue With Google</p></button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;