import React from 'react';
import './ManageInventory.css'
import useInventorys from '../../Hooks/UseInventorys';
import SingleManageInventory from '../SingleManageInventory/SingleManageInventory';

const ManageInventory = () => {
    const [manageInventorys, setManageInventorys] = useInventorys([]);

    return (
        <div className='manageInventory-title'>
            <h1 >Manage Inventory</h1>

            <div className='manageInventory-container'>
                {
                    manageInventorys.map(manageInventory => <SingleManageInventory key={manageInventory._id} manageInventory={manageInventory}></SingleManageInventory>)
                }
            </div>

            <div className='addItems-inventory' >
                <button >Add Items</button>
            </div>
        </div>
    );
};

export default ManageInventory;