import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'

const Inventory = ({ inventory }) => {
    const { _id, img, name, price, quantity, suppliername, descripation } = inventory;
    const navigate = useNavigate();
    const navigateToInventorydetail = id => {
        navigate(`/inventory/${_id}`);
    }
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
            <button onClick={() => navigateToInventorydetail(_id)}>Update Stock</button>
        </div>
    );
};

export default Inventory;