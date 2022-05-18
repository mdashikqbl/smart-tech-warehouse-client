import React from 'react';

const SingleMyItem = ({ myitem, handleDeleteMyItem }) => {
    const { _id, img, name, price, quantity, suppliername, descripation } = myitem;

    return (
        <div className='inventory-container'>
            <div className=''>
                <div className='img-size'><img src={img} alt="" /></div>
                <h3>{name}</h3>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <p>Supplier Name:{suppliername}</p>
                <p>{descripation}</p>
            </div>
            <button onClick={() => handleDeleteMyItem(_id)}>Delete</button>
        </div>
    );
};

export default SingleMyItem;