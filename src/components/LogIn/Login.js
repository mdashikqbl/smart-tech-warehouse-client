import React from 'react';
import { Link } from 'react-router-dom';
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
                </div>

            </div>

        </div>
    );
};

export default Login;