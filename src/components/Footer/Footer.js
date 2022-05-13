import React from 'react';
import './footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='footer-style'>
            <div className='icons'>
                <img src="https://i.ibb.co/9pPBnhD/facebook-2.png" alt="" />
                <img src="https://i.ibb.co/jGGVGbg/twitter-2.png" alt="" />
                <img src="https://i.ibb.co/ZHNhFz8/google-3.png" alt="" />
                <img src="https://i.ibb.co/kKybxRN/instagram-2.png" alt="" />
                <img src="https://i.ibb.co/BBZzj1J/linkdin.png" alt="" />
                <img src="https://i.ibb.co/6Zf31fs/github-1.png" alt="" />
            </div>

            <p className='align'> <small>Copyright ©{year} SmartTech</small> </p>
        </div>
    );
};

export default Footer;