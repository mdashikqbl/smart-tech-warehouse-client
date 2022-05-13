import React from 'react';
import './Information.css'

const Information = () => {
    return (
        <div className='newsletter-info' >
            <h1 className='newsh1'>NEWSLETTER</h1>
            <p>Sign up for newsletter to receive special offers and exclusive news about SmartTech products </p>
            <div className='input-btn'><input type="email" name="email" required id="" placeholder="Enter your email" /><button>SUBSCRIBE</button></div>

            <hr className='line' />
            <div className="house-info" >
                <div>
                    <h4>SUPPLIERS SERVICE</h4>
                    <ol>Contact us</ol>
                    <ol>Help and advice</ol>
                    <ol>Terms and conditions</ol>
                    <ol>Refund Policy</ol>
                    <ol>Technical Support</ol>

                </div>
                <div>
                    <h4>INFORMATION</h4>
                    <ol>About Us</ol>
                    <ol>Testimonials</ol>
                    <ol>Payments & Returns</ol>
                    <ol>My Account</ol>
                    <ol>View Catalogues Online</ol>

                </div>
                <div>
                    <h4>ABOUT US</h4>
                    <ol>Who We Are ?</ol>
                    <ol>Corporate Responsibility</ol>
                    <ol>Bangladesh Laws</ol>
                    <ol>Careers</ol>
                    <ol>Privacy Policy</ol>
                </div>
            </div>
        </div>
    );
};

export default Information;