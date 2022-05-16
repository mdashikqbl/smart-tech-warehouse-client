import React from 'react';
import './SingleManageInventory.css'

const SingleManageInventory = ({ manageInventory, handleDelete }) => {

    const { _id, img, name, price, quantity, suppliername, descripation } = manageInventory;

    return (
        <div className='SingleManageInventory-container'>
            <div>
                <div className='img-size'><img src={img} alt="" /></div>
                <h3>{name}</h3>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <p>Supplier Name:{suppliername}</p>
                <p>{descripation}</p>

            </div>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default SingleManageInventory;