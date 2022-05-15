import React, { useRef } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/');
    }

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');


    const handleSignUp = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='login-container'>
            <div className='form-container'>
                <div>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSignUp} >
                        <div className="input-group">
                            <input ref={nameRef} type="text" name="Name" placeholder='Name' />
                        </div>
                        <div className="input-group">
                            <input ref={emailRef} type="email" name="email" placeholder='Email' required />
                        </div>
                        <div className="input-group">
                            <input ref={passwordRef} type="password" name="password" placeholder='Password' required />
                        </div>
                        <br />
                        <div className="input-submit">
                            <input type="submit" value="Sign Up" />
                        </div>

                    </form>
                    <div className='or-style'>
                        <div className='line-start'></div>
                        <div className='midddle-or'>or</div>
                        <div className='line-end'></div>
                    </div>
                    <SocialLogin></SocialLogin>
                    <div className='move-signup'>
                        <p>Already have a Account?</p>
                        <Link className='d-block text-decoration-none' to="/login">LOGIN NOW</Link>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SignUp;