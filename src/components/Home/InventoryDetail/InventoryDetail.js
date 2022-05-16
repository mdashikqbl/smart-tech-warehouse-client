import React from 'react';
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
    return (
        <div>
            <div>
                <h1>this is inventory detail:{inventoryId}</h1>
            </div>
            <div className='restock-field'>
                <input className='number-field' type="number" name="number" />
                <input className='submit-btn' type="submit" value="Restock" />
            </div>
            <div>
                <button className='' onClick={navigateTomanage} >Manage Inventorys</button>
            </div>
        </div>
    );
};

export default InventoryDetail;