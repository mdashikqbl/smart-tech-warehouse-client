import React from 'react';
import './Information.css'

const Information = () => {
    return (
        <div className='background'>
            <div className="infom-text">
                <h2>ABOUT US</h2>
                <h2>INFORMATION</h2>
                <h2>WEREHOUSE OFFICE</h2>
            </div>
            <div className='text-info'>
                <div className='about'>
                    <h1>Smart Tech</h1>
                    <p>Smart warehouses are inspired by smart factories and adopt a similar  environment. They incorporate various automated and interconnected technologies to create a environment in  can be recognized and prepped for shipment automatically</p>
                </div>
                <div className='information-info'>
                    <div>
                        <li>About Us</li>
                        <li>Cart</li>
                        <li>Contact</li>
                        <li>Our Services</li>
                        <li>Contact</li>

                    </div>
                    <div>
                        <li>Classic Blog</li>
                        <li>Checkout</li>
                        <li>My Account</li>
                        <li>Shop</li>
                        <li>Classic Blog</li>
                    </div>
                </div>
                <div className='werehouse-info'>
                    <li><img src="" alt="" />
                        14 Tottenham Road, London, England.
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Information;