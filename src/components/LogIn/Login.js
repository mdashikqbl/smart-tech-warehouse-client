import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    return (
        <div className='login-container'>
            <div className='form-container'>
                <div>
                    <h2>Login</h2>
                    <div className="input-group">
                        <input type="email" name="email" id="" placeholder='Email' required />
                    </div>
                    <div className="input-group">
                        <input type="password" name="password" id="" placeholder='Password' required />
                    </div>
                    <p className='text-center mt-3' >Forgot Username / Password?</p>
                    <div className="input-submit">
                        <input type="submit" value="Login" />
                    </div>

                    <div className='or-style'>
                        <div className='line-start'></div>
                        <div className='midddle-or'>or</div>
                        <div className='line-end'></div>
                    </div>
                    <SocialLogin></SocialLogin>
                    <div className='move-signup'>
                        <p>Don’t have an account?</p>
                        <h6 className='btn-link d-block text-decoration-none '>SIGN UP NOW</h6>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Login;