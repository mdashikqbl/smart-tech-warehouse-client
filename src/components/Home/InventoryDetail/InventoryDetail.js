import React, { useEffect, useState } from 'react';
import './InventoryDetail.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const InventoryDetail = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const { inventoryId } = useParams();
    const navigateTomanage = () => {
        navigate('/manage')
    }
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `https://shrouded-chamber-00283.herokuapp.com/inventory/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])
    const { img, name, price, quantity, suppliername, descripation } = inventory;

    return (
        <div className='singleInventoryDetail-container'>
            <div className='singleInventoryDetail'>
                <div>
                    <div className='text-center mb-3'><img src={img} alt="" /></div>

                    <h3>{name}</h3>
                    <p>Price:{price}</p>
                    <p>Quantity:{quantity}</p>
                    <p>Supplier Name:{suppliername}</p>
                    <p>{descripation}</p>
                </div>
                <button>Deliverd</button>
            </div>
            <div className='restock-field'>
                <input className='number-field' type="number" name="number" />
                <input className='submit-btn' type="submit" value="Restock" />
            </div>
            <div className='manage-btninventory'>
                <button onClick={navigateTomanage} >Manage Inventorys</button>
            </div>
        </div>
    );
};

export default InventoryDetail;