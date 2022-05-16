import React from 'react';
import './ManageInventory.css'
import useInventorys from '../../Hooks/UseInventorys';
import SingleManageInventory from '../SingleManageInventory/SingleManageInventory';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [manageInventorys, setManageInventorys] = useInventorys([]);
    const navigate = useNavigate()
    const handleaToAddItems = () => {
        navigate('/additems')
    }

    return (
        <div className='manageInventory-title'>
            <h1 >Manage Inventory</h1>

            <div className='manageInventory-container'>
                {
                    manageInventorys.map(manageInventory => <SingleManageInventory key={manageInventory._id} manageInventory={manageInventory}></SingleManageInventory>)
                }
            </div>

            <div className='addItems-inventory' >
                <button onClick={handleaToAddItems} >Add Items</button>
            </div>
        </div>
    );
};

export default ManageInventory;