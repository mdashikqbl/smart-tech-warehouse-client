import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../firebase.init';

const Login = () => {
    // const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;
    if (error) {

        errorElement = <div>
            <p className='text-danger mt-3 mx-5'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='login-container'>
            <div className='form-container'>
                <div>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit} >
                        <div className="input-group">
                            <input ref={emailRef} type="email" name="email" placeholder='Email' required />
                        </div>
                        <div className="input-group">
                            <input ref={passwordRef} type="password" name="password" placeholder='Password' required />
                        </div>
                        <p className='text-center mt-3' >Forgot Username / Password?</p>
                        <div className="input-submit">
                            <input type="submit" value="Login" />
                        </div>
                        {errorElement}
                    </form>

                    <div className='or-style'>
                        <div className='line-start'></div>
                        <div className='midddle-or'>or</div>
                        <div className='line-end'></div>
                    </div>
                    <SocialLogin></SocialLogin>
                    <div className='move-signup'>
                        <p>Don’t have a account?</p>
                        <Link className='d-block text-decoration-none' to="/signup">SIGN UP NOW</Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;